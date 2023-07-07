import React from "react";
import Navbar from "./sections/Navbar.jsx";
import SocialIcons from "@/components/SocialIcons.jsx";
import Email from "@/components/Email.jsx";
import Hero from "./sections/Hero.jsx";

const page = () => {
  return (
    <div className="container">
      <Navbar />
      <SocialIcons />
      <Email />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default page;
