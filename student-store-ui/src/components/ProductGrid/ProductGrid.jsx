import * as React from "react";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import Home from "../Home/Home";
import "./ProductGrid.css";

export default function ProductGrid({ products, handleAddItemToCart, handleRemoveItemToCart, shoppingCart }) {
  return (
    <div className="gridSection">
      <div className="gridContent">
        <h1>Best selling products</h1>
      </div>
      <div className="grid">
        {products.map((product, index) => {
          const prod = shoppingCart.find((item) => item.id == product.id)
          const quantity = prod ? prod.quantity: 0
          return <ProductCard key={index} product={product} productId={product.id} quantity={quantity} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} shoppingCart={shoppingCart}/>;
        })}
      </div>
    </div>
  );
}
