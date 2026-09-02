import { Link } from "react-router-dom";
import Icon from "./Icon";
import { getCategoryName } from "../data/blog";
import "./BlogCard.css";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function BlogCard({ post }) {
  return (
    <article className="blog-card card">
      <Link to={`/blog/${post.slug}`} className="blog-card-media" style={{ background: post.gradient }}>
        <Icon name={post.icon} size={28} />
        <span className="blog-card-category">{getCategoryName(post.category)}</span>
      </Link>
      <div className="blog-card-body">
        <Link to={`/blog/${post.slug}`}>
          <h3 className="blog-card-title">{post.title}</h3>
        </Link>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <div className="blog-card-meta">
          <span>{formatDate(post.date)}</span>
          <span className="dot-sep">·</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </article>
  );
}
