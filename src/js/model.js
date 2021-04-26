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

  console.log(state);
};

//based on the state, get the correct path
export const getPath = function () {
  const path = [...paths[state.currentPath]];
  const data = [];
  // const roadMap = [];
  data.push({
    title: pathName(),
    userName: state.userName,
  });

  const roadMap = path.map((el) => {
    //Clone object so we don't delete any off of original.
    const element = { ...el };
    element.courses = element.courses.filter((el) =>
      el.timeline.includes(state.currentTime)
    );
    return element;
  });

  data.push(roadMap);

  return data;
};

const pathName = () => {
  if (state.currentPath === "frontEnd") {
    return "Front-End";
  } else if (state.currentPath === "backEnd") {
    return "Back-End";
  } else {
    return "Full Stack";
  }
};
