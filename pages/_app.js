import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import About from "../components/about";
import Contact from "../components/contact";
import Experience from "../components/experience";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Nav from "../components/nav";
import Work from "../components/work";
import * as gtag from "../lib/gtag";
import "../styles/globals.css";
import { getRepos } from "./api/getRepos";

function MyApp({ Component, pageProps }) {
  const [propWindow, setWindow] = useState();
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    let timer = setTimeout(() => {
      setWindow(window);
      const reposPromise = fetchRepo();
      reposPromise.then((res) => {
        setRepos(res);
      });
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const fetchRepo = async () => {
    const repos = await getRepos();
    return repos;
  };

  return (
    <div className="flex-col items-center justify-center">
      <Head>
        <title>Young Tran</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {propWindow && repos.length > 0 ? (
        <>
          <Nav window={propWindow} />
          <Hero />
          <About />
          <Experience />
          <Work repos={repos} />
          <Contact />
          <Footer />
        </>
      ) : (
        <div className="flex justify-center">
          <div className="loadingio-spinner-eclipse-pkisrv0tyud mt-48">
            <div className="ldio-8nmg28laijq">
              <div></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyApp;
