import * as React from "react"
import * as ReactDOM from "react-dom";
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductGrid from "../ProductGrid/ProductGrid";

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
          <img src={product.image}></img>
          <div className="bottom-section">
            <div>
              <p className="name"></p>
              <div className="controls">
                <p>{}</p>
                <button>plus</button>
                <button>minus</button>
              </div>
            </div>
            <img className="stars"></img>
            <p></p>
          </div>
        </div>
    )

}