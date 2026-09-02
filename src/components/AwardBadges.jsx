import Icon from "./Icon";
import "./AwardBadges.css";

const badges = [
  { icon: "shield", line1: "60-Day", line2: "Money-Back Guarantee" },
  { icon: "star", line1: "4.8★ Rated", line2: "by 37,000+ merchants" },
  { icon: "check", line1: "Secure", line2: "Checkout & Payments" },
];

export default function AwardBadges() {
  return (
    <div className="award-badges">
      {badges.map((b) => (
        <div key={b.line1} className="award-badge">
          <span className="award-badge-icon">
            <Icon name={b.icon} size={17} />
          </span>
          <span className="award-badge-text">
            <strong>{b.line1}</strong>
            <small>{b.line2}</small>
          </span>
        </div>
      ))}
    </div>
  );
}
