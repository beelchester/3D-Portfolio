import { motion } from "framer-motion"
import emailjs from "@emailjs/browser";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Projects } from "../content";
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

  return (
    <Section>
      <h1 className="sm:text-6xl text-4xl font-extrabold leading-snug">
        Skills
      </h1>
      <motion.p
        className="md:text-lg text-sm text-indigo-900 mt-4"
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
          delay: 1,
        }}
      >
        <strong>Programming languages:</strong> TypeScript, Rust, Go, Python, C, Dart
        <br />
        <strong>Front-End Tech:</strong> NextJS, React, React Native, Flutter, Redux, TailwindCSS
        <br />
        <strong>Back-End Tech:</strong> Node, Express, Prisma, GraphQL, Actix, Gin, MongoDB, PostgreSQL
        <br />
        <strong>DevOps:</strong> Docker, CI/CD, GitHub Actions
        <br />
      </motion.p>
      <motion.h1
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
        className="sm:text-6xl text-4xl font-extrabold leading-snug pt-8">
        Experience
      </motion.h1>
      <motion.p
        className="text-sm md:text-lg text-indigo-900 mt-4 h-[50%]"
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
        <div className="bg-white bg-opacity-90 rounded-lg p-4 shadow-md h-[50%] overflow-scroll">
          <a href="https://github.com/tailcallhq"
            className="text-2xl font-extrabold underline hover:cursor-pointer">
            Tailcall
          </a>
          <p className="font-bold">SDE Intern</p>
          <p className="">July 2024 - September 2024</p>

          <p className="pt-3">
            Tailcall is an emerging open-source Rust project that provides easy orchestration to build high-performance GraphQL backends.

            <br />
            • Enhanced the implementation of GraphQL benchmarks for comparing the performance of various GraphQL frameworks, resulting in more accurate and diverse benchmark cases.
            <br />
            • Developed and integrated Grafana K6 testing with InfluxDB for storage, utilizing Grafana visualizations to generate automated performance graphs.
            <br />
            • Optimized the utilization of LLMs to enhance Tailcall’s schema generation capabilities.
            <br />
            • Implemented a feature to support custom headers for gRPC reflection server requests.
            <br />
            • Developed a reliable workflow for automating the publication of blogs to external platforms.
            <br />
          </p>

        </div>
        <div className="bg-white bg-opacity-90 rounded-lg p-4 shadow-md mt-4 h-[50%] overflow-scroll">
          <a href="https://github.com/rustdesk/rustdesk/pulls?q=is:pr+author:beelchester"
            className="text-2xl font-extrabold underline hover:cursor-pointer">
            RustDesk
          </a>
          <p className="font-bold">SDE Intern</p>
          <p className="">August 2023 - January 2024</p>

          <p className="pt-3">
            Rustdesk, ranked among the top 4 Rust projects on GitHub and funded by OSS Capital, is an open-source remote desktop software developed in Rust and Flutter.

            <br />
            • Fixed over 30 bugs, enhancing software stability and user experience.

            <br />
            • Implemented multiple features, prioritizing improvements for Wayland Linux and Windows support and UI enhancements.

            <br />
            • Introduced a scam alert feature, leading to a reduction in fraudulent activities.

            <br />
            • Continued involvement post-internship by collaborating on a funded feature for Auto Display Switch upon cursor/window switch during remote sessions.

            <br />
            • Played a key role in the project’s growth, contributing to a substantial increase in GitHub stars from 40k to 65k.
            <br />
          </p>

        </div>
      </motion.p>
    </Section>
  );
};

const ProjectsSection = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  return (
    <Section>
      <h1 className="sm:text-6xl text-4xl pt-8 font-extrabold leading-snug">
        Projects
      </h1>
      <div className="flex justify-center items-center sm:h-full h-3/4 w-full mt-12">
        <Swiper loop={true} className="mySwiper" navigation={!isMobile} pagination={true} modules={[Navigation, Pagination]}>
          {Projects.map((p) =>
            <SwiperSlide key={p.title}>
              <div className="text-white flex flex-col items-center h-full h-max-[1rem] justify-around p-2 py-5">
                <a href={p.links[0]} className="sm:text-3xl text-2xl font-extrabold hover:underline">
                  {p.title}
                </a>
                <a href={p.links[0]} className="flex justify-center items-center w-[85%] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                  <img src={p.img} />
                </a>
                <p className="sm:text-lg text-[15px] pb-4">
                  {p.desc}
                </p>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>

    </Section >
  )
}
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
