import Image from "next/image.js";
import Link from "next/link.js";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
const Cards = () => {
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
        externalLink: "https://luxury-villas-zanz.netlify.app/",
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
        externalLink: "https://hikaya.netlify.app/",
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
        externalLink: "https://github.com/siki72/Netflix_clone",
      },
    },
  ];
  return (
    <section className="projects" id="projects">
      <div className="title">
        <h2>Quelques Projets</h2>
      </div>
      <div className="cards">
        {projectsData.map((project, index) => (
          <div key={index} className={`card ${"card" + index}`}>
            <div className="main">
              <h2>{project.projectName}</h2>
              <Image
                className={`project-img ${"img" + index.toString()}`}
                src={project.image}
                alt={project.projectName}
                width={600}
                height={470}
              />
              <p className="description">{project.projectDescription}</p>
              <div className="links">
                <div className="github-link">
                  <Link
                    target="_blank"
                    href={project.projectExternalLinks.github}
                    className="project-info-links-item-link"
                    aria-label={project.projectName}
                  >
                    <FiGithub />
                  </Link>
                </div>
                <div className="urlProject">
                  <Link
                    target="_blank"
                    href={project.projectExternalLinks.externalLink}
                    className="project-info-links-item-link"
                    aria-label={project.projectName}
                  >
                    <FiExternalLink />
                  </Link>
                </div>
              </div>
              <ul className="stack">
                {project.projectTech.map((tech) => {
                  return (
                    <li key={tech} className="tech">
                      {tech}
                    </li>
                  );
                })}
              </ul>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
