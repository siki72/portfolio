"use client";
import Link from "next/link.js";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const Experience = () => {
  const underlineRef = useRef(null);
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    const seletedTab = () => {
      underlineRef.current.style.top = `${selected * 2.5}rem`;
    };
    seletedTab();
  }, [selected]);
  const expereinces = [
    {
      name: "Sycatle",
      role: "Stagiarirer",
      url: "https://sycatle.dev",
      Déscription: [
        "un stage en entreprise jsute avant la fin de formation,",
        "Le but de ce stage etait de pratiquer les differents technologie que j'ai appris pendant les six mois de formation",
        "j'ai eu également l'occasion de découvir encore technos comme Python, websockets .. ",
        "ce stage m'as aidé a maitriser quelques outils de collabartion comme git , Jira et faire attention et founir du clean code afain que la collaboration sois facile ",
      ],
    },
    {
      name: "3W Academy",
      role: "Aprenant",
      url: "https://www.3wa.fr",
      Déscription: [
        "Aprés une expérience en autodidacte grace aux outils disponible sur internet",
        "J'ai eu la chance d'intégrer une session de formation en présentiel qui as eu lieu prés de chez moi",
        "Sois mois d'apprentissage trés intense ou j'ai travaillé avec beacoup de serieux du amtin au soir pour aprofondire mon apprentissage",
        "Grace au cadre et suivie qu'elle offrait cette formation, j'ai pu acceller mon apprentissage des differents technologie qui fojnt aujorud'hui parite de ma Stack",
      ],
    },
  ];
  return (
    <motion.section
      className="experience"
      id="experience"
      whileInView="visible"
      whileHover={{ scale: 1.1 }}
      initial="hidden"
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      variants={{
        visible: { opacity: 1, x: 0, scale: 1 },
        hidden: { opacity: 0, x: -400, scale: 1 },
      }}
    >
      <div className="title">
        <h2>voila</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline" ref={underlineRef}></div>
          {expereinces.map((experience, index) => {
            return (
              <li
                key={index}
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
              >
                <span>{experience.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link
                  className="link"
                  target="_blank"
                  href={expereinces[selected].url}
                >
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <ul className="exp-details-list">
              {expereinces[selected].Déscription.map((desc, index) => (
                <li key={index} className="exp-details-list-item">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
