import * as React from "react"
import * as ReactDOM from "react-dom";
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductGrid from "../ProductGrid/ProductGrid";
import "./ProductCard.css";

export default function ProductCard({product}) {
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
                <img className="productImage" src={product.image}></img>
            </div>
          <div className="productInfo">
            <div>
              <p className="productName">{product.name}</p>
              <div className="stars">
                <img className="starImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/4.5_stars.svg/2560px-4.5_stars.svg.png"></img>
              </div>
              <p>{"$" + product.price}</p>
              <div className="controls">
                <button>+</button>
                <button>-</button>
              </div>
            </div>
            <img className="stars"></img>
            <p></p>
          </div>
        </div>
    )

}