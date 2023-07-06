import Logo from "@/components/Logo.jsx";
import Link from "next/link.js";
import React from "react";

const Navbar = () => {
  const datas = [
    { name: "A propos", link: "/#apropos" },
    { name: "Experience", link: "/#experience" },
    { name: "Projets", link: "/#projets" },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];
  return (
    <nav>
      <div className="wrapper">
        <div className="brand">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="nav-items">
          <div className="nav-items-list">
            {datas.map(({ name, link }) => (
              <li key={name} className="nav-items-list-item">
                <Link href={link} className="nav-items-list-item-link">
                  {name}
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
