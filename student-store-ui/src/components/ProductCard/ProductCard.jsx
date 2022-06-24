import * as React from "react"
import * as ReactDOM from "react-dom";
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail";

export default function ProductCard(props) {
    /*
    product - the product object returned by the API request
    productId - the id of the product extracted from the url
    quantity - the quantity for this product found in the shoppingCart
    handleAddItemToCart - handler function
    handleRemoveItemToCart - handler function
    */
    return (
        <div className="productCard">
            {props.products.map((product,index) =>{
                return <img src={product.img} />
            })}
        </div>
    )

}