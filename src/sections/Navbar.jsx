"use client";
import Logo from "@/components/Logo.jsx";
import Link from "next/link.js";
import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button.jsx";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
const Navbar = ({ open, setOpen, element }) => {
  const pathname = usePathname();
  const liRefs = useRef([]);
  const down = true;
  const datas = [
    { name: "A propos", link: "/#about", active: "about" },
    { name: "Experience", link: "/#experience", active: "experience" },
    { name: "Projets", link: "/#work", active: "work" },
    {
      name: "Contact",
      link: "/#contact",
      active: "contact",
    },
  ];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 32 ? setIsVisible(true) : setIsVisible(false);
    });
  }, []);

  useEffect(() => {
    const main = document.querySelector("main");
    if (open) {
      main.setAttribute("class", "blur");
    } else {
      main.removeAttribute("class");
    }
  });

  return (
    <nav>
      <div className={`wrapper ${isVisible ? "blurNav" : ""}`}>
        <div className="brand">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <motion.div
          className="btnContainer"
          onClick={(e) => {
            setOpen((prev) => !prev);
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
                className={open ? "line top" : "line"}
                width={80}
                height={10}
                x={10}
                y={25}
                rx={5}
                fill="#f86f03"
              ></rect>
              <rect
                className={open ? "line middle" : "line"}
                width={80}
                height={10}
                x={10}
                y={45}
                rx={5}
                fill="#f86f03"
              ></rect>
              <rect
                className={open ? "line bottom" : "line"}
                width={80}
                height={10}
                x={10}
                y={65}
                rx={5}
                fill="#f86f03"
              ></rect>
            </svg>
          </button>
        </motion.div>

        <div className={`nav-items ${open ? "showNav" : ""}`}>
          <ul className="nav-items-list">
            {datas.map(({ name, link, active }, index) => (
              <motion.li
                key={name}
                className={`nav-items-list-item ${
                  element === active ? "active-link" : ""
                } `}
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
            <Button
              text="CV"
              link="https://alimissoum.fr/resume-ali-missoum.pdf"
              down={down}
            />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
