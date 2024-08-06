import React, { Component } from "react";
import "./product.css";
export default class BasicClass extends Component {
  render() {
    return (
      <div className="product">
        <img src={this.props.path} alt="" />
        <h4>{this.props.name}</h4>
        <p>
          <strong>Price:</strong> {this.props.price}
        </p>
        <button>Buy Now</button>
      </div>
    );
  }
}
