import Icon from "./Icon";
import { TRUST_BADGES } from "../data/productDetailContent";
import "./ProductTrustBadges.css";

export default function ProductTrustBadges({ badges = TRUST_BADGES }) {
  return (
    <div className="trust-badges">
      {badges.map((b) => (
        <div className="trust-badge" key={b.label}>
          <span className="trust-badge-icon">
            <Icon name={b.icon} size={18} />
          </span>
          <div>
            <strong>{b.label}</strong>
            <span>{b.sublabel}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
