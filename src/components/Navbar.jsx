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

        <ul className="list-none hidden lg:flex flex-row gap-10">
          {navLinks.map((nav) =>
            nav.id === "resume" ? (
              <a
                key={nav.id}
                target="_blank"
                href="https://drive.google.com/file/d/1RuAvE2iuvTGbW9M80OOKPjNAzh_NmdAL/view?usp=sharing"
                className={
                  "text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
                }
              >
                {nav.title}
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
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) =>
                nav.id === "resume" ? (
                  <a
                    key={nav.id}
                    target="_blank"
                    href="https://drive.google.com/file/d/1RuAvE2iuvTGbW9M80OOKPjNAzh_NmdAL/view?usp=sharing"
                    className={
                      "text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
                    }
                  >
                    {nav.title}
                  </a>
                ) : (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
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
