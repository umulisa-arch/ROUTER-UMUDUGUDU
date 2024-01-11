import React from "react";
import Home from "./Layout/Home";
import './App.css'

function App() {

  return (
    <>
    <div className="landing">
      <div className="logomotto">
    <div><img className="logo" src="/images/logo2.png" alt="" /></div>
    <div><img className="motto" src="/images/motto.png" alt="" /></div>
    </div>
    <h1>Welcome to Umudugudu-Hub </h1>
    <h2>Our system goal is help you to <br /> share information
        faster and easier!</h2>
       <h2>Sign Up to continue with us or login <br /> if you already have an account</h2>
    <div><Home/></div>

    </div>
      </>
  )
}

export default App
