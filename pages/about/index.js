import React, { useState } from "react";
import { FaJs, FaReact, FaNode, FaJava } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiRedux, SiGithub, SiGit, SiPostman } from "react-icons/si";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Countup from "react-countup";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Programming",
        icons: [<FaJs key="js" />, <FaJava key="java" />],
      },
      {
        title: "Web Development",
        icons: [
          <FaReact key="react" />, <SiTailwindcss key="tailwindcss" />, <SiRedux key="redux" />,
          <FaNode key="node" />, <SiExpress key="express" />, <SiMongodb key="mongodb" />,
        ],
      },
      {
        title: "Tools",
        icons: [<SiGithub key="github" />, <SiGit key="git" />, <SiPostman key="postman" />],
      },
    ],
  },
  {
    title: "experience",
    info: [{ title: "Software Developer - Codiant Software Services", stage: "Jan 2023 - Present" }],
  },
  {
    title: "Academic",
    info: [{ title: "Computer Science - SSVPS College of Engineering Dhule", stage: "2019 - 2023" }],
  },
  {
    title: "certification",
    info: [{ title: "Full Stack Development", stage: "2023-24" }],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Bulb />
      <Circles />
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 variants={fadeIn("right", 0.2)} initial="hidden" animate="show" exit="hidden" className="h2 pt-8">
            <span className="text-accent">About</span> me.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-5 xl:mb-12 hidden xl:block"
          >
            Software Developer with over 2+ years of experience building scalable, responsive web applications using React and JavaScript.
            Delivered eight successful web products, specializing in UI/UX best practices, API integration, and performance optimization.
            Skilled in frontend development, state management, and reusable components within agile teams.
          </motion.p>
          <motion.div variants={fadeIn("right", 0.6)} initial="hidden" animate="show" exit="hidden" className="hidden md:flex max-w-xl mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              {[{ count: 26, label: "months of experience" }, { count: 2023, label: "Year of graduation" }, { count: 12, label: "work on Projects" }].map((item, i) => (
                <div key={i} className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <Countup start={0} end={item.count} duration={10} />{i === 0 ? " +" : ""}
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div variants={fadeIn("left", 0.4)} initial="hidden" animate="show" exit="hidden" className="flex flex-col w-full xl:max-w-[48%] h-[300px]">
          <div className="flex items-center justify-center gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 text-sm xl:text-lg">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize relative after:w-8 after:h-[2px] after:bg-accent after:absolute after:-bottom-1 after:left-0 ${
                  index === itemIndex ? "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300" : ""
                }`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="border-0 py-3 xl:p-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start mt-5 border-x-4 xl:border-collapse rounded-xl">
            {aboutData[index].info.map((item, itemIndex) => (
              <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                {item.icons && <div className="flex gap-x-4 text-2xl text-white">{item.icons.map((icon, iconIndex) => <div key={iconIndex}>{icon}</div>)}</div>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
