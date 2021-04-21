import { FETCH_ALL_MOVIES, FETCH_ONE_MOVIE, EDIT_ONE_MOVIE_SUCCESS, EDIT_ONE_MOVIE_ERROR, DELETE_ONE_MOVIE_SUCCESS } from '../../actions/movie/movieActionTypes';

const defaultState = { all: [], one: {}, isMovieEdited: false, isMovieDeleted: false };

const movieReducer = (state = defaultState, action) => {
    switch (action.type) {
        // Fetch
        case FETCH_ALL_MOVIES:
            return { all: [...action.payload] };

        case FETCH_ONE_MOVIE:
            return { ...state, one: { ...action.payload } };

        // Edit
        case EDIT_ONE_MOVIE_SUCCESS:
            return { ...state, isMovieEdited: true };

        case EDIT_ONE_MOVIE_ERROR:
            return { ...state, isMovieEdited: false };

        // Delete
        case DELETE_ONE_MOVIE_SUCCESS:
            return { ...state, isMovieDeleted: true };

        default: return state;
    };
};

export default movieReducer;