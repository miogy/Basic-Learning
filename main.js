"use strict";

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  //console.log(window.scrollY); // y 확인
  //console.log(`navbarHeight:${navbarHeight}`); // y 확인

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

// scroll down => home fade

const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  //  console.log(1 - window.scrollY / homeHeight); //scroll계산
  home.style.opacity = 1 - window.scrollY / homeHeight;
  home.style.transition = "all 500ms ease";
});

//category => filtering

const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
//각각의 컨테이너 안에 프로젝트들을 받아옴
const projects = document.querySelectorAll(".project");
//btn click
workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter; //parentNode를 사용하여 target지정(span)
  //console.log(filter); //e.target값 지정
  if (filter == null) {
    return;
  }
  // let project;
  // for (let i = 0; i < projects.length; i++) {
  //   project = projects[i];
  // }
  projects.forEach((project) => {
    // for문과 같은 의미, 배열을 불러와서 정렬
    if (filter === "*" || filter === project.dataset.type) {
      project.classList.remove("invisible");
    } else {
      project.classList.add("invisible");
    }
  });
});

// 중복코드시 함수로 만들어서 사용
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
