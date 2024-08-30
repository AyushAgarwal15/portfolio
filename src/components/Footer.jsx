import { github, linkedin, twitter } from "../assets";
import Tilt from "react-tilt";
function Footer() {
  return (
    <footer className="bg-primary flex flex-col md:flex-row items-center justify-center md:justify-around py-6 gap-4 flex-wrap shadow-lg shadow-white">
      <div>
        {" "}
        <p className="text-sm text-white">
          Email:{" "}
          <a
            href="mailto:ayushagarwal8126@gmail.com"
            className="underline text-secondary hover:text-white cursor-pointer"
          >
            ayushagarwal8126@gmail.com
          </a>
        </p>
        <p className="text-sm text-white">
          Phone:{" "}
          <a
            href="tel:+918126749140"
            className="underline text-secondary cursor-pointer hover:text-white"
          >
            +91 8126749140
          </a>
        </p>
      </div>
      <div className="flex gap-4">
        <Tilt
          options={{
            max: 50,
            scale: 1,
            speed: 450,
          }}
        >
          {" "}
          <a
            href="https://github.com/AyushAgarwal15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" className="w-10 h-10" />
          </a>
        </Tilt>
        <Tilt
          options={{
            max: 50,
            scale: 1,
            speed: 450,
          }}
        >
          <a
            href="https://www.linkedin.com/in/ayushagarwal15/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" className="w-10 h-10" />
          </a>
        </Tilt>
        <Tilt
          options={{
            max: 50,
            scale: 1,
            speed: 450,
          }}
        >
          <a
            href="https://x.com/Ayush_Agg15?t=d5m1lTalQ3vncaHMvaDpgA&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitter}
              alt="twitter"
              className="w-10 h-10 rounded-full"
            />
          </a>
        </Tilt>
      </div>
      <p className="text-sm text-secondary">
        &copy; 2024 Ayush Agarwal. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
