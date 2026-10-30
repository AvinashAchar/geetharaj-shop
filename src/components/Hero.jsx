import { useEffect, useState } from "react";
import { heroSlides, BIZ } from "../data";
import Reveal from "./Reveal";

// Place these files inside public/videos/
const heroVideos = [
  "/videos/repair.mp4",
  "/videos/oil.mp4",
  "/videos/helmet.mp4",
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % heroVideos.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[active % heroSlides.length];

  return (
    <section className="hero">
      {/* Three full-screen background videos */}
      <div className="hero-video-slider" aria-hidden="true">
        {heroVideos.map((video, index) => (
          <video
            key={video}
            className={`hero-video ${index === active ? "active" : ""}`}
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload={index === 0 ? "auto" : "metadata"}
          />
        ))}
      </div>

      {/* Overlay keeps the text readable */}
      <div className="hero-overlay" />

      {/* Existing hero content */}
      <div className="container hero-content">
        <Reveal>
          <p className="eyebrow">{currentSlide.eyebrow}</p>
          <h1>{currentSlide.title}</h1>
          <p className="hero-copy">{currentSlide.text}</p>

          <div className="hero-actions">
            <a className="button button--light" href="#services">
              Explore Services
            </a>

            <a
              className="button button--glass"
              href={`https://wa.me/${BIZ.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>

      {/* Dots let visitors switch videos manually */}
      <div className="hero-dots" aria-label="Choose background video">
        {heroVideos.map((_, index) => (
          <button
            key={index}
            type="button"
            className={index === active ? "active" : ""}
            onClick={() => setActive(index)}
            aria-label={`Show video ${index + 1}`}
            aria-pressed={index === active}
          />
        ))}
      </div>

      <div className="scroll-hint">
        SCROLL TO EXPLORE <span>↓</span>
      </div>
    </section>
  );
}
