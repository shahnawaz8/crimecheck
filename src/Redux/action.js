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
    const em = payload.email;
    const pas = payload.password;
    const postData = {
        email:em,
        password:pas
    }

    axios.post("http://localhost:5000/api/user/register",payload)
    .then((res)=>{

        login(postData);
    })
    .catch((err)=>{
        console.log(err)
    })
}

export const login=(payload)=>(dispatch)=>{
    dispatch(loginLoading());
    console.log(payload,'from payload');
    axios.post(`http://localhost:5000/api/user/login`,payload)
    .then((res)=>{
        console.log(res.data.token,"action")
        dispatch(loginSuccess({token:res.data.token}))
    })
    .catch((err)=> dispatch(loginFailure()))
}