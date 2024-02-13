import React, { useState } from 'react'
import '../../App.css'

import email from '../Assets/email.png'
import password from '../Assets/password.png'
import person from '../Assets/person.png'


const SignUp = () => {

  const [action, setAction] = useState("Login");

  return (
    
    <div className='container'>
      <div className='header'>
        <div className='text'> {action} </div>
        <div className='underline'></div> 
      </div>
      <div className='inputs'>
        {action==="Login"? <div></div> : 
          <div className='input'>
          <img src={person} alt=""/>
          <input type='text' placeholder='Enter Name' />
        </div>}
        <div className='input'>
          <img src={email} alt=""/>
          <input type='email' placeholder='Enter Email'/>
        </div>
        <div className='input'>
          <img src={password} alt=""/>
          <input type='password' placeholder='Enter Password'/>
        </div>
      </div>
        {action==="Sign Up" ? <div></div> : <div className='forget-password'>Forgot Password? <span>Click Here</span> </div>}
      <div className='submit-container'>
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Log In</div>
      </div>
    </div> 
     
  )
}

export default SignUp;
