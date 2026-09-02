import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Icon from "./Icon";
import { useCart } from "../context/CartContext";
import { useCurrency, CURRENCIES } from "../context/CurrencyContext";
import { categories, products, getProductBySlug } from "../data/products";
import "./Navbar.css";

const categoryGroups = categories.map((c) => ({
  ...c,
  products: products.filter((p) => p.category === c.id).slice(0, 4),
}));

const megaColumns = [
  [categoryGroups[0], categoryGroups[1]],
  [categoryGroups[2], categoryGroups[3]],
  [categoryGroups[4], categoryGroups[5]],
];

const badgeClass = {
  "Best Seller": "badge",
  Enterprise: "badge",
  New: "badge badge-teal",
  Free: "badge badge-teal",
};

function supportsHover() {
  return typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;
}

function useActivePlatform() {
  const { pathname, search } = useLocation();

  if (pathname.startsWith("/extensions/")) {
    const slug = pathname.split("/")[2];
    return getProductBySlug(slug)?.platform || null;
  }

  if (pathname === "/extensions") {
    return new URLSearchParams(search).get("platform") || null;
  }

  return null;
}

export default function Navbar() {
  const { count } = useCart();
  const navigate = useNavigate();
  const activePlatform = useActivePlatform();
  const { currency, setCurrency, currencies } = useCurrency();
  const [menuOpen, setMenuOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [currencyOpen, setCurrencyOpen] = useState(false);

  function handleSearch(e) {
    e.preventDefault();
    navigate(query.trim() ? `/extensions?q=${encodeURIComponent(query.trim())}` : "/extensions");
  }

  function closeCatalog() {
    setCatalogOpen(false);
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <img src="/oberoitech-logo.png" alt="OberoiTech" className="brand-logo" />
        </Link>

        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <form className="nav-links-search" onSubmit={handleSearch}>
            <Icon name="search" size={16} className="nav-search-icon" />
            <input
              type="text"
              placeholder="Search extensions…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search extensions"
            />
            <button type="submit" className="nav-search-submit" aria-label="Search">
              <Icon name="search" size={17} />
            </button>
          </form>

          <div className="nav-links-currency">
            <span className="nav-links-currency-label">Currency</span>
            <div className="nav-links-currency-options">
              {currencies.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`currency-option ${currency === c ? "is-active" : ""}`}
                  onClick={() => setCurrency(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div
            className="nav-dropdown"
            onMouseEnter={() => supportsHover() && setCatalogOpen(true)}
            onMouseLeave={() => supportsHover() && setCatalogOpen(false)}
          >
            <Link
              to="/extensions"
              className={`nav-link nav-dropdown-trigger ${activePlatform === "magento" ? "active" : ""}`}
              onClick={closeCatalog}
            >
              Magento 2 extension
            </Link>
            <button
              className="nav-dropdown-caret"
              onClick={() => setCatalogOpen((o) => !o)}
              aria-label="Show extension categories"
              type="button"
            >
              <Icon name="chevron" size={14} />
            </button>
            {catalogOpen && (
              <div className="mega-menu mega-menu-rich">
                <div className="mega-sidebar">
                  <div className="mega-sidebar-heading">Services We Recommend</div>
                  <Link to="/services" className="mega-sidebar-item" onClick={closeCatalog}>
                    <span className="mega-sidebar-icon">
                      <Icon name="briefcase" size={16} />
                    </span>
                    Development Services
                  </Link>
                  <Link to="/services" className="mega-sidebar-item" onClick={closeCatalog}>
                    <span className="mega-sidebar-icon">
                      <Icon name="truck" size={16} />
                    </span>
                    Store Migration
                  </Link>
                  <Link to="/services" className="mega-sidebar-item" onClick={closeCatalog}>
                    <span className="mega-sidebar-icon">
                      <Icon name="shield" size={16} />
                    </span>
                    Support &amp; Maintenance
                  </Link>
                  <Link to="/blog?category=case-studies" className="mega-sidebar-explore" onClick={closeCatalog}>
                    Explore Real-World Case Studies
                  </Link>
                  <Link to="/extensions" className="btn btn-primary btn-sm mega-sidebar-cta" onClick={closeCatalog}>
                    View all Extensions
                  </Link>
                  <div className="mega-sidebar-badge">
                    <Icon name="shield" size={16} />
                    60-Day Guarantee
                  </div>
                </div>

                <div className="mega-columns">
                  {megaColumns.map((col, i) => (
                    <div className="mega-column" key={i}>
                      {col.map((cat) => (
                        <div className="mega-cat-group" key={cat.id}>
                          <div className="mega-cat-head">
                            <Icon name={cat.icon} size={15} />
                            <span>{cat.name}</span>
                          </div>
                          <ul className="mega-cat-list">
                            {cat.products.map((p) => (
                              <li key={p.id}>
                                <Link to={`/extensions/${p.slug}`} onClick={closeCatalog}>
                                  {p.name}
                                  {p.badge && (
                                    <span className={`mega-tag ${badgeClass[p.badge] || "badge"}`}>{p.badge}</span>
                                  )}
                                </Link>
                              </li>
                            ))}
                            {cat.products.length === 0 && <li className="mega-cat-empty">Coming soon</li>}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link
            to="/extensions"
            className={`nav-link ${activePlatform === "woocommerce" ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            WooCommerce
          </Link>
          <NavLink to="/services" className="nav-link" onClick={() => setMenuOpen(false)}>
            Development Services
          </NavLink>
          <NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </nav>

        <form className="nav-search" onSubmit={handleSearch}>
          <Icon name="search" size={16} className="nav-search-icon" />
          <input
            type="text"
            placeholder="Search extensions…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search extensions"
          />
          <button type="submit" className="nav-search-submit" aria-label="Search">
            <Icon name="search" size={17} />
          </button>
        </form>

        <div className="navbar-actions">
          <button className="icon-btn nav-account" aria-label="Account">
            <Icon name="user" size={19} />
          </button>

          <div
            className="currency-dropdown"
            onMouseEnter={() => supportsHover() && setCurrencyOpen(true)}
            onMouseLeave={() => supportsHover() && setCurrencyOpen(false)}
          >
            <button
              type="button"
              className="currency-trigger"
              onClick={() => setCurrencyOpen((o) => !o)}
              aria-label="Select currency"
              aria-expanded={currencyOpen}
            >
              <span className="currency-icon">{CURRENCIES[currency].symbol}</span>
              {currency}
              <Icon name="chevron" size={12} className={currencyOpen ? "rotate-180" : ""} />
            </button>
            {currencyOpen && (
              <div className="currency-menu">
                {currencies.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={`currency-option ${currency === c ? "is-active" : ""}`}
                    onClick={() => {
                      setCurrency(c);
                      setCurrencyOpen(false);
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link to="/cart" className="icon-btn cart-btn" aria-label="Cart">
            <Icon name="cart" size={19} />
            {count > 0 && <span className="cart-count">{count}</span>}
          </Link>
          <button className="icon-btn menu-toggle" onClick={() => setMenuOpen((o) => !o)} aria-label="Menu">
            <Icon name={menuOpen ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
