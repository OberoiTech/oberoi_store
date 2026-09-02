import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import AwardBadges from "../components/AwardBadges";
import HeroShowcase from "../components/HeroShowcase";
import ClientLogos from "../components/ClientLogos";
import FeaturedCarousel from "../components/FeaturedCarousel";
import PlatformShowcase from "../components/PlatformShowcase";
import SolutionsGrid from "../components/SolutionsGrid";
import SuccessStory from "../components/SuccessStory";
import BlogSection from "../components/BlogSection";
import PartnersAndWhyChoose from "../components/PartnersAndWhyChoose";
import { products } from "../data/products";
import "./Home.css";

const featured = products.slice(0, 7);
const showcaseSlides = products.filter((p) => p.badge === "Best Seller" || p.badge === "Enterprise");

const heroStats = [
  { value: "480+", label: "Powerful Extensions" },
  { value: "37,000+", label: "Satisfied Customers" },
  { value: "2", label: "Platforms Supported" },
];

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <AwardBadges />
            <h1>Build, Connect, and Scale Across Any Platform</h1>
            <p>
              Discover easy-to-use extensions for checkout, navigation, SEO, B2B and marketplace
              commerce — for WooCommerce and Magento stores.
            </p>

            <div className="hero-stats">
              {heroStats.map((s) => (
                <div key={s.label} className="hero-stat">
                  <div className="hero-stat-value mono">{s.value}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="hero-actions">
              <Link to="/extensions" className="btn btn-primary">
                Browse Extensions <Icon name="arrowRight" size={16} />
              </Link>
              <Link to="/services" className="btn btn-outline">
                Hire our team
              </Link>
            </div>
          </div>

          <HeroShowcase slides={showcaseSlides} />
        </div>
      </section>

      <ClientLogos />

      <FeaturedCarousel kicker="Top Selling" title="Top Selling Products" products={featured} />

      <PlatformShowcase />

      <SolutionsGrid />

      <SuccessStory />

      <BlogSection />

      <PartnersAndWhyChoose />

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Ready to extend your store?</h2>
              <p>Browse 480+ extensions, or tell us what you're building and we'll scope it in a day.</p>
            </div>
            <div className="hero-actions">
              <Link to="/extensions" className="btn btn-primary">
                Browse Extensions <Icon name="arrowRight" size={16} />
              </Link>
              <Link to="/services" className="btn btn-outline">
                Talk to our team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
