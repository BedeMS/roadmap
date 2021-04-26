import processView from "./views/processView";
import canvasView from "./views/Canvas/canvasView";
import formView from "./views/formView";
import * as model from "./model";

const controlRoadmap = function (input) {
  const userInput = input;

  // update state
  model.getUserInput(userInput);

  // get correct data to render
  formView.render(model.getPath());
  // formView.createMarkUp(model.getPath());
};

const init = function () {
  formView.addHandlerRender(controlRoadmap);
};

init();
