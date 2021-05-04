// courses need: id, timeLine, isRequired, title, url, cost, img
// articles need the same except for is required.

import uniqid from "uniqid";

export default [
  {
    title: "Javascript",
    instructions: `Read the Instructions in every section 
    because they're all different. You must complete all 
    the courses in *RED*. Courses that are not in Red highlighting 
    have been added just incase you want another instructor, course 
    or more reinforcement of the concepts. Articles provided
     should be read. The articles provide a lot of support
      for everything you learn in the courses. </br> 
    In order to be back-end developer you'll need to 
    fully understand the language you're going to be using. In this case Javascript.`,
    timeline: "4-6 Weeks",
    courses: [
      {
        title: "Master Javascript",
        id: uniqid(),
        url:
          "https://www.udemy.com/course/the-complete-javascript-course/?utm_campaign=website1010&utm_medium=website1010&utm_source=mycoupon",
        isRequired: true,
        source: "udemy",
        timeline: ["3", "6", "6+"],
        img: "https://codingheroes.io/assets/img/C3.png",
        cost: 0,
      },
      {
        title: "JavaScript - The Complete Guide 2021 (Beginner + Advanced)",
        id: uniqid(),
        url:
          "https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/",
        isRequired: false,
        source: "udemy",
        timeline: ["6", "6+"],
        img:
          "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        cost: 0,
      },
    ],
    articles: [
      {
        title: "Javascript Basics",
        id: uniqid(),
        url:
          "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics",
        isRequired: true,
      },
      {
        title: "The DOM",
        id: uniqid(),
        url: "https://javascript.info/document",
        isRequired: true,
      },
      {
        title: "Object Oriented Programming in Javascript",
        id: uniqid(),
        url: "https://www.freecodecamp.org/news/how-javascript-implements-oop/",
        isRequired: true,
      },
      {
        title: "33 JS Concepts",
        id: uniqid(),
        url: "https://github.com/leonardomso/33-js-concepts",
        isRequired: true,
      },
      {
        title: "Writing Clean Code",
        id: uniqid(),
        url: "https://github.com/ryanmcdermott/clean-code-javascript",
        isRequired: true,
      },
    ],
  },
  {
    title: "Node JS",
    instructions: `**  Very Important ** </br>
    The courses in this section provide a lot of sections all in 
    one course. They include Node.js Framework (Express) and MongoDB.
    They go in depth on everything you would need to know about 
    Node JS.`,
    timeline: "~6 Weeks",
    courses: [
      {
        title: "Master Node.Js",
        id: uniqid(),
        url: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/",
        isRequired: true,
        source: "udemy",
        timeline: ["3", "6", "6+"],
        img: "https://codingheroes.io/assets/img/C5.png",
        cost: 0,
      },
      {
        title: "The Complete Node.js Developer Course (3rd Edition)",
        id: uniqid(),
        url:
          "https://www.udemy.com/course/the-complete-nodejs-developer-course-2/",
        isRequired: false,
        source: "udemy",
        timeline: ["6", "6+"],
        img:
          "https://www.secret-source.eu/wp-content/uploads/2017/11/node-js-logo.jpg",
        cost: 0,
      },
    ],
    articles: [
      {
        title: "Node JS Docs",
        id: uniqid(),
        url: "https://nodejs.org/en/docs/",
        isRequired: true,
      },
      {
        title: "Express/Node Introduction",
        id: uniqid(),
        url:
          "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction",
        isRequired: true,
      },
      {
        title: "Event Loop",
        id: uniqid(),
        url: "https://developer.ibm.com/tutorials/learn-nodejs-the-event-loop/",
        isRequired: true,
      },
      {
        title: "Why the hell would I use Node.js?",
        id: uniqid(),
        url: "https://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js",
        isRequired: true,
      },
    ],
  },
  {
    title: "Graph QL",
    instructions: `GraphQL is a query language (that's what the 
    “QL” stands for) for APIs and a runtime for fulfilling those
     queries with your existing data. Basically, it is used
      to load data from a server to a client -- it's a way to
       get data from an API into your application.`,
    timeline: "<1 Week",
    courses: [
      {
        title: "GraphQL Crash course | easy way",
        id: uniqid(),
        url: "https://www.youtube.com/watch?v=_Zss2Mbz4Bs",
        isRequired: true,
        source: "udemy",
        timeline: ["6+"],
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png",
        cost: 0,
      },
    ],
    articles: [
      {
        title: "Node JS Docs",
        id: uniqid(),
        url: "https://nodejs.org/en/docs/",
        isRequired: true,
      },
    ],
  },
  {
    title: "Socket.io",
    instructions: `Socket.IO is a library that enables real-time, 
    bidirectional and event-based communication between the browser
     and the server`,
    timeline: "< 1 Week",
    courses: [
      {
        title: "Realtime Chat With Users & Rooms - Socket.io, Node & Express",
        id: uniqid(),
        url: "https://www.youtube.com/watch?v=jD7FnbI76Hg",
        isRequired: true,
        source: "udemy",
        timeline: ["3", "6", "6+"],
        img:
          "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
        cost: 0,
      },
    ],
    articles: [
      {
        title: "Socket.io Docs",
        id: uniqid(),
        url: "https://socket.io/docs/v4/index.html",
        isRequired: true,
      },
    ],
  },
  {
    title: "DevOps",
    instructions: `* This entire section is optional. *`,
    timeline: "< 1 Week",
    courses: [
      {
        title:
          "DevOps Tutorial for Beginners | Learn DevOps in 7 Hours - Full Course | DevOps Training | Edureka",
        id: uniqid(),
        url: "https://www.youtube.com/watch?v=hQcFE0RD0cQ",
        isRequired: false,
        source: "udemy",
        timeline: ["3", "6", "6+"],
        img:
          "https://res.cloudinary.com/practicaldev/image/fetch/s---dbI8WY9--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/http://aisaac.io/content/images/2018/11/DevOps.jpg",
        cost: 0,
      },
      {
        title: "Exploring Docker Part 1",
        id: uniqid(),
        url: "https://www.youtube.com/watch?v=Kyx2PsuwomE",
        isRequired: false,
        source: "udemy",
        timeline: ["6", "6+"],
        img: "https://miro.medium.com/max/336/0*qJDdTN5n79oDesz9.png",
        cost: 0,
      },
      {
        title: "Exploring Docker Part 2",
        id: uniqid(),
        url: "https://www.youtube.com/watch?v=hP77Rua1E0c",
        isRequired: false,
        source: "udemy",
        timeline: ["6", "6+"],
        img: "https://miro.medium.com/max/336/0*qJDdTN5n79oDesz9.png",
        cost: 0,
      },
    ],
    articles: [
      {
        title: "What is DevOps?",
        id: uniqid(),
        url: "https://aws.amazon.com/devops/what-is-devops/",
        isRequired: true,
      },
      {
        title: "DevOps Explained",
        id: uniqid(),
        url: "https://azure.microsoft.com/en-ca/overview/what-is-devops/",
        isRequired: true,
      },
    ],
  },
];
