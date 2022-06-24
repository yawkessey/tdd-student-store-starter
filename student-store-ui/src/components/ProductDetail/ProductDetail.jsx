import ProductCard from "../ProductCard/ProductCard"
export default function ProductDetail(props) {
    return (
        <div className="ProductDetail">
          {props.map(product)}
          <p>ProductDetail</p>
          <ProductCard />
        </div>
      )
}