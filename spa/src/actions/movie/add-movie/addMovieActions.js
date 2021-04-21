import axios from 'axios';
import { BASE_URL } from '../../../config/config';
import { ADD_MOVIE_ENDPOINT } from '../../../services/api/movieEndpoints';

import getAuthData from '../../../services/common/getAuthData';
import validateInputData from '../helpers/validateInputData';
import handleError from '../helpers/handleError';
import { handleSuccess } from './helpers/addMovieHandlers';

export const addMovie = (movie, history) => dispatch => {
    // Validate Input Data
    const error = validateInputData(movie);
    if (error) return handleError(dispatch, error);

    // Prepare Request Data
    const { year, runtime, imdb_rating } = movie;
    Object.assign(movie, { year: parseInt(year), runtime: parseFloat(runtime), imdb_rating: parseFloat(imdb_rating) });
    const { _id } = getAuthData();
    const data = { ...movie, creator_id: _id };

    // Submit Data
    axios.post(BASE_URL + ADD_MOVIE_ENDPOINT, data)
        .then(({ data }) => {
            const { success, error } = data;

            success
                ? handleSuccess(dispatch, history)
                : handleError(dispatch, error);
        });
};