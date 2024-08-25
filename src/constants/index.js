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
  sumit,
  hirix,
  threejs,
  reactQuery,
  mile9,
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
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: reactjs,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "JavaScript Developer",
    icon: javascript,
  },
];

const intro =
  "I'm a Software Engineer with strong expertise in HTML, CSS, JavaScript, TypeScript, and Tailwind CSS, specializing in React.js and knowledgeable in Next.js. I have hands-on experience in building dynamic, responsive web applications, optimizing code for efficiency, and using libraries like Redux and React Query. I'm a quick learner who excels in collaborative environments, consistently delivering scalable, user-focused solutions that solve real-world problems. Let's work together to bring your ideas to life and create a high-performance digital experience!";

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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    company_link: "https://www.linkedin.com/company/mile9/mycompany/",
    points: [
      "Portfolio Development - Developed a dynamic and responsive portfolio site for the company using Next.js, enhancing the online presence and improving user engagement.",
      "Code Optimization - Implemented strategic code refactoring, leveraging React components and hooks to enhance reusability and code maintainability. Build reusable components that can be used across all apps. Optimized component structure and state management, resulting in a 40% codebase reduction and a 35% faster app load time.",
      "Feature Enhancement - Spearheaded the implementation of new features, improving application functionality and user experience.",
      "Bug Resolution & Testing - Conducted thorough end-to-end testing from a developer's perspective, identifying and resolving bugs to maintain a 100% bug-free system.",
      "Tech Stack - React.js, Next.js, Javascript, Typescript, Tailwind CSS, Html, CSS, Git, Github, React Third Party Libraries - React Query, React Table etc.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Mile9 (A Product Based Tech Startup)",
    icon: mile9,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Feb 2024",
    company_link: "https://www.linkedin.com/company/mile9/mycompany/",
    points: [
      "Gained Expertise in Cutting-Edge Web Technologies - Acquired practical expertise in innovative technologies such as React.js, HTML, CSS, JavaScript, TypeScript, and Tailwind CSS.",
      "Enhanced System Functionality - Implemented critical features such as a comprehensive billing form system, report review comments, and a patient data filtering modal, significantly enhancing system functionality",
      "Bug Resolution and Quality Assurance - Contributed to bug resolution and conducted end-to-end testing, ensuring a seamless user experience and achieving a 100% bug-free system.",
    ],
  },
];

const worksText = `Following projects showcases my skills and experience through
              real-world examples of my work. Each project is briefly described
              with links to code repositories and live demos in it. It reflects
              my ability to solve complex problems, work with different
              technologies, and manage projects effectively.`;

const projects = [
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

export { services, intro, technologies, experiences, worksText, projects };
