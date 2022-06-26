import ProductCard from "../ProductCard/ProductCard"
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import ProductView from "../ProductView/ProductView";


export default function ProductDetail({shoppingCart}) {

  const [product, setProduct] = useState()


  let apiUrl = "https://codepath-store-api.herokuapp.com/store/"




  const {productId}  = useParams();

  useEffect(async() => {


    console.log("Product ID insdie product detail: ", productId)


    const APIURL = apiUrl + productId

    const response = await axios.get(APIURL)


    console.log("Response: ", response.data)


    setProduct(response.data.product)




  }, [])



  console.log("Product return from second api call", product)


    return (  

      
        <div className="ProductDetail">
         
          <p>Product: {productId} </p>

          <ProductView productId={productId} product = {product}/>
  
        </div>
      )
}