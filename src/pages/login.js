import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



export default function Login(){

const[Email,setEmail]=useState()
const[Password,setPassword]=useState()

const Create=(e)=>{
 e.preventDefault();
    axios.post("https://logindatas.onrender.com/api/User/login",{Email,Password})
    .then((response)=>console.log(response))
    .catch(err=>console.log(err))
}

return (
    <div className='cord'>
<form onSubmit={Create}>
<h1>Login</h1>

<p>
  <label type='email' >Email:</label>
  <input type='email' className='email' size={25}value={Email}required onChange={(e)=>setEmail(e.target.value)}></input>
</p>
<p>
  <label type='password' >password:</label>
  <input type='password'  className='password'  size={25}value={Password}required onChange={(e)=>setPassword(e.target.value)}></input>
</p>
 <Link to={"/forgot"}>Forgot password</Link>

<p>
<button type="submit" className="btn"> <Link to={"/home"}>Login</Link></button>
</p>
<p>
 <Link to={"/"}>New Here? Create Account</Link>
</p>
</form>

    </div>
  )
}

