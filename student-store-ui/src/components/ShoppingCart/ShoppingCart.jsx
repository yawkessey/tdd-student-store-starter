import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart({ isOpen, products, shoppingCart }) {
  const display =
    //If the shopping cart is empty screen
    shoppingCart.length === 0 ? (
      <div className="no-show">
        {" "}
        There is nothing in the shopping cart at the moment. Add to the cart
      </div>
    ) : (
      // When there are things in the shopping cart
      //Searches items in the shopping cart and provides their quantity
      shoppingCart.map((item) => {
        console.log("Item in shoppng cart: ", item);

        console.log("item's id: ", item.id);

        let product = products.find((element) => {
          return element.id == item.id;
        });

        return (
          <ul className="cartProductName">
            <li className="product-name"> {product.name} </li>
            <li className="product-quantity">{item.quantity}</li>
            <li className="product-unit-price">
              {"$" + product.price.toFixed(2)}{" "}
            </li>
            <li className="price">
              {" "}
              {"$" + (item.quantity * product.price).toFixed(2)}{" "}
            </li>
            
          </ul>
        );
      })
    );

  return (
    <div className="shopping-cart">
      <div className="shop">Shopping Cart 🛒</div>
      <div className="labelsAndProducts">
        <ul className="labels">
          <li className="name-label">Name</li>
          <li className="quantity-label">Quantity</li>
          <li className="u-price-label"> Unit Price</li>
          <li className="price-label"> Price</li>
        </ul>

        {display}
      </div>
    </div>
    
  );
}
