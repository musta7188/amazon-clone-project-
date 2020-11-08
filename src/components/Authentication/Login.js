import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/Login.css'
function Login() {
  return (
    <div className='login'>
        
      <Link to='/'>
      <img  className="login__logo"
      src='https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?resize=740%2C204'
      />
      </Link>
      <div className="login__container">

        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input type='text'/>
          <h5>Password</h5>
          <input type='password'/>
          <button className='login__singInButton'> Sing In</button>
        </form>
        <p>
          By signin-in you agree to AMAZON FAKE CONDITIONS Conditions of Use & Sale. 
          Please see out Privacy Notice,
          our Cookies Notice and Interest-Base Ads Notice.
        </p>
        <button className='login__registerButton'>Create your Amazon Account</button>
      </div>
      
    </div>
    
  )
}

export default Login;