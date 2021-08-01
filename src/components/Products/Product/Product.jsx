import React from "react";
import { Link } from "react-router-dom";
import "./product.scss";
import { connect } from "react-redux";
import {
  addToCart,
  LoadCurrentItem,
} from "../../../redux/Shopping/shopping-actions";
function Product({ productData, addToCart, LoadCurrentItem }) {
  return (
    <div className="product">
      <img
        className="product__image"
        src={productData.image}
        alt={productData.title}
      />
      <div className="product__details">
        <p className="details__title">{productData.title}</p>
        <p className="details__desc">{productData.description}</p>
        <p className="details__price">$ {productData.price}</p>
      </div>
      <div className="product__buttons">
        <Link to={`/product/${productData.id}`}>
          <button
            onClick={() => LoadCurrentItem(productData)}
            className="buttons buttons__view"
          >
            View Item
          </button>
        </Link>
        <button
          onClick={() => addToCart(productData.id)}
          className="buttons buttons__add"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    LoadCurrentItem: (item) => dispatch(LoadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
