const samples = [
  {
    id: "mint09-site",
    displayType: "video",
    mediaUrl: "./img/mint09.mp4",
    siteUrl: "https://mint09.com",
    title: "Mint09",
    content:
      "Part of the Magicsoft team in developing of this e-learning system tailored for the Korean Students.",
    techStack: ["NextJS", "Typescript", "Prisma", "Node/ExpressJS", "Socket.IO", "MySQL", "NGinx"]
  },
  {
    id: "mint05-hr-site",
    displayType: "image",
    mediaUrl: "./img/mint05.JPG",
    siteUrl: "https://hr.mintlang.com/hr_portal/",
    title: "Mint05",
    content:
      "Part of the Dev team that improved the HR Portal, a one-stop shop tool for all employees of Mint05/Infuturo, Inc.",
    techStack: ["JQuery", "Javascript", "Node/ExpressJS", "MySQL"]
  },
  {
    id: "entvas-fluffys-webapp",
    displayType: "video",
    imgUrl: "./videos/flyuffys-admin.mp4",
    siteUrl: "https://fluffyshibachi.com",
    title: "Fluffy's Mobile Hibachi",
    content:
      "Developed Website and Catering Booking System for Fluffy's Mobile Hibachi.",
    techStack: ["Typescript", "NextJS", "MySQL", "AWS", "DynamoDB", "Square API", "Vitest"]
  },
  {
    id: "edapt-quizius-app",
    displayType: "video",
    imgUrl: "./videos/quizius.mp4",
    siteUrl: "https://quizi.us/practice",
    title: "Quizius",
    content:
      "Study Tool App for the Law students with AI integration",
    techStack: ["Typescript", "ReactJS", "Firebase", "GCP", "OpenAI API", "Jest"]
  },
  {
    id: "seafair-sms",
    displayType: "video",
    imgUrl: "./videos/sms.mp4",
    siteUrl: "",
    title: "Seafair Safety Management System",
    content:
      "Vessel Operations Software System for Seafair Yachts",
    techStack: ["Typescript", "NextJS", "Supabase", "PostgreSQL", "Vitest"]
  },
];

const projects = [
  {
    id: "text-o-matic",
    imgUrl: "./img/text-o-matic.png",
    siteUrl: "https://github.com/NadzTiwing/text-o-matic",
    title: "Text-o-matic",
    content:
      "Web app that generates caption and checks spelling errors with OpenAI.",
    tools: ["NextJS,", "OpenAI API"],
    ongoing: false,
  },
  {
    id: "pic-share",
    imgUrl: "./img/pic-share.png",
    siteUrl: "https://github.com/NadzTiwing/picshare",
    title: "Picshare",
    tools: ["NextJS,", "MongoDB Atlas,", "Cloudinary"],
    content:
      "A simple app that saves, deletes and retrieves photos using Cloudinary.",
    ongoing: false,
  },
  {
    id: "simple-chat-app",
    imgUrl: "./img/chat-app.png",
    siteUrl: "https://github.com/NadzTiwing/InstaChat/tree/main/instachat-app",
    title: "Simple Chat App",
    content:
      "A simple chat app where a user can create a chat room and start a conversation with other people worldwide.",
    tools: ["ReactJS,", "Firebase,", "Typescript"],
    ongoing: false,
  },
  {
    id: "simple-weather-app",
    imgUrl: "./img/django-weather-app.png",
    siteUrl: "https://github.com/NadzTiwing/django-weather-app",
    title: "Simple Weather App",
    content:
      "A simple and user-friendly web application that lets you search and view real-time weather details for cities around the world.",
    tools: ["Django,", "Python,", "HTML,", "CSS,", "JavaScript"],
    ongoing: false,
  },
  {
    id: "card-game-system",
    imgUrl: "./img/projects-ongoing.jpg",
    siteUrl: "#",
    title: "Superhero Card Game",
    content:
      "A simple game where a user select a card to play against an AI player.",
    tools: ["Vue 3"],
    ongoing: true,
  },
];

export { samples, projects };
