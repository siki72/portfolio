"use client";
import Link from "next/link.js";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const Experience = () => {
  const underlineRef = useRef(null);
  const [selected, setSelected] = useState(0);
  const screenWidth = window.innerWidth;
  useEffect(() => {
    const seletedTab = () => {
      if (screenWidth > 950) {
        console.log("oui");
        underlineRef.current.style.top = `${selected * 2.5}rem`;
      } else {
        underlineRef.current.style.left = `${selected * 8}rem`;
      }
    };
    seletedTab();
    return () => {
      if (screenWidth > 950) {
        underlineRef.current.style.top = "0";
      } else {
        underlineRef.current.style.left = "0";
      }
    };
  }, [selected, screenWidth]);
  const expereinces = [
    {
      name: "Sycatle",
      role: "Stagiaire",
      url: "https://sycatle.dev",
      Déscription: [
        "J'ai effectué un stage en entreprise juste avant la fin de ma formation. L'objectif principal de ce stage était de mettre en pratique les différentes technologies que j'avais apprises au cours des six derniers mois de formation. De plus, j'ai eu l'opportunité de découvrir de nouvelles technologies telles que Python et les websockets.",
        "Ce stage m'a été bénéfique à plusieurs niveaux. Tout d'abord, il m'a permis de renforcer ma maîtrise des outils de collaboration tels que Git et Jira, qui sont essentiels pour travailler en équipe. J'ai appris à utiliser ces outils de manière efficace afin de faciliter la collaboration avec mes collègues.",
        "De plus, ce stage m'a encouragé à porter une attention particulière à la qualité du code que je produis. J'ai compris l'importance de fournir un code propre et bien structuré, ce qui facilite la maintenance et la compréhension du code par les autres membres de l'équipe",
        "En résumé, ce stage en entreprise a été une expérience précieuse pour mettre en pratique mes compétences techniques acquises lors de ma formation, découvrir de nouvelles technologies et développer mes compétences en collaboration et en écriture de code de qualité.",
      ],
    },
    {
      name: "3W Academy",
      role: "Apprenant",
      url: "https://www.3wa.fr",
      Déscription: [
        "Après avoir acquis une expérience en autodidacte en utilisant les ressources disponibles sur internet, j'ai eu la chance d'intégrer une session de formation en présentiel qui se déroulait près de chez moi.",
        "Cette période de six mois d'apprentissage intense a été une occasion précieuse pour approfondir mes connaissances. J'ai travaillé avec détermination pour explorer en profondeur les différentes technologies qui font désormais partie intégrante de ma pile technologique.",
        "La formation offrait un cadre structuré et un suivi personnalisé, ce qui m'a permis d'accélérer mon apprentissage. J'ai pu bénéficier d'un encadrement solide, de ressources pédagogiques de qualité et d'exercices pratiques pour consolider mes compétences",
        "Grâce à cette formation, j'ai pu combler rapidement mes lacunes, élargir mes connaissances et me familiariser avec les dernières technologies. J'ai également pu acquérir une compréhension approfondie de ma stack technologique actuelle",
      ],
    },
  ];
  return (
    <motion.section
      className="experience"
      id="experience"
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }}
    >
      <div className="title">
        <h2>Mes expériences</h2>
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
                  <p>{desc}</p>
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
