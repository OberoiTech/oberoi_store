export const blogCategories = [
  { id: "guides", name: "Guides & Tutorials" },
  { id: "updates", name: "Product Updates" },
  { id: "case-studies", name: "Case Studies" },
  { id: "marketing", name: "Marketing & Growth" },
  { id: "b2b", name: "B2B & Wholesale" },
  { id: "platforms", name: "Platform Comparisons" },
];

export const blogAuthor = {
  name: "OberoiTech Editorial",
  bio: "Our team shares product updates, e-commerce guides, and lessons from merchants running on OberoiTech extensions.",
};

const gradients = [
  "linear-gradient(135deg, #1c8fe0 0%, #123c7a 100%)",
  "linear-gradient(135deg, #4fb0e8 0%, #2a5db0 100%)",
  "linear-gradient(135deg, #0b1f3a 0%, #1c8fe0 100%)",
  "linear-gradient(135deg, #2a5db0 0%, #0b2a52 100%)",
  "linear-gradient(135deg, #5b7fbf 0%, #123c7a 100%)",
  "linear-gradient(135deg, #123c7a 0%, #4fb0e8 100%)",
];

export const blogPosts = [
  {
    slug: "one-step-checkout-cuts-cart-abandonment",
    title: "How One Step Checkout Cuts Cart Abandonment",
    excerpt:
      "A five-page checkout gives shoppers five places to quit. Here's how collapsing it to one screen changes the numbers.",
    category: "guides",
    date: "2026-08-24",
    readTime: "6 min read",
    icon: "cart",
    gradient: gradients[0],
    intro: [
      "Every extra step in checkout is a fresh exit ramp. Address, shipping, payment, review — each page is a place a shopper can get distracted, hit the back button, or simply lose patience on a slow connection.",
    ],
    sections: [
      {
        heading: "What One Step Checkout Changes",
        paragraphs: [
          "One Step Checkout collapses that into a single responsive page. Autofill, inline validation, and saved payment methods for returning customers all remove friction at the exact moment a customer has already decided to buy.",
        ],
      },
      {
        heading: "The Mobile Advantage",
        paragraphs: [
          "In practice, the biggest gains come from mobile: multi-page checkouts are punishing on a small screen where every page load costs a few seconds of patience. A single page means one load, one scroll, one decision.",
        ],
      },
      {
        heading: "Where to Start",
        bullets: [
          "Check step-by-step abandonment in analytics before changing anything",
          "Confirm guest checkout is enabled and visible",
          "Test the new checkout on the slowest phone your customers actually use",
        ],
      },
    ],
  },
  {
    slug: "signs-your-store-needs-layered-navigation",
    title: "5 Signs Your Store Needs Layered Navigation",
    excerpt:
      "If shoppers are bouncing from your category pages, the filter experience — not the products — might be the problem.",
    category: "guides",
    date: "2026-08-21",
    readTime: "5 min read",
    icon: "search",
    gradient: gradients[1],
    intro: [
      "Layered navigation earns its keep the moment a catalog crosses a few hundred SKUs. Below that, a simple sort dropdown is often enough. Above it, shoppers need a way to narrow hundreds of options down to a handful in two or three clicks.",
    ],
    sections: [
      {
        heading: "5 Signs to Watch For",
        bullets: [
          "Category pages with a high bounce rate",
          "Search queries that repeat the same category name",
          "Support tickets asking 'do you have this in size X'",
          "Mobile bounce rate noticeably higher than desktop",
          "Shoppers using site search instead of browsing categories",
        ],
      },
      {
        heading: "Getting the Fix Right",
        paragraphs: [
          "The fix isn't just adding filters — it's making sure they're fast (AJAX, no full page reloads), don't break SEO (canonical URLs on filtered pages), and work as well on a phone as they do on a 27-inch monitor.",
        ],
      },
    ],
  },
  {
    slug: "oberoitech-product-updates-august-2026",
    title: "OberoiTech Product Updates — August 2026",
    excerpt: "New extensions, a pricing update, and what's next on the roadmap this month.",
    category: "updates",
    date: "2026-08-26",
    readTime: "4 min read",
    icon: "check",
    gradient: gradients[2],
    intro: [
      "This month we shipped a new extension, refreshed two editors, and adjusted our support plans. Here's everything that changed.",
    ],
    sections: [
      {
        heading: "New This Month",
        paragraphs: [
          "Quick Order Pad shipped for WooCommerce, giving repeat B2B buyers a single-screen way to reorder by SKU instead of browsing the full catalog.",
        ],
      },
      {
        heading: "Editor Refresh",
        paragraphs: [
          "Mega Menu Builder and Sales Notification Popups both got a visual editor refresh — no code required to update layouts or timing rules.",
        ],
      },
      {
        heading: "Pricing Update",
        paragraphs: [
          "Extensions remain one-time purchases with free installation, and the Growth support plan now includes a quarterly SEO and performance audit at no extra cost.",
        ],
      },
      {
        heading: "What's Next",
        bullets: ["Deeper Magento coverage across the catalog", "A public roadmap page so you can vote on what we build next"],
      },
    ],
  },
  {
    slug: "case-study-northfield-supply-b2b-suite",
    title: "Case Study: Northfield Supply Co. Cuts Quote Turnaround with B2B Suite",
    excerpt:
      "A wholesale hardware distributor replaced email quote requests with a built-in workflow — and turnaround went from two days to two hours.",
    category: "case-studies",
    date: "2026-08-18",
    readTime: "5 min read",
    icon: "briefcase",
    gradient: gradients[3],
    intro: [
      "Northfield Supply Co. sells hardware to contractors and resellers. Before switching platforms, every wholesale quote request came in over email — read, priced, and answered by hand.",
    ],
    sections: [
      {
        heading: "The Fix",
        paragraphs: [
          "After installing the B2B Suite, buyers got company accounts with saved shipping details, tiered pricing based on customer group, and a request-for-quote flow that lands directly in the admin panel with a negotiation thread attached.",
        ],
      },
      {
        heading: "The Result",
        paragraphs: [
          "Average quote turnaround dropped from roughly two days to about two hours, and the sales team spends far less time re-typing numbers into email replies.",
        ],
      },
      {
        heading: "The Takeaway",
        paragraphs: [
          "The extension paid for itself inside the first month, mostly in reclaimed staff time rather than new revenue — a reminder that B2B tooling often shows up first in the cost column, not the sales one.",
        ],
      },
    ],
  },
  {
    slug: "seo-checklist-magento-2-stores-2026",
    title: "SEO Checklist for Magento 2 Stores in 2026",
    excerpt: "Meta titles, structured data, sitemaps, and the handful of technical basics that still move rankings.",
    category: "marketing",
    date: "2026-08-15",
    readTime: "7 min read",
    icon: "megaphone",
    gradient: gradients[4],
    intro: [
      "Most Magento SEO problems aren't exotic — they're duplicate meta titles, missing structured data on product pages, and category filters that generate thousands of low-value crawlable URLs.",
    ],
    sections: [
      {
        heading: "Start With the Boring Wins",
        bullets: [
          "Bulk meta title and description templates by category",
          "An accurate XML sitemap that excludes filtered/faceted URLs",
          "Canonical tags on every layered navigation combination",
        ],
      },
      {
        heading: "Structured Data Matters More Than You Think",
        paragraphs: [
          "Product, review, and breadcrumb schema all affect how — and whether — you show up as a rich result in search.",
        ],
      },
      {
        heading: "Ongoing Maintenance",
        paragraphs: [
          "Once the technical basics are handled, a monthly broken-link and redirect check catches the slow rot that builds up as products get discontinued and categories get reorganized.",
        ],
      },
    ],
  },
  {
    slug: "woocommerce-vs-magento-2026",
    title: "WooCommerce vs Magento: Choosing the Right Platform in 2026",
    excerpt: "There's no universally 'best' platform — only the one that matches your catalog size, team, and growth plan.",
    category: "platforms",
    date: "2026-08-12",
    readTime: "7 min read",
    icon: "store",
    gradient: gradients[5],
    intro: [
      "Every platform comparison eventually comes down to the same three questions: how big is your catalog, who's maintaining the store, and how fast are you trying to grow?",
    ],
    sections: [
      {
        heading: "WooCommerce",
        paragraphs: [
          "Sits inside WordPress, which makes it a natural fit if content and SEO already live there. Hosting, plugins, and updates stay in your control, which keeps costs low for small-to-mid catalogs.",
          "The trade-off is that more of the maintenance burden — plugin conflicts, hosting, security patches — falls on you or your agency instead of a vendor.",
        ],
      },
      {
        heading: "Magento (Adobe Commerce)",
        paragraphs: [
          "Built for scale: complex catalogs, multi-store setups, and B2B features out of the box. It costs more in development time up front, and pays that back on stores that outgrow simpler platforms.",
          "It's the stronger choice once you're running multiple storefronts, need serious B2B tooling, or your catalog has grown past what a WordPress plugin ecosystem comfortably handles.",
        ],
      },
      {
        heading: "The Honest Answer",
        paragraphs: [
          "For most merchants: start with what your team can maintain today, and treat a platform migration as a normal part of growing, not a failure to pick 'right' the first time.",
        ],
      },
    ],
  },
  {
    slug: "b2b-wholesale-company-accounts-vs-guest-checkout",
    title: "B2B Wholesale Storefronts: Company Accounts vs Guest Checkout",
    excerpt: "Wholesale buyers don't shop like retail customers — your checkout shouldn't treat them the same way either.",
    category: "b2b",
    date: "2026-08-09",
    readTime: "6 min read",
    icon: "briefcase",
    gradient: gradients[0],
    intro: [
      "A retail customer buys once and leaves. A wholesale buyer reorders the same 40 SKUs every month, has multiple people placing orders under one account, and expects pricing that reflects volume.",
    ],
    sections: [
      {
        heading: "What Company Accounts Solve",
        paragraphs: [
          "One business entity, several buyer logins, shared order history, and pricing tiers tied to the account rather than a single email address.",
        ],
      },
      {
        heading: "Where Guest Checkout Still Fits",
        paragraphs: [
          "Guest checkout still has a place for one-off wholesale inquiries, but forcing repeat B2B buyers through it means re-entering the same shipping and billing details every single time — friction that retail-first platforms rarely account for.",
        ],
      },
    ],
  },
  {
    slug: "new-extension-quick-order-pad",
    title: "New Extension: Quick Order Pad for Bulk B2B Buyers",
    excerpt: "A single-screen reorder form for buyers who already know their SKUs — paste a list, check stock, check out.",
    category: "updates",
    date: "2026-08-07",
    readTime: "3 min read",
    icon: "check",
    gradient: gradients[1],
    intro: [
      "Repeat B2B buyers don't want to browse a catalog — they want to type or paste a list of SKUs and get straight to checkout with live stock and pricing.",
    ],
    sections: [
      {
        heading: "What's Inside",
        bullets: [
          "Bulk-add form for pasted SKU lists",
          "CSV import and export for recurring orders",
          "Saved order templates for monthly restocks",
        ],
      },
      {
        heading: "Availability",
        paragraphs: ["It's available now for WooCommerce, with a Magento version on the roadmap."],
      },
    ],
  },
  {
    slug: "reduce-cart-abandonment-without-full-rebuild",
    title: "How to Reduce Cart Abandonment Without a Full Checkout Rebuild",
    excerpt: "You don't always need a new checkout — sometimes the fix is smaller than that.",
    category: "guides",
    date: "2026-08-05",
    readTime: "5 min read",
    icon: "cart",
    gradient: gradients[2],
    intro: ["Before rebuilding checkout from scratch, check the cheaper fixes first."],
    sections: [
      {
        heading: "Check the Cheaper Fixes First",
        bullets: [
          "Is guest checkout actually enabled and visible?",
          "Are shipping costs shown before the final step?",
          "Does the page work smoothly on the phones your customers actually use?",
        ],
      },
      {
        heading: "Abandoned Cart Emails",
        paragraphs: [
          "Abandoned cart emails recover a meaningful slice of otherwise-lost orders for very little engineering effort — a single reminder within a few hours of abandonment is usually enough to start.",
        ],
      },
      {
        heading: "When You Actually Need a Rebuild",
        paragraphs: [
          "If those smaller fixes plateau, that's the signal a structural change like One Step Checkout is worth the investment, not before.",
        ],
      },
    ],
  },
  {
    slug: "free-vs-paid-extensions-when-to-upgrade",
    title: "Free vs Paid Extensions: When Should You Upgrade?",
    excerpt: "Free extensions are a great way to start. Here's how to tell when they're holding your store back.",
    category: "guides",
    date: "2026-08-02",
    readTime: "4 min read",
    icon: "heart",
    gradient: gradients[3],
    intro: [
      "Free extensions are usually fine for validating an idea — a basic popup, a simple sort tool, a lightweight sitemap generator. The limits show up once traffic and catalog size grow.",
    ],
    sections: [
      {
        heading: "Common Upgrade Triggers",
        bullets: [
          "The free version caps at a product or order count you've now exceeded",
          "Support is community-only and you need an actual response time",
          "You need a feature — multi-currency, advanced rules, API access — that's paid-only",
        ],
      },
      {
        heading: "The Rule of Thumb",
        paragraphs: [
          "If an extension is touching revenue directly — checkout, pricing, payments — the paid, supported version is almost always worth it sooner rather than later.",
        ],
      },
    ],
  },
  {
    slug: "multi-vendor-marketplace-launch-checklist",
    title: "Multi-Vendor Marketplaces: What to Check Before You Launch",
    excerpt: "Turning one store into a marketplace of sellers changes more than your product pages — plan for it before day one.",
    category: "platforms",
    date: "2026-07-30",
    readTime: "6 min read",
    icon: "store",
    gradient: gradients[4],
    intro: [
      "Before onboarding your first outside seller, settle the basics: commission structure, payout schedule, and who's responsible for customer support on a given order.",
    ],
    sections: [
      {
        heading: "Settle the Basics First",
        bullets: [
          "Commission structure per seller or category",
          "Payout schedule",
          "Who owns customer support on a given order",
        ],
      },
      {
        heading: "Seller-Facing Tools Matter",
        paragraphs: [
          "A seller who can't see their own orders, inventory, and payouts clearly will generate support tickets you don't want to handle manually.",
        ],
      },
      {
        heading: "Plan for Disputes Before Launch",
        paragraphs: [
          "Settle your returns and disputes process before launch, not after the first complaint. Marketplaces make 'who's responsible' a real question that a single-seller store never has to answer.",
        ],
      },
    ],
  },
  {
    slug: "loyalty-programs-that-bring-customers-back",
    title: "Loyalty Programs That Actually Bring Customers Back",
    excerpt: "Points programs are easy to launch and easy to ignore. Here's what makes shoppers actually use one.",
    category: "marketing",
    date: "2026-07-27",
    readTime: "5 min read",
    icon: "heart",
    gradient: gradients[5],
    intro: [
      "A points balance that's invisible until checkout rarely changes behavior. The programs that work show progress constantly.",
    ],
    sections: [
      {
        heading: "Make Progress Visible",
        paragraphs: [
          "A widget on every page, an email when a shopper is close to a reward, a clear next tier to reach — visibility is what turns a points balance into a habit.",
        ],
      },
      {
        heading: "Referrals Beat Pure Points",
        paragraphs: [
          "Referral rewards tend to outperform pure purchase points for customer acquisition cost, since they bring in a new customer instead of just discounting an existing one.",
        ],
      },
      {
        heading: "The Highest-Leverage Email",
        paragraphs: [
          "The simplest high-leverage move: email shoppers before their points expire. Recovering points that were about to disappear is one of the highest-converting emails a loyalty program can send.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getCategoryName(id) {
  return blogCategories.find((c) => c.id === id)?.name || id;
}

export function getRelatedPosts(post, count = 2) {
  return blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .concat(blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category))
    .slice(0, count);
}

export function getAdjacentPosts(post) {
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const index = sorted.findIndex((p) => p.slug === post.slug);
  return {
    newer: index > 0 ? sorted[index - 1] : null,
    older: index < sorted.length - 1 ? sorted[index + 1] : null,
  };
}
