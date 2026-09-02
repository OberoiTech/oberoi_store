import Icon from "./Icon";
import "./ProductHighlights.css";

export default function ProductHighlights({ items }) {
  return (
    <div className="product-highlights">
      <h3>Highlighted Features</h3>
      <ul className="product-highlights-grid">
        {items.map((item) => (
          <li key={item}>
            <Icon name="check" size={16} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
