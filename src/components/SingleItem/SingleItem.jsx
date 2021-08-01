import React from "react";
import "./singleItem.scss";
import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";
import { add } from "lodash";

const SingleItem = ({ currentItem, addToCart }) => {
  return (
    <div className="singleItem">
      <img
        src={currentItem.image}
        alt={currentItem.title}
        className="SingleItem__image"
      />
      <div className="singleItem__details">
        <p className="details__title">{currentItem.title}</p>
        <p className="details__description">{currentItem.descriptin}</p>
        <p className="details__price">$ {currentItem.price}</p>
        <button
          onClick={() => addToCart(currentItem.id)}
          className="details__addBtn"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
