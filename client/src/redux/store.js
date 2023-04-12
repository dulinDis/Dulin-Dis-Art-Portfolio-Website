import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { persistedReducer } from "./root.reducer.js";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
middlewares.push(thunk);

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares))
  //   applyMiddleware(...middlewares)
);
// console.log(store.getState());

export const persistor = persistStore(store);
// persistor.flush();
