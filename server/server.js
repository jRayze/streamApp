/* Packages */
import Koa from "koa";
import Router from "@koa/router";

import cors from "@koa/cors";
import dotenv from "dotenv";
import fetch from 'node-fetch';

// import TorrentApi from 'torrent-search-api';
// /* imports functions */
// import createDatabase from "./models/conf.js";
// import dataBaseManager from "./models/databaseManager.js";



dotenv.config();

const PORT = process.env.PORT || 5000;
const app = new Koa();
app.use(cors());
const router = new Router();

// Try with YT API because i didn't found working well torrent api
const searchVideo = async (param) => {
    const apiUrl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet';
    const request = apiUrl
                    +`&maxResults=30&q=`
                    +param
                    +`&type=video&key=`
                    +process.env.REACT_APP_YT_KEY;
    const res = fetch(
        request,
        {mode: 'no-cors'}
    ).then((response) => {
        console.log(response.url);
        return response.json()
    })
    return res;
} 

router
    .get("/", (ctx) => { 
        ctx.body = `Hello Home`;
    })
    .get("/api", async (ctx) => { 
        const context = ctx.params
        console.log(ctx.params);
        ctx.body = await searchVideo('');
    })
    .get("/api/search/:query", async (ctx) => {
        const context = ctx.params
        console.log(ctx.params.query);
        ctx.body = await searchVideo(ctx.params.query);
    })

app
    .use(router.routes())
    .use(router.allowedMethods())
    .use(cors())
    .use((ctx) => {
        ctx.body = "Hello World !";
    })

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

console.log(PORT);

