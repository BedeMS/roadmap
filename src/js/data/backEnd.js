// courses need: id, timeLine, isRequired, title, url, cost, img
// articles need the same except for is required.

import uniqid from "uniqid";

export default [
  {
    title: "Javascript",
    instructions: `In order to be back-end developer you'll need to 
    fully understand the language you're learning. In this case Javascript.`,
    timeline: "4-6 Weeks",
    courses: [
      {
        title: "Master Javascript",
        id: uniqid(),
        url:
          "https://www.udemy.com/course/the-complete-javascript-course/?utm_campaign=website1010&utm_medium=website1010&utm_source=mycoupon",
        isRequired: true,
        source: "udemy",
        timeline: ["3", "6"],
        img: "https://codingheroes.io/assets/img/C3.png",
        cost: 0,
      },
    ],
    articles: [
      {
        title: "HyperText Markup Language",
        id: uniqid(),
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        isRequired: true,
      },
      {
        title: "What is HTML",
        id: uniqid(),
        url: "https://www.hostinger.com/tutorials/what-is-html",
        isRequired: true,
      },
    ],
  },
  {
    title: "Node Js",
    instructions: `In order to be back-end developer you'll need to 
    fully understand the language you're learning. In this case Javascript.`,
    timeline: "4-6 Weeks",
    courses: [
      {
        title: "Master Node.Js",
        id: uniqid(),
        url: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/",
        isRequired: true,
        source: "youtube",
        timeline: ["3", "6"],
        img: "https://codingheroes.io/assets/img/C5.png",
        cost: 0,
      },
      {
        title: "HTML Crash Course For Absolute Beginners",
        id: uniqid(),
        url: "https://www.youtube.com/watch?v=UB1O30fR-EE",
        isRequired: false,
        source: "youtube",
        timeline: ["3"],
        img:
          "https://i.ytimg.com/an_webp/UB1O30fR-EE/mqdefault_6s.webp?du=3000&sqp=CM7O74IG&rs=AOn4CLAkKXwKWPm9Vv-0B0yY88B0ivQvAg",
        cost: 0,
      },
    ],
    articles: [
      {
        title: "HyperText Markup Language",
        id: uniqid(),
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        isRequired: true,
      },
      {
        title: "What is HTML",
        id: uniqid(),
        url: "https://www.hostinger.com/tutorials/what-is-html",
        isRequired: true,
      },
    ],
  },
];
