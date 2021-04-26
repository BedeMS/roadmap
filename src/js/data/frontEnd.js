// courses need: id, timeLine, isRequired, title, url, cost, img
// articles need the same except for is required.

import uniqid from "uniqid";

export default [
  {
    title: "HTML",
    instructions: `You must complete the entire course in the given timeline. 
      All the videos in red must be watched from beginning 
      to end. Articles provided also must be read. The articles 
      provide alot of support to everything you watch in the courses.`,
    timeline: "2-15 Weeks",
    courses: [
      {
        title: "HTML Tutorial for Beginners",
        id: uniqid(),
        url: "https://www.youtube.com/watch?v=qz0aGYrrlhU",
        isRequired: true,
        source: "youtube",
        timeline: ["3", "6"],
        img:
          "https://i.ytimg.com/an_webp/qz0aGYrrlhU/mqdefault_6s.webp?du=3000&sqp=CLnA74IG&rs=AOn4CLAoxV1T1al1Qct9G8D3yOVh_4NEiQ",
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
