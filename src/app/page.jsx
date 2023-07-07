import React from "react";
import Navbar from "./sections/Navbar.jsx";
import SocialIcons from "@/components/SocialIcons.jsx";
import Email from "@/components/Email.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Experience from "./sections/Experience.jsx";
import Projects from "./sections/Projects.jsx";

const page = () => {
  return (
    <div className="container">
      <Navbar />
      <SocialIcons />
      <Email />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
};

export default page;
