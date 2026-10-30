
import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section className="section" id="about">
      <div className="container split">

        {/* OWNER IMAGE */}
        <Reveal className="about-image-wrap">
          <button
            type="button"
            className="image-button"
            onClick={() => setOpen(true)}
          >
            <img
              src="/gallery/owner.jpeg"
              alt="Sandesh Acharya - Geetharaj Tyres and Lubricants"
            />
            <span>VIEW PROFILE ↗</span>
          </button>
        </Reveal>

        {/* ABOUT CONTENT */}
        <Reveal className="about-copy" delay={100}>
          <SectionHeading
            eyebrow="ABOUT THE SHOP"
            title="Automotive care, kept simple."
            text="Geetharaj Tyres & Lubricants provides tyres, lubricants, batteries and essential vehicle-care services in Hiriadka."
          />

          <p>
            From tyre fitting and oil changes to battery fitting,
            seat covers and tank covers, we bring everyday
            automotive needs together in one convenient location.
          </p>

          <p>
            Our focus is simple — quality automotive products,
            practical service and a convenient experience for
            every customer.
          </p>

          <a className="text-link" href="/contact">
            Get in touch →
          </a>
        </Reveal>
      </div>

      {/* OWNER PROFILE MODAL */}
      {open && (
        <div
          className="modal-backdrop"
          onClick={() => setOpen(false)}
        >
          <div
            className="owner-modal"
            onClick={(event) => event.stopPropagation()}
          >

            {/* CLOSE BUTTON */}
            <button
              type="button"
              className="modal-close"
              onClick={() => setOpen(false)}
              aria-label="Close profile"
            >
              ×
            </button>

            {/* OWNER PHOTO */}
            <div className="owner-modal-image">
              <img
                src="/gallery/owner.jpeg"
                alt="Sandesh Acharya"
              />
              
            </div>

            {/* OWNER INFORMATION */}
            <div className="owner-modal-content">

              <span className="eyebrow">
                GEETHARAJ TYRES & LUBRICANTS
              </span>

              <h3>Sandesh Acharya</h3>

              <p className="owner-role">
                Owner & Management
              </p>

              <div className="owner-description">
                <p>
                  Welcome to Geetharaj Tyres & Lubricants.
                  We provide quality tyres, lubricants,
                  batteries and essential vehicle-care
                  services in Hiriadka.
                </p>

                <p>
                  From tyre fitting and oil changes to
                  battery fitting, seat covers and tank
                  covers, we bring your everyday automotive
                  needs under one roof.
                </p>
              </div>

              {/* SERVICES */}
              <div className="owner-services">
                <span>OUR SERVICES</span>
                <p>
                  Tyre Fitting <i>•</i> Oil Change <i>•</i>
                  Battery Fitting <i>•</i> Seat Covers
                  <i> • </i> Tank Covers <i>•</i> Tyre Care
                </p>
              </div>

              {/* CONTACT DETAILS */}
              <div className="owner-details">

                <div>
                  <span>PHONE</span>
                  <a href="tel:9972868103">+91 99728 68103</a>
                  <a href="tel:9611455165">+91 96114 55165</a>
                </div>

                <div>
                  <span>SHOP LOCATION</span>
                  <p>Rajarajeshwari Complex</p>
                  <p>Opposite Oasis Hall, Hiriadka</p>
                </div>

              </div>

              {/* ACTION BUTTONS */}
              <div className="owner-actions">
                <a
                  href="tel:9972868103"
                  className="owner-action primary"
                >
                  Call Now ↗
                </a>

                <a
                  href="https://wa.me/919972868103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="owner-action whatsapp"
                >
                  WhatsApp ↗
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
