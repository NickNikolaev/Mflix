const { ObjectId } = require('bson');
const { getDB, COLL_MOVIES } = require('../../../config/mongodb');
const validateInputData = require('../helpers/validateInputData');

const editOne = (movie, movieId) => {
    try {
        // Validate Input Data
        let error = validateInputData(movie);
        if (error) throw error;

        // Edit Movie
        const movies = getDB().collection(COLL_MOVIES);
        const filter = { _id: ObjectId(movieId) };
        const update = { $set: { ...movie } };
        return movies.updateOne(filter, update);

    } catch (error) { throw error };
};

module.exports = editOne;