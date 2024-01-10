import React from 'react'
import { Link } from "react-router-dom";
import '../Components/Pages/login.css';

function  Home  () {
  return (
    <div className="menu">
        <Link to="/"></Link>
        <Link to="/login" className="text">
          <div className='loginlink'>Login</div>
        </Link>
        <Link to="/signup" className="text">
          <div className='signuplink'>SignUp</div>
        </Link>
      </div>
  )
}
export default Home
