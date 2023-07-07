import React from "react";
import Navbar from "./sections/Navbar.jsx";
import SocialIcons from "@/components/SocialIcons.jsx";

const page = () => {
  return (
    <div className="container">
      <Navbar />
      <SocialIcons />
    </div>
  );
};

export default page;
