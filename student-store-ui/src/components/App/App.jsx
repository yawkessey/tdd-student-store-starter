import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import ProductDetail from "../ProductDetail/ProductDetail";
import axios from "axios";
import { useState } from "react";

export default function App() {
  let apiUrl = "https://codepath-store-api.herokuapp.com/store";
  const [products, setProducts] = useState([]);

  function getProductDetail() {
    axios
      .get(apiUrl)
      .then((res) => {
        console.log(res)
        setProducts(res.data.products)
      })
      .catch((err) => {
        console.log({ err });
      });
  }

  React.useEffect(() => {
    getProductDetail();
  }, []);

  React.useEffect(() => {
    console.log(products)
  }, [products])

  // let isFetching;
  // let error;
  // let isOpen;
  // let shoppingCart;

  return (
    <div className="app">
      {products.map((product,index) => {
        <img src={product.img} />
      })}
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar />
          <Home products={products}/>

          <Routes>
            <Route path="/" element={<Home products={products}/>} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
            {/* YOUR CODE HERE! */}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
