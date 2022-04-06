import { MongoClient } from 'mongodb';

const createDatabase = (action, data) => {
    if (action === 'createDB') {
        MongoClient.connect(process.env.DATABASE_URI + data.dbName, function(err, db) {
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
        MongoClient.connect(process.env.DATABASE_URI, function(err, db) {
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

export default createDatabase;