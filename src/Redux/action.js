import axios from "axios"

export const authActions={
    LOADING:"LOADING",
    SUCCESS:"SUCCESS",
    FAILURE:"FAILURE"
    }

export const loginLoading=()=>({
     type:authActions.LOADING
})
export const loginSuccess=(payload)=>({
    type:authActions.SUCCESS,
    payload
})

export const registerSuccess=(payload)=>({
    type:authActions.SUCCESS,
    payload
})
export const loginFailure=()=>({
    type:authActions.FAILURE
})

export const registerUser=(payload)=>(dispatch)=>{
    console.log('signup',payload);
    axios.post("https://connection-vala.herokuapp.com/api/user/register",payload)
    .then((res)=>{
        axios.post("https://connection-vala.herokuapp.com/api/user/register/login",{
            headers:{
                "Authorization":`Bearer ${res.data.token}`
            }
        })
        .then((loginRes)=>dispatch(loginSuccess({token:loginRes.data.token})))
        .catch((er)=>dispatch(loginFailure()))
    })
    .catch((err)=>{
        console.log(err)
    })
}

export const login=(payload)=>(dispatch)=>{
    dispatch(loginLoading());
    // console.log(payload,'from payload');
    axios.post(`https://connection-vala.herokuapp.com/api/user/login`,payload)
    .then((res)=>{
        console.log(res.data.token,"action")
        dispatch(loginSuccess({token:res.data.token}))
    })
    .catch((err)=> dispatch(loginFailure()))
}