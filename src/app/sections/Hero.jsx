import Button from "@/components/Button.jsx";
import Link from "next/link.js";
import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-title">Bonjour, je m&apos;appelle</h1>
      <h2 className="hero-title-large">Ali Missoum</h2>
      <h3 className="hero-title-large hero-title-sub">
        I craft things for web.
      </h3>
      <p className="hero-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In vel, ullam
        at optio aperiam nam sit recusandae error libero quam quos repudiandae
        consectetur ex molestiae rerum quod beatae&nbsp;
        <Link className="hero-link" href="/#projets">
          Projets.
        </Link>
      </p>
      <div className="hero-button">
        <Button text="Contact" link="/#contact" />
      </div>
    </section>
  );
};

export default Hero;
