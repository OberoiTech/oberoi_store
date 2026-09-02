import { useState } from "react";
import Icon from "./Icon";
import "./SidebarNewsletter.css";

export default function SidebarNewsletter({
  badge = "40+ subscribers",
  title = "Join our newsletter club",
  subtitle = "Get e-commerce hacks and special deals right to your inbox.",
}) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <div className="sidebar-newsletter">
      <span className="sidebar-newsletter-badge">{badge}</span>
      <h4>{title}</h4>
      <p>{subtitle}</p>
      {subscribed ? (
        <span className="newsletter-success">
          <Icon name="check" size={15} /> Subscribed
        </span>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
          />
          <button type="submit" className="btn btn-primary btn-block btn-sm">
            Join!
          </button>
        </form>
      )}
    </div>
  );
}
