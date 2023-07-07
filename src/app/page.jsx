import React from "react";
import Navbar from "./sections/Navbar.jsx";
import SocialIcons from "@/components/SocialIcons.jsx";
import Email from "@/components/Email.jsx";

const page = () => {
  return (
    <div className="container">
      <Navbar />
      <SocialIcons />
      <Email />
    </div>
  );
};

export default page;
