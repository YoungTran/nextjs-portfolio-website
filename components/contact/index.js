import React from "react";
import ContactForm from "./contactForm";

export default function Contact() {
  return (
    <section id="contact">
      <div className="max-w-5xl mx-auto px-6 sm:px-0 py-10">
        <div className="w-full flex flex-wrap sm:space-x-36 items-center justify-center">
          <img
            src="/earth.svg"
            alt="earth-image"
            className="animate-spin-slow mb-20"
          />

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
