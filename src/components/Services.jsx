import { useState } from "react";
import { services } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Modal from "./Modal";

export default function Services() {
  const [selected, setSelected] = useState(null);
  return <section className="section section--soft" id="services">
    <div className="container">
      <SectionHeading eyebrow="WHAT WE DO" title="Services" text="Professional, practical services for everyday vehicle care." />
      <div className="card-grid">
        {services.map((item, i) => <Reveal key={item.id} delay={i * 60}>
          <button className="media-card" onClick={() => setSelected(item)}>
            <img src={item.image} alt={item.title} />
            <span className="media-card-shade" />
            <div className="media-card-content"><span>0{i+1}</span><h3>{item.title}</h3><p>{item.description}</p><b>View details ↗</b></div>
          </button>
        </Reveal>)}
      </div>
    </div>
    <Modal item={selected} onClose={() => setSelected(null)} />
  </section>;
}