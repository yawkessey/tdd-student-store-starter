import React from "react";
import "./ProductView.css";
import ProductCard from "../ProductCard/ProductCard";
import NotFound from "../NotFound/NotFound";

export default function ProductView({
  product,
  products,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
  shoppingCart,
}) {
  const loaded = product == null;

  const tags = loaded ? (
    <div>
      <NotFound />
    </div>
  ) : (
    <div className="productView">
      <h1 className="product-id">Product #{productId}</h1>
      <ProductCard
        products={products}
        product={product}
        productId={productId}
        quantity={quantity}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
        shoppingCart={shoppingCart}
      />
      <p className="product-description">{product.description} </p>
    </div>
    // <div className="product-detail">
    //   <div className="product-view">
    //     <h1 className="product-id">Product #{productId}</h1>
    //     <div className="product-view-card">
    //         <div className="product-card">
    //             <div className="product-image">
    //                 <img src={product.image} />
    //             </div>
    //             <div className="product-info">
    //                 <div className="main-info">
    //                     <p className="product-name">{product.name}</p>
    //                     <img className="star-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/4.5_stars.svg/2560px-4.5_stars.svg.png"/>
    //                     <p className="product-price">${product.price}</p>
    //                 </div>
    //                 <div className="product-description">
    //                     <p className="product-text">{product.description}</p>
    //                 </div>
    //                 <div className="actions">
    //                     <div className="buttons">
    //                         <button className="add">
    //                             <i className="material-icons"> add </i>
    //                         </button>
    //                         <div className="remove">
    //                             <button className="remove">
    //                                 <i className="material-icons"> remove </i>
    //                             </button>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>

    //         </div>
    //     </div>
    //   </div>

    // </div>
  );

  console.log("Tags: ", tags);

  return tags;
}
