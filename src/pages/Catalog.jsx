import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Icon from "../components/Icon";
import ProductCard from "../components/ProductCard";
import NewsletterBand from "../components/NewsletterBand";
import SidebarNewsletter from "../components/SidebarNewsletter";
import { categories, platforms, products } from "../data/products";
import { tileColor } from "../utils/theme";
import "./Catalog.css";

const quickTags = [
  { id: "bestsellers", label: "Best Sellers", test: (p) => p.badge === "Best Seller" },
  { id: "new", label: "New Releases", test: (p) => p.badge === "New" },
  { id: "free", label: "Free Extensions", test: (p) => p.price === 0 },
  { id: "enterprise", label: "Enterprise Ready", test: (p) => p.badge === "Enterprise" },
  { id: "woocommerce", label: "For WooCommerce", test: (p) => p.platform === "woocommerce" },
  { id: "magento", label: "For Magento", test: (p) => p.platform === "magento" },
  { id: "b2b", label: "For B2B", test: (p) => p.category === "b2b" },
];

export default function Catalog() {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState(params.get("q") || "");
  const [sort, setSort] = useState("popular");
  const [activeTag, setActiveTag] = useState("");
  const [view, setView] = useState("grid");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const q = params.get("q") || "";
    setSearch((prev) => (q !== prev ? q : prev));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.get("q")]);

  const activeCategory = params.get("category") || "";
  const activePlatform = params.get("platform") || "";
  const activeCategoryObj = categories.find((c) => c.id === activeCategory);

  function toggleCategory(id) {
    const next = new URLSearchParams(params);
    if (activeCategory === id) next.delete("category");
    else next.set("category", id);
    setParams(next);
  }

  function togglePlatform(id) {
    const next = new URLSearchParams(params);
    if (activePlatform === id) next.delete("platform");
    else next.set("platform", id);
    setParams(next);
  }

  function toggleTag(id) {
    setActiveTag((prev) => (prev === id ? "" : id));
  }

  function clearFilters() {
    setParams({});
    setSearch("");
    setActiveTag("");
  }

  const filtered = useMemo(() => {
    const tag = quickTags.find((t) => t.id === activeTag);
    let list = products.filter((p) => {
      if (activeCategory && p.category !== activeCategory) return false;
      if (activePlatform && p.platform !== activePlatform) return false;
      if (tag && !tag.test(p)) return false;
      if (search && !`${p.name} ${p.tagline}`.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    else if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    else list = [...list].sort((a, b) => b.reviews - a.reviews);

    return list;
  }, [activeCategory, activePlatform, activeTag, search, sort]);

  const hasFilters = activeCategory || activePlatform || activeTag;

  const { countForCategory, countForAllCategories, countForPlatform } = useMemo(() => {
    const tag = quickTags.find((t) => t.id === activeTag);
    const matchesCommon = (p) =>
      (!tag || tag.test(p)) &&
      (!search || `${p.name} ${p.tagline}`.toLowerCase().includes(search.toLowerCase()));

    return {
      countForCategory: (id) =>
        products.filter((p) => p.category === id && (!activePlatform || p.platform === activePlatform) && matchesCommon(p))
          .length,
      countForAllCategories: () =>
        products.filter((p) => (!activePlatform || p.platform === activePlatform) && matchesCommon(p)).length,
      countForPlatform: (id) =>
        products.filter((p) => p.platform === id && (!activeCategory || p.category === activeCategory) && matchesCommon(p))
          .length,
    };
  }, [activeCategory, activePlatform, activeTag, search]);

  return (
    <div className="catalog-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/extensions">Extensions</Link>
          {activeCategoryObj ? ` / ${activeCategoryObj.name}` : " / All"}
        </div>

        <div className="catalog-head">
          <h1>{activeCategoryObj ? activeCategoryObj.name : "All Extensions"}</h1>
          <div className="catalog-search field">
            <Icon name="search" size={17} />
            <input
              type="text"
              placeholder="Search extensions…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="catalog-toolbar">
          <div className="view-toggle">
            <button
              className={view === "grid" ? "is-active" : ""}
              onClick={() => setView("grid")}
              aria-label="Grid view"
            >
              <Icon name="store" size={16} />
            </button>
            <button
              className={view === "list" ? "is-active" : ""}
              onClick={() => setView("list")}
              aria-label="List view"
            >
              <Icon name="menu" size={16} />
            </button>
          </div>
          <span className="catalog-count mono">{filtered.length} extensions</span>
          <select className="sort-select" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="popular">Most reviewed</option>
            <option value="rating">Highest rated</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
          </select>
        </div>

        <div className="tag-pills">
          {quickTags.map((t) => (
            <button
              key={t.id}
              className={`tag-pill ${activeTag === t.id ? "is-active" : ""}`}
              onClick={() => toggleTag(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="filters-toggle"
          onClick={() => setFiltersOpen((o) => !o)}
          aria-expanded={filtersOpen}
        >
          <span>
            <Icon name="menu" size={15} />
            Filters
            {hasFilters && <span className="filters-toggle-dot" />}
          </span>
          <Icon name="chevron" size={14} className={filtersOpen ? "rotate-180" : ""} />
        </button>

        <div className="catalog-layout">
          <aside className={`catalog-filters ${filtersOpen ? "is-open" : ""}`}>
            <div className="filter-block">
              <div className="filter-block-head">
                <h4>Category</h4>
                {hasFilters && (
                  <button className="btn-ghost btn-clear" onClick={clearFilters}>
                    Clear all
                  </button>
                )}
              </div>
              <ul>
                <li>
                  <button
                    className={`filter-option ${!activeCategory ? "is-active" : ""}`}
                    onClick={() => toggleCategory(activeCategory)}
                  >
                    <span className="filter-option-icon filter-option-icon-all">
                      <Icon name="store" size={14} />
                    </span>
                    All
                    <span className="filter-option-count">{countForAllCategories()}</span>
                  </button>
                </li>
                {categories.map((c) => {
                  const count = countForCategory(c.id);
                  const isActive = activeCategory === c.id;
                  return (
                    <li key={c.id}>
                      <button
                        className={`filter-option ${isActive ? "is-active" : ""} ${
                          count === 0 && !isActive ? "is-zero" : ""
                        }`}
                        onClick={() => toggleCategory(c.id)}
                      >
                        <span className="filter-option-icon" style={{ "--icon-color": tileColor(c.id) }}>
                          <Icon name={c.icon} size={14} />
                        </span>
                        {c.name}
                        <span className="filter-option-count">{count}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="filter-block">
              <h4>Platform</h4>
              <ul>
                {platforms.map((p) => {
                  const count = countForPlatform(p.id);
                  const isActive = activePlatform === p.id;
                  return (
                    <li key={p.id}>
                      <button
                        className={`filter-option ${isActive ? "is-active" : ""} ${
                          count === 0 && !isActive ? "is-zero" : ""
                        }`}
                        onClick={() => togglePlatform(p.id)}
                      >
                        <span className="filter-option-icon" style={{ "--icon-color": p.color }}>
                          <span className="dot" style={{ background: p.color }} />
                        </span>
                        {p.name}
                        <span className="filter-option-count">{count}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <SidebarNewsletter />
          </aside>

          <div className="catalog-results">
            <div className="active-chips">
              {activeCategoryObj && (
                <button className="chip-active" onClick={() => toggleCategory(activeCategory)}>
                  {activeCategoryObj.name} <Icon name="close" size={13} />
                </button>
              )}
              {activePlatform && (
                <button className="chip-active" onClick={() => togglePlatform(activePlatform)}>
                  {platforms.find((p) => p.id === activePlatform)?.name} <Icon name="close" size={13} />
                </button>
              )}
              {activeTag && (
                <button className="chip-active" onClick={() => setActiveTag("")}>
                  {quickTags.find((t) => t.id === activeTag)?.label} <Icon name="close" size={13} />
                </button>
              )}
            </div>

            {filtered.length === 0 ? (
              <div className="empty-state">
                <p>Koi extension is filter combination se match nahi hui.</p>
                <button className="btn btn-outline" onClick={clearFilters}>
                  Clear filters
                </button>
              </div>
            ) : (
              <div className={`product-grid catalog-grid ${view === "list" ? "is-list" : ""}`}>
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="catalog-seo">
          <p>
            Looking for a new extension for your store? At OberoiTech you can choose from 480+ extensions
            across WooCommerce and Magento 2. We build every extension in-house, test it against the
            latest platform releases, and support the merchants who buy it.
          </p>
          <p>
            All extensions are designed to solve a specific problem — a slow checkout, a hard-to-filter
            catalog, a manual wholesale quote process — rather than bundle in features you'll never use.
            If you bought a module and are missing a feature, our support team will hear you out.
          </p>
          <p>We offer extensions for every e-commerce aspect:</p>
          <ol>
            {categories.map((c) => (
              <li key={c.id}>
                <Link to={`/extensions?category=${c.id}`}>{c.name}</Link>
              </li>
            ))}
          </ol>
          <p>
            Every extension comes with free installation and a 60-day money-back guarantee. Need
            something custom instead? <Link to="/services">Our development team</Link> can build it.
          </p>
        </div>
      </div>

      <NewsletterBand />
    </div>
  );
}
