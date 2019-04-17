

class Dropdown {
  constructor(element) {
    this.element = element;

    this.button = this.element.querySelector(".dropdown-button")
    this.content = this.element.querySelector(".drop-nav");

    this.button.addEventListener("click", () => this.toggleMenu());
  }

  toggleMenu() {

    this.content.classList.toggle("hide");
  }
}



let dropdowns = document.querySelectorAll(".drop-menu");

dropdowns.forEach( dropdown => new Dropdown(dropdown));

let logo = document.querySelector(".logo");

window.addEventListener('load', () => {logoGrow()});

function logoGrow() {
  TweenMax.to(logo, 1, {width:"90px"});
}

// function logoSpin() {
//   TweenMax.to(logo, 1, {rotateY:360});
// }