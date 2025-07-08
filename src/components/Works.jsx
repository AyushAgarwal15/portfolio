import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { eye } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, worksText } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
  disableMotion = false,
}) => {
  const Wrapper = disableMotion ? "div" : motion.div;

  return (
    <Wrapper
      {...(!disableMotion && {
        variants: fadeIn("up", "spring", index * 0.5, 0.75),
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true },
      })}
    >
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-fit rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <div className="flex justify-between m-3 card-img_hover flex-wrap">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <div className="flex items-center gap-2">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              <div
                onClick={() => window.open(live_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={eye}
                  alt="live demo"
                  className="w-9 h-9 object-contain pr-2"
                />
              </div>
            </div>
          </div>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </Wrapper>
  );
};

const Works = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 1024);

    // Set initial state
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {isSmallScreen ? (
        <>
          <div>
            <p className={`${styles.sectionSubText} `}>My work</p>
            <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
          </div>

          <div className="w-full flex">
            <p className="mt-3 text-secondary text-[17px] leading-[30px]">
              {worksText}
            </p>
          </div>
        </>
      ) : (
        <>
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} `}>My work</p>
            <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
          </motion.div>

          <div className="w-full flex">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-3 text-secondary text-[17px] leading-[30px]"
            >
              {worksText}
            </motion.p>
          </div>
        </>
      )}

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            disableMotion={typeof window !== "undefined" && window.innerWidth < 640}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
