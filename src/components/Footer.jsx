import { github, linkedin, twitter, email, phone } from "../assets";
import Tilt from "react-parallax-tilt";

function Footer() {
  return (
    <footer className="bg-primary flex flex-col md:flex-row items-center justify-center md:justify-around py-4 gap-4 flex-wrap shadow-lg shadow-white">
      <p className="text-base text-secondary text-center">
        &copy; 2025 Ayush Agarwal. All rights reserved.
      </p>
      <div className="flex items-center gap-4 px-4 md:px-0">
        <Tilt
          tiltMaxAngleX={50}
          tiltMaxAngleY={50}
          scale={1}
          transitionSpeed={450}
        >
          <a href="mailto:ayushagarwal8126@gmail.com">
            <img src={email} alt="email" className="w-11 h-11 rounded-full" />
          </a>
        </Tilt>
        <Tilt
          tiltMaxAngleX={50}
          tiltMaxAngleY={50}
          scale={1}
          transitionSpeed={450}
        >
          <a href="tel:+918126749140">
            <img
              src={phone}
              alt="phone"
              className="w-[3.5rem] h-[3.5rem] rounded-full"
            />
          </a>
        </Tilt>

        <Tilt
          tiltMaxAngleX={50}
          tiltMaxAngleY={50}
          scale={1}
          transitionSpeed={450}
        >
          <a
            href="https://www.linkedin.com/in/ayushagarwal15/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" className="w-11 h-11" />
          </a>
        </Tilt>
        <Tilt
          tiltMaxAngleX={50}
          tiltMaxAngleY={50}
          scale={1}
          transitionSpeed={450}
        >
          {" "}
          <a
            href="https://github.com/AyushAgarwal15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" className="w-11 h-11" />
          </a>
        </Tilt>
        <Tilt
          tiltMaxAngleX={50}
          tiltMaxAngleY={50}
          scale={1}
          transitionSpeed={450}
        >
          <a
            href="https://x.com/Ayush_Agg15?t=d5m1lTalQ3vncaHMvaDpgA&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitter}
              alt="twitter"
              className="w-11 h-11 rounded-full"
            />
          </a>
        </Tilt>
      </div>
    </footer>
  );
}

export default Footer;
