import { useEffect, useState } from "react";
import Icon from "./Icon";
import "./ProductGallery.css";

export default function ProductGallery({ slides }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return undefined;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, [slides.length]);

  const slide = slides[index % slides.length];

  function go(dir) {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  }

  return (
    <div className="product-gallery-block">
      <div
        className="product-gallery-panel"
        style={{ background: `linear-gradient(135deg, ${slide.color} 0%, #0b1f3a 100%)` }}
      >
        <p>{slide.caption}</p>
      </div>

      {slides.length > 1 && (
        <div className="product-gallery-controls">
          <button onClick={() => go(-1)} aria-label="Previous slide">
            <Icon name="chevron" size={15} className="rotate-90" />
          </button>
          <div className="product-gallery-dots">
            {slides.map((s, i) => (
              <button
                key={s.key}
                className={`product-gallery-dot ${i === index ? "is-active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={() => go(1)} aria-label="Next slide">
            <Icon name="chevron" size={15} className="rotate-neg90" />
          </button>
        </div>
      )}
    </div>
  );
}
