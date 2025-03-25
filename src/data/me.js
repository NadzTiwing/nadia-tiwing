const level = {
  1: "novice",
  2: "proficient",
  3: "expert",
};

const languages = [
  {
    name: "Javascript",
    level: level[3],
  },
  {
    name: "Typescript",
    level: level[3],
  },
  {
    name: "HTML5",
    level: level[3],
  },
  {
    name: "CSS/SCSS",
    level: level[3],
  },
  {
    name: "Bootstrap",
    level: level[3],
  },
  {
    name: "NextJs",
    level: level[2],
  },
  {
    name: "ReactJs",
    level: level[3],
  },
  {
    name: "VueJS",
    level: level[2],
  },
  {
    name: "ExpressJs",
    level: level[2],
  },
  {
    name: "NodeJs",
    level: level[2],
  },
  {
    name: "MySQL",
    level: level[2],
  },
  {
    name: "MongoDB",
    level: level[1],
  },
  {
    name: "PostgreSQL",
    level: level[1],
  },
  {
    name: "Python",
    level: level[1],
  },
  {
    name: "Flask",
    level: level[1],
  },
  {
    name: "Django",
    level: level[1],
  },
  {
    name: "React Native",
    level: level[1],
  },
  {
    name: "Jest",
    level: level[2],
  },
  {
    name: "Jasmine",
    level: level[2],
  },
  {
    name: "Figma",
    level: level[3],
  },
  {
    name: "GIT",
    level: level[2],
  },
];

const experiences = [
  {
    id: "edapt-soft-engr",
    dateRange: "January 2024 - March 2025",
    position: "SOFTWARE ENGINEER",
    company: "Edapt Technologies",
    desc: [
      "Developed Quizius, a learning gamification app, from the ground using React, TypeScript, OpenAI API, and Firebase.",
      "Designed and implemented wireframes using Figma to guide the development process.",
      "Implemented robust unit testing with Jest, validating component behavior and application logic.",
    ],
  },
  {
    id: "solidleisure-front-dev",
    dateRange: "August 2023 - December 2023",
    position: "FRONTEND DEVELOPER",
    company: "SolidLeisure Solutions Inc.",
    desc: [
      "Utilized Vue framework for enhancing platform performance and real-time data updates in their existing system, Backoffice System for the Game Apps.",
      "Revamped their official website using Vue 3, Ionic and firebase.",
      "Led the integration of unit testing for better code quality.",
    ],
  },
  {
    id: "somi-front-dev",
    dateRange: "January 2023 - June 2023",
    position: "FRONTEND DEVELOPER",
    company: "SOMI Unlimited Solutions / Income Tech",
    desc: [
      "Developed Marketing and Customer Service System using ReactJS with redux & redux-saga as part of the team",
      "Developed Ticketing System Mobile version using React Native, redux& redux-saga.",
      "Improved existing systems such as Salary and Employee center System using VueJs.",
    ],
  },
  {
    id: "netsuite-dev",
    dateRange: "May 2022 - October 2022",
    position: "SOFTWARE ENGINEER",
    company: "Oracle Netsuite Philippines Corporation",
    desc: [
      "Enhanced Netsuite ERP System Features using Suitescript and Jasmine Testing Framework for unit test automation.",
      "Contributed in the development of Netsuite Next ERP System using Oracle JavaScript Extension Toolkit(OJET) Framework.",
      "Designed proposals for both backend and frontend design changes.",
      "Address customer's technical issues.",
    ],
  },
  {
    id: "magicsoft-dev",
    dateRange: "July 2019 - May 2022",
    position: "FULLSTACK DEVELOPER",
    company: "Magicsoft International Software Development and Services",
    desc: [
      "Developed and improved an international online e-learning platform using Bootstrap 5, NextJS, Prisma ORM, WebSocket and MySql.",
      "Created our official website using Wordpress.",
      "Worked with project managers and consult clients to resolve technical issues and establish problem specifications and system designs.",
      "Analyze software usability and performance, suggesting changes to improve functionality and deliver the important features on deployment for testing.",
      "Delegated tasks and helped others to solve a particular problem.",
      "Designed a hiring posters, calling cards, company logo and created wireframes using Figma for design enhancements",
      "Involved in polishing the client-side of the Productivity Employee Tracker system using jQuery, HTML/CSS, NodeJs/ExpressJs and ajax",
      "Contributed in the development of the Human Resources portal site using jQuery, HTML/CSS and Javascript",
      "Spearheaded the design of wireframes for upcoming projects.",
    ],
  },
];

const schools = [
  {
    id: "bsu",
    year: 2019,
    name: "BENGUET STATE UNIVERSITY",
    degree: "Bachelor of Science in Information Technology",
    awards: [
      "First place in Java Programming Competition during IT week (2018)",
      "Second place in C# Programming Competition during IT week (2018)",
      "Third place in Java Programming Competition during IT week (2017)",
      "Third place in Greenfoot Programming Competition during IT week (2016)",
    ],
  },
  {
    id: "mnhs",
    year: 2014,
    name: "MAGSAYSAY NATIONAL HIGH SCHOOL",
    awards: ["with Honors", "Artist of the Year"],
  },
  {
    id: "ltcs",
    year: 2014,
    name: "LA TRINIDAD CENTRAL SCHOOL",
    awards: ["with Honors"],
  },
];

const seminars = [
  {
    date: "October 22, 2020",
    title: "Introduction to Malware Threats",
    company: "Trend Micro",
    link: "./certificates/malware_threats.pdf",
  },
  {
    date: "January 24, 2021",
    title: "Introduction to Cybersecurity",
    company: "Cisco Networking Academy",
    link: "./certificates/intro_cybersecurity.pdf",
  },
];

export { languages, experiences, schools, seminars };
