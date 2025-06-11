import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  java,
  socialBond,
  devTinder,
  sumit,
  hirix,
  reactQuery,
  mile9,
  myImg,
  mongodb,
  express,
  nodejs,
  creator,
  mern,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: creator,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },
];

const about = {
  intro:
    "I'm a Full-Stack Software Engineer with strong expertise in the MERN stack. I build dynamic, scalable applications with a focus on performance and user experience. I thrive in collaborative environments, learn quickly, and care deeply about using technology to solve real-world problems. With a solid foundation in software engineering, I'm not tied to any specific tech stack—I believe in using the right tools for the job to create solutions that truly make a difference in people's lives 🌱.",
  img: myImg,
};

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "React Query",
    icon: reactQuery,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Express.js",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Core Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "Mile9 (A Product Based Tech Startup)",
    icon: mile9,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Present",
    company_link: "https://mile9.io/",
    points: [
      "Portfolio Development - Built a high-performance, responsive company portfolio site with Next.js, boosting user engagement by 30-40% through enhanced performance and enhanced interactivity.",
      "Code Optimization - Refactored React components and streamlined state management, reducing the codebase by 40% and improving load time by 35%.",
      "Feature Enhancement - Spearheaded the implementation of new features, enhancing application functionality and user experience, resulting in a 25-30% increase in user satisfaction and retention.",
      "Bug Fixing & Testing - Conducted thorough end-to-end testing from a developer's perspective, identifying and resolving bugs to maintain a 100% bug-free system.",
      "Tech Stack - HTML, CSS, JavaScript, React.js, Next.js, Redux, Typescript, Tailwind CSS, Git & Github, React Query, Node.js, Express.js, Databases etc.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Mile9 (A Product Based Tech Startup)",
    icon: mile9,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Feb 2024",
    company_link: "https://mile9.io/",
    points: [
      "Developed Core Features - Implemented a comprehensive billing form system, report review comments, and patient data filtering modal, improving system functionality by 40-50% and streamlining user workflows.",
      "Bug Resolution & Testing - Ensured a seamless user experience by conducting rigorous debugging and QA testing, reducing bugs by 40% and enhancing overall application stability ",
      "Tech Stack: Leveraged a tech stack including HTML, CSS, JavaScript, React.js, Next.js, TypeScript, and Tailwind CSS to work on company projects, reducing development time by 60%.",
    ],
  },
];

const worksText = `In addition to my work experience, the following projects showcase my skills through real-world applications. Each project includes a brief description along with links to the code and live demos. They highlight my ability to solve complex problems, adapt to various technologies, and deliver effective, user-focused solutions.`;

const projects = [
  // {
  //   name: "DevTinder",
  //   description:
  //     "A robust full-stack developer matching platform featuring real-time chat, GitHub profile integration, intelligent matching algorithms, premium subscription tiers and many more",
  //   tags: [
  //     {
  //       name: "mern-stack",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "react.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "redux",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "node.js",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "express.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "mongoose",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "socket.io",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "axios",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "jwt",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: devTinder,
  //   source_code_link: "https://github.com/AyushAgarwal15/DevTinder-Frontend",
  //   live_link: "https://devtinder-ayush.vercel.app/login",
  // },
  {
    name: "Social Bond",
    description:
      "A seamless social platform connecting users through engaging content and top-tier features. Key Features - Secure authentication, top creator showcases, like/save options, detailed posts, & user-friendly profile management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "react-query",
        color: "orange-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
    ],
    image: socialBond,
    source_code_link: "https://github.com/AyushAgarwal15/social-bond",
    live_link: "https://social-bond.vercel.app/sign-in",
  },
  {
    name: "Hirix",
    description:
      "HIRIX is a modern job portal that connects job seekers with employers and helps employers find bright candidates. Key Features - Job Listing, Job Search & Filtering, Application Tracking, Saved Jobs, Post Jobs, Check Applicants etc",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "supabase",
        color: "orange-text-gradient",
      },
      {
        name: "Clerk",
        color: "green-text-gradient",
      },
      {
        name: "react-hook-form",
        color: "pink-text-gradient",
      },
    ],
    image: hirix,
    source_code_link: "https://github.com/AyushAgarwal15/Hirix",
    live_link: "https://hirix.vercel.app/",
  },
  {
    name: "SUMIT",
    description:
      "An article summarizer that converts long articles into clear and brief summaries. Key Features - Article Summarization, URL History, Instant Historical Summaries.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "local-storage",
        color: "orange-text-gradient",
      },
    ],
    image: sumit,
    source_code_link: "https://github.com/AyushAgarwal15/SumIt",
    live_link: "https://sum-it-pi.vercel.app/",
  },
];

const education = {
  degree: "Bachelor of Technology (B.Tech)",
  field: "Computer Science & Engineering",
  institution: "MIIT, Meerut",
  duration: "2019 - 2023",
  score: "CGPA: 8.14/10",
  educationText:
    "My academic journey equipped me with strong foundations in computer science, software engineering principles, and practical problem-solving skills that I leverage in my professional career.",
};

export {
  services,
  about,
  technologies,
  experiences,
  worksText,
  projects,
  education,
};
