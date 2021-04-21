const { ObjectId } = require('bson');
const { getDB, COLL_MOVIES, COLL_USERS } = require('../../../config/mongodb');
const validateInputData = require('../helpers/validateInputData');

const addOne = async (movie) => {
    const movies = getDB().collection(COLL_MOVIES);
    const users = getDB().collection(COLL_USERS);

    try {
        // Validate Input Data
        let error = validateInputData(movie);
        if (error) throw error;
        
        // Save Movie In DB
        Object.assign(movie, { creator_id: ObjectId(movie.creator_id) });
        const response = await movies.insertOne(movie);
        
        // Add Movie Id To "user.movies" property
        const movieId = response.insertedId;
        const filter = { _id: ObjectId(movie.creator_id) };
        const update = { $addToSet: { movies: movieId } };
        return users.updateOne(filter, update);

    } catch (error) { throw error };
};

module.exports = addOne;