import 'dotenv/config';
import http from 'http';
import dataBaseManager from './models/conf.js';

const PORT = process.env.PORT || 5000;

/*dataBaseManager("add", {
    'dbName' : 'streamApp',
    'collection' : 'users',
    'name' : 'Jayson', 
    'firstName' : 'Merlini',
    'email' : 'jmerlini@gmail.com',
    'picture' : ''
}, {});

dataBaseManager("add", {
    'dbName' : 'streamApp',
    'collection' : 'users',
    'name' : 'Kossik', 
    'firstName' : 'Alexis',
    'email' : 'akocik@gmail.com',
    'picture' : ''
}, {});

dataBaseManager("add", {
    'dbName' : 'streamApp',
    'collection' : 'users',
    'name' : 'Degans', 
    'firstName' : 'Yoan',
    'email' : 'yoan@gmail.com',
    'picture' : ''
}, {});

dataBaseManager("get", {
    'dbName' : 'streamApp',
    'collection' : 'users',
}, {});

dataBaseManager("delete", {
    'dbName' : 'streamApp',
    'collection' : 'users', 
} , {'name' : 'Degans'})

dataBaseManager("update", {
    'dbName' : 'streamApp',
    'collection' : 'users',
    'name' : 'Kocik', 
}, {'name': 'Kossik'})


dataBaseManager("update", {
    'dbName' : 'streamApp',
    'collection' : 'users',
    'name' : 'Merlini',
    'firstName' : 'Jayson'
}, {'name': 'Jayson'})*/

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

/*const routes = {
    home: function (data, res) {
        let payload = {
            name: "home"
        };
        let payloadStr = JSON.stringify(payload);
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.writeHead(200);
        res.write(payloadStr);
        res.end('\n')
    }
}*/
