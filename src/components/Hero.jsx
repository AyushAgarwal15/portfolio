import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { styles } from "../styles";
import { ComputerCanvas } from "./canvas";

const Hero = () => {
  // Roles to cycle through in the hero section (order matters)
  const roles = [
    "Software Engineer",
    "Frontend Developer",
    "Full Stack Developer",
    "Freelancer",
  ];

  const maxRoleLength = Math.max(...roles.map((r) => r.length));

  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing effect configuration
  const typingSpeed = 90; // ms per character
  const pauseDelay = 1400; // pause after finishing a word

  // Typewriter logic
  useEffect(() => {
    let timeout;
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      timeout = setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
    } else {
      // Word finished, wait then move to next
      timeout = setTimeout(() => {
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, pauseDelay);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);

  return (
    <section className={`relative w-full min-h-screen lg:h-screen xl:h-auto mx-auto`}>
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
          {/* Animated rotating roles */}
          <p className="mt-2 text-white-100 text-[20px] sm:text-[22px] lg:text-[25px] leading-snug">
            A&nbsp;
            <span
              className="text-[#915EFF] hidden sm:inline-block"
            >
              {roles[roleIndex].substring(0, charIndex)}
            </span>
            <span
              className="text-[#915EFF] inline-block sm:hidden"
              style={{ minWidth: "min(100%, 14rem)" }}
            >
              {roles[roleIndex].substring(0, charIndex)}
            </span>
            &nbsp;– thinking beyond what AI 🤖 can automate.
          </p>
        </div>
      </div>

      <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px]">
        <ComputerCanvas />
      </div>

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
