import { Link, useNavigate } from "react-router-dom";
import Icon from "../components/Icon";
import Tile from "../components/Tile";
import { useCart } from "../context/CartContext";
import { useCurrency } from "../context/CurrencyContext";
import "./Cart.css";

export default function Cart() {
  const { lines, subtotal, updateQty, removeFromCart, clearCart } = useCart();
  const { format } = useCurrency();
  const navigate = useNavigate();

  if (lines.length === 0) {
    return (
      <div className="container cart-empty">
        <div className="empty-icon">
          <Icon name="cart" size={30} />
        </div>
        <h1>Your cart is empty</h1>
        <p>Browse extensions and add a few to see them here.</p>
        <Link to="/extensions" className="btn btn-primary">
          Browse Extensions
        </Link>
      </div>
    );
  }

  return (
    <div className="container cart-page">
      <div className="cart-head">
        <h1>Your Cart</h1>
        <button className="btn-ghost" onClick={clearCart}>
          Clear cart
        </button>
      </div>

      <div className="cart-layout">
        <div className="cart-lines">
          {lines.map(({ product, qty }) => (
            <div key={product.id} className="cart-line card">
              <Tile product={product} className="cart-line-tile" />
              <div className="cart-line-info">
                <Link to={`/extensions/${product.slug}`}>
                  <h3>{product.name}</h3>
                </Link>
                <p>{product.tagline}</p>
              </div>
              <div className="qty-stepper">
                <button onClick={() => updateQty(product.id, qty - 1)} aria-label="Decrease quantity">
                  <Icon name="minus" size={14} />
                </button>
                <span className="mono">{qty}</span>
                <button onClick={() => updateQty(product.id, qty + 1)} aria-label="Increase quantity">
                  <Icon name="plus" size={14} />
                </button>
              </div>
              <div className="cart-line-price mono">{format(product.price * qty)}</div>
              <button className="icon-btn" onClick={() => removeFromCart(product.id)} aria-label="Remove item">
                <Icon name="trash" size={17} />
              </button>
            </div>
          ))}
        </div>

        <aside className="cart-summary card">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span className="mono">{format(subtotal)}</span>
          </div>
          <div className="summary-row">
            <span>Installation</span>
            <span className="badge-teal badge">Free</span>
          </div>
          <div className="summary-row summary-total">
            <span>Total</span>
            <span className="mono">{format(subtotal)}</span>
          </div>
          <button className="btn btn-primary btn-block" onClick={() => navigate("/checkout")}>
            Checkout <Icon name="arrowRight" size={16} />
          </button>
          <p className="summary-note">
            <Icon name="shield" size={14} /> Covered by a 60-day money-back guarantee
          </p>
        </aside>
      </div>
    </div>
  );
}
