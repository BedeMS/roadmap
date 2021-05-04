// courses need: id, timeLine, isRequired, title, url, cost, img
// articles need the same except for is required.

import uniqid from "uniqid";

export default [
  {
    title: "HTML",
    instructions: `Read the Instructions in every section 
    because they're all different. You must complete all 
    the courses in *RED*. Courses that are not in Red highlighting 
    have been added just incase you want another instructor, course 
    or more reinforcement of the concepts. Articles provided
     should be read. The articles provide a lot of support
      for everything you learn in the courses.`,
    timeline: "~1 Weeks",
    courses: [
      {
        title: "HTML Tutorial for Beginners",
        id: uniqid(),
        url: "https://www.youtube.com/watch?v=qz0aGYrrlhU",
        isRequired: true,
        source: "youtube",
        timeline: ["6", "6+"],
        img:
          "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
        cost: 0,
      },
      {
        title: "HTML Crash Course For Absolute Beginners",
        id: uniqid(),
        url: "https://www.youtube.com/watch?v=UB1O30fR-EE",
        isRequired: false,
        source: "youtube",
        timeline: ["6", "6+"],
        img:
          "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
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
    title: "CSS + SASS",
    instructions: `You must complete all the courses in *RED*. Articles provided also must be read. The articles 
      provide a lot of support for everything you learn in the courses.`,
    timeline: "~2-4 Weeks",
    courses: [
      {
        title: "CSS Crash Course for Absolute Beginners",
        id: uniqid(),
        url: "https://www.youtube.com/watch?v=yfoY53QXEnI",
        isRequired: true,
        source: "youtube",
        timeline: ["6", "6+"],
        img: "https://storage.needpix.com/rsynced_images/logo-2582747_1280.png",
        cost: 0,
      },
      {
        title: "Master CSS and SASS",
        id: uniqid(),
        url: "https://www.udemy.com/course/advanced-css-and-sass/",
        isRequired: true,
        source: "udemy",
        timeline: ["6", "6+"],
        img: "https://codingheroes.io/assets/img/C1.png",
        cost: 0,
      },
    ],
    articles: [
      {
        title: "CSS",
        id: uniqid(),
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        isRequired: true,
      },
      {
        title: "CSS Positioning",
        id: uniqid(),
        url:
          "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning",
        isRequired: true,
      },
      {
        title: "SASS Basics",
        id: uniqid(),
        url: "https://sass-lang.com/guide",
        isRequired: true,
      },
      {
        title: "Flexbox",
        id: uniqid(),
        url:
          "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/",
        isRequired: true,
      },
      {
        title: "Grid",
        id: uniqid(),
        url: "https://grid.malven.co/",
        isRequired: true,
      },
    ],
  },
  {
    title: "Javascript",
    instructions: `** MOST IMPORTANT SECTION. ** </br>
    Javascript is the language of the Web. The courses provided 
    explain everything very well along with the articles. 
    If you do not understand this section well, you should work
     on reviewing the concepts until you fully understand it. 
     You shouldn't move forward until then. 
     `,
    timeline: "~4+ Weeks",
    courses: [
      {
        title: "Master Javascript",
        id: uniqid(),
        url:
          "https://www.udemy.com/course/the-complete-javascript-course/?utm_campaign=website1010&utm_medium=website1010&utm_source=mycoupon",
        isRequired: true,
        source: "udemy",
        timeline: ["6", "6+"],
        img: "https://codingheroes.io/assets/img/C3.png",
        cost: 0,
      },
      {
        title: "The Web Developer Bootcamp 2021",
        id: uniqid(),
        url: "https://www.udemy.com/course/the-web-developer-bootcamp/",
        isRequired: false,
        source: "udemy",
        timeline: ["6", "6+"],
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
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
    title: "JS FrameWork (React)",
    instructions: `Once you understand Javascript, you can
     begin working with a framework. React is the most popular
     JS Framework out right now so that's the course provided.
     Colt Steele provides a lot of practice in the course and 
     builds a large application as well. I think you'll enjoy React
     and see `,
    timeline: "~2-4 Weeks",
    courses: [
      {
        title: "The Modern React Bootcamp (Hooks, Context, NextJS, Router)",
        id: uniqid(),
        url: "https://www.udemy.com/course/modern-react-bootcamp/",
        isRequired: true,
        source: "udemy",
        timeline: ["6", "6+"],
        img:
          "https://camo.githubusercontent.com/3c4f1ffd02675537b8f25c9c9c620c1281794b3b99c07ea073837a8ca236191b/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f72656163742d312e737667",
        cost: 0,
      },
    ],
    articles: [
      {
        title: "React Docs",
        id: uniqid(),
        url: "https://reactjs.org/docs/getting-started.html",
        isRequired: true,
      },
      {
        title: "React Hooks",
        id: uniqid(),
        url: "https://www.smashingmagazine.com/2020/04/react-hooks-api-guide/",
        isRequired: true,
      },
      {
        title: "State Management",
        id: uniqid(),
        url:
          "https://kentcdodds.com/blog/application-state-management-with-react",
        isRequired: true,
      },
    ],
  },
  // BACKEND
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
        timeline: ["6", "6+"],
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
        timeline: ["6+"],
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
        timeline: ["6+"],
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
        timeline: ["6+"],
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
        timeline: ["6+"],
        img: "https://miro.medium.com/max/336/0*qJDdTN5n79oDesz9.png",
        cost: 0,
      },
      {
        title: "Exploring Docker Part 2",
        id: uniqid(),
        url: "https://www.youtube.com/watch?v=hP77Rua1E0c",
        isRequired: false,
        source: "udemy",
        timeline: ["6+"],
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
  // PORTFOLIO
  {
    title: "Create Your Portfolio & Projects",
    instructions: `In order to put everything you've learned to 
    good use, you have to practice by building. Think about 
    creating projects that you would enjoy and give it a try.
     Try to create around 5-6 great projects that you can 
     showcase on your portfolio. Since you'll be a self-taught
      developer, one of the best ways to show your skills is 
      through your portfolio.`,
    timeline: "You can decide this.",
    courses: [
      {
        title: "10 Developer Tips",
        id: uniqid(),
        url: "https://www.youtube.com/watch?v=nrWGr2OvBD4",
        isRequired: true,
        source: "youtube",
        timeline: ["6", "6+"],
        img: "https://miro.medium.com/max/3150/0*Y84V0L5UbZ_1uR3s.jpg",
        cost: 0,
      },
    ],
    articles: [
      {
        title: "Tips for a killer Portfolio",
        id: uniqid(),
        url:
          "https://www.creativebloq.com/portfolios/tips-portfolio-website-4137460",
        isRequired: true,
      },
      {
        title: "Why create a portfolio?",
        id: uniqid(),
        url:
          "https://www.springboard.com/blog/programmer-portfolio/#:~:text=What%20Is%20a%20Programmer%20Portfolio,developer%20portfolio%20to%20show%20them.",
        isRequired: true,
      },
    ],
  },
];
