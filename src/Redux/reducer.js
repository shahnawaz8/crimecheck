import { authActions } from "./action";

const initState = {
    loading:false,
    error:false,
    email:"",
    isAuthenticate:false,
    token:"",
    username:""
}

 export  const Reducer  = (state=initState,{type,payload})=>{
    switch (type) {
        case authActions.LOADING:{
            return{
                ...state,
                loading:true,
                error:false,
                email:'',
                isAuthenticate:false,
                token:''
            }
        }
        case authActions.SUCCESS:{
            // console.log(payload,"rducer")
            return{
                ...state,
                loading:false,
                error:false,
                isAuthenticate:true,
                token:payload.token
            }
        }
        case authActions.FAILURE:{
            return{
                ...state,
                loading:false,
                error:true,
                email:"",
                isAuthenticate:false,
                token:""
            }
        }
        default:
            return state;
    }
}