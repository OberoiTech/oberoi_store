import Icon from "./Icon";
import { useCart } from "../context/CartContext";

export default function CartToast() {
  const { toast } = useCart();
  if (!toast) return null;
  return (
    <div className="toast" role="status">
      <Icon name="check" size={15} />
      {toast}
    </div>
  );
}
