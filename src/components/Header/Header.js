import React from "react";
import "../../styles/Header.css";
import SearchIcon from '@material-ui/icons/Search';
export default function Header() {
  return (
    <div className="header">
      {/* amazon logo */}
      <img
        className="header__logo"
        src={"https://pngimg.com/uploads/amazon/amazon_PNG25.png"}
      />
      {/* search filed next to the logo */}

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon"/>
      </div>
      {/* options nav bar 4 options */}
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineOne">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineOne"> & Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineOne">Prime</span>
        </div>
      </div>
    </div>
  );
}
