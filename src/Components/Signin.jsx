import { useState } from "react"
import { Div } from "./styledCom"
export const SignIn =()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    return (
        <>
            <Div>
                <div style={{textAlign:'center',width:'90%',height:'80%',backgroundColor:"white",marginLeft:'5%'}}>
            <       img height={'50px'} width={'200px'} src="https://portal.crimecheck.in/assets/images/logo-full.png" alt="" />
                    <p style={{'fontSize':'30px','fontWeight':'bolder'}}>Crime Portal</p>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email..."/><br /><br />
                    <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br /><br /><br />
                    <button>Login</button>

                </div>

            </Div>
        </>    
        )
}