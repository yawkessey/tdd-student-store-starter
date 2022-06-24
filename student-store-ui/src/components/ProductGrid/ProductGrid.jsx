import * as React from "react";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import Home from "../Home/Home";

export default function ProductGrid({products}) {
  return (
    <div>
      {products.map((product) => {
        return <ProductCard product={product}/>;
      })}
    </div>
  );
}
