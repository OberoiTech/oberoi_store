import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import Tile from "./Tile";
import "./HeroShowcase.css";

export default function HeroShowcase({ slides }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, [slides.length]);

  const slide = slides[index];

  function go(dir) {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  }

  return (
    <div className="hero-showcase">
      <div className="hero-showcase-panel">
        <Tile product={slide} className="hero-showcase-tile" />
        <h3>{slide.name}</h3>
        <p>{slide.tagline}</p>
        <Link to={`/extensions/${slide.slug}`} className="btn btn-primary btn-sm">
          View Product <Icon name="arrowRight" size={14} />
        </Link>

        <div className="hero-showcase-controls">
          <button onClick={() => go(-1)} aria-label="Previous">
            <Icon name="chevron" size={15} className="rotate-90" />
          </button>
          <div className="hero-showcase-dots">
            {slides.map((s, i) => (
              <button
                key={s.id}
                className={`hero-showcase-dot ${i === index ? "is-active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to ${s.name}`}
              />
            ))}
          </div>
          <button onClick={() => go(1)} aria-label="Next">
            <Icon name="chevron" size={15} className="rotate-neg90" />
          </button>
        </div>
      </div>

      <Link to="/services" className="hero-help-btn" aria-label="Need help choosing?">
        <Icon name="user" size={20} />
      </Link>
    </div>
  );
}
