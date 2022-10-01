const { MongoClient } = require('mongodb');

let db;

const config = {
    DB_URI: 'mongodb+srv://nikolanikolaev:Nikola01@servicetasks.gc4np.mongodb.net/?retryWrites=true&w=majority',
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