import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise';
import reducers from './reducer/index.js';

const middleware = applyMiddleware(promise);
export default createStore(reducers, middleware);
