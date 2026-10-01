import { useState } from "react";
import { brands } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Brands() {
  const [active, setActive] = useState(brands[0]);
  return <section className="section section--dark" id="brands">
    <div className="container">
      <SectionHeading eyebrow="TRUSTED BRANDS" title="Brands" text="Select a brand to explore the category and available product direction." />
      <div className="brand-layout">
        <div className="brand-list">{brands.map(brand => <button key={brand.name} className={active.name===brand.name ? "active" : ""} onClick={() => setActive(brand)}>{brand.name}<span>↗</span></button>)}</div>
        <Reveal className="brand-detail">
          <img src={active.image} alt={active.name} />
          <div><span className="eyebrow">{active.category}</span><h3>{active.name}</h3><p>{active.description}</p><a className="button button--light" href={`https://wa.me/919972868103`} target="_blank" rel="noreferrer">Enquire about {active.name}</a></div>
        </Reveal>
      </div>
    </div>
  </section>;
}