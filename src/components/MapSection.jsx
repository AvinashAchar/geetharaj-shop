import { BIZ } from "../data";
import Reveal from "./Reveal";

export default function MapSection() {
  return <section className="section section--soft">
    <div className="container location">
      <Reveal><span className="eyebrow">VISIT THE SHOP</span><h2>Find Geetharaj.</h2><p>{BIZ.address.map((x,i)=><span key={i}>{x}<br /></span>)}</p>
        <div className="contact-mini"><a href={`tel:${BIZ.phones[0]}`}>{BIZ.phones[0]}</a><a href={`tel:${BIZ.phones[1]}`}>{BIZ.phones[1]}</a></div>
        <a className="button button--dark" href={BIZ.mapsUrl} target="_blank" rel="noreferrer">Get Directions →</a>
      </Reveal>
      <Reveal delay={120} className="map-frame"><iframe title="Geetharaj Tyres & Lubricants location" src={`https://www.google.com/maps?q=Hiriadka%20Karnataka&output=embed`} loading="lazy" /></Reveal>
    </div>
  </section>;
}