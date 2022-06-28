import * as React from "react";
import "./Home.css";
import ProductCard from "../ProductCard/ProductCard";
import App from "../App/App";
import ProductGrid from "../ProductGrid/ProductGrid";
import Hero
 from "../Hero/Hero";
import SubNavbar from "../SubNavbar/SubNavbar";
export default function Home({products, handleAddItemToCart, handleRemoveItemToCart, shoppingCart}) {
  return (
    <div className="home">
      <p>Home</p>
      <Hero />
      <SubNavbar />
      <ProductGrid products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} shoppingCart={shoppingCart}/>
    </div>
  );
}
