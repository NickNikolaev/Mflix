const { ObjectId } = require('bson');
const { COLL_MOVIES, getDB, COLL_USERS } = require('../../../config/mongodb');

const deleteOne = async (movieId, userId) => {
    const movies = getDB().collection(COLL_MOVIES);
    const users = getDB().collection(COLL_USERS);

    try {
        // Delete Movie
        let filter = { _id: ObjectId(movieId) };
        movies.deleteOne(filter);

        // Remove Movie Id from user.movies property
        filter = { _id: ObjectId(userId) };
        const update = { $pull: { movies: ObjectId(movieId) } };
        return users.updateOne(filter, update);

    } catch (error) { throw error };
};

module.exports = deleteOne;