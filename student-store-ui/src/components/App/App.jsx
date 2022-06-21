import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NotFound from "../NotFound/NotFound"
import ProductDetail from "../ProductDetail/ProductDetail"
//React router: Navigation 

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
      
        
      <main>
        <Navbar />
        <Sidebar />
        <Home />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          {/* YOUR CODE HERE! */}

       
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
