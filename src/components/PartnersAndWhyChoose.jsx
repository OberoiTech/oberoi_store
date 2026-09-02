import Icon from "./Icon";
import "./PartnersAndWhyChoose.css";

const reasons = [
  { icon: "check", value: "480+", label: "Powerful Extensions" },
  { icon: "shield", value: "Free", label: "Support for 3 Months" },
  { icon: "arrowRight", value: "60-Day", label: "Money-Back Guarantee" },
  { icon: "cart", value: "1-Time", label: "Payment, Pay Once" },
  { icon: "store", value: "2", label: "Platforms in One Place" },
  { icon: "user", value: "37,000+", label: "Satisfied Customers" },
];

export default function PartnersAndWhyChoose() {
  return (
    <section className="section partners-why">
      <div className="container">
        <h2>Why Choose OberoiTech?</h2>
        <div className="why-grid">
          {reasons.map((r) => (
            <div key={r.label} className="why-item">
              <span className="why-icon">
                <Icon name={r.icon} size={17} />
              </span>
              <span>
                <strong>{r.value}</strong>
                <small>{r.label}</small>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
