import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import { thunk } from 'redux-thunk';
import { userReducer,  usersReducer, postReducer, postsReducer, appReducer } from './reducers';

const reducer = combineReducers({
    user: userReducer,
    users: usersReducer,
    posts: postsReducer,
    post: postReducer,
    app: appReducer,


})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));