import { useEffect, useState } from "react";
import { heroSlides, BIZ } from "../data";
import Reveal from "./Reveal";

export default function Hero() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setActive(v => (v + 1) % heroSlides.length), 5500);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="hero">
      {heroSlides.map((slide, i) => <div key={slide.image} className={`hero-slide ${i === active ? "active" : ""}`} style={{backgroundImage:`url(${slide.image})`}} />)}
      <div className="hero-overlay" />
      <div className="container hero-content">
        <Reveal>
          <p className="eyebrow">{heroSlides[active].eyebrow}</p>
          <h1>{heroSlides[active].title}</h1>
          <p className="hero-copy">{heroSlides[active].text}</p>
          <div className="hero-actions">
            <a className="button button--light" href="#services">Explore Services</a>
            <a className="button button--glass" href={`https://wa.me/${BIZ.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </Reveal>
      </div>
      <div className="hero-dots">{heroSlides.map((_, i) => <button key={i} className={i === active ? "active" : ""} onClick={() => setActive(i)} aria-label={`Slide ${i+1}`} />)}</div>
      <div className="scroll-hint">SCROLL TO EXPLORE <span>↓</span></div>
    </section>
  );
}