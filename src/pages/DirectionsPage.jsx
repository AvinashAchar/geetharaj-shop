import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import ScrollProgress from "../components/ScrollProgress";
import BackToTop from "../components/BackToTop";
import { BIZ } from "../data";
import Reveal from "../components/Reveal";

export default function DirectionsPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <section className="inner-hero inner-hero--compact">
          <div className="container">
            <span className="eyebrow">VISIT GEETHARAJ</span>
            <h1>Directions</h1>
            <p>Find Geetharaj Tyres & Lubricants in Hiriadka with the address and map below.</p>
          </div>
        </section>

        <section className="section directions-section">
          <div className="container directions-grid">
            <Reveal className="directions-info">
              <span className="eyebrow">SHOP LOCATION</span>
              <h2>Come visit us.</h2>
              <p className="directions-lead">
                Our shop is located at Rajarajeshwari Complex, opposite Oasis Hall, Hiriadka.
              </p>

              <div className="address-block">
                {BIZ.address.map((line, i) => <div key={i}>{line}</div>)}
              </div>

              <div className="directions-contact">
                <a href={`tel:${BIZ.phones[0]}`}>{BIZ.phones[0]}</a>
                <a href={`tel:${BIZ.phones[1]}`}>{BIZ.phones[1]}</a>
              </div>

              <div className="directions-actions">
                <a className="button button--dark" href={BIZ.mapsUrl} target="_blank" rel="noreferrer">
                  Open in Google Maps →
                </a>
                <a className="button button--outline" href={`https://wa.me/${BIZ.whatsapp}`} target="_blank" rel="noreferrer">
                  WhatsApp Us
                </a>
              </div>
            </Reveal>

            <Reveal className="directions-map" delay={120}>
              <div className="map-label">HIRIADKA • GEETHARAJ</div>
              <iframe
                title="Geetharaj Tyres & Lubricants map"
                src="https://www.google.com/maps?q=Hiriadka%20Karnataka&output=embed"
                loading="lazy"
              />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
