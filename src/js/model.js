// import paths from "./data/paths";
import paths from "./data/paths";

const state = {
  currentPath: "",
  currentTime: "",
  userName: "",
};

export const getUserInput = function (input) {
  const userInput = input;

  state.currentPath = userInput.path;
  state.currentTime = userInput.time;
  state.userName = userInput.userName;
};

//based on the state, get the correct path 
export const getPath = function () {
  const data = [
    {
      title: pathName(),
      userName: state.userName,
      time: state.currentTime,
    }
  ];

  const roadMap = createRoadMap();

  data.push(roadMap);

  return data;
};

// Go through correct path and find courses according to the
// timeline set by the user
function createRoadMap() {
  // path is = frontEnd, backEnd, fullStack data;
  const path = paths[state.currentPath];

  const roadMap = path.map((section) => {
    //Clone object so we don't delete any off of original section.
    const element = { ...section };

    //filter out the uneeded courses
    element.courses = element.courses.filter((el) =>
      el.timeline.includes(state.currentTime)
    );

    return element;
  });

  return roadMap;
}

// Edit Current Path Choice for Rendering Purposes
const pathName = () => {
  if (state.currentPath === "frontEnd") {
    return "Front-End";
  } else if (state.currentPath === "backEnd") {
    return "Back-End";
  } else {
    return "Full Stack";
  }
};
