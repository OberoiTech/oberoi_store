import { useRef } from "react";
import Icon from "./Icon";
import ProductCard from "./ProductCard";
import "./FeaturedCarousel.css";

export default function FeaturedCarousel({ title, kicker, products }) {
  const trackRef = useRef(null);

  function scroll(dir) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".carousel-slide");
    const amount = card ? card.offsetWidth + 28 : 300;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  return (
    <section className="section featured-carousel">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="kicker">{kicker}</div>
            <h2>{title}</h2>
          </div>
          <div className="carousel-arrows">
            <button className="icon-btn carousel-arrow" onClick={() => scroll(-1)} aria-label="Previous">
              <Icon name="chevron" size={18} className="rotate-90" />
            </button>
            <button className="icon-btn carousel-arrow" onClick={() => scroll(1)} aria-label="Next">
              <Icon name="chevron" size={18} className="rotate-neg90" />
            </button>
          </div>
        </div>

        <div className="carousel-track" ref={trackRef}>
          {products.map((p) => (
            <div key={p.id} className="carousel-slide">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
