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
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";

export default function App() {
  let apiUrl = "http://localhost:3040/store/";
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  function handleAddItemToCart(productId) {
    let item = shoppingCart.find((element) => element.id == productId);

    if (item) {
      const newShoppingCart = [...shoppingCart];
      newShoppingCart.forEach((item) => {
        if (item.id == productId) {
          item.quantity += 1;
        }

        setShoppingCart(newShoppingCart);
      });
    } else {
      item = {
        id: productId,
        quantity: 1,
      };
      setShoppingCart(shoppingCart.concat(item));
    }
  }

  function handleRemoveItemToCart(productId) {
    let item = shoppingCart.find((element) => element.id == productId);

    if (item) {
      if (item.quantity == 1) {
        const newCart = shoppingCart.filter((product) => {
          return product.id != productId;
        });
        setShoppingCart(newCart);
      } else {
        const newCart = [...shoppingCart];
        newCart.forEach((item) => {
          if (item.id == productId) {
            item.quantity -= 1;
          }
          setShoppingCart(newCart);
        });
      }
    }
  }

  const toggleSideBar = () => {
    setSidebar;
  };

  function getProductDetail() {
    axios
      .get(apiUrl)
      .then((res) => {
        console.log("res:" + res);
        setProducts(res.data);
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
          <Navbar products={products} />
          <Sidebar
            shoppingCart={shoppingCart}
            products={products}
            setShoppingCart={setShoppingCart}
          />

          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  shoppingCart={shoppingCart}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
                />
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  products={products}
                  shoppingCart={shoppingCart}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
                />
              }
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
