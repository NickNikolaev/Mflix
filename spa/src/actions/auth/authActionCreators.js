import { LOGIN_SUCCESS, LOGIN_ERROR, REGISTER_SUCCESS, REGISTER_ERROR, IS_MOVIE_CREATOR } from './authActionTypes';

// Login
export const loginSuccess = user => ({ type: LOGIN_SUCCESS, payload: { ...user } });
export const loginError = () => ({ type: LOGIN_ERROR });

// Register
export const registerSuccess = user => ({ type: REGISTER_SUCCESS, payload: { ...user } });
export const registerError = () => ({ type: REGISTER_ERROR });

// Is Movie Creator
export const isMovieCreatorAction = isMovieCreator => ({ type: IS_MOVIE_CREATOR, payload: isMovieCreator });