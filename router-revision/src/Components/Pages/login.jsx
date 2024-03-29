import React from 'react'
import './Login.css';

function  Login ()  {
  return (
    <div className="mainlogin">
       <div className="newimage">
      <h1 className='welcome'>Welcome to Umudugudu-Hub Login Page</h1>
      <p className='welcome'>
        Please log into the system in order to continue with us
      </p>
      
    </div>
    <div className='container'>
    <form action="#" method='GET'>
    <div className="header">
        <div className="text">Login </div>
        <div className="underline"></div>
    </div>
    <div className='username'><label htmlFor="username">Username</label></div>
    <div className="inputs">
      
        <div className="input">
            
            <input type="text" name="username" id="" placeholder='Username...' required/>

     </div>
     <div className='password'><label htmlFor="password">Password</label></div>
     
     <div className="input">
        
        <input type="password" name="password" id=""  placeholder='Password...' required/>

     </div>
    </div>
    <div className="forgot-password">Forget your password? <span>Click here</span></div>
    <div className="forgot-password">Don't have account? <a href="signup"><span>Click here to Sign Up</span></a></div>
    <div className="submit-container">
      <div>
        <button type='submit' className='btn'>Login</button>

    </div>
    </div>
    </form>
    </div>
   
    </div>
  )
}
export default Login