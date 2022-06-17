import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux"
import thunk from "redux-thunk"
import { Reducer } from "./Redux/reducer"

const composeEnhancer= window._REDUX_DEV_TOOLS_EXTENSION_COMPOSE||compose;
export const store=legacy_createStore(Reducer,composeEnhancer(applyMiddleware(thunk)))
console.log(store.getState())