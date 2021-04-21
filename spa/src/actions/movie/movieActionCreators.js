import { FETCH_ALL_MOVIES, FETCH_ONE_MOVIE, EDIT_ONE_MOVIE_SUCCESS, EDIT_ONE_MOVIE_ERROR, DELETE_ONE_MOVIE_SUCCESS } from './movieActionTypes';

// Fetch
export const fetchAllMovies = movies => ({ type: FETCH_ALL_MOVIES, payload: movies });
export const fetchOneMovie = movie => ({ type: FETCH_ONE_MOVIE, payload: movie });

// Edit
export const editOneMovieSuccess = () => ({ type: EDIT_ONE_MOVIE_SUCCESS });
export const editOneMovieError = () => ({ type: EDIT_ONE_MOVIE_ERROR });

// Delete
export const deleteOneMovieSuccess = () => ({ type: DELETE_ONE_MOVIE_SUCCESS });