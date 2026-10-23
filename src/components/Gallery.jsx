
import { useEffect, useState } from "react";
import { gallery } from "../data";
import Reveal from "./Reveal";

export default function Gallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActive(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container gallery-container">
        <div className="section-heading gallery-heading">
          <span className="eyebrow">INSIDE GEETHARAJ</span>
          <h2>Our Shop in Pictures</h2>
          <p>
            Explore our shop, automotive products, equipment and
            everyday vehicle-care services in Hiriadka.
          </p>
        </div>

        <div className="gallery-grid">
          {gallery.map((src, index) => (
            <Reveal key={`${src}-${index}`} delay={Math.min(index * 40, 200)}>
              <button
                type="button"
                className="gallery-item"
                onClick={() => setActive(src)}
                aria-label={`View gallery image ${index + 1}`}
              >
                <img
                  src={src}
                  alt={`Geetharaj Tyres and Lubricants - photo ${index + 1}`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.visibility = "hidden";
                  }}
                />
                <span className="gallery-zoom" aria-hidden="true">
                  ↗
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        {gallery.length === 0 && (
          <p className="gallery-empty">
            Shop photographs will appear here soon.
          </p>
        )}
      </div>

      {active && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged gallery image"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={() => setActive(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <img
            src={active}
            alt="Geetharaj Tyres and Lubricants enlarged photograph"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
