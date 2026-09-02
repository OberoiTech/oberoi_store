import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container" style={{ padding: "120px 24px", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.4rem", marginBottom: 12 }}>404</h1>
      <p style={{ color: "var(--ink-soft)", marginBottom: 24 }}>This page doesn't exist.</p>
      <Link to="/" className="btn btn-primary">
        Back to home
      </Link>
    </div>
  );
}
