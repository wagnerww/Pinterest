import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./rootReducers";
import sagas from "./rootSagas";

const middleware = [];

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middleware.push(sagaMiddleware);

/*const createAppropriateStore =
  process.env.NODE_ENV === "development"
    ? console.tron.createEnhancer
    : () => {};
*/
const store = createStore(
  reducers(),
  compose(
    applyMiddleware(sagaMiddleware),
 //   createAppropriateStore()
  )
);

sagaMiddleware.run(sagas);

if (process.env.NODE_ENV === "development") {
  console.tron.log(store.getState());
}

export default store;
