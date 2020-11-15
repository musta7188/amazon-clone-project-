import React from 'react'
import { Link } from "react-router-dom";

export const returnHeaderOnUserStatus = (u, userStateFunction) => {
  if (!u) {
    return (
      <>
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>

            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Link to="/log-out" onClick={() => userStateFunction(null)}>
          <div className="header__option">
            <span className="header__optionLineOne">Hello {u.email}</span>

            <span className="header__optionLineTwo">Log Out</span>
          </div>
        </Link>
      </>
    );
  }
};


