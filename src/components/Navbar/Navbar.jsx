import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./navbar.scss";
function Navbar({ cart }) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);
  return (
    <div className="navbar">
      <Link to="/">
        <h2 className="navbar__logo">Redux Shopping Cart</h2>
      </Link>
      <Link to="/cart">
        <div className="navbar__cart">
          <h3 className="cart__title">Cart</h3>
          <img
            className="cart__image"
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
            alt="shopping cart"
          />
          <div className="cart__counter">{cartCount}</div>
        </div>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
