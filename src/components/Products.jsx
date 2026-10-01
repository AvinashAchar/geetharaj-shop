import { useState } from "react";
import { products } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Modal from "./Modal";

export default function Products() {
  const [selected, setSelected] = useState(null);
  return <section className="section" id="products">
    <div className="container">
      <SectionHeading eyebrow="SHOP PRODUCTS" title="Products" text="A curated range of tyres, lubricants, batteries and automotive essentials." />
      <div className="product-grid">
        {products.map((item, i) => <Reveal key={item.id} delay={i*60}>
          <button className="product-card" onClick={() => setSelected(item)}>
            <div className="product-image"><img src={item.image} alt={item.title} /></div>
            <div><span className="eyebrow">{item.brand}</span><h3>{item.title}</h3><p>{item.description}</p><b>Enquire ↗</b></div>
          </button>
        </Reveal>)}
      </div>
    </div>
    <Modal item={selected} onClose={() => setSelected(null)} />
  </section>;
}