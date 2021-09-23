import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "../reducers/cartReducer";
import sagas from "../sagas/rootSaga";
import { combineReducers } from "redux";

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();
const middlewares = applyMiddleware(sagaMiddleware);
const store = createStore(combineReducers({ cartReducer }), composeEnhancers(middlewares));

store.subscribe(() => {
   // console.log("store updated",myStore.getState());
});
sagaMiddleware.run(sagas);

export default store;
