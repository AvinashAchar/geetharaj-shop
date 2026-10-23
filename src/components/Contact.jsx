
import { useState } from "react";
import Reveal from "./Reveal";
import { BIZ } from "../data";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = form.name.trim();
    const phone = form.phone.trim();
    const message = form.message.trim();

    if (!name || !phone) {
      setError("Please enter your name and phone number.");
      return;
    }

    if (!/^[+\d\s()-]{7,20}$/.test(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    const whatsappMessage = [
      "Hello Geetharaj Tyres & Lubricants!",
      "",
      "I would like to enquire about your services.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${form.email.trim() || "Not provided"}`,
      `Service Required: ${form.service || "Not selected"}`,
      `Message: ${message || "No additional message"}`,
      "",
      "Sent from the Geetharaj shop website.",
    ].join("\n");

    const whatsappURL =
      `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <Reveal>
          <span className="eyebrow">CONTACT US</span>

          <h2>Let's talk about your vehicle.</h2>

          <p>
            Have a question about tyres, lubricants or vehicle-care
            services? Send us your enquiry directly on WhatsApp.
          </p>

          <div className="contact-lines">
            {BIZ.phones.map((phone) => (
              <a key={phone} href={`tel:${phone}`}>
                {phone}
              </a>
            ))}

            <p>
              {BIZ.address.map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="form-card">
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              required
            />

            <input
              name="phone"
              type="tel"
              placeholder="Phone number"
              value={form.phone}
              onChange={handleChange}
              autoComplete="tel"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email address (optional)"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
            >
              <option value="">Select a service (optional)</option>
              <option value="Tyre Fitting">Tyre Fitting</option>
              <option value="Battery Fitting">Battery Fitting</option>
              <option value="Oil Change">Oil Change</option>
              <option value="Seat Cover">Seat Cover</option>
              <option value="Tank Cover">Tank Cover</option>
              <option value="Tyre Care">Tyre Care</option>
              <option value="Products Enquiry">Products Enquiry</option>
              <option value="Other">Other</option>
            </select>

            <textarea
              name="message"
              rows={5}
              placeholder="Your message"
              value={form.message}
              onChange={handleChange}
            />

            {error && (
              <p role="alert" className="contact-form-error">
                {error}
              </p>
            )}

            <button className="button button--dark" type="submit">
              Send via WhatsApp ↗
            </button>

            <p className="contact-form-note">
              WhatsApp will open with your enquiry ready to send.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
