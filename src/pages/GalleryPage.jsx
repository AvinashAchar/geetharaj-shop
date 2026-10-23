
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import ScrollProgress from "../components/ScrollProgress";
import BackToTop from "../components/BackToTop";

export default function GalleryPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main className="gallery-page">
        <div className="inner-hero">
          <div className="container">
            <span className="eyebrow">
              GEETHARAJ TYRES & LUBRICANTS
            </span>
            <h1>Our Gallery</h1>
            <p>
              A closer look at our shop, products and vehicle-care services.
            </p>
          </div>
        </div>

        <Gallery />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
