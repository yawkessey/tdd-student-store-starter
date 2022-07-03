import ProductCard from "../ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import ProductView from "../ProductView/ProductView";

export default function ProductDetail({ shoppingCart, products }) {
  const [product, setProduct] = useState();

  let apiUrl = "http://localhost:3040/store/";

  const { productId } = useParams();

  useEffect(async () => {
    console.log("Product ID insdie product detail: ", productId);

    const APIURL = apiUrl + productId;

    const response = await axios.get(APIURL);

    console.log("Response: ", response.data);

    setProduct(response.data);
  }, []);

  console.log("Product return from second api call", product);

  return (
    <div className="productDetail">
      <ProductView
        productId={productId}
        product={product}
        products={products}
        shoppingCart={shoppingCart}
      />
    </div>
  );
}
