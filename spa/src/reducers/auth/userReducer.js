import { REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, IS_MOVIE_CREATOR } from '../../actions/auth/authActionTypes';

const defaultState = { username: '', email: '', isRegistered: false };

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        // Register
        case REGISTER_SUCCESS:
            return { ...action.payload, isRegistered: true };

        case REGISTER_ERROR:
            return { ...defaultState };

        // Login
        case LOGIN_SUCCESS:
            return { ...action.payload, isAuthenticated: true };

        case LOGIN_ERROR:
            return { ...defaultState, isAuthenticated: false, isRegistered: true };

        // Logout
        case LOGOUT:
            return { ...defaultState, isRegistered: true, isAuthenticated: false };

        // Is Movie Creator
        case IS_MOVIE_CREATOR:
            return { ...state, isMovieCreator: action.payload };

        default:
            return state;
    };
};

export default userReducer;