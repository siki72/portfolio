import Button from "@/components/Button.jsx";
import Link from "next/link.js";
import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-title">Bonjour, je m&apos;appelle</h1>
      <h2 className="hero-title-large">Ali Missoum.</h2>
      <h3 className="hero-title-large hero-title-sub">
        Développeur web full-stack.
      </h3>
      <p className="hero-text">
        Node / Express / SQL / JavaScript / React / Nextjs, créons une interface
        web moderne, offrant une expérience utilisateur optimale&nbsp;
        <Link className="hero-link" href="/#work">
          Projets.
        </Link>
      </p>
      <div className="hero-button">
        <Button text="Contact" link="/#work" />
      </div>
    </section>
  );
};

export default Hero;
