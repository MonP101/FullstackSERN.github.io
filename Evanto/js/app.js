function Dropdown(element) {
  let menu = document.getElementsByClassName("dropdown-menu");
  for (let i = 0; i < menu.length; i++) {
    menu[i].classList.remove("active");
  }
  element.nextElementSibling.classList.add("active");
}

window.onclick = function (event) {
  let active = document.querySelector(".active");
  if (
    active &&
    !event.target.matches(".button-action", ".button-secondaction")
  ) {
    active.classList.remove("active");
  } else {
  }
};
