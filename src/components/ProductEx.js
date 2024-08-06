import React from "react";
import "./product.css";
const ProductEx = (props) => {
  return (
    <div className="product">
      <img src={props.path} alt="" />
      <h4>{props.name}</h4>
      <p>
        <strong>Price:</strong> {props.price}
      </p>
      <button>Buy Now</button>
    </div>
  );
};

export default ProductEx;
