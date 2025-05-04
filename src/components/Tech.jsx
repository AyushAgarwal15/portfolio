import React, { useState } from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My Tech Stack</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technical Skills.
        </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
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
    </>
  );
};

export default SectionWrapper(Tech, "tech");
