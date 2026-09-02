import { categoryColors } from "../utils/theme";

const ACCENT_CYCLE = Object.values(categoryColors);

function seedFromId(id) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h;
}

export const TRUST_BADGES = [
  { icon: "megaphone", label: "Free Publishing", sublabel: "Listed at no extra cost" },
  { icon: "shield", label: "3 Months Free Support", sublabel: "Direct from our team" },
  { icon: "lock", label: "Encrypted Source Code", sublabel: "Tamper-proof delivery" },
  { icon: "mobile", label: "Mobile Support Offered", sublabel: "Works on every device" },
];

const EVERGREEN_CHECKLIST_ITEMS = [
  "One-click installation, no server access needed",
  "Free compatibility updates for your platform version",
];

const FEATURE_HEADING_POOL = {
  checkout: [
    "Streamlined Checkout Flow",
    "Smart Form Handling",
    "Flexible Guest & Login Options",
    "Payment & Shipping Compatibility",
  ],
  navigation: [
    "Instant Ajax Filtering",
    "Configurable Filters",
    "SEO-Friendly Filter URLs",
    "Mobile-Optimized Browsing",
  ],
  marketing: [
    "Bulk Content Management",
    "Structured Data & Snippets",
    "Automated Sitemaps & Feeds",
    "Health Checks & Alerts",
  ],
  b2b: [
    "Company Account Management",
    "Tiered Pricing Rules",
    "Quote & Negotiation Workflow",
    "Fast Repeat Ordering",
  ],
  marketplace: [
    "Seller Onboarding",
    "Commission Configuration",
    "Automated Payouts",
    "Vendor Order Tracking",
  ],
  loyalty: [
    "Flexible Rewards Rules",
    "VIP Tier Management",
    "Branded Customer Experience",
    "Expiry & Balance Alerts",
  ],
};

const CATEGORY_BULLET_POOL = {
  checkout: [
    "Fewer form fields between cart and confirmation",
    "Real-time shipping and tax calculation",
    "Works across desktop, tablet and mobile",
    "No conflicts with existing payment gateways",
  ],
  navigation: [
    "Instant results with no full-page reloads",
    "Clean, indexable URLs for every filter combination",
    "Touch-friendly controls on mobile devices",
    "No changes needed to existing category templates",
  ],
  marketing: [
    "Pulls data directly from your live catalog",
    "No manual re-exports or copy-pasting",
    "Built-in alerts when something needs attention",
    "Matches your store's existing branding automatically",
  ],
  b2b: [
    "Buyer-specific pricing and permissions",
    "Faster reordering for repeat purchases",
    "A clear audit trail for every account",
    "Scales from a handful of accounts to hundreds",
  ],
  marketplace: [
    "Self-service tools that cut down support tickets",
    "Clear commission and payout visibility",
    "Per-seller reporting and order tracking",
    "Keeps your admin in control of the marketplace",
  ],
  loyalty: [
    "Rewards that customers can actually redeem easily",
    "Encourages repeat visits without discounting everything",
    "Fully branded, no third-party redirect",
    "Simple rules that are easy to explain to shoppers",
  ],
};

const EVERGREEN_FEATURE_BLOCKS = [
  {
    heading: "Dedicated Onboarding & Support",
    description:
      "Every purchase includes hands-on setup help from a team that knows the extension inside out — not a ticket queue.",
    bullets: [
      "Guided installation on your staging or live store",
      "Direct access to the team that built it",
      "Answers within one business day",
    ],
  },
  {
    heading: "Built for Performance",
    description:
      "Optimized to add the feature you need without slowing down page loads or fighting with your existing extensions.",
    bullets: [
      "No noticeable impact on page speed",
      "Tested against common third-party extensions",
      "Clean uninstall if it's ever not the right fit",
    ],
  },
];

const FAQ_TEMPLATES = [
  {
    question: "Does {productName} work with my {platformName} theme?",
    answer:
      "Yes. {productName} is built to sit alongside your existing {platformName} theme and extensions without requiring template rewrites.",
  },
  {
    question: "Is installation included?",
    answer:
      "Yes — every order includes guided installation support, so you're not left configuring it alone.",
  },
  {
    question: "What happens after my free support period ends?",
    answer:
      "The extension keeps working as-is. You can renew support and updates at any time if you want continued help and compatibility patches.",
  },
  {
    question: "Can I get a refund if it doesn't fit my store?",
    answer:
      "Yes, every purchase is covered by our 60-day money-back guarantee — no questions asked.",
  },
];

function seededPick(pool, seed, offset) {
  return pool[(seed + offset) % pool.length];
}

export function getHighlightedFeatures(product, category) {
  const headings = FEATURE_HEADING_POOL[category.id] || [];
  return [...headings, ...EVERGREEN_CHECKLIST_ITEMS];
}

export function getGallerySlides(product) {
  const accent = ACCENT_CYCLE;
  const slides = [{ key: "overview", caption: product.tagline, color: accent[0] }];
  product.features.forEach((feature, i) => {
    slides.push({ key: `feature-${i}`, caption: feature, color: accent[(i + 1) % accent.length] });
  });
  return slides;
}

export function getFeatureBlocks(product, category) {
  const headings = FEATURE_HEADING_POOL[category.id] || [];
  const bulletPool = CATEGORY_BULLET_POOL[category.id] || [];
  const seed = seedFromId(product.id);

  const fromFeatures = product.features.map((feature, i) => ({
    heading: headings[i] || `Feature Highlight ${i + 1}`,
    description: feature,
    bullets: [
      seededPick(bulletPool, seed, i),
      seededPick(bulletPool, seed, i + 1),
      seededPick(bulletPool, seed, i + 2),
    ],
    color: ACCENT_CYCLE[i % ACCENT_CYCLE.length],
  }));

  const evergreen = EVERGREEN_FEATURE_BLOCKS.map((block, j) => ({
    ...block,
    color: ACCENT_CYCLE[(fromFeatures.length + j) % ACCENT_CYCLE.length],
  }));

  return [...fromFeatures, ...evergreen];
}

export function getSpecs(product, category, platform, format) {
  return [
    ["Category", category.name],
    ["Platform", platform.name],
    ["Price", format(product.price)],
    ["Rating", `${product.rating} / 5 (${product.reviews} reviews)`],
    ["License", "Single application license"],
    ["Support", "3 months free, renewable"],
  ];
}

export function getFaqs(product, platform) {
  return FAQ_TEMPLATES.map((f) => ({
    question: f.question.replace("{productName}", product.name).replace("{platformName}", platform.name),
    answer: f.answer.replace("{productName}", product.name).replace("{platformName}", platform.name),
  }));
}

export function getChangelog(product) {
  return [
    { version: "1.0.0", notes: `Initial release of ${product.name}.` },
    { version: "1.0.1", notes: "Minor compatibility fixes and performance improvements." },
  ];
}

const REVIEW_NAME_POOL = [
  "Aarav Mehta",
  "Priya Nair",
  "Rahul Kapoor",
  "Sneha Iyer",
  "Vikram Shah",
  "Ananya Rao",
  "Karan Malhotra",
  "Divya Reddy",
  "Arjun Bhatia",
  "Neha Kulkarni",
];

const REVIEW_SNIPPET_POOL = [
  { title: "Exactly what we needed", comment: "Setup took minutes and it fits right into our {categoryName} workflow." },
  { title: "Great support team", comment: "Had a small config question and support replied the same day." },
  { title: "Solid performance", comment: "No slowdowns after installing, holds up fine during sale traffic." },
  { title: "Does what it promises", comment: "No surprises — matches the description and installed cleanly." },
  { title: "Would recommend", comment: "Already recommended it to two other store owners in our space." },
  { title: "Clean and reliable", comment: "Fits right into the admin panel, barely any learning curve." },
  { title: "Good value", comment: "Priced fairly for what it replaces — saved us building this ourselves." },
  { title: "Minor hiccup, fixed fast", comment: "Ran into one edge case, support pushed a fix within a day." },
];

export function getSyntheticReviews(product, category) {
  const seed = seedFromId(product.id);
  const count = 4;
  const jitter = [0, 0, -1, 0];

  return Array.from({ length: count }, (_, i) => {
    const name = seededPick(REVIEW_NAME_POOL, seed, i * 7);
    const snippet = seededPick(REVIEW_SNIPPET_POOL, seed, i * 13);
    const rating = Math.max(3, Math.min(5, Math.round(product.rating) + jitter[i % jitter.length]));

    return {
      id: `${product.id}-review-${i}`,
      name,
      initials: name
        .split(" ")
        .map((p) => p[0])
        .join("")
        .toUpperCase(),
      color: seededPick(ACCENT_CYCLE, seed, i),
      rating,
      title: snippet.title,
      comment: snippet.comment.replace("{categoryName}", category.name.toLowerCase()),
    };
  });
}

export function getCloserCopy(product, category, platform) {
  return {
    paragraph: `${category.tagline}. ${product.name} is built specifically for ${platform.name} stores, so it installs cleanly alongside your existing setup with no conflicts.`,
    ctaLabel: "Talk to our team",
  };
}
