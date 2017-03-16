/**
 * Created by VBA3627 on 15/03/2017.
 */
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/CombinedReducers'
import { error } from './middlewares/ErrorMW'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

const middleware = applyMiddleware(promise(), error, thunk, logger());

//Store(Reducers, InitialState, Middleware)
export default createStore(reducers, middleware);
