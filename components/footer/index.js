import Head from "next/head";
import React from "react";

export default function Footer() {
  return (
    <section id="work" className="pt-20 pb-10 mt-10">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <div className="max-w-5xl mx-auto px-6 sm:px-0">
        <header className="mb-3 walterTurncoat text-theme-dark-gray text-center">
          <h3 className="sm:text-md font-poppins font-bold">
            Designed & Developed By Young
          </h3>
        </header>
        <ul className="flex text-theme-dark-gray items-center justify-center space-x-4 text-2xl">
          <li className="cursor-pointer">
            <a href="https://www.twitter.com/ynngtran">
              <i className="fa fa-instagram hover:text-theme-azure-blue"></i>
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="https://www.twitter.com/ynngtran">
              <i className="fa fa-twitter hover:text-theme-azure-blue"></i>
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="https://www.linkedin.com/in/youngtrann">
              <i className="fa fa-linkedin hover:text-theme-azure-blue"></i>
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="https://www.github.com/youngtran">
              <i className="fa fa-github hover:text-theme-azure-blue"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
