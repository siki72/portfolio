"use client";
import Image from "next/image.js";
import Link from "next/link.js";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
const Projects = () => {
  const projectsData = [
    {
      image: "/project1.webp",
      projectName: "Sunshine villas",
      projectLink: "https://netlify.com",
      projectDescription:
        "Une App de réservation, elle offre la possibilité de consulter les disponibilités et réserver en ligne, avec un système de paiement sécurisé. Elle offre un tableau de bord complet pour gérer l'établissement. ",
      projectTech: [
        "NodeJs",
        "MySQL",
        "Vite",
        "React",
        "Redux Toolkit",
        "SCSS",
        "Stripe",
      ],
      projectExternalLinks: {
        github: "https://github.com/siki72/alimissoum",
        externalLink: "",
      },
    },
    {
      image: "/newproject2.webp",
      projectName: "Hikaya",
      projectLink: "https://netlify.com",
      projectDescription:
        "Hikaya est une app de messagerie instantanée. Elle offre la possibilité de savoir si un utilisateur est en ligne, si vos messages ont été lus par vos destinataires avec le fameux lu, et l'incontournable. est en train d'écrire.",
      projectTech: [
        "Nodejs",
        "MongoDB",
        "Socket.io",
        "JWT",
        "Sass",
        "Redux",
        "React",
      ],
      projectExternalLinks: {
        github: "https://github.com/siki72/hikaya",
        externalLink: "",
      },
    },
    {
      image: "/project3.webp",
      projectName: "Netflix App",
      projectLink: "https://netlify.com",
      projectDescription:
        "Dans le cadre de mon apprentissage, j'ai entrepris la réalisation d'un clone de la célèbre plateforme Netflix. Mon objectif était de m'exercer avec les technologies que j'ai apprises et de les mettre en pratique de manière concrète.",
      projectTech: ["React", "Node.js", "MongoDB", "Express", "Redux Toolkit"],
      projectExternalLinks: {
        github: "https://github.com/siki72/Netflix_clone",
        externalLink: "",
      },
    },
  ];
  return (
    <motion.section
      className="projects"
      id="work"
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      variants={{
        visible: { opacity: 1, x: 0, scale: 1 },
        hidden: { opacity: 0, x: 100, scale: 1 },
      }}
    >
      <div className="title">
        <h2>Quelques Projets</h2>
      </div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <div className="project" key={projectName}>
                <div className="project-image">
                  <motion.div
                    className="project-image-container"
                    whileHover={{ zIndex: 10 }}
                    transition={{
                      ease: "easeInOut",
                      duration: 1,
                    }}
                  >
                    <Image
                      className="project-image-container-img"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      src={image}
                      fill={true}
                      alt={projectName}
                      loading="lazy"
                    />
                  </motion.div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        target="_blank"
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        target="_blank"
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            );
          }
        )}
      </div>
    </motion.section>
  );
};

export default Projects;
