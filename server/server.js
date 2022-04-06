import dotenv  from "dotenv"
import http from 'http';
import createDatabase from './models/conf.js'
import dataBaseManager from './models/databaseManager.js';

const PORT = process.env.PORT || 5000;

dotenv.config();

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

http.createServer((req, res) => {
    res.write('Hello world');
    res.end();
}).listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

console.log(process.env.PORT);