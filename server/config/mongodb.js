const { MongoClient } = require('mongodb');

let db;

const config = {
    DB_URI: 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false',
    DB_NAME: 'movies-spa',
    COLL_USERS: 'Users',
    COLL_MOVIES: 'Movies'
};

const connectToDB = () => {
    const options = { useNewUrlParser: true, useUnifiedTopology: true };
    const client = new MongoClient(config.DB_URI, options);

    client.connect()
        .then(client => {
            console.log('connected to db');
            db = client.db(config.DB_NAME);
        })
        .catch(error => console.error(error));
};

const getDB = () => db;

module.exports = {
    ...config,
    connectToDB,
    getDB,
};