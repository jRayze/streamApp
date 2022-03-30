import { MongoClient } from 'mongodb';

var url = "mongodb://localhost:27017/"

const createDatabase = (action, data) => {
    if (action === 'createDB') {
        MongoClient.connect(url + data.dbName, function(err, db) {
            if (err) {
                throw err;
            }
            console.log(db);
            console.log('StreamApp Database created !'); 
            var dbo = db.db(data.dbName);
            dbo.createCollection(data.collection, function(err, res) {
                if (err) {
                    throw err;
                }
                console.log('Collection created !');
                db.close();
            })
        });
    } 
    else if (action === 'createCollection') {
        MongoClient.connect(url, function(err, db) {
            var dbo = db.db(data.dbName);
            dbo.createCollection(data.collection, function(err, res) {
                if (err) {
                    throw err;
                }
                console.log('Collection created !');
                db.close();
            })
        });    
    }
}

const dataBaseManager = (action, data, query) => {
    if (action === 'add') {
        MongoClient.connect(url + data.dbName, (err, db) => {
            if (err) {
                throw err;
            }
            var dbo = db.db();
            var obj = [data];
            dbo.collection(data.collection).insertMany(obj, (err, res) => {
                if (err) {
                    throw err;
                }
                console.log('Add ' + res.insertedCount +' use(r)');
                db.close();
            })
        })
    }
    if (action === 'update') {
        MongoClient.connect(url + data.dbName, (err, db) => {
            if (err) {
                throw err;
            }
            var dbo = db.db();
            var newObj = new Object();
            if (data.name != '') {
                newObj.name = data.name;
            }
            if (data.firstName && data.firstName != '') {
                newObj.firstName = data.firstName;
            }
            if (data.email && data.email != '') {
                console.log(data.email);
                newObj.email = data.email;
            }
            if (data.picture && data.picture != '') {
                newObj.picture = data.picture;
            }
            console.log(JSON.stringify(newObj));

            var newValues = {
                $set: newObj
            }
            dbo.collection(data.collection).updateMany(query, newValues , (err, res) => {
                if (err) {
                    throw err;
                }
                console.log('Update ' + res.modifiedCount  +' user(s)');
                db.close();
            })
        })
    }
    if (action === 'delete') {
        MongoClient.connect(url + data.dbName, (err, db) => {
            if (err) {
                throw err;
            }
            var dbo = db.db();
            dbo.collection(data.collection).deleteMany(query, (err, res) => {
                if (err) {
                    throw err;
                }
                console.log('Delete ' + res.deletedCount + ' user(s)');
                db.close();
            })
        })
    }
    if (action === 'get') {
        MongoClient.connect(url + data.dbName, (err, db) => {
            if (err) {
                throw err;
            }
            var dbo = db.db();
            var query = {  } // ex { address: "Park Lane 38" }
            var projection = { } //ex :  { projection: { _id: 0, name: 1, address: 1 } } // 0: cache - 1: affiche
            console.log("-----------------------------------------------");
            dbo.collection(data.collection).find(query).toArray((projection, (err, res) => {
                if (err) {
                    throw err;
                }
                console.log(res);
                console.log('Total : ' + res.length);
                db.close();
            }))
        })
    }
}

export default dataBaseManager;