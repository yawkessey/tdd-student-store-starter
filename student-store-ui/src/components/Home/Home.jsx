import * as React from "react";
import "./Home.css";
import ProductCard from "../ProductCard/ProductCard";
import App from "../App/App";
import ProductGrid from "../ProductGrid/ProductGrid";
export default function Home({products}) {
  return (
    <div className="home">
      <p>Home</p>
      <ProductGrid products={products}/>
    </div>
  );
}
