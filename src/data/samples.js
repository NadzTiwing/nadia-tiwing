const samples = [
  {
    id: "mint09-site",
    imgUrl: "./img/mint09-site.png",
    siteUrl: "https://mint09.com/",
    title: "Mint09",
    content:
      "Part of the Magicsoft team in developing of this e-learning system.",
  },
  {
    id: "mint05-hr-site",
    imgUrl: "./img/mint05.JPG",
    siteUrl: "https://hr.mintlang.com/hr_portal/",
    title: "Mint05",
    content:
      "Part of the frontend development team that improved the HR Portal, a one-stop shop tool for all employees of Mint05/Infuturo, Inc.",
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
    siteUrl: "https://insta-chat-szcl-eeka4oy89-nadztiwings-projects.vercel.app",
    title: "Simple Chat App",
    content:
      "A simple chat app where a user can create a chat room and start a conversation with other people worldwide.",
    tools: ["ReactJS,", "Firebase,", "Typescript"],
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
