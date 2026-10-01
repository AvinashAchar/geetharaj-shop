import { BIZ } from "../data";
export default function FloatingWhatsApp() {
  return <a className="floating-wa" href={`https://wa.me/${BIZ.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><span>◔</span><i>Chat with Geetharaj</i></a>;
}