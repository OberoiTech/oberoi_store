import { Link } from "react-router-dom";
import Icon from "./Icon";
import "./ClientLogos.css";

const logos = ["Studio Loom", "Northfield Supply Co.", "Coastal & Co.", "Velora", "Hammond Goods", "Brightlane"];

export default function ClientLogos() {
  return (
    <section className="client-logos">
      <div className="container client-logos-inner">
        <span className="client-logos-label">Trusted by teams at</span>
        <div className="client-logos-row">
          {logos.map((name) => (
            <span key={name} className="client-logo">
              {name}
            </span>
          ))}
        </div>
        <Link to="/services" className="client-logos-more">
          View all <Icon name="arrowRight" size={14} />
        </Link>
      </div>
    </section>
  );
}
