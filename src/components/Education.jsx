import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const EducationCard = () => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className="bg-tertiary p-8 rounded-2xl md:w-[800px] w-full mx-auto"
      >
        <div className="mt-1">
          <h3 className="text-white font-bold text-[24px]">
            {education.degree}
          </h3>
          <p className="text-blue-300 text-[16px] font-semibold mt-2">
            {education.field}
          </p>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <p className="text-secondary text-[16px]">{education.institution}</p>
          <p className="text-white text-[14px] font-semibold">
            {education.score}
          </p>
        </div>

        <div className="mt-2">
          <p className="text-secondary text-[14px] mt-4">
            {education.duration}
          </p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Education = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 1024);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <>
          <div>
            <p className={`${styles.sectionSubText}`}>MY EDUCATION</p>
            <h2 className={`${styles.sectionHeadText}`}>Education.</h2>
          </div>

          <div className="w-full flex">
            <p className="mt-3 text-secondary text-[17px] leading-[30px]">
              {education.educationText}
            </p>
          </div>
        </>
      ) : (
        <>
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText}`}>MY EDUCATION</p>
            <h2 className={`${styles.sectionHeadText}`}>Education.</h2>
          </motion.div>

          <div className="w-full flex">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-3 text-secondary text-[17px] leading-[30px]"
            >
              {education.educationText}
            </motion.p>
          </div>
        </>
      )}

      <div className="mt-20 flex flex-wrap justify-center">
        <EducationCard />
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
