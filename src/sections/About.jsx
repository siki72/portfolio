"use client";
import Image from "next/image.js";
import Link from "next/link.js";
import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.section
      className="about"
      id="about"
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>A propos de moi</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Bonjour ! Je m&apos;appelle Ali et je suis passionné par la création
            et le développement d&apos;applications web. Mon intérêt pour ce
            domaine s&apos;est révélé en 2019 lorsque j&apos;ai écrit mes
            premières lignes de code pour créer ma première application web en
            utilisant HTML et CSS.
          </p>
          <p className="about-grid-info-text">
            Aujourd&apos;hui, j&apos;ai fait du développement front-end ma
            spécialité, je ressens toujours une grande satisfaction dans la
            création et le développement de différentes applications web. Chaque
            projet est une occasion pour moi de repousser mes limites et
            d&apos;explorer de nouvelles technologies et techniques pour offrir
            des expériences utilisateur innovantes.
          </p>

          <p className="about-grid-info-text">
            J&apos;aime partager ma passion et mes connaissances avec
            d&apos;autres passionnés par le biais de ma chaîne YouTube, où je
            propose des tutoriels détaillés pour aider les autres à acquérir les
            bases du développement.
          </p>
          <p className="about-grid-info-text">
            N&apos;hésitez pas à jeter un œil sur mon&nbsp;
            <Link
              className="link"
              target="_blank"
              href="https://github.com/siki72"
            >
              Github
            </Link>{" "}
            pour voir les dernier projets personnel sur lequel je travaille
            actuellement.&nbsp;
          </p>
          <p className="about-grid-info-text">
            Voici quelques technologies avec lesquelles j&apos;ai travaillé
            récemment :
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Nodejs</li>
            <li className="about-grid-info-list-item">MySQL</li>
            <li className="about-grid-info-list-item">Mongodb</li>
            <li className="about-grid-info-list-item">Socket.io</li>
            <li className="about-grid-info-list-item">GraphQL</li>
            <li className="about-grid-info-list-item">Html</li>
            <li className="about-grid-info-list-item">Css</li>
            <li className="about-grid-info-list-item">Sass</li>
            <li className="about-grid-info-list-item">Bootstrap</li>
            <li className="about-grid-info-list-item">Tailwindcss</li>
            <li className="about-grid-info-list-item">Tailwindcss</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Redux</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Vite</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image
              src="/pic.jpeg"
              alt="profile"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
