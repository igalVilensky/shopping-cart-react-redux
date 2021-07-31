import React from "react";
import { Link } from "react-router-dom";
import "./product.scss";
function Product({ productData }) {
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
        <Link to={`/product/itemID`}>
          <button className="buttons buttons__view">View Item</button>
        </Link>
        <button className="buttons buttons__add">Add To Cart</button>
      </div>
    </div>
  );
}

export default Product;
