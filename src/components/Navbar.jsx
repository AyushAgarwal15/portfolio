import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check if at the top/hero section
      if (scrollTop < 100) {
        // Clear active state when at hero section
        setActive("");

        // Remove hashtag when on hero section
        if (window.location.hash) {
          window.history.replaceState(null, null, window.location.pathname);
        }
        return;
      }

      // Update active section based on scroll position
      const sections = navLinks
        .filter((nav) => nav.id !== "resume")
        .map((nav) => {
          const element = document.getElementById(nav.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            return {
              id: nav.id,
              title: nav.title,
              top: rect.top,
              bottom: rect.bottom,
              height: rect.height,
            };
          }
          return null;
        })
        .filter(Boolean);

      // Find the section that takes up most of the viewport
      const viewportHeight = window.innerHeight;
      let maxVisibleSection = null;
      let maxVisibleArea = 0;

      sections.forEach((section) => {
        const visibleTop = Math.max(0, section.top);
        const visibleBottom = Math.min(viewportHeight, section.bottom);
        const visibleArea = Math.max(0, visibleBottom - visibleTop);

        if (visibleArea > maxVisibleArea) {
          maxVisibleArea = visibleArea;
          maxVisibleSection = section;
        }
      });

      if (maxVisibleSection) {
        setActive(maxVisibleSection.title);

        // Update URL hash without scrolling
        const currentHash = window.location.hash;
        const newHash = `#${maxVisibleSection.id}`;

        if (currentHash !== newHash) {
          window.history.replaceState(null, null, newHash);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Ayush Agarwal &nbsp;
          </p>
        </Link>

        <ul className="list-none hidden lg:flex flex-row gap-10 items-center">
          {navLinks.map((nav) =>
            nav.id === "resume" ? (
              <a
                key={nav.id}
                target="_blank"
                href="https://drive.google.com/file/d/1RuAvE2iuvTGbW9M80OOKPjNAzh_NmdAL/view?usp=sharing"
                className="relative group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition duration-300"></span>
                <span className="relative inline-flex items-center px-6 py-2.5 font-semibold text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(167,139,250,0.5)]">
                  {nav.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </span>
              </a>
            ) : (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            )
          )}
        </ul>

        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-center items-center flex-1 flex-col gap-4 w-full">
              {navLinks.map((nav) =>
                nav.id === "resume" ? (
                  <a
                    key={nav.id}
                    target="_blank"
                    href="https://drive.google.com/file/d/1RuAvE2iuvTGbW9M80OOKPjNAzh_NmdAL/view?usp=sharing"
                    className="relative inline-flex items-center px-5 py-2 font-semibold text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full shadow-[0_0_10px_rgba(167,139,250,0.3)] transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(167,139,250,0.5)] hover:scale-105"
                  >
                    {nav.title}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </a>
                ) : (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    } text-center`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
