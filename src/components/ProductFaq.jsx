import { useState } from "react";
import Icon from "./Icon";
import "./ProductFaq.css";

export default function ProductFaq({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="product-faq">
      {items.map((item, i) => (
        <div className="faq-item" key={item.question}>
          <button
            className="faq-question"
            onClick={() => setOpen((o) => (o === i ? -1 : i))}
            aria-expanded={open === i}
          >
            {item.question}
            <Icon name="chevron" size={15} className={open === i ? "faq-chevron is-open" : "faq-chevron"} />
          </button>
          {open === i && <p className="faq-answer">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}
