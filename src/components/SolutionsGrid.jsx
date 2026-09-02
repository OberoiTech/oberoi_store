import { Link } from "react-router-dom";
import Icon from "./Icon";
import { categories } from "../data/products";
import { tileColor, pastelTint } from "../utils/theme";
import "./SolutionsGrid.css";

const large = ["b2b", "marketplace"];

export default function SolutionsGrid() {
  const largeCards = categories.filter((c) => large.includes(c.id));
  const smallCards = categories.filter((c) => !large.includes(c.id));

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="kicker">Solutions</div>
            <h2>
              <span className="accent-word">Store</span> Solutions
            </h2>
            <p className="lede">Ready-to-use extension bundles for the problems that come up at every stage of growth.</p>
          </div>
        </div>

        <div className="solutions-grid">
          {largeCards.map((c) => (
            <Link
              key={c.id}
              to={`/extensions?category=${c.id}`}
              className="solution-card solution-card-lg"
              style={{ background: `color-mix(in srgb, ${pastelTint(c.id)} 16%, var(--surface))` }}
            >
              <div className="solution-icon" style={{ background: tileColor(c.id) }}>
                <Icon name={c.icon} size={22} />
              </div>
              <h3>{c.name}</h3>
              <p>{c.tagline}</p>
              <span className="solution-link">
                Explore <Icon name="arrowRight" size={14} />
              </span>
            </Link>
          ))}

          {smallCards.map((c) => (
            <Link
              key={c.id}
              to={`/extensions?category=${c.id}`}
              className="solution-card"
              style={{ background: `color-mix(in srgb, ${pastelTint(c.id)} 14%, var(--surface))` }}
            >
              <div className="solution-icon" style={{ background: tileColor(c.id) }}>
                <Icon name={c.icon} size={18} />
              </div>
              <h3>{c.name}</h3>
              <p>{c.tagline}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
