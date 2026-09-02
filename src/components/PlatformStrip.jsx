import { Link } from "react-router-dom";
import { platforms } from "../data/products";
import "./PlatformStrip.css";

export default function PlatformStrip() {
  return (
    <div className="platform-strip">
      <div className="container platform-strip-inner">
        {platforms.map((p) => (
          <Link
            key={p.id}
            to={`/extensions?platform=${p.id}`}
            className="platform-strip-item"
            style={{ "--chip-color": p.color }}
          >
            <span className="dot" style={{ background: p.color }} />
            {p.name}
          </Link>
        ))}
        <span className="platform-strip-item platform-strip-more">+ more coming soon</span>
      </div>
    </div>
  );
}
