import { combineReducers } from 'redux';
import userReducer from './auth/userReducer';
import notificationReducer from './notification/notificationReducer';
import movieReducer from './movie/movieReducer';

const reducers = {
    user: userReducer,
    notification: notificationReducer,
    movie: movieReducer,
};

const rootReducer = combineReducers(reducers);
export default rootReducer;