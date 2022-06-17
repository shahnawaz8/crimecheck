import { legacy_createStore } from "redux"
import { Reducer } from "./Redux/reducer"

export const store=legacy_createStore(Reducer ,{
    loading:false,
    error:false,
    isAuthenticate:false,
    token:"",
    username:""
})
console.log(store.getState())