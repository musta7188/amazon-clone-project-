import React, { useEffect } from "react";
import "../../styles/App.css";
import Header from "../Header/Header";
import Home from "../Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
import Login from "../Authentication/Login";
import { auth } from "../../FireBase/index";
import { connect } from "react-redux";
import Payment from '../Payment'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from "@stripe/react-stripe-js"

///stripe token 
const promise = loadStripe('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')

function App({ userStateValue }) {
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        ///if user is logged in
        userStateValue(authUser);
      } else {
        ///else is logged out
        userStateValue(null);
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">

            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    userStateValue: (userObject) =>
      dispatch({ type: "USER_STATUS", payload: userObject }),
  };
};

export default connect(null, mapDispatchToProps)(App);
