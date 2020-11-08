import React from "react";
import "../../styles/App.css";
import Header from "../Header/Header";
import Home from "../Home/Home";
import login from '../Authentication/Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from '../Checkout/Checkout'
import Login from "../Authentication/Login";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login">
       <Login/>
          </Route>
          <Route path="/checkout">
           <Checkout/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
