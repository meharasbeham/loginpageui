import React ,{useState} from 'react'
import axios from 'axios'



export default function Forgot() {
  const [email,setEmail]=useState()
  const create= (e)=>{
     
    const data={
    "Email":email,
 
  }
  
  axios.get("https://logindatas.onrender.com/api/User/forgot",data)
  .then((response)=>response.jon())
  .then((response)=>console.log(response))
  .catch((error)=>console.log(error));
  }
  
  return (
    <div className='cord1'>
<form onClick={create}>

<p>
  <label type='email' >Email:</label>
  <input type='email' className='email' size={25}value={email}required onChange={(e)=>setEmail(e.target.value)}></input>
</p>

<p>
<button type="submit" class="btn">Send Email</button>
</p>
</form>

    </div>
  )
}
