import Reveal from "./Reveal";
import { BIZ } from "../data";

export default function Contact() {
  return <section className="section contact-section" id="contact">
    <div className="container contact-grid">
      <Reveal><span className="eyebrow">CONTACT US</span><h2>Let's talk about your vehicle.</h2><p>Call, WhatsApp or visit the shop in Hiriadka.</p>
        <div className="contact-lines"><a href={`tel:${BIZ.phones[0]}`}>{BIZ.phones[0]}</a><a href={`tel:${BIZ.phones[1]}`}>{BIZ.phones[1]}</a><p>{BIZ.address.map((x,i)=><span key={i}>{x}<br /></span>)}</p></div>
      </Reveal>
      <Reveal delay={120} className="form-card">
        <form onSubmit={e => { e.preventDefault(); alert("Thanks. Connect this form to your preferred email/form service to receive messages."); }}>
          <input required placeholder="Your name" />
          <input required type="tel" placeholder="Phone number" />
          <input type="email" placeholder="Email address" />
          <select defaultValue=""><option value="" disabled>Service required</option><option>Tyre Fitting</option><option>Battery Fitting</option><option>Oil Change</option><option>Other</option></select>
          <textarea rows="5" placeholder="Your message" />
          <button className="button button--dark" type="submit">Send Message →</button>
        </form>
      </Reveal>
    </div>
  </section>;
}