import { createStore, applyMiddleware,  
} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import {persistedReducer} from './root.reducer.js';

const sagaMiddleware= createSagaMiddleware();
const middlewares = [sagaMiddleware];
middlewares.push(thunk);

if (process.env.NODE_ENV==='development') {
    middlewares.push(logger);
};

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
// persistor.flush();
