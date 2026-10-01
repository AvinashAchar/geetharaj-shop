import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProductsPage from "./pages/ProductsPage";
import BrandsPage from "./pages/BrandsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import DirectionsPage from "./pages/DirectionsPage";
import "./App.css";

export default function App(){
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/services" element={<ServicesPage/>}/>
      <Route path="/products" element={<ProductsPage/>}/>
      <Route path="/brands" element={<BrandsPage/>}/>
      <Route path="/gallery" element={<GalleryPage/>}/>
      <Route path="/directions" element={<DirectionsPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
    </Routes>
  </BrowserRouter>
}
