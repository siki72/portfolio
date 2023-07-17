"use client";
import dynamic from "next/dynamic.js";
import Navbar from "../sections/Navbar.jsx";
import SocialIcons from "@/components/SocialIcons.jsx";
import Email from "@/components/Email.jsx";
import Hero from "../sections/Hero.jsx";

import { useEffect, useReducer, useRef, useState } from "react";
import Loader from "@/components/Loader.jsx";
import Loading from "@/components/Loading.jsx";
import Footer from "@/sections/Footer.jsx";
import Script from "next/script.js";
import Projects from "@/sections/Projects.jsx";

const About = dynamic(() => import("../sections/About.jsx"), {
  loading: () => <Loading />,
});
const Experience = dynamic(() => import("../sections/Experience.jsx"), {
  loading: () => <Loading />,
});
const Cards = dynamic(() => import("../sections/Cards.jsx"), {
  loading: () => <Loading />,
});
const Contact = dynamic(() => import("../sections/Contact.jsx"), {
  ssr: false,
  loading: () => <Loading />,
});

const Page = () => {
  const [element, setElement] = useState("");
  const childsRef = useRef([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleLoader = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 250);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          setElement(() => entry.target.firstChild.id);
        } else if (window.scrollY < 400) {
          setElement("");
        }
      });
    });

    childsRef.current.map((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [showContent]);
  console.log(window.scrollY);

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
          <header>
            <Navbar open={isNavOpen} setOpen={setIsNavOpen} element={element} />
          </header>
          <main>
            <section>
              <Hero />
            </section>
            <section ref={(aboutRef) => childsRef.current.push(aboutRef)}>
              <About />
            </section>
            <section
              ref={(experienceRef) => childsRef.current.push(experienceRef)}
            >
              <Experience />
            </section>
            <section ref={(cardsRef) => childsRef.current.push(cardsRef)}>
              <Projects />
            </section>
            <section ref={(contactRef) => childsRef.current.push(contactRef)}>
              <Contact />
            </section>
          </main>
          <Footer />
        </>
      )}

      <Loader isLoading={isLoading} handleLoader={handleLoader} />
    </div>
  );
};

export default Page;
