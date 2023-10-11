import React from 'react';
import "./Form.css";

function handleLogin() {
  const username = document.getElementById("a").value;
  const password = document.getElementById("b").value;
  const usernameRegex = /^[2][1][Aa][8][1][Aa][6][1][0-9][0-9]+$/;
  const passwordRegex = /^[a-zA-Z0-9@.!@#$%^&*;:/]+$/;

  if (usernameRegex.test(username) && passwordRegex.test(password)) {
    document.getElementById("c").innerHTML = "Successfully Logged in";
  } else {
    document.getElementById("c").innerHTML = "Invalid Username or Password";
  }
}

function Form() {
  return (
    <div className="f">
    <div className="container">
    <h1 >Login </h1>
    <label className='hii'>USERNAME:</label> &nbsp;<input type="email" className='hi' required /><br /><br />
    <label className='hii'>PASSWORD:</label> &nbsp;<input type="password" className='hi' /><br /><br />
    <button className='hi'><a href="Apps.js" className='hii'>Sign In</a></button>
    <p className='hiii'></p>
  </div>
  </div>
  );
}

export default Form;