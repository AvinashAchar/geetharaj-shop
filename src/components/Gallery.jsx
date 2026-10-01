import { useState } from "react";
import { gallery } from "../data";
import Reveal from "./Reveal";

export default function Gallery() {
  const [active, setActive] = useState(null);
  return <section className="section" id="gallery">
    <div className="container"><div className="section-heading"><span className="eyebrow">INSIDE GEETHARAJ</span><h2>Gallery</h2><p>Replace the placeholders with real shop, service and product photographs.</p></div>
      <div className="gallery-grid">{gallery.map((src, i) => <Reveal key={src+i} delay={i*50}><button className={`gallery-item gallery-item--${i%4}`} onClick={() => setActive(src)}><img src={src} alt={`Geetharaj gallery ${i+1}`} /></button></Reveal>)}</div>
    </div>
    {active && <div className="lightbox" onClick={() => setActive(null)}><button onClick={() => setActive(null)}>×</button><img src={active} alt="Geetharaj gallery enlarged" /></div>}
  </section>;
}