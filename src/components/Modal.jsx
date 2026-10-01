import { useEffect } from "react";

export default function Modal({ item, onClose }) {
  useEffect(() => {
    if (!item) return;
    const esc = e => e.key === "Escape" && onClose();
    document.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", esc); document.body.style.overflow = ""; };
  }, [item, onClose]);

  if (!item) return null;
  return <div className="modal-backdrop" onClick={onClose}>
    <div className="modal" onClick={e => e.stopPropagation()}>
      <button className="modal-close" onClick={onClose}>×</button>
      <img src={item.image} alt={item.title || item.name} />
      <div className="modal-body">
        <span className="eyebrow">{item.category || "GEETHARAJ"}</span>
        <h3>{item.title || item.name}</h3>
        <p>{item.description}</p>
        <a className="button button--dark" href="https://wa.me/919972868103" target="_blank" rel="noreferrer">Enquire on WhatsApp →</a>
      </div>
    </div>
  </div>;
}