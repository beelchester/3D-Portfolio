import { motion } from "framer-motion"
import emailjs from "@emailjs/browser";
import data from "../data.json";

const { skills: Skills, experience: Experiences, projects: Projects } = data;
import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";



export const Interface = ({ setSection }) => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

const Section = ({ children }) => {
  return (
    <motion.section
      className="h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col justify-center items-start"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } }}
    >
      {children}
    </motion.section>
  );
}

const AboutSection = ({ setSection }) => {
  return (
    <Section>
      <h1 className="sm:text-6xl sm:leading-snug text-4xl font-extrabold leading-snug">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic">Sahil Yeole</span>
      </h1>
      <motion.p
        className="sm:text-lg text-[14px] text-gray-600 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        I'm a full-stack developer passionate about
        <br />
        making software world a better place.
      </motion.p>
      <div
        className="flex flex-col">
        <motion.button
          className={`bg-indigo-600 text-white py-4 px-8  mt-16
      rounded-lg font-bold sm:text-lg text-sm`}
          onClick={() => setSection(3)}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        >
          Contact me
        </motion.button>
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 2.5,
          }}
          className="w-[80%] flex items-center justify-center "
        >
          <Socials />
        </motion.div>
      </div>
    </Section>
  );
};

const ExperienceSection = () => {
  const [active, setActive] = useState(0);
  const job = Experiences[active];
  return (
    <Section>
      <h1 className="sm:text-6xl text-4xl font-extrabold leading-snug">
        Skills
      </h1>
      <motion.div
        className="mt-4 flex flex-col gap-2 w-full max-w-3xl"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {Skills.map(({ category, items }) => (
          <div
            key={category}
            className="rounded-lg border-l-4 border-indigo-600 bg-white/40 backdrop-blur-sm px-3 py-2 text-indigo-900 text-xs md:text-base"
          >
            <strong>{category}:</strong> {items.join(", ")}
          </div>
        ))}
      </motion.div>
      <motion.h1
        className="sm:text-6xl text-4xl font-extrabold leading-snug mt-[6vh]"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        Experience
      </motion.h1>
      <motion.div
        className="mt-4 w-full flex flex-col md:flex-row gap-4 md:gap-6"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="flex md:flex-col gap-2 md:w-56 shrink-0 overflow-x-auto">
          {Experiences.map((e, i) => (
            <button
              key={e.company}
              onClick={() => setActive(i)}
              className={`text-left rounded-lg px-4 py-3 font-bold transition-colors whitespace-nowrap border-l-4 ${i === active
                ? "bg-indigo-600 text-white border-indigo-900"
                : "bg-white/40 text-indigo-900 border-transparent hover:bg-white/70"
                }`}
            >
              {e.company}
            </button>
          ))}
        </div>
        <div className="flex-1 rounded-lg bg-white/50 backdrop-blur-sm border border-indigo-200 p-5 sm:p-6 text-indigo-900 h-[24rem] overflow-y-auto ">
          <a
            href={job.link}
            className="text-2xl sm:text-3xl font-extrabold text-indigo-700 hover:underline"
          >
            {job.company}
          </a>
          <p className="font-bold mt-1">{job.role}</p>
          <p className="text-sm text-indigo-700">{job.period}</p>
          <p className="pt-3 text-sm md:text-base">{job.summary}</p>
          <ul className="mt-3 space-y-1.5 text-sm md:text-base list-disc pl-5 marker:text-indigo-600">
            {job.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Section>
  );
};

const ProjectsSection = () => {
  const [active, setActive] = useState(0);
  const project = Projects[active];
  const portrait = project.img.includes("kairos") || project.img.includes("protecjs");
  return (
    <Section>
      <h1 className="sm:text-6xl text-4xl font-extrabold leading-snug">
        Projects
      </h1>
      <motion.div
        className="mt-6 w-full flex flex-col md:flex-row gap-4 md:gap-6"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="flex md:flex-col gap-2 md:w-64 shrink-0 overflow-x-auto md:overflow-x-visible md:overflow-y-auto md:h-[62vh]">
          {Projects.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setActive(i)}
              className={`text-left rounded-lg px-4 py-2.5 font-bold transition-colors whitespace-nowrap border-l-4 ${i === active
                ? "bg-indigo-600 text-white border-indigo-900"
                : "bg-white/40 text-indigo-900 border-transparent hover:bg-white/70"
                }`}
            >
              {p.title}
            </button>
          ))}
        </div>
        <div className="flex-1 rounded-lg bg-white/50 backdrop-blur-sm border border-indigo-200 p-5 sm:p-6 text-indigo-900 h-[45vh] md:h-[62vh] flex flex-col">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-indigo-700">
              {project.title}
            </h2>
            <a
              href={project.links[0]}
              className="shrink-0 rounded-lg bg-indigo-600 text-white text-sm font-bold px-4 py-2 hover:bg-indigo-700 transition-colors"
            >
              View on GitHub
            </a>
          </div>
          <p className="mt-2 text-sm md:text-base">{project.desc}</p>
          <div className="mt-4 flex-1 min-h-0 flex items-center justify-center rounded-lg bg-indigo-900/10 p-3">
            <img
              src={project.img}
              className={`max-h-full object-contain rounded-md ${portrait ? "max-w-[40%]" : "max-w-full"}`}
            />
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
const ContactSection = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const form = useRef(null);
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const sendEmail = (e) => {
    e.preventDefault();
    form.current &&
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        () => {
          toast.success("Message sent successfully", { autoClose: 4000 });
          if (form.current) {
            (form.current).reset();
          }
        },
        () => {
          toast.error("Failed to send message", { autoClose: 4000 });
        }
      );
  };

  return (
    <Section>
      <h2 className="sm:text-6xl text-4xl font-bold">Contact me</h2>
      <div className="flex w-full sm:items-start items-center flex-col">
        <div className="mt-8 sm:mt-16 sm:p-8 p-4 rounded-md bg-white sm:w-96 w-[90%] min-w-64 max-w-full">
          <form
            ref={form}
            onSubmit={sendEmail}
          >
            <label for="from_name" className="font-medium sm:text-lg text-sm text-gray-900 block mb-1">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
              required={true}
            />
            <label
              for="from_email"
              className="font-medium text-gray-900 block mb-1 sm:mt-8 mt-4"
            >
              Email
            </label>
            <input
              type="email"
              name="from_email"
              id="email"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
              required={true}
            />
            <label
              for="email"
              className="font-medium text-gray-900 block mb-1 sm:mt-8 mt-4"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
              required={true}
            />
            <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold sm:text-lg text-sm sm:mt-16 mt-8 ">
              Submit
            </button>
          </form>
        </div>
        <div className={`w-96 max-w-full flex justify-center items-center ${isMobile ? "mt-8 mb-8" : "mt-10"}`}>
          <a
            className="bg-indigo-600 rounded-lg flex justify-center items-center h-12 max-w-56 text-white py-4 px-8 sm:text-md text-sm font-bold transition ease-in-out hover:bg-white duration-300 hover:border-2 hover:scale-105 border-indigo-600 hover:text-indigo-600"
            href="https://bit.ly/sahilyeoleresume-oct24">
            Download Resume
          </a>
        </div>
      </div>
    </Section >
  );
};

const Socials = () => {
  const [isSmall, setIsSmall] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex  justify-between text-indigo-800 items-center mt-5 w-1/2">
      <a
        href="https://www.github.com/beelchester"
        target="_blank"
        className="hover:bg-white rounded-xl p-1 mr-2 transition duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={faGithub} size={isSmall ? "md" : "lg"} />
      </a>
      <a
        href="https://x.com/sahil46y"
        target="_blank"
        className="hover:bg-white rounded-xl p-1 mr-2 transition duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={faXTwitter} size={isSmall ? "md" : "lg"} />
      </a>
      <a
        href="https://www.linkedin.com/in/sahilyeole/"
        target="_blank"
        className="hover:bg-white rounded-xl p-1 mr-2 transition duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={faLinkedin} size={isSmall ? "md" : "lg"} />
      </a>
    </div>
  )
}
