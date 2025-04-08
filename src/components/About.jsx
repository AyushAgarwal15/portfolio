import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, about } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Card from "./Card";

const About = () => {
  return (
    <>
      <div className="flex items-center justify-between flex-col-reverse md:flex-row gap-4">
        <div>
          <div className="lg:hidden">
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </div>
          <motion.div variants={textVariant()} className="hidden lg:block">
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            {about.intro}
          </motion.p>
        </div>
        <motion.img
          variants={fadeIn("", "", 0.1, 1)}
          src={about.img}
          className="w-full md:w-[40%] lg:w-[22%] rounded-[10%]"
          alt="my-image"
        />
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <Card key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
