import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { products } from "../data/products";

const CartContext = createContext(null);
const STORAGE_KEY = "oberoitech-cart";

function readInitialCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readInitialCart);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2400);
    return () => clearTimeout(t);
  }, [toast]);

  function addToCart(productId, qty = 1) {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === productId);
      if (existing) {
        return prev.map((i) => (i.id === productId ? { ...i, qty: i.qty + qty } : i));
      }
      return [...prev, { id: productId, qty }];
    });
    const product = products.find((p) => p.id === productId);
    setToast(product ? `${product.name} cart mein add ho gaya` : "Added to cart");
  }

  function removeFromCart(productId) {
    setItems((prev) => prev.filter((i) => i.id !== productId));
  }

  function updateQty(productId, qty) {
    if (qty < 1) return removeFromCart(productId);
    setItems((prev) => prev.map((i) => (i.id === productId ? { ...i, qty } : i)));
  }

  function clearCart() {
    setItems([]);
  }

  const lines = useMemo(
    () =>
      items
        .map((i) => {
          const product = products.find((p) => p.id === i.id);
          return product ? { ...i, product } : null;
        })
        .filter(Boolean),
    [items]
  );

  const subtotal = useMemo(() => lines.reduce((sum, l) => sum + l.product.price * l.qty, 0), [lines]);
  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items]);

  const value = { items, lines, subtotal, count, addToCart, removeFromCart, updateQty, clearCart, toast };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
