
import { BIZ } from "../data";

export default function FloatingWhatsApp() {
  return (
    <a
      className="floating-wa"
      href={`https://wa.me/${BIZ.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Geetharaj on WhatsApp"
    >
      <svg
        className="floating-wa-icon"
        viewBox="0 0 32 32"
        width="30"
        height="30"
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M16.02 3.2A12.65 12.65 0 0 0 5.15 22.32L3.4 28.7l6.54-1.71A12.67 12.67 0 1 0 16.02 3.2Zm0 22.99c-1.9 0-3.77-.5-5.4-1.46l-.39-.23-3.88 1.02 1.04-3.78-.25-.4a10.3 10.3 0 1 1 8.88 4.85Zm5.65-7.72c-.31-.16-1.85-.92-2.14-1.02-.29-.11-.5-.16-.71.16-.21.31-.81 1.02-.99 1.23-.18.21-.36.23-.67.08-.31-.16-1.31-.48-2.49-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.61s1.13 3.03 1.29 3.24c.16.21 2.22 3.39 5.37 4.75.75.32 1.33.52 1.78.66.75.24 1.43.2 1.97.12.6-.09 1.85-.76 2.11-1.5.26-.74.26-1.38.18-1.51-.08-.13-.29-.21-.6-.37Z" />
      </svg>

      <span className="floating-wa-label">Chat with Geetharaj</span>
    </a>
  );
}
