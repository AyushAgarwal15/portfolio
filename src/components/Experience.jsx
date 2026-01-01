import React, { useEffect, useState, useMemo } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Helper function to parse date strings like "Mar 2024" or "Present"
const parseDate = (dateStr) => {
  if (dateStr.toLowerCase() === "present") {
    return new Date();
  }
  const months = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
  };
  const [monthStr, yearStr] = dateStr.split(" ");
  const month = months[monthStr.toLowerCase().substring(0, 3)];
  const year = parseInt(yearStr);
  return new Date(year, month, 1);
};

// Calculate duration between two dates
const calculateDuration = (startDate, endDate) => {
  const start = parseDate(startDate);
  const end = parseDate(endDate);
  
  let months = (end.getFullYear() - start.getFullYear()) * 12;
  months += end.getMonth() - start.getMonth();
  
  // Add 1 to include the starting month
  months += 1;
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (years > 0 && remainingMonths > 0) {
    return `${years} yr${years > 1 ? 's' : ''} ${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`;
  } else if (years > 0) {
    return `${years} yr${years > 1 ? 's' : ''}`;
  } else {
    return `${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`;
  }
};

// Calculate total experience from all roles
const calculateTotalExperience = (experiences) => {
  let totalMonths = 0;
  
  experiences.forEach((exp) => {
    const [startStr, endStr] = exp.date.split(" - ");
    const start = parseDate(startStr.trim());
    const end = parseDate(endStr.trim());
    
    let months = (end.getFullYear() - start.getFullYear()) * 12;
    months += end.getMonth() - start.getMonth();
    months += 1; // Include starting month
    
    totalMonths += months;
  });
  
  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;
  
  if (years > 0 && remainingMonths > 0) {
    return `${years} Year${years > 1 ? 's' : ''} ${remainingMonths} Month${remainingMonths > 1 ? 's' : ''}`;
  } else if (years > 0) {
    return `${years} Year${years > 1 ? 's' : ''}`;
  } else {
    return `${remainingMonths} Month${remainingMonths > 1 ? 's' : ''}`;
  }
};

const ExperienceCard = ({ experience }) => {
  // Parse the date range and calculate duration
  const [startStr, endStr] = experience.date.split(" - ");
  const duration = calculateDuration(startStr.trim(), endStr.trim());
  
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={
        <div className="flex flex-col">
          <span>{experience.date}</span>
          <span className="text-[#915EFF] font-semibold mt-1">({duration})</span>
        </div>
      }
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div
          onClick={() => window.open(experience.company_link, "_blank")}
          className="flex justify-center items-center w-full h-full cursor-pointer"
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          onClick={() => window.open(experience.company_link, "_blank")}
          className="text-blue-300 text-[16px] font-semibold underline cursor-pointer"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
        {/* Duration badge inside card for mobile visibility */}
        <span className="inline-block mt-2 px-3 py-1 bg-[#915EFF]/20 text-[#915EFF] text-[13px] font-medium rounded-full lg:hidden">
          {duration}
        </span>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);
  
  // Calculate total experience
  const totalExperience = useMemo(() => calculateTotalExperience(experiences), []);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 1024);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <div>
          <p className={`${styles.sectionSubText} text-center`}>
            What I have done so far
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Work Experience.
          </h2>
          {/* Total Experience Badge */}
          <div className="flex justify-center mt-4">
            <div className="px-6 py-3 bg-gradient-to-r from-[#915EFF]/20 to-[#00cea8]/20 border border-[#915EFF]/30 rounded-full">
              <span className="text-white text-[16px]">Total Experience: </span>
              <span className="text-[#915EFF] font-bold text-[18px]">{totalExperience}</span>
            </div>
          </div>
        </div>
      ) : (
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            What I have done so far
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Work Experience.
          </h2>
          {/* Total Experience Badge */}
          <div className="flex justify-center mt-4">
            <div className="px-6 py-3 bg-gradient-to-r from-[#915EFF]/20 to-[#00cea8]/20 border border-[#915EFF]/30 rounded-full">
              <span className="text-white text-[16px]">Total Experience: </span>
              <span className="text-[#915EFF] font-bold text-[18px]">{totalExperience}</span>
            </div>
          </div>
        </motion.div>
      )}

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
