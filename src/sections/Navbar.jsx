"use client";
import Logo from "@/components/Logo.jsx";
import Link from "next/link.js";
import React, { useEffect, useState } from "react";
import Button from "../components/Button.jsx";
import { motion } from "framer-motion";
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
  const [isOpen, setIsOpen] = useState(false);
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 32 ? setIsVisible(true) : setIsVisible(false);
    });
  }, []);
  useEffect(() => {
    const links = document.querySelectorAll(".nav-items-list-item-link");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        console.log("link");
        setIsOpen(false);
      });
    });
    const nav = document.querySelector(".nav-items");
    nav?.addEventListener("click", (e) => {
      console.log("nav");
      e.stopPropagation();
    });
    const html = document.querySelector("html");
    if (isOpen) {
      html?.addEventListener("click", (e) => {
        console.log("html");
        setIsOpen(!isOpen);
      });
    }
    const btn = document.querySelector(".btnContainer");
    btn.addEventListener("click", (e) => {
      console.log("btn");
      e.stopPropagation();
      setIsOpen(!isOpen);
    });
    return;
  }, [isOpen]);

  useEffect(() => {
    const main = document.querySelector("main");
    if (isOpen) {
      main.setAttribute("class", "blur");
    } else {
      main.removeAttribute("class");
    }
  });

  return (
    <nav>
      <div className={`wrapper ${isVisible ? "blurNav" : ""}`}>
        <div
          className="brand"
          /* initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }} */
        >
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <motion.div
          className="btnContainer"
          onClick={(e) => {
            setIsOpen((isOpen) => !isOpen);
            e.stopPropagation();
          }}
        >
          <button
            className="btn btnone"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <svg className="hamburger" viewBox="0 0 100 100" width={30}>
              <rect
                className={isOpen ? "line top" : "line"}
                width={80}
                height={10}
                x={10}
                y={25}
                rx={5}
              ></rect>
              <rect
                className={isOpen ? "line middle" : "line"}
                width={80}
                height={10}
                x={10}
                y={45}
                rx={5}
              ></rect>
              <rect
                className={isOpen ? "line bottom" : "line"}
                width={80}
                height={10}
                x={10}
                y={65}
                rx={5}
              ></rect>
            </svg>
          </button>
        </motion.div>

        <div className="nav-items">
          <ul className="nav-items-list">
            {datas.map(({ name, link }, index) => (
              <motion.li
                key={name}
                className="nav-items-list-item"
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.3 + index * 0.1,
                }}
              >
                <Link href={link} className="nav-items-list-item-link">
                  {name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.div
            className="nav-items-button"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.8 }}
          >
            <Button text="CV" link="http://localhost:3000/cv.pdf" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
