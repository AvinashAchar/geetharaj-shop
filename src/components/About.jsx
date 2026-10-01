import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section className="section" id="about">

      <div className="container split">

        {/* =========================
            OWNER IMAGE
        ========================== */}
        <Reveal className="about-image-wrap">

          <button
            type="button"
            className="image-button"
            onClick={() => setOpen(true)}
          >

            <img
              src="/gallery/owner.jpeg"
              alt="Geetharaj Tyres and Lubricants Owner"
            />

            <span>VIEW PROFILE ↗</span>

          </button>

        </Reveal>


        {/* =========================
            ABOUT CONTENT
        ========================== */}
        <Reveal
          className="about-copy"
          delay={100}
        >

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

          <a
            className="text-link"
            href="/contact"
          >
            Get in touch →
          </a>

        </Reveal>

      </div>


      {/* ==================================================
          OWNER PROFILE MODAL
      =================================================== */}

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
              aria-label="Close"
            >
              ×
            </button>


            {/* =========================
                OWNER IMAGE
            ========================== */}

            <div className="owner-modal-image">

              <img
                src="/gallery/owner.jpeg"
                alt="Geetharaj Tyres and Lubricants Owner"
              />

            </div>


            {/* =========================
                OWNER INFORMATION
            ========================== */}

            <div className="owner-modal-content">

              <span className="eyebrow">
                GEETHARAJ TYRES & LUBRICANTS
              </span>


              <h3>
                Owner & Management
              </h3>


              <p className="owner-description">
                Geetharaj Tyres & Lubricants serves customers
                in Hiriadka with tyres, lubricants, batteries
                and essential vehicle-care services under one roof.
              </p>


              {/* =========================
                  SERVICES
              ========================== */}

              <div className="owner-services">

                <span>Tyre Fitting, </span>

                <span>Oil Change, </span>

                <span>Battery Fitting, </span>

                <span>Seat Cover, </span>

                <span>Tank Cover, </span>

                <span>Tyre Care.</span>

              </div>


              {/* =========================
                  PHONE NUMBERS
              ========================== */}

              <div className="owner-contact">

                <a href="tel:9972868103">

                  <small>PHONE: </small>

                  <strong>
                    9972868103, 
                  </strong>

                </a>


                <a href="tel:9611455165">

                  <small> PHONE: </small>

                  <strong>
                    9611455165
                  </strong>

                </a>

              </div>


              {/* =========================
                  SHOP LOCATION
              ========================== */}

              <div className="owner-location">

                <span>
                  SHOP LOCATION
                </span>

                <p>
                  Rajarajeshwari Complex
                  <br />
                  Opposite Oasis Hall
                  <br />
                  Hiriadka
                </p>

              </div>


              {/* =========================
                  ACTION BUTTONS
              ========================== */}

              <div className="owner-actions">

                <a
                  href="tel:9972868103"
                  className="owner-action primary"
                >
                  Call Now - 
                </a>


                <a
                  href="https://wa.me/919972868103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="owner-action whatsapp"
                >
                  - WhatsApp
                </a>

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}