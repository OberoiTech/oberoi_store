import { useState } from "react";
import { Link, useNavigate, useParams, Navigate } from "react-router-dom";
import Icon from "../components/Icon";
import BlogCard from "../components/BlogCard";
import SidebarNewsletter from "../components/SidebarNewsletter";
import NewsletterBand from "../components/NewsletterBand";
import { getPostBySlug, getRelatedPosts, getAdjacentPosts, getCategoryName, blogAuthor } from "../data/blog";
import "./BlogPost.css";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [sidebarSearch, setSidebarSearch] = useState("");
  const [comments, setComments] = useState([]);
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");

  const post = getPostBySlug(slug);
  if (!post) return <Navigate to="/blog" replace />;

  const related = getRelatedPosts(post);
  const { newer, older } = getAdjacentPosts(post);

  function handleSidebarSearch(e) {
    e.preventDefault();
    navigate(sidebarSearch.trim() ? `/blog?q=${encodeURIComponent(sidebarSearch.trim())}` : "/blog");
  }

  function handleCommentSubmit(e) {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;
    setComments((c) => [...c, { id: Date.now(), name: commentName.trim(), text: commentText.trim() }]);
    setCommentName("");
    setCommentText("");
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareLinks = [
    {
      label: "Share on X",
      icon: "megaphone",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`,
    },
    {
      label: "Share on Facebook",
      icon: "store",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
    {
      label: "Share on LinkedIn",
      icon: "briefcase",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
  ];

  return (
    <div className="blog-post-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/blog">Blog</Link> / {post.title}
        </div>

        <h1 className="blog-post-title">{post.title}</h1>

        <div className="blog-post-hero" style={{ background: post.gradient }}>
          <Icon name={post.icon} size={44} />
        </div>

        <div className="blog-post-meta">
          <span className="badge badge-teal">{getCategoryName(post.category)}</span>
          <span>Last updated: {formatDate(post.date)}</span>
          <span className="dot-sep">·</span>
          <span className="blog-post-meta-comments">
            <Icon name="user" size={13} /> {comments.length} comments
          </span>
        </div>

        <div className="blog-post-layout">
          <div className="blog-post-main">
            {post.intro.map((para) => (
              <p key={para}>{para}</p>
            ))}

            {post.sections.map((section) => (
              <div key={section.heading} id={slugify(section.heading)} className="blog-post-section">
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((para) => <p key={para}>{para}</p>)}
                {section.bullets && (
                  <ul className="blog-post-bullets">
                    {section.bullets.map((b) => (
                      <li key={b}>
                        <Icon name="check" size={14} />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="blog-post-footer-meta">
              <span>Originally published: {formatDate(post.date)}</span>
              <div className="blog-share">
                {shareLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-btn"
                    aria-label={s.label}
                  >
                    <Icon name={s.icon} size={16} />
                  </a>
                ))}
              </div>
            </div>

            {(older || newer) && (
              <div className="blog-post-nav">
                {older ? (
                  <Link to={`/blog/${older.slug}`} className="blog-post-nav-link is-prev">
                    <span className="blog-post-nav-arrow">← Previous</span>
                    <strong>{older.title}</strong>
                  </Link>
                ) : (
                  <span />
                )}
                {newer ? (
                  <Link to={`/blog/${newer.slug}`} className="blog-post-nav-link is-next">
                    <span className="blog-post-nav-arrow">Next →</span>
                    <strong>{newer.title}</strong>
                  </Link>
                ) : (
                  <span />
                )}
              </div>
            )}

            {related.length > 0 && (
              <div className="blog-related">
                <h2>Related posts</h2>
                <div className="blog-grid">
                  {related.map((p) => (
                    <BlogCard key={p.slug} post={p} />
                  ))}
                </div>
              </div>
            )}

            <div className="blog-comments">
              <h2>Comments ({comments.length})</h2>
              {comments.length > 0 && (
                <div className="blog-comment-list">
                  {comments.map((c) => (
                    <div key={c.id} className="blog-comment">
                      <strong>{c.name}</strong>
                      <p>{c.text}</p>
                    </div>
                  ))}
                </div>
              )}
              <form className="blog-comment-form" onSubmit={handleCommentSubmit}>
                <h4>Leave your comment</h4>
                <p className="blog-comment-hint">Your email address will not be published.</p>
                <input
                  type="text"
                  placeholder="Name"
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Comment"
                  rows={4}
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Post comment
                </button>
              </form>
            </div>
          </div>

          <aside className="blog-post-sidebar">
            <SidebarNewsletter
              badge="New posts weekly"
              title="Join our blog newsletter!"
              subtitle="Get the latest updates to keep your business competitive."
            />

            <form className="sidebar-search" onSubmit={handleSidebarSearch}>
              <h4>Search</h4>
              <div className="sidebar-search-field">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={sidebarSearch}
                  onChange={(e) => setSidebarSearch(e.target.value)}
                  aria-label="Search articles"
                />
                <button type="submit" aria-label="Search">
                  <Icon name="search" size={15} />
                </button>
              </div>
            </form>

            <div className="sidebar-author">
              <div className="sidebar-author-avatar">
                <Icon name="user" size={22} />
              </div>
              <span className="sidebar-author-label">Written by</span>
              <h4>{blogAuthor.name}</h4>
              <p>{blogAuthor.bio}</p>
            </div>

            {post.sections.length > 0 && (
              <div className="sidebar-toc">
                <h4>Table of Contents</h4>
                <ul>
                  {post.sections.map((s) => (
                    <li key={s.heading}>
                      <a href={`#${slugify(s.heading)}`}>{s.heading}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>

      <NewsletterBand />
    </div>
  );
}
