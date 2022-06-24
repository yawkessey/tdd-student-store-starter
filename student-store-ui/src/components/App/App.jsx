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
import Hero from "../Hero/Hero";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";

export default function App() {
  let apiUrl = "https://codepath-store-api.herokuapp.com/store";
  const [products, setProducts] = useState([]);

  function getProductDetail() {
    axios
      .get(apiUrl)
      .then((res) => {
        console.log(res);
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log({ err });
      });
  }

  React.useEffect(() => {
    getProductDetail();
  }, []);

  React.useEffect(() => {
    console.log(products);
  }, [products]);


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar products={products}/>
          <Hero />
          {/* // <Sidebar /> */}
         
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route
              path="/products/:productId"
              element={<ProductDetail products={products} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
     
        <About id="about" />
        <ContactUs />

        </main>
      </BrowserRouter>
    </div>
  );
}
