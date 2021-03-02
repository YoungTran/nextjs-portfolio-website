import axios from "axios";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
export default function ContactForm() {
  const reRef = useRef();
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await reRef.current.executeAsync();
    reRef.current.reset();

    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: { fullName, userEmail: email, message, token },
    };
    try {
      const res = await axios(config);
      console.log(res);
      if (res.status === 200) {
        setSuccess(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full bg-theme-dark-blue rounded shadow-lg p-8  md:max-w-sm md:mx-auto">
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        size="invisible"
        ref={reRef}
      />
      {success === true ? (
        <>
          <header className="mb-3 walterTurncoat text-theme-dark-gray py-4">
            <h3 className="sm:text-xl font-poppins font-bold">
              <span className="roman-numeral">&#8547;.</span>
              You Message Has Been Sent!
            </h3>
            <div className="text-center py-8">
              <i className="fa fa-envelope text-7xl"></i>
            </div>
            <p className="text-theme-light-blue">
              I will get back to you as soon as I can!
            </p>
          </header>
        </>
      ) : (
        <>
          <header className="mb-3 walterTurncoat text-theme-dark-gray py-4">
            <h3 className="sm:text-2xl font-poppins font-bold">
              <span className="roman-numeral">&#8547;.</span>
              What's next?
            </h3>
          </header>
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <label className="block">
              <span className="text-theme-light-blue walterTurncoat text-lg font-bold underline">
                Full Name
              </span>
              <input
                type="text"
                className="mt-1 block w-full"
                name="fullName"
                placeholder="John Doe"
                required
              />
            </label>
            <label className="block">
              <span className="text-theme-light-blue walterTurncoat text-lg font-bold underline">
                Email
              </span>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full"
                placeholder="john@example.com"
                required
              />
            </label>

            <label className="block">
              <span className="text-theme-light-blue walterTurncoat text-lg font-bold underline">
                Message
              </span>
              <textarea
                name="message"
                type="textarea"
                rows="5"
                className="mt-1 block w-full"
                placeholder="Hi there, you can start typing your message here.."
                required
              />
            </label>
            <button
              type="submit"
              className="text-lg text-theme-regular-white bg-theme-light-blue hover:border-theme-light-gray hover:bg-theme-light-gray px-6 py-2 border border-theme-light-blue rounded"
            >
              <i className="fa fa-mail-forward"></i>
            </button>
          </form>
        </>
      )}
    </div>
  );
}
