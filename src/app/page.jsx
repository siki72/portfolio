import React from "react";
import Navbar from "./sections/Navbar.jsx";
import SocialIcons from "@/components/SocialIcons.jsx";
import Email from "@/components/Email.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";

const page = () => {
  return (
    <div className="container">
      <Navbar />
      <SocialIcons />
      <Email />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default page;
