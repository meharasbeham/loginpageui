import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Sigin() {
  const [Name,setName]=useState()
   const [Email,setEmail]=useState()
  const [Password,setPassword]=useState()

  const create=(e)=>{
    e.preventDefault()
    axios.post('https://logindatas.onrender.com/api/User/Create',{Name,Email,Password})
   
    .then((response)=>console.log(response))
    .catch(err=>console.log(err))
}
  
  return (
    
    <div className='cord2'>
<form onSubmit={create}>
<h1>Create Account</h1>
<p>
  <label type='name' >Name:</label>
  <input type='name' className='name' size={25}value={Name}required onChange={(e)=>setName(e.target.value)}></input>
</p>
<p>
  <label type='email' >Email:</label>
  <input type='email' className='email' size={25}value={Email}required onChange={(e)=>setEmail(e.target.value)}></input>
</p>
<p>
  <label type='password' >password:</label>
  <input type='password'  className='password'  size={25}value={Password}required onChange={(e)=>setPassword(e.target.value)}></input>
</p>

<p>
<button type="submit" class="btn" onClick={create}>create</button>
</p>
<Link to={"/login"}>Back to login</Link>
</form>

    </div>
  )
}

