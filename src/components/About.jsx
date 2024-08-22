import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Card from "./Card";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a Software Engineer with strong expertise in HTML, CSS, JavaScript,
        TypeScript, and Tailwind CSS, specializing in React.js and knowledgeable
        in Next.js. I have hands-on experience in building dynamic, responsive
        web applications, optimizing code for efficiency, and using libraries
        like Redux and React Query. I'm a quick learner who excels in
        collaborative environments, consistently delivering scalable,
        user-focused solutions that solve real-world problems. Let's work
        together to bring your ideas to life and create a high-performance
        digital experience!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <Card key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
