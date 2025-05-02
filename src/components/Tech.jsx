import React, { useState } from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import Card from "./Card";

const Tech = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isSmallScreen = window.innerWidth < 1024;

  return (
    <>
      <div className="lg:hidden">
        <p className={`${styles.sectionSubText} text-center`}>My Tech Stack</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technical Skills.
        </h2>
      </div>
      <motion.div className="hidden lg:block" variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My Tech Stack</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technical Skills.
        </h2>
      </motion.div>

      <div className="hidden lg:flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <div
            className="w-28 h-28 cursor-pointer"
            key={technology.name}
            onMouseEnter={() => setActiveIndex(index)}
          >
            {index === activeIndex && <BallCanvas icon={technology.icon} />}
            {index !== activeIndex && (
              <div className="flex items-center justify-center h-full">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
            )}
            <p className="text-white font-bold text-center text-sm">
              {technology.name}
            </p>
          </div>
        ))}
      </div>

      <div className="flex lg:hidden flex-row flex-wrap gap-10 mt-20">
        {technologies.map((technology, index) => (
          <Card
            key={technology.name}
            index={index}
            title={technology.name}
            icon={technology.icon}
            animate={false}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
