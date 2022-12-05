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

//Handle scrolling => navbar menu

const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (e) => {
  console.log(e.target.dataset.link); //html : <tag data-link=#menu>
  const target = e.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

//Handle click on "contact me" button on home
const asideTopBtn = document.querySelector(".aside__top");
asideTopBtn.addEventListener("click", () => {
  scrollIntoView("#home");
});

const asideBottomBtn = document.querySelector(".aside__bottom");
asideBottomBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// 중복코드시 함수로 만들어서 사용
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
