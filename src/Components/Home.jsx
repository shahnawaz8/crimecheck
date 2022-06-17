import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from 'react-redux';

export const Home =()=>{
    const token = useSelector((store)=>store.token)
    const [data,setData] = useState([]);
    useEffect(()=>{
            if(token.length!=0){
                getUser(token)
            }
    },[token])
    const getUser = (token)=>{
        axios.get("http://localhost:5000/api/user/loggeduser",{
            headers: {
                "Authorization" : `Bearer ${token}`
            } 
        })
        .then((res)=>setData(res.data));
    }
    console.log("data",data);
    
    console.log("token",token)
    
    return (
        <>
        <div >
           <h1>Name : {data.user.name}</h1>
           <h1>Email : {data.user.email}</h1>
           <h1>Phone : {data.user.phone}</h1>

        </div>
        
        </>    )
}