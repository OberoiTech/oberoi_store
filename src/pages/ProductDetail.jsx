import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Icon from "../components/Icon";
import ProductCard from "../components/ProductCard";
import Tile from "../components/Tile";
import ProductTrustBadges from "../components/ProductTrustBadges";
import ProductGallery from "../components/ProductGallery";
import ProductHighlights from "../components/ProductHighlights";
import ProductFeatureBlocks from "../components/ProductFeatureBlocks";
import ProductSpecsTable from "../components/ProductSpecsTable";
import ProductReviews from "../components/ProductReviews";
import ProductFaq from "../components/ProductFaq";
import ProductChangelog from "../components/ProductChangelog";
import { useCart } from "../context/CartContext";
import { useCurrency } from "../context/CurrencyContext";
import { getProductBySlug, getRelatedProducts, getCategoryById, getPlatformById } from "../data/products";
import {
  getHighlightedFeatures,
  getGallerySlides,
  getFeatureBlocks,
  getSpecs,
  getFaqs,
  getChangelog,
  getSyntheticReviews,
  getCloserCopy,
} from "../data/productDetailContent";
import "./ProductDetail.css";

const TABS = ["Description", "Reviews", "FAQ", "Specifications", "Changelog"];

export default function ProductDetail() {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const { format } = useCurrency();
  const [tab, setTab] = useState("Description");
  const [qty, setQty] = useState(1);

  const product = getProductBySlug(slug);
  if (!product) return <Navigate to="/extensions" replace />;

  const category = getCategoryById(product.category);
  const platform = getPlatformById(product.platform);
  const related = getRelatedProducts(product);

  const highlights = getHighlightedFeatures(product, category);
  const gallerySlides = getGallerySlides(product);
  const featureBlocks = getFeatureBlocks(product, category);
  const specs = getSpecs(product, category, platform, format);
  const faqs = getFaqs(product, platform);
  const changelog = getChangelog(product);
  const reviews = getSyntheticReviews(product, category);
  const closer = getCloserCopy(product, category, platform);

  return (
    <div className="container product-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/extensions">Extensions</Link> /{" "}
        <Link to={`/extensions?category=${product.category}`}>{category?.name}</Link> / {product.name}
      </div>

      <div className="product-hero">
        <div className="product-gallery">
          <Tile product={product} className="product-gallery-tile" />
        </div>

        <div className="product-info">
          {product.badge && <span className="badge">{product.badge}</span>}
          <h1>{product.name}</h1>
          <p className="product-tagline">{product.tagline}</p>

          <div className="product-info-meta">
            <span className="rating">
              <Icon name="star" size={15} />
              {product.rating} <span className="count">({product.reviews} reviews)</span>
            </span>
            {platform && (
              <span className="platform-chip" style={{ "--chip-color": platform.color }}>
                {platform.name}
              </span>
            )}
          </div>

          <div className="product-price-row">
            <span className="product-price mono">{format(product.price)}</span>
            {product.oldPrice && <span className="product-old-price mono">{format(product.oldPrice)}</span>}
          </div>

          <div className="product-buy-row">
            <div className="qty-stepper">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">
                <Icon name="minus" size={14} />
              </button>
              <span className="mono">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity">
                <Icon name="plus" size={14} />
              </button>
            </div>
            <button className="btn btn-primary" onClick={() => addToCart(product.id, qty)}>
              <Icon name="cart" size={16} />
              Add to cart
            </button>
            <Link to="/contact" className="btn btn-outline">
              Request Customization
            </Link>
          </div>

          <ProductTrustBadges />
        </div>
      </div>

      <ProductGallery slides={gallerySlides} />

      <div className="product-tabs">
        <div className="tab-list">
          {TABS.map((t) => (
            <button key={t} className={`tab-btn ${tab === t ? "is-active" : ""}`} onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </div>

        <div className="tab-panel">
          {tab === "Description" && (
            <div className="description-panel">
              <p>{product.description}</p>
              <ProductHighlights items={highlights} />
              <ProductFeatureBlocks blocks={featureBlocks} />
              <div className="description-closer">
                <p>{closer.paragraph}</p>
                <Link to="/contact" className="btn btn-primary btn-sm">
                  {closer.ctaLabel}
                  <Icon name="arrowRight" size={14} />
                </Link>
              </div>
            </div>
          )}

          {tab === "Reviews" && (
            <ProductReviews reviews={reviews} avgRating={product.rating} reviewCount={product.reviews} />
          )}

          {tab === "FAQ" && <ProductFaq items={faqs} />}

          {tab === "Specifications" && <ProductSpecsTable rows={specs} />}

          {tab === "Changelog" && <ProductChangelog entries={changelog} />}
        </div>
      </div>

      {related.length > 0 && (
        <div className="related-section">
          <h2>You might also need</h2>
          <div className="product-grid">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
