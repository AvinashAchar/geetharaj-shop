import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";
 import Brands from "../components/Brands"; 
 import FloatingWhatsApp from "../components/FloatingWhatsApp";
  import ScrollProgress from "../components/ScrollProgress"; 
  import BackToTop from "../components/BackToTop";

export default function BrandsPage(){return <><ScrollProgress/>
<Navbar/><main><div className="inner-hero"><div className="container"><span className="eyebrow">GEETHARAJ TYRES & LUBRICANTS</span><h1>Brands</h1><p>Explore trusted automotive brands available through the shop.</p></div></div><Brands/></main><Footer/><FloatingWhatsApp/><BackToTop/></>}
