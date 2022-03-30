import 'dotenv/config';
import http from 'http';
import dataBaseManager from './models/conf.js';

const PORT = process.env.PORT || 5000;

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