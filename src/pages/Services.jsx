import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import "./Services.css";

const services = [
  {
    icon: "check",
    title: "Custom Development",
    body: "Need something that doesn't exist off the shelf? Our engineers build custom features on top of your existing storefront.",
  },
  {
    icon: "truck",
    title: "Store Migration",
    body: "Moving from Magento 1 to Magento 2, or between hosting providers — we move products, orders and SEO rankings without downtime.",
  },
  {
    icon: "shield",
    title: "Support & Maintenance",
    body: "Monthly retainer plans for bug fixes, security patches and platform upgrades, with a guaranteed response window.",
  },
  {
    icon: "search",
    title: "Site, SEO & Security Audits",
    body: "A full report on performance, technical SEO and vulnerabilities — with a prioritized fix list, not just a score.",
  },
  {
    icon: "store",
    title: "Theme & Storefront Design",
    body: "Custom themes built around conversion — from wireframes to a fully responsive, accessible storefront.",
  },
  {
    icon: "briefcase",
    title: "B2B & Wholesale Setup",
    body: "Company accounts, tiered pricing and quoting workflows configured end-to-end for wholesale buyers.",
  },
];

export default function Services() {
  return (
    <div className="container services-page">
      <div className="services-hero">
        <div className="kicker">Beyond extensions</div>
        <h1>Hire our team for the work extensions can't do alone</h1>
        <p>
          Every extension in our catalog is backed by the same engineers who build custom stores end to
          end. When an off-the-shelf module isn't enough, we scope and build the rest.
        </p>
        <Link to="/pricing" className="btn btn-primary">
          See pricing <Icon name="arrowRight" size={16} />
        </Link>
      </div>

      <div className="service-grid">
        {services.map((s) => (
          <div key={s.title} className="service-card card">
            <div className="reason-icon">
              <Icon name={s.icon} size={20} />
            </div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>

      <div className="cta-band">
        <div>
          <h2>Tell us what you're building</h2>
          <p>Share your platform and goal — we'll reply with a scoped estimate within one business day.</p>
        </div>
        <a href="mailto:hello@oberoitech.example" className="btn btn-primary">
          Email our team <Icon name="arrowRight" size={16} />
        </a>
      </div>
    </div>
  );
}
