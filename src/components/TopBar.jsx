import { Link } from "react-router-dom";
import Icon from "./Icon";
import "./TopBar.css";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-contact">
          <a href="tel:+911234567890">
            <Icon name="user" size={13} /> +91 12345 67890
          </a>
          <a href="tel:+14155550135" className="topbar-contact-secondary">
            <Icon name="user" size={13} /> +1 415 555 0135
          </a>
        </div>
        <div className="topbar-links">
          <Link to="/services">Hire Us</Link>
          <Link to="/pricing">Offers</Link>
          <a href="#">Support</a>
        </div>
      </div>
    </div>
  );
}
