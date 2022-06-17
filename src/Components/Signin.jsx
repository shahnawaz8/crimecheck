import { useState } from "react"
import { Div } from "./styledCom"
import { useDispatch } from 'react-redux';
import { login } from "../Redux/action";
import { Link, Navigate, useNavigate } from "react-router-dom";
export const SignIn =()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const navigate = useNavigate();
    // console.log(email,password);


    const dispatch = useDispatch();
    const handleLogin = ()=>{
        if(email.length!=0 && password.length!=0){
            const userData = {
                email,
                password
            }
            dispatch(login(userData))
            navigate('/');
           
        }
    }
    return (

        <>
            <Div>
                <div style={{textAlign:'center',width:'90%',height:'80%',backgroundColor:"white",marginLeft:'5%'}}>
            <       img height={'50px'} width={'200px'} src="https://portal.crimecheck.in/assets/images/logo-full.png" alt="" />
                    <p style={{'fontSize':'30px','fontWeight':'bolder'}}>Crime Portal</p>
                    <input required  type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email..."/><br /><br />
                    <input required type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br /><br /><br />
                    <button onClick={handleLogin}>Login</button> 
                    <button onClick={()=>navigate('/signup')}>Create an Account</button>

                </div>

            </Div>
        </>    
        )
}