import bodyParser from "koa-body-parser";
import Koa from "koa";
import dotenv from "dotenv";

import createDatabase from "./models/conf.js";
import dataBaseManager from "../models/databaseManager.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = new Koa();
app.use(cors());

app.use(bodyParser());
createDatabase("createDB", {
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
}, {});