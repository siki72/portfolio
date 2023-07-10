import dynamic from "next/dynamic.js";
import Navbar from "../sections/Navbar.jsx";
import SocialIcons from "@/components/SocialIcons.jsx";
import Email from "@/components/Email.jsx";
import Hero from "../sections/Hero.jsx";

const About = dynamic(() => import("../sections/About.jsx"), {
  loading: () => <p>loading abour</p>,
});
const Experience = dynamic(() => import("../sections/Experience.jsx"), {
  loading: () => <p>loading abour</p>,
});
const Projects = dynamic(() => import("../sections/Projects.jsx"), {
  loading: () => <p>loading abour</p>,
});
const Contact = dynamic(() => import("../sections/Contact.jsx"), {
  ssr: false,
  loading: () => <p>loading abour</p>,
});

const Page = () => {
  return (
    <div className="container">
      <Navbar />
      <SocialIcons />
      <Email />
      <main>
        <Hero />

        <About />

        <Projects />

        <Contact />
      </main>
    </div>
  );
};

export default Page;
