import View from "./View";

class ProcessView extends View {
  constructor() {
    super();
    this.ideaPhase = document.getElementById("ideaPhase");
    this.designPhase = document.getElementById("designPhase");
    this.codePhase = document.getElementById("codePhase");
    this.launchPhase = document.getElementById("launchPhase");
    this.maintainPhase = document.getElementById("maintainPhase");
    this.ideaImg = document.querySelector(".idea__img");
    this.designImg = document.querySelector(".design__img");
    this.codeImg = document.querySelector(".code__img");
    this.testLaunch = document.querySelector(".testLaunch");
    this.maintain = document.querySelector(".maintain");
    this._addHandlerRender();
  }

  _addHandlerRender() {
    const phases = [
      this.ideaPhase,
      this.designPhase,
      this.codePhase,
      this.launchPhase,
      this.maintainPhase,
    ];
    const phasesPost = [
      this.ideaImg,
      this.designImg,
      this.codeImg,
      this.testLaunch,
      this.maintain,
    ];
    document.addEventListener("click", function (evt) {
      const phasesId = [
        "#ideaPhase",
        "#designPhase",
        "#codePhase",
        "#launchPhase",
        "#maintainPhase",
      ];

      if (!phases[0]) return;
      phasesId.forEach((el, i) => {
        if (evt.target.closest(el)) {
          phases[i].classList.add("process-active");
          phasesPost[i].style.opacity = 1;
          phasesPost[i].style.height = "100%";
          phasesPost[i].style.transition = "opacity .5s ease-in";
        } else {
          phases[i].classList.remove("process-active");
          phasesPost[i].style.opacity = 0;
          phasesPost[i].style.height = 0;
        }
      });
    });
  }
}

export default new ProcessView();
