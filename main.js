"use strict";

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  console.log(window.scrollY); // y 확인
  console.log(`navbarHeight:${navbarHeight}`); // y 확인

  // if (window.scrollY > navbarHeight) {
  //   navbar.classList.add("navbar--dark");
  // } else {
  //   navbar.classList.remove("navbar--dark");
  // }
  if (window.scrollY > 50) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});
