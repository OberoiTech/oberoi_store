export const platforms = [
  { id: "magento", name: "Magento 2", color: "#4fb0e8" },
  { id: "woocommerce", name: "WooCommerce", color: "#123c7a" },
];

export const categories = [
  {
    id: "checkout",
    name: "Checkout & Payments",
    tagline: "Turn browsers into buyers with a faster checkout",
    icon: "cart",
  },
  {
    id: "navigation",
    name: "Search & Navigation",
    tagline: "Help shoppers find products in fewer clicks",
    icon: "search",
  },
  {
    id: "marketing",
    name: "SEO & Marketing",
    tagline: "Rank higher and bring shoppers back",
    icon: "megaphone",
  },
  {
    id: "b2b",
    name: "B2B & Wholesale",
    tagline: "Company accounts, bulk pricing, quote requests",
    icon: "briefcase",
  },
  {
    id: "marketplace",
    name: "Multi-Vendor & Marketplace",
    tagline: "Turn one store into a marketplace of sellers",
    icon: "store",
  },
  {
    id: "loyalty",
    name: "Loyalty & Rewards",
    tagline: "Points, referrals and repeat-purchase tools",
    icon: "heart",
  },
];

export const products = [
  {
    id: "one-step-checkout",
    name: "One Step Checkout",
    slug: "one-step-checkout",
    tagline: "Collapse a 5-page checkout into a single screen",
    category: "checkout",
    platform: "magento",
    price: 199,
    oldPrice: 249,
    rating: 4.9,
    reviews: 341,
    badge: "Best Seller",
    initials: "OS",
    description:
      "Replace the default multi-step checkout with a single responsive page. Address, shipping and payment all sit together, cutting cart abandonment on both desktop and mobile.",
    features: [
      "Autofill address and one-click reorder for returning customers",
      "Inline validation — no more failed submits at the last step",
      "Guest checkout, social login and saved payment methods",
      "Works with every major payment and shipping extension",
    ],
  },
  {
    id: "layered-navigation",
    name: "Layered Navigation Pro",
    slug: "layered-navigation-pro",
    tagline: "Ajax filters, price sliders and smart facets",
    category: "navigation",
    platform: "magento",
    price: 149,
    rating: 4.8,
    reviews: 512,
    badge: "Best Seller",
    initials: "LN",
    description:
      "Give shoppers Amazon-grade filtering: multi-select attributes, price sliders and SEO-friendly filtered URLs that don't dilute your category rankings.",
    features: [
      "AJAX filtering — no full page reloads",
      "Price slider with configurable steps",
      "SEO-safe canonical URLs for filtered pages",
      "Mobile drawer layout out of the box",
    ],
  },
  {
    id: "mega-menu-builder",
    name: "Mega Menu Builder",
    slug: "mega-menu-builder",
    tagline: "Drag-and-drop mega menus with banners and icons",
    category: "navigation",
    platform: "woocommerce",
    price: 79,
    rating: 4.7,
    reviews: 203,
    badge: "New",
    initials: "MM",
    description:
      "A visual builder for multi-column navigation menus, complete with promo banners, category icons and mobile accordion behaviour.",
    features: [
      "No-code drag-and-drop menu editor",
      "Schedule seasonal banners inside the menu",
      "Auto-collapses into a clean mobile accordion",
      "Theme-editor compatible, no code edits required",
    ],
  },
  {
    id: "seo-suite",
    name: "SEO Suite",
    slug: "seo-suite",
    tagline: "Rich snippets, sitemaps and technical SEO in one panel",
    category: "marketing",
    platform: "magento",
    price: 99,
    rating: 4.6,
    reviews: 288,
    badge: null,
    initials: "SE",
    description:
      "Bulk-edit meta titles and descriptions, generate structured data for products and reviews, and fix duplicate-content issues from one dashboard.",
    features: [
      "Bulk meta title & description templates",
      "Product, breadcrumb and review rich snippets",
      "Automatic XML sitemap and canonical tags",
      "Broken link and redirect manager",
    ],
  },
  {
    id: "product-feed",
    name: "Product Feed",
    slug: "product-feed",
    tagline: "Sync your catalog to Google, Meta and Amazon",
    category: "marketing",
    platform: "woocommerce",
    price: 179,
    rating: 4.7,
    reviews: 176,
    badge: null,
    initials: "PF",
    description:
      "Auto-generate and refresh product feeds for every major ad and marketplace channel, with custom rules for pricing and category mapping.",
    features: [
      "Pre-built templates for Google Shopping & Meta",
      "Scheduled auto-sync, no manual re-exports",
      "Custom attribute mapping rules",
      "Feed health checks with error alerts",
    ],
  },
  {
    id: "gift-card",
    name: "Gift Card & Store Credit",
    slug: "gift-card",
    tagline: "Sell digital gift cards, track balances automatically",
    category: "loyalty",
    platform: "magento",
    price: 249,
    rating: 4.8,
    reviews: 94,
    badge: null,
    initials: "GC",
    description:
      "Sell physical and digital gift cards, let customers combine them with other payment methods, and manage balances from the admin panel.",
    features: [
      "Digital delivery by email with custom templates",
      "Partial redemption + balance carry-over",
      "Combine gift card with card/UPI payment",
      "Admin reports on issued vs. redeemed value",
    ],
  },
  {
    id: "b2b-suite",
    name: "B2B Suite",
    slug: "b2b-suite",
    tagline: "Company accounts, tiered pricing, quote requests",
    category: "b2b",
    platform: "magento",
    price: 349,
    rating: 4.9,
    reviews: 61,
    badge: "Enterprise",
    initials: "B2",
    description:
      "Everything a wholesale storefront needs: company accounts with multiple buyers, customer-specific price lists, and a request-for-quote workflow.",
    features: [
      "Company accounts with role-based buyers",
      "Customer group & quantity-tier pricing",
      "Request-for-quote with admin negotiation thread",
      "Quick order pad for reordering by SKU",
    ],
  },
  {
    id: "multi-vendor",
    name: "Multi-Vendor Marketplace",
    slug: "multi-vendor-marketplace",
    tagline: "Turn your store into a seller marketplace",
    category: "marketplace",
    platform: "woocommerce",
    price: 299,
    rating: 4.7,
    reviews: 128,
    badge: "Best Seller",
    initials: "MV",
    description:
      "Let independent sellers list products, manage their own inventory and get paid out on a schedule, while you keep a commission on every order.",
    features: [
      "Self-service seller onboarding & storefronts",
      "Configurable commission per seller or category",
      "Automated payout scheduling",
      "Vendor-level order and shipment tracking",
    ],
  },
  {
    id: "shop-by-brand",
    name: "Shop by Brand",
    slug: "shop-by-brand",
    tagline: "A dedicated, filterable brand directory page",
    category: "navigation",
    platform: "magento",
    price: 59,
    rating: 4.5,
    reviews: 87,
    badge: "Free",
    initials: "SB",
    description:
      "Generate an A–Z brand index page automatically from your catalog, with logo tiles and per-brand landing pages for SEO.",
    features: [
      "Auto-generated A–Z brand directory",
      "Per-brand SEO landing page",
      "Logo upload and featured-brand ordering",
      "Works with existing filter/navigation setup",
    ],
  },
  {
    id: "loyalty-points",
    name: "Loyalty & Referral Points",
    slug: "loyalty-referral-points",
    tagline: "Points, referral rewards and VIP tiers",
    category: "loyalty",
    platform: "magento",
    price: 129,
    rating: 4.6,
    reviews: 156,
    badge: null,
    initials: "LP",
    description:
      "Reward purchases, referrals and reviews with points that convert into discounts, and group top spenders into VIP tiers with extra perks.",
    features: [
      "Points for purchase, referral, signup and review",
      "Configurable VIP tiers with bonus multipliers",
      "Branded points widget, no redirect required",
      "Email alerts when points are about to expire",
    ],
  },
  {
    id: "quick-order",
    name: "Quick Order Pad",
    slug: "quick-order-pad",
    tagline: "SKU-based bulk ordering for repeat B2B buyers",
    category: "b2b",
    platform: "woocommerce",
    price: 89,
    rating: 4.4,
    reviews: 42,
    badge: "New",
    initials: "QO",
    description:
      "A single-screen order form for buyers who already know their SKUs — type or paste a list, see live stock and pricing, and check out in seconds.",
    features: [
      "Paste-a-list bulk add to cart",
      "Live stock and price lookups",
      "CSV import/export for recurring orders",
      "Saved order templates per account",
    ],
  },
  {
    id: "sales-popups",
    name: "Sales Notification Popups",
    slug: "sales-notification-popups",
    tagline: "Recent-purchase and low-stock social proof",
    category: "marketing",
    platform: "woocommerce",
    price: 0,
    rating: 4.3,
    reviews: 219,
    badge: "Free",
    initials: "SP",
    description:
      "Show recent purchases and low-stock warnings as unobtrusive popups to nudge undecided shoppers, with full control over timing and styling.",
    features: [
      "Recent-sale and low-stock popup types",
      "Position, timing and frequency controls",
      "Matches theme fonts and colors automatically",
      "GDPR-friendly, no customer PII shown",
    ],
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product, count = 4) {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, count);
}

export function getCategoryById(id) {
  return categories.find((c) => c.id === id);
}

export function getPlatformById(id) {
  return platforms.find((p) => p.id === id);
}
