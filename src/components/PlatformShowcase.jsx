import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import Tile from "./Tile";
import { platforms, products } from "../data/products";
import { useCurrency } from "../context/CurrencyContext";
import { platformImages } from "../utils/images";
import "./PlatformShowcase.css";

const platformCopy = {
  woocommerce: "WordPress-native plugins that follow WooCommerce's own hooks and settings screens.",
  magento: "Deep, version-tagged modules for Magento 2 and Adobe Commerce storefronts.",
};

export default function PlatformShowcase() {
  const [activeId, setActiveId] = useState(platforms[0].id);
  const active = platforms.find((p) => p.id === activeId);

  const platformProducts = products.filter((p) => p.platform === activeId);
  const popular = [...platformProducts].sort((a, b) => b.reviews - a.reviews).slice(0, 3);
  const fresh = [...platformProducts].sort((a, b) => (a.badge === "New" ? -1 : 1)).slice(0, 3);
  const categoryCount = new Set(platformProducts.map((p) => p.category)).size;

  return (
    <section className="section platform-showcase">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="kicker">By platform</div>
            <h2>Featured Platforms</h2>
          </div>
        </div>

        <div className="platform-tabs">
          {platforms.map((p) => (
            <button
              key={p.id}
              className={`platform-tab ${activeId === p.id ? "is-active" : ""}`}
              style={{ "--chip-color": p.color }}
              onClick={() => setActiveId(p.id)}
            >
              <span className="dot" style={{ background: p.color }} />
              {p.name}
            </button>
          ))}
        </div>

        <div className="platform-panel">
          <div className="platform-intro card">
            <div
              className="platform-intro-mark"
              style={platformImages[active.id] ? undefined : { background: active.color }}
            >
              {platformImages[active.id] ? (
                <img src={platformImages[active.id]} alt={active.name} />
              ) : (
                active.name.slice(0, 2).toUpperCase()
              )}
            </div>
            <h3>{active.name}</h3>
            <p>{platformCopy[active.id]}</p>
            <div className="platform-intro-stats">
              <div>
                <strong>{platformProducts.length}+</strong>
                <span>Extensions</span>
              </div>
              <div>
                <strong>{categoryCount}</strong>
                <span>Categories</span>
              </div>
              <div>
                <strong>Free</strong>
                <span>Install & Support</span>
              </div>
            </div>
            <Link to={`/extensions?platform=${active.id}`} className="platform-intro-link">
              {active.name} Extensions <Icon name="arrowRight" size={14} />
            </Link>
          </div>

          <div className="platform-list card">
            <h4>Popular {active.name} Products</h4>
            <ul>
              {popular.map((p) => (
                <PlatformListItem key={p.id} product={p} />
              ))}
            </ul>
            <Link to={`/extensions?platform=${active.id}`} className="platform-list-more">
              All Popular Products <Icon name="arrowRight" size={13} />
            </Link>
          </div>

          <div className="platform-list card">
            <h4>New Products</h4>
            <ul>
              {fresh.map((p) => (
                <PlatformListItem key={p.id} product={p} />
              ))}
            </ul>
            <Link to={`/extensions?platform=${active.id}`} className="platform-list-more">
              All New Products <Icon name="arrowRight" size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformListItem({ product }) {
  const { format } = useCurrency();

  return (
    <li>
      <Link to={`/extensions/${product.slug}`} className="platform-list-item">
        <Tile product={product} className="platform-list-tile" />
        <span className="platform-list-info">
          <strong>{product.name}</strong>
          <span className="rating">
            <Icon name="star" size={12} /> {product.rating}
            <span className="count">({product.reviews})</span>
          </span>
        </span>
        <span className="platform-list-price mono">{format(product.price)}</span>
      </Link>
    </li>
  );
}
