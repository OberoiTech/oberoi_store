import { Link } from "react-router-dom";
import Icon from "./Icon";
import { categories, platforms } from "../data/products";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/oberoitech-logo.png" alt="OberoiTech" className="footer-logo" />
            <p>Extensions and managed services for WooCommerce and Magento stores.</p>
          </div>

          <div className="footer-col">
            <h4>Categories</h4>
            <ul>
              {categories.map((c) => (
                <li key={c.id}>
                  <Link to={`/extensions?category=${c.id}`}>{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Platforms</h4>
            <ul>
              {platforms.map((p) => (
                <li key={p.id}>
                  <Link to={`/extensions?platform=${p.id}`}>{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><a href="#">About</a></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Installation Guide</a></li>
              <li><Link to="/pricing#faq">FAQ</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Sales</h4>
            <ul className="footer-contact-list">
              <li><a href="tel:+911234567890">+91 12345 67890</a></li>
              <li><a href="mailto:sales@oberoitech.example">sales@oberoitech.example</a></li>
            </ul>
            <div className="footer-social">
              <a href="#" aria-label="X / Twitter" className="icon-btn">
                <Icon name="megaphone" size={17} />
              </a>
              <a href="#" aria-label="Store" className="icon-btn">
                <Icon name="store" size={17} />
              </a>
              <a href="#" aria-label="Support" className="icon-btn">
                <Icon name="user" size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-badges">
            <span className="footer-badge"><Icon name="shield" size={14} /> Secure Checkout</span>
            <span className="footer-badge"><Icon name="star" size={14} /> 4.8★ Rated</span>
          </div>
          <span>© 2026 OberoiTech. All rights reserved.</span>
          <div className="footer-legal">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
