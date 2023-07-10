import Image from "next/image.js";
import Link from "next/link.js";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
const Projects = () => {
  const projectsData = [
    {
      image: "/project-1.jpeg",
      projectName: "Sunshine villas",
      projectLink: "https://netlify.com",
      projectDescription:
        "Une App de réservation,elle offre la possibilité de consulter les disponibilités et réserver en liogne, avec un système de paiement sécurisé. Elle offre un tableau de bord complet pour gérer les réservations, les arrivées .. ",
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
      image: "/project2.jpeg",
      projectName: "Hikaya",
      projectLink: "https://netlify.com",
      projectDescription:
        "Hikaya est une app de messagerie instantané. Elle offre la possibilité de savoir si un utilisateur est en ligne, si vos messages ont été lus par vos destinataires avec le fameux lu, et l'incontournable .. est en train d'écrire.",
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
      image: "/project-3.jpeg",
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
    <section className="projects" id="work">
      <div className="title">
        <h2>Some Things I’ve Built</h2>
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
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image
                      src={image}
                      fill
                      alt={projectName}
                      quality={100}
                      loading="lazy"
                    />
                  </div>
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
    </section>
  );
};

export default Projects;
