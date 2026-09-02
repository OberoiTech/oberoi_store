import { Link } from "react-router-dom";
import Icon from "./Icon";
import Tile from "./Tile";
import { useCart } from "../context/CartContext";
import { useCurrency } from "../context/CurrencyContext";
import { getPlatformById } from "../data/products";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { format } = useCurrency();
  const platform = getPlatformById(product.platform);

  return (
    <article className="product-card card">
      <Link to={`/extensions/${product.slug}`} className="product-card-media">
        <Tile product={product} className="product-tile" />
        {product.badge && <span className="product-card-ribbon">{product.badge}</span>}
      </Link>

      <div className="product-card-body">
        {platform && (
          <span className="platform-chip" style={{ "--chip-color": platform.color }}>
            {platform.name}
          </span>
        )}
        <Link to={`/extensions/${product.slug}`}>
          <h3 className="product-card-title">{product.name}</h3>
        </Link>
        <p className="product-card-tagline">{product.tagline}</p>

        <div className="product-card-meta">
          <span className="rating">
            <Icon name="star" size={14} />
            {product.rating}
            <span className="count">({product.reviews})</span>
          </span>
          <span className="product-card-price mono">{format(product.price)}</span>
        </div>

        <button className="btn btn-primary btn-sm btn-block" onClick={() => addToCart(product.id)}>
          <Icon name="cart" size={15} />
          Add to cart
        </button>
      </div>
    </article>
  );
}
