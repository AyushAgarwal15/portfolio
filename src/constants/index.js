import {
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
  socialBond,
  sumit,
  hirix,
  reactQuery,
  mile9,
  myImg,
  mongodb,
  express,
  nodejs,
  creator,
  nextjs,
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
    title: "Frontend Engineer",
    icon: web,
  },
  // {
  //   title: "React.js Developer",
  //   icon: reactjs,
  // },
  // {
  //   title: "Full Stack Developer (MERN)",
  //   icon: backend,
  // },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const about = {
  intro:
    "I'm an Experienced Frontend Developer with 1.5+ years building fast, responsive, and user-centric web applications using React.js, Next.js, TypeScript and Tailwind CSS. I focus on writing clean, readable, and scalable code, always thinking about performance, reusability, and maintainability. Currently seeking frontend roles where I can contribute strong technical skills and grow with a collaborative team🌱.",
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
    name: "Next JS",
    icon: nextjs,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express.js",
    icon: express,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
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
      "Portfolio Development: Built a responsive company portfolio website with Next.js, improving Core Web Vitals and boosting user interaction by 35%.",
      "Code Optimization: Refactored React components and implemented Redux/React Query for efficient state management, reducing the codebase by 40% and improving load time by 35%. ",
      "Feature Enhancement: Delivered core healthcare features, including a patient details modal (replacing a slower slider and improving speed by 70–80%), billing forms, report comments, and advanced data filters, resulting in a 40–50% overall functionality boost.",
      "Dashboard Development: Designed and developed a comprehensive hospital dashboard to manage 10,000+ patient records efficiently, improving user experience and reducing retrieval time by 40%.",
      "Tech Stack: HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Redux, React Query, Tailwind CSS, Git & Github.",
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
      "Developed Core Features: Contributed extensively during internship by developing 10+ key features, resolving 100+ bugs, and gaining a comprehensive understanding of the system architecture and workflow, resulting in a 40–50% improvement in overall system performance and user efficiency.",
      "Bug Resolution & Testing: Ensured a seamless user experience by conducting rigorous debugging and QA testing, reducing bugs by 40% and enhancing overall application stability.",
      "Tech Stack: HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Redux, React Query, Tailwind CSS, Git & Github.",
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
