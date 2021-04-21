import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import isAuthenticatedMiddleware from './middlewares/isAuthenticatedMiddleware';

const middlewares = [thunk, isAuthenticatedMiddleware];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
export default store;