import * as React from "react";
import * as ReactDOM from "react-dom";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductGrid from "../ProductGrid/ProductGrid";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({ product, quantity, productId, shoppingCart, handleAddItemToCart, handleRemoveItemToCart }) {
  /*
    product - the product object returned by the API request
    productId - the id of the product extracted from the url
    quantity - the quantity for this product found in the shoppingCart
    handleAddItemToCart - handler function
    handleRemoveItemToCart - handler function

    */

  return (
    
      <div className="productCard">
        <div className="productImage">
        <Link to= {"/products/" + product.id}>
          <img className="productImage" src={product.image}></img></Link>
        </div>
        <div className="productInfo">
          <div>
            <p className="productName">{product.name}</p>
            <div className="stars">
              <img
                className="starImage"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/4.5_stars.svg/2560px-4.5_stars.svg.png"
              ></img>
            </div>
            <p>{"$" + product.price.toFixed(2)}</p>
            {/* <p className="product-quantity">{quantity}</p> */}
            <div className="controls">
              <button className="add" onClick={() => handleAddItemToCart(product.id)}>
                <i className="material-icons"> add </i>
              </button>
              <button className="remove">
                <i className="material-icons" onClick={() => handleRemoveItemToCart(product.id)}> remove </i>
              </button>
            </div>
          </div>
          <img className="stars"></img>
          <p>{quantity}</p>
        </div>
      </div>
    
  );
}
