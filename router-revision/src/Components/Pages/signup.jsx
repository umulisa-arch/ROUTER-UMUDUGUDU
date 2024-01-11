import React from 'react'

function  Signup  ()  {
  return (
    <div className="mainlogin">
    <div className='container'>
    <form action="#" method='GET'>
    <div className="header">
        <div className="text">Sign Up </div>
        <div className="underline"></div>
    </div>
    
    <div className='names'><label htmlFor="names">Names</label></div>
    <div className="inputs">
      
      
        <div className="input">
            
            <input type="text" name="names" id="" placeholder='Names...' required/>

     </div>
     <div className='user'><label htmlFor="username">Username</label></div>
     <div className="input">
            
            <input type="text" name="username" id="" placeholder='Username...' required/>

     </div>
     <div className='email'><label htmlFor="email">Email</label></div>
     <div className="input">
            
            <input type="email" name="email" id="" placeholder='Email...' required/>

     </div>
     <div className='password'><label htmlFor="password">Password</label></div>
     <div className="input">
            
            <input type="password" name="password" id="" placeholder='Password...' required/>

     </div>
     <div className='confirmpassword'><label htmlFor="confirmpassword">Confirm password</label></div>
     
     <div className="input">
        
        <input type="password" name="password" id=""  placeholder='Confirm password...' required/>

     </div>
    </div>
    <div className="forgot-password">Forget your password? <span>Click here</span></div>
    <div className="submit-container">
      <div>
        <button type='submit' className='btn'>Sign Up</button>

    </div>
    </div>
    </form>
    </div>
    <div className="newdiv">
      <h1>Welcome to Umudugudu-Hub Sign Up  Page</h1>
      <p>
        Please log into the system in order to continue with us
      </p>
      
    </div>
    </div>
  )
}
export default Signup
