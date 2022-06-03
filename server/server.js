/* Packages */
import Koa from "koa";
import Router from "@koa/router";
import bodyParser from "koa-body-parser";
import cors from "@koa/cors";
import dotenv from "dotenv";
import TorrentApi from 'torrent-search-api';
/* imports functions */
import createDatabase from "./models/conf.js";
import dataBaseManager from "./models/databaseManager.js";
import { response } from "express";
import fetch from 'node-fetch';


dotenv.config();

const PORT = process.env.PORT || 5000;
const app = new Koa();
app.use(cors());
const router = new Router();
//app.use(bodyParser());
/*createDatabase("createDB", {
  'dbName' : 'streamApp',
  'collection' : 'users',
}, {});

dataBaseManager("add", {
  'dbName' : 'streamApp',
  'collection' : 'users',
  'name' : 'Merlini',
  'firstName' : 'Jayson',
  'email' : 'jmerlini@gmail.com',
  'picture' : ''
}, {});*/

const searchVideo = async (textSearch) => {
    // const TorrentSearchApi = new TorrentApi()
    // /* TorrentSearchApi.enablePublicProviders();*/
    // TorrentSearchApi.enableProvider('Torrentz2');

    // // Search '1080' in 'Movies' category and limit to 20 results
    // try  {
    //     const torrents = await (TorrentSearchApi.search('Avengers', 'Movies', 20));
    //     console.log(torrents);
    //     return torrents;
    // } catch (e) {
    //     console.log(e);
    //     return e;
    // }

    fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=`+textSearch+`&type=video&key=`+process.env.REACT_APP_YT_KEY
    ).then((response) => {
        console.log(response.url);
    })
    return response;
} 

router
    .get("/", (ctx) => {
        ctx.body = `Hello Home`;
    })
    .get("/api", async (ctx) => {
        const context = ctx.params
        // ctx.body = await searchTorrent();
        ctx.body = await searchVideo('Laylow');
    })
    .get('/search', (ctx) => {
        const ret = ctx.params
        fetch('')
        console.log(ctx);
        ctx.body = `test search`;
    })
    .post("/", (ctx) => {
        console.log("ctx.request.body", ctx.request.body);
        ctx.body = {...ctx.request.body, date: new Date()};
    })

app
    .use(router.routes())
    .use(router.allowedMethods())
    .use(cors())
    .use((ctx) => {
        if (ctx.path === "/favicon.ico") return;

        ctx.body = "Hello World !";
    })

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

console.log(PORT);

