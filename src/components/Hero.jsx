import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputerCanvas, PlanetCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full min-h-screen lg:h-screen mx-auto`}>
      <div
        className={`lg:absolute inset-0 top-[100px] pt-[100px] lg:pt-0  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi 🙋‍♂️ <br className="block lg:hidden" /> I'm{" "}
            <span className="text-[#915EFF]">Ayush</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Front-End Software Engineer 🧑‍💻 I develop interactive{" "}
            <br className="xl:block hidden" /> user interfaces.
          </p>
        </div>
      </div>

      <ComputerCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full lg:flex justify-center items-center hidden ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
