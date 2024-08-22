import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import Card from "./Card";

const Tech = () => {
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
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
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
