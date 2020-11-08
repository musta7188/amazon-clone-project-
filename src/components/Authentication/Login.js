import React from 'react'
import {Link} from 'react-router-dom'
function Login() {
  return (
    <div className='login'>
      <Link to='/'>
      <img  className="login__logo"
      src='https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?resize=740%2C204'
      />
      </Link>
    </div>
  )
}

export default Login;