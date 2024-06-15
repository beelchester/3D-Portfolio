import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Projects } from "../content";


export const Interface = ({ setSelection }) => {
  return (
    <div className="flex flex-col items-center w-screen">

      <AboutSection />
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

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic">Sahil Yeole</span>
      </h1>
      <motion.p
        className="text-lg text-gray-600 mt-4"
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
      <motion.button
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16`}
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
    </Section>
  );
};

const ExperienceSection = () => {

  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
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
        <strong>Programming languages:</strong> Typescript, Rust, Go, Python
        <br />
        <strong>Front-End Tech:</strong> NextJS, React, React Native, Flutter, Redux, TailwindCSS
        <br />
        <strong>Back-End Tech:</strong> Node, Express, Prisma, GraphQL, MongoDB, PostgreSQL
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
        className="text-6xl font-extrabold leading-snug pt-8">
        Experience
      </motion.h1>
      <motion.p
        className="text-sm md:text-lg overflow-scroll text-indigo-900 mt-4"
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
        <h2 className="text-2xl font-extrabold">
          RustDesk
        </h2>
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

      </motion.p>
    </Section>
  );
};

const ProjectsSection = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Projects
      </h1>
      <div className="flex justify-center items-center h-full w-full mt-12">
        <Swiper loop={true} className="mySwiper" navigation={!isMobile} pagination={true} modules={[Navigation, Pagination]}>
          {Projects.map((p) =>
            <SwiperSlide>
              <div className="text-white flex flex-col items-center h-full h-max-[1rem] justify-around p-2 py-5">
                <h1 className="text-3xl font-extrabold">
                  {p.title}
                </h1>
                <a href={p.links[0]} className="flex justify-center items-center w-[85%] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                  <img src={p.img} />
                </a>
                <p className="text-lg pb-4">
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
  return (
    <Section>
      <h2 className="text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
        <form>
          <label for="name" className="font-medium text-gray-900 block mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            for="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            for="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 ">
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
};
