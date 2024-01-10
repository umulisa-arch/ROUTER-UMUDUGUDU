import React from 'react'
import './Login.css';

function  Login ()  {
  return (
    <div className="mainlogin">
    <div className='container'>
    <form action="#" method='GET'>
    <div className="header">
        <div className="text">Login </div>
        <div className="underline"></div>
    </div>
    
    <div className="inputs">
      
      
        <div className="input">
            
            <input type="text" name="username" id="" placeholder='Username...' required/>

     </div>
     
     <div className="input">
        
        <input type="password" name="password" id=""  placeholder='Password...' required/>

     </div>
    </div>
    <div className="forgot-password">Forget your password? <span>Click here</span></div>
    <div className="submit-container">
      <div>
        <button type='submit' className='btn'>Login</button>

    </div>
    </div>
    </form>
    </div>
    <div className="newimage">
      <h1>Welcome to Umudugudu-Hub Login Page</h1>
      <p>
        Please log into the system in order to continue with us
      </p>
      
    </div>
    </div>
  )
}
export default Login