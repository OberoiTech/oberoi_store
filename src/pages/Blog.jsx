import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Icon from "../components/Icon";
import BlogCard from "../components/BlogCard";
import NewsletterBand from "../components/NewsletterBand";
import { blogPosts, blogCategories } from "../data/blog";
import "./Blog.css";

const PER_PAGE = 6;

export default function Blog() {
  const [params] = useSearchParams();
  const [search, setSearch] = useState(params.get("q") || "");
  const [category, setCategory] = useState(params.get("category") || "all");
  const [page, setPage] = useState(1);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const counts = useMemo(() => {
    const map = {};
    blogPosts.forEach((p) => {
      map[p.category] = (map[p.category] || 0) + 1;
    });
    return map;
  }, []);

  const filtered = useMemo(() => {
    return blogPosts
      .filter((p) => category === "all" || p.category === category)
      .filter((p) => `${p.title} ${p.excerpt}`.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [search, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const pageSafe = Math.min(page, totalPages);
  const pagePosts = filtered.slice((pageSafe - 1) * PER_PAGE, pageSafe * PER_PAGE);
  const midpoint = Math.min(3, pagePosts.length);

  function selectCategory(id) {
    setCategory(id);
    setPage(1);
  }

  function handleSearchChange(e) {
    setSearch(e.target.value);
    setPage(1);
  }

  function handleSubscribe(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <div className="container blog-hero-inner">
          <div className="kicker" style={{ justifyContent: "center" }}>
            Insights, news and guides
          </div>
          <h1>Welcome to the OberoiTech Blog!</h1>
          <div className="blog-search field">
            <Icon name="search" size={17} />
            <input
              type="text"
              placeholder="What are you looking for?"
              value={search}
              onChange={handleSearchChange}
              aria-label="Search articles"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="blog-filters">
          <button className={`filter-pill ${category === "all" ? "is-active" : ""}`} onClick={() => selectCategory("all")}>
            All <span className="filter-pill-count">{blogPosts.length}</span>
          </button>
          {blogCategories.map((c) => (
            <button
              key={c.id}
              className={`filter-pill ${category === c.id ? "is-active" : ""}`}
              onClick={() => selectCategory(c.id)}
            >
              {c.name} <span className="filter-pill-count">{counts[c.id] || 0}</span>
            </button>
          ))}
        </div>

        <h2 className="blog-section-title">All articles</h2>

        {pagePosts.length === 0 ? (
          <div className="empty-state">
            <p>Is category/search ke liye koi article nahi mila.</p>
            <button
              className="btn btn-outline"
              onClick={() => {
                setSearch("");
                selectCategory("all");
              }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <div className="blog-grid">
              {pagePosts.slice(0, midpoint).map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>

            {pagePosts.length > midpoint && (
              <>
                <div className="newsletter-inline card">
                  <div>
                    <h3>Join our blog newsletter!</h3>
                    <p>Get the latest updates to keep your business competitive.</p>
                  </div>
                  {subscribed ? (
                    <span className="newsletter-success">
                      <Icon name="check" size={16} /> Subscribed
                    </span>
                  ) : (
                    <form className="newsletter-form" onSubmit={handleSubscribe}>
                      <input
                        type="email"
                        required
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-label="Email address"
                      />
                      <button type="submit" className="btn btn-primary btn-sm">
                        Subscribe
                      </button>
                    </form>
                  )}
                </div>

                <div className="blog-grid">
                  {pagePosts.slice(midpoint).map((p) => (
                    <BlogCard key={p.slug} post={p} />
                  ))}
                </div>
              </>
            )}
          </>
        )}

        {totalPages > 1 && (
          <div className="blog-pagination">
            <button
              className="icon-btn"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={pageSafe === 1}
              aria-label="Previous page"
            >
              <Icon name="chevron" size={16} className="rotate-90" />
            </button>
            <span className="mono">
              {pageSafe} of {totalPages}
            </span>
            <button
              className="icon-btn"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={pageSafe === totalPages}
              aria-label="Next page"
            >
              <Icon name="chevron" size={16} className="rotate-neg90" />
            </button>
          </div>
        )}
      </div>

      <NewsletterBand />
    </div>
  );
}
