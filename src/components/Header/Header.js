import React from "react";
import "../../styles/Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
function Header({basket}) {
  return (
    <div className="header">
      {/* amazon logo */}
     <Link to="/">
     <img
        className="header__logo"
        src={"https://pngimg.com/uploads/amazon/amazon_PNG25.png"}
        
      />
      </Link>
      {/* search filed next to the logo */}

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon"/>
      </div>
      {/* options nav bar 4 options */}
      <div className="header__nav">
      <Link to="/login">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>

          <span className="header__optionLineTwo">
            Sign In
            </span>
        </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo"> & Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

      {/* shopping cart dynamic */}
        <div className="header__optionBasket">
          <Link to="/checkout">
        <ShoppingCartIcon className="shopping_cart"/>
        </Link>
  <span className="header__optionLineTwo header_basketCount">{basket.length}</span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return{
    basket: state.basket
  }
}

export default connect(mapStateToProps)(Header)