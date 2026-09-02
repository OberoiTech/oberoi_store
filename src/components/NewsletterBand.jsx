import { useState } from "react";
import Icon from "./Icon";
import "./NewsletterBand.css";

export default function NewsletterBand({
  title = "Never miss an update, join our newsletter club!",
  subtitle = "Get the news, special offers, and product updates in your inbox.",
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
    <div className="newsletter-band">
      <div className="container newsletter-band-inner">
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        {subscribed ? (
          <span className="newsletter-success newsletter-success-band">
            <Icon name="check" size={16} /> Subscribed
          </span>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
