import { Link } from "react-router-dom";
import Icon from "./Icon";
import BlogCard from "./BlogCard";
import { blogPosts } from "../data/blog";

const latest = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

export default function BlogSection() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="kicker">From the blog</div>
            <h2>Guides, updates and case studies</h2>
          </div>
          <Link to="/blog" className="btn btn-ghost">
            View all articles <Icon name="arrowRight" size={15} />
          </Link>
        </div>
        <div className="blog-grid">
          {latest.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
