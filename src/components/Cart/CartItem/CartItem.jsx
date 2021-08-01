import React, { useState } from "react";
import "./cartItem.scss";
import { connect } from "react-redux";
import {
  removeFromCart,
  adjustQty,
} from "../../../redux/Shopping/shopping-actions";
function CartItem({ itemData, removeFromCart, adjustQty }) {
  const [input, setInput] = useState(itemData.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(itemData.id, e.target.value);
  };
  return (
    <div className="cartItem">
      <img
        className="cartItem__image"
        src={itemData.image}
        alt={itemData.title}
      />
      <div className="cartItem__details">
        <p className="details__title">{itemData.title}</p>
        <p className="details__desc">{itemData.description}</p>
        <p className="details__price">$ {itemData.price}</p>
      </div>
      <div className="cartItem__actions">
        <div className="cartItem__qty">
          <label htmlFor="qty">QTY</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => removeFromCart(itemData.id)}
          className="actions__deleteItemBtn"
        >
          <img
            src="https://img-premium.flaticon.com/png/512/484/premium/484611.png?token=exp=1627758419~hmac=c32a0339b340b21c1f4e612f79e8aa5d"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
