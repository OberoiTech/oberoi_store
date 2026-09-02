import { productImages } from "../utils/images";
import { tileColor } from "../utils/theme";

export default function Tile({ product, className = "" }) {
  const img = productImages[product.id];

  return (
    <div className={`tile ${className}`} style={img ? undefined : { background: tileColor(product.category) }}>
      {img ? <img src={img} alt={product.name} /> : product.initials}
    </div>
  );
}
