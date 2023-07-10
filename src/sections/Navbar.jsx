"use client";
import Logo from "@/components/Logo.jsx";
import Link from "next/link.js";
import React, { useEffect, useState } from "react";
import Button from "../components/Button.jsx";

const Navbar = () => {
  const datas = [
    { name: "A propos", link: "/#about" },
    { name: "Experience", link: "/#experience" },
    { name: "Projets", link: "/#work" },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 32 ? setIsVisible(true) : setIsVisible(false);
    });
  }, []);

  return (
    <nav>
      <div className={`wrapper ${isVisible ? "blur" : ""}`}>
        <div className="brand">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="nav-items">
          <ul className="nav-items-list">
            {datas.map(({ name, link }) => (
              <li key={name} className="nav-items-list-item">
                <Link href={link} className="nav-items-list-item-link">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-items-button">
            <Button text="CV" link="http://localhost:3000/cv.pdf" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
