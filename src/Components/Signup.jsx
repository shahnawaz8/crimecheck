import { useState } from "react";
import { useDispatch } from 'react-redux';
import { registerUser } from "../Redux/action";
export const SignUp =()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [phone,setPhone] = useState('');
    const [name,setName] = useState('');
    const [c_password,setC_password] = useState('');
    
    const dispatch = useDispatch();


    const handleRegister =()=>{
      const registerData = {
       name,
       email,
       phone,
       password,
       password_confirmation:c_password
      }
      console.log(registerData);
      dispatch(registerUser(registerData))
    }

  return (
      <div >
      <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Name..."/><br /><br />
      <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Email.."/><br /><br />
      <input type="text" onChange={(e)=>setPhone(e.target.value)} placeholder="Phone"/><br /><br />
      <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/><span>{"poor"}</span><br />
      <br />
      <input type="text" onClick={(e)=>setC_password(e.target.value)} placeholder="Confirm Password"/><span>{"Not matched"}</span><br /><br />
      <button onClick={handleRegister}>Register</button><button>Login</button>
      </div>    )
}