import * as React from "react";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import Home from "../Home/Home";
import "./ProductGrid.css";

export default function ProductGrid({ products }) {
  return (
    <div>
      <div className="gridContent">
        <h1>Best selling products</h1>
      </div>
      <div className="grid">
        {products.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
}
