import Icon from "./Icon";
import "./ProductReviews.css";

export default function ProductReviews({ reviews, avgRating, reviewCount }) {
  return (
    <div className="product-reviews">
      <div className="review-summary">
        <div className="review-score">
          <div className="review-score-value mono">{avgRating}</div>
          <div className="rating">
            <Icon name="star" size={15} /> out of 5
          </div>
          <div className="count">{reviewCount} reviews</div>
        </div>
        <p className="review-note">
          A preview of recent reviews for this extension — synced from verified installs.
        </p>
      </div>

      <div className="review-card-list">
        {reviews.map((r) => (
          <div className="review-card" key={r.id}>
            <div className="review-avatar" style={{ background: r.color }}>
              {r.initials}
            </div>
            <div className="review-card-body">
              <div className="review-card-head">
                <strong>{r.name}</strong>
                <span className="rating">
                  <Icon name="star" size={13} /> {r.rating}
                </span>
              </div>
              <h4>{r.title}</h4>
              <p>{r.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
