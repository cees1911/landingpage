const btnHamburgermenu = document.querySelector("#btnHamburgermenu");
const body = document.querySelector("body");
const header = document.querySelector(".header");
//const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburgermenu.addEventListener("click", function () {
  console.log("open hamburgermenu");

  if (header.classList.contains("open")) {
    // close the hamburgermenu
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    //open hamburgermenu
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
