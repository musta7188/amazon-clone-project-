import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../FireBase/index";
import {connect} from 'react-redux'
import "../../styles/Login.css";
function Login({saveUserInput}) {
  ///allow to use the url
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          saveUserInput({email, password})
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        ///send back an auth object
        ///if user is registered successfully push it to the front page
        if (auth) {
          history.push("/");
        
        }
      })
      .catch((error) => alert(error.message));
  };

  console.log(email, password);
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?resize=740%2C204"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login__singInButton">
            {" "}
            Sing In
          </button>
        </form>
        <p>
          By signin-in you agree to AMAZON FAKE CONDITIONS Conditions of Use &
          Sale. Please see out Privacy Notice, our Cookies Notice and
          Interest-Base Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>{
  return {
    saveUserInput: (userObject) => dispatch({type: "SAVE_USER", payload: userObject})
  }
}

export default connect(null,mapDispatchToProps)(Login);
