const { ObjectId } = require('bson');
const { COLL_MOVIES, getDB } = require('../../../config/mongodb');

const deleteOne = movieId => {
    const movies = getDB().collection(COLL_MOVIES);
    const filter = { _id: ObjectId(movieId) };
    return movies.deleteOne(filter);
};

module.exports = deleteOne;