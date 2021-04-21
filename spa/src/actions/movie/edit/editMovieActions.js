import axios from 'axios';
import { BASE_URL } from '../../../config/config';
import { EDIT_ONE_MOVIE_ENDPOINT } from '../../../services/api/movieEndpoints';
import validateInputData from '../helpers/validateInputData';
import handleError from '../helpers/handleError';
import { handleSuccess } from '../edit/helpers/editMovieHandlers';

export const editOneMovie = (movie, history) => dispatch => {
    // Validate Input Data
    const error = validateInputData(movie);
    if (error) return handleError(dispatch, error);

    // Prepare Request Data
    const movieId = history.location.pathname.split('/')[2];
    const { year, runtime, imdb_rating } = movie;
    Object.assign(movie, { year: parseInt(year), runtime: parseFloat(runtime), imdb_rating: parseFloat(imdb_rating) });

    // Submit Data
    axios.put(BASE_URL + EDIT_ONE_MOVIE_ENDPOINT(movieId), movie)
        .then(({ data }) => {
            const { success, error } = data;

            success
                ? handleSuccess(dispatch, history, movieId)
                : handleError(dispatch, error);
        });
};