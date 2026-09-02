import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Icon from "../components/Icon";
import { useCart } from "../context/CartContext";
import { useCurrency } from "../context/CurrencyContext";
import "./Checkout.css";

function randomOrderId() {
  return `EXT-${Math.floor(10000 + Math.random() * 89999)}`;
}

export default function Checkout() {
  const { lines, subtotal, clearCart } = useCart();
  const { format } = useCurrency();
  const [form, setForm] = useState({ name: "", email: "", store: "" });
  const [orderId, setOrderId] = useState(null);

  if (lines.length === 0 && !orderId) {
    return <Navigate to="/extensions" replace />;
  }

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setOrderId(randomOrderId());
    clearCart();
  }

  if (orderId) {
    return (
      <div className="container checkout-success">
        <div className="success-icon">
          <Icon name="check" size={28} />
        </div>
        <h1>Order confirmed</h1>
        <p>
          Order <span className="mono">{orderId}</span> is on its way to your inbox at{" "}
          <strong>{form.email || "your email"}</strong>. Our team will start installation on{" "}
          <strong>{form.store || "your store"}</strong> within 24 hours.
        </p>
        <Link to="/extensions" className="btn btn-primary">
          Continue browsing
        </Link>
      </div>
    );
  }

  return (
    <div className="container checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-layout">
        <form className="checkout-form card" onSubmit={handleSubmit}>
          <h3>Your details</h3>
          <div className="field">
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Ratna Singh" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@store.com"
            />
          </div>
          <div className="field">
            <label htmlFor="store">Store URL</label>
            <input
              id="store"
              name="store"
              required
              value={form.store}
              onChange={handleChange}
              placeholder="mystore.com"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Place order — {format(subtotal)}
          </button>
          <p className="checkout-note">
            Demo checkout — no payment is actually processed. This confirms the UI flow only.
          </p>
        </form>

        <aside className="checkout-summary card">
          <h3>Order Summary</h3>
          <ul className="checkout-lines">
            {lines.map(({ product, qty }) => (
              <li key={product.id}>
                <span>
                  {product.name} <span className="mono count">× {qty}</span>
                </span>
                <span className="mono">{format(product.price * qty)}</span>
              </li>
            ))}
          </ul>
          <div className="summary-row summary-total">
            <span>Total</span>
            <span className="mono">{format(subtotal)}</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
