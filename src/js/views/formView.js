import View from "./View";

class FormView extends View {
  constructor() {
    super();
    this.parentElement = document.querySelector(".roadmap");
    this.pathDesc = document.querySelector(".path__help");
    this.roadmapPathInfo = document.querySelector(".roadmap__path-info");
    this.pathDescDisplay = document.querySelector(".paths");
    this._renderPathHelp();
  }

  addHandlerRender(handler) {
    const userData = {};

    document.addEventListener("DOMContentLoaded", (e) => {
      this.roadmapBtn = document.getElementById("roadmapSubmit");
      this.roadmapTime = document.getElementById("timeChoices");
      this.roadmapPath = document.getElementById("pathChoices");
      this.userName = document.getElementById("userName");

      this.roadmapBtn.addEventListener("click", () => {
        if (this.userName.value === "") {
          this.userName.style.border = "2px solid red";
          return;
        } else {
          this.userName.style.border = "none";
          userData.userName = this.userName.value;
          userData.path = this.roadmapPath.value;
          userData.time = this.roadmapTime.value;
          handler(userData);
          window.scrollTo({
            left: 0,
            top: 900,
            behavior: "smooth",
          });
        }
      });
    });
  }

  _renderPathHelp() {
    document.addEventListener("click", (e) => {
      if (e.target.closest(".path__help")) {
        this.roadmapPathInfo.insertAdjacentHTML(
          "beforeend",
          '<button class="btn btn-red btn-rnd closeDesc">Close</button>'
        );
        this.pathDesc.style.display = "none";
        this.pathDescDisplay.classList.add("path-box");
      } else if (e.target.closest(".closeDesc")) {
        e.target.remove();
        this.pathDesc.style.display = "flex";
        this.pathDescDisplay.classList.remove("path-box");
      } else {
        return;
      }
    });
  }

  createMarkUp(data) {
    const [formInfo, roadMap] = data;
    console.log(formInfo);
    return `
    <h1 class="roadmap__title">${formInfo.title}</h1>
    ${this.checkFullStack(formInfo, roadMap)}
    <h1 class="message">
      Hi <span class="message__userName">${
        formInfo.userName
      }</span>. I wish you nothing but the Best. Keep focused and work hard to create a
      good future for yourself.
    </h1>
    `;
  }

  // ${roadMap.map(this.loopMarkUp).join("")}

  checkFullStack(formInfo, roadMap) {
    if (formInfo.title === "Full Stack" && formInfo.time === "3") {
      return `<h1 class="message"> Full Stack Development requires at a minimum 6 months. 
      It's recommended that you take 6+ months. </h1> `;
    } else {
      return roadMap.map(this.loopMarkUp).join("");
    }
  }

  // loops through each section in Stack. ex: html, css ...
  loopMarkUp(el, ind) {
    if (el.courses.length === 0) return;
    return `
    <div class="roadmap__box">
      <h1 class="roadmap__box-title">${el.title}</h1>
      <p class="roadmap__box-timeline">
          <span class="roadmap__section-title">Timeline: </span>
          ${el.timeline}
      </p>
      <p class="roadmap__box-instructions">
        <span class="roadmap__section-title">Instructions:</span> <br />
        ${el.instructions}
      </p>
      <div class="roadmap__box-courses">
        <p class="roadmap__section-title">Courses:</p>
        <div class="courses">
          ${el.courses
            .map((course) => {
              return `
            <div class="course__box">
            <img src="${course.img}" class="${
                course.isRequired ? "course-required" : ""
              }"alt="Course name" />
            <a href="${course.url}" target="_blank" class="course__box-title">${
                course.title
              }</a>
          </div>
            `;
            })
            .join("")}
        </div>
      </div>
      <div class="roadmap__box-articles">
        <p class="roadmap__section-title">Articles:</p>
        <div class="articles">
        ${el.articles
          .map((el) => {
            return `
            <a href="${el.url}" target="_blank" class="article__link">${el.title}</a>
          `;
          })
          .join("")}
        </div>
      </div>
    </div>
    `;
  }

  coursesLoop(el) {
    return `
    <div class="course__box ${el.isRequired ? "course-required" : ""}">
    <img src="${el.img}" alt="Course name" />
    <a href="${el.url}" class="course__box-title">${el.title}</a>
  </div>
    `;
  }

  articlesLoop(el) {
    return `
    <a target="_blank" href="${el.url}" class="article__link" rel="noopener noreferrer">${el.title}</a>
    `;
  }
}

// roadmap stack description view

export default new FormView();
