import Logo from "@/components/Logo.jsx";
import Link from "next/link.js";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="wrapper">
        <div className="brand">
          <Link href="/youtube.com">
            <Logo />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
