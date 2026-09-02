import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import "./Pricing.css";

const plans = [
  {
    name: "Starter",
    price: "Pay per extension",
    body: "Buy exactly what you need, one extension at a time.",
    features: ["One-time purchase per extension", "Free installation", "30 days of email support", "60-day money-back guarantee"],
    cta: "Browse extensions",
    to: "/extensions",
  },
  {
    name: "Growth",
    price: "$149/mo",
    body: "For stores running 3+ extensions that need ongoing support.",
    features: [
      "Unlimited installs across owned extensions",
      "Priority support, 3-hour response",
      "Quarterly performance & SEO audit",
      "1 custom tweak request per month",
    ],
    highlighted: true,
    cta: "Talk to sales",
    to: "/services",
  },
  {
    name: "Enterprise",
    price: "Custom",
    body: "For multi-store or high-traffic merchants who need a dedicated team.",
    features: [
      "Dedicated engineer on retainer",
      "Custom development included",
      "Migration & platform upgrade support",
      "SLA-backed uptime & response times",
    ],
    cta: "Contact us",
    to: "/services",
  },
];

export default function Pricing() {
  return (
    <div className="container pricing-page">
      <div className="pricing-hero">
        <div className="kicker">Pricing</div>
        <h1>Simple pricing, whether you need one extension or a full team</h1>
        <p>Extensions are priced individually on their own page. These plans cover support and services.</p>
      </div>

      <div className="pricing-grid">
        {plans.map((p) => (
          <div key={p.name} className={`pricing-card card ${p.highlighted ? "is-highlighted" : ""}`}>
            {p.highlighted && <span className="badge pricing-badge">Most popular</span>}
            <h3>{p.name}</h3>
            <div className="pricing-price mono">{p.price}</div>
            <p className="pricing-body">{p.body}</p>
            <ul className="pricing-features">
              {p.features.map((f) => (
                <li key={f}>
                  <Icon name="check" size={15} />
                  {f}
                </li>
              ))}
            </ul>
            <Link to={p.to} className={`btn btn-block ${p.highlighted ? "btn-primary" : "btn-outline"}`}>
              {p.cta}
            </Link>
          </div>
        ))}
      </div>

      <div className="pricing-faq" id="faq">
        <h2>Frequently asked</h2>
        <div className="faq-item">
          <h4>Do I need a plan to buy an extension?</h4>
          <p>No — every extension can be bought once, on its own, with no subscription required.</p>
        </div>
        <div className="faq-item">
          <h4>What does the 60-day guarantee cover?</h4>
          <p>If an extension doesn't work for your store within 60 days of purchase, we refund it in full.</p>
        </div>
        <div className="faq-item">
          <h4>Can I switch plans later?</h4>
          <p>Yes, Growth and Enterprise plans can be upgraded, downgraded or cancelled at any time.</p>
        </div>
      </div>
    </div>
  );
}
