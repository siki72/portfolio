"use client";
import dynamic from "next/dynamic.js";
import Navbar from "../sections/Navbar.jsx";
import SocialIcons from "@/components/SocialIcons.jsx";
import Email from "@/components/Email.jsx";
import Hero from "../sections/Hero.jsx";
import Head from "next/head.js";
import { useState } from "react";
import Loader from "@/components/Loader.jsx";
import Loading from "@/components/Loading.jsx";
import Footer from "@/sections/Footer.jsx";
import Script from "next/script.js";

const About = dynamic(() => import("../sections/About.jsx"), {
  loading: () => <Loading />,
});
const Experience = dynamic(() => import("../sections/Experience.jsx"), {
  loading: () => <Loading />,
});
const Projects = dynamic(() => import("../sections/Projects.jsx"), {
  loading: () => <Loading />,
});
const Contact = dynamic(() => import("../sections/Contact.jsx"), {
  ssr: false,
  loading: () => <Loading />,
});

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleLoader = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 250);
  };

  return (
    <div className="container" onClick={() => setIsNavOpen(false)}>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-W1ESHF87V6"
      ></Script>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-W1ESHF87V6');
              `,
        }}
      />

      {showContent && (
        <>
          <SocialIcons />
          <Email />
          <Navbar open={isNavOpen} setOpen={setIsNavOpen} />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}

      <Loader isLoading={isLoading} handleLoader={handleLoader} />
    </div>
  );
};

export default Page;
