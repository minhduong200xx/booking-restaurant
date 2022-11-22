const navIconEl = document.querySelector(".nav__icon");
const navCloseEl = document.querySelector(".nav__close");
const navList = document.querySelector(".nav__list");
const navBgOverlayEl = document.querySelector(".nav__bgOverlay");

const navOpen = () => {
  navList.classList.add("show");
  navBgOverlayEl.classList.add("active");
  document.body.style =
    "visibility: visible;height:100vh; width:100vw; overflow:hidden;";
};

const navClose = () => {
  navList.classList.remove("show");
  navBgOverlayEl.classList.remove("active");
  document.body.style =
    "visibility: visible;height:initial; width:100%; overflow-x:hidden; ";
};

navIconEl.addEventListener("click", navOpen);
navCloseEl.addEventListener("click", navClose);
navBgOverlayEl.addEventListener("click", navClose);

//aos
AOS.init({
  offset: 200,
  delay: 150,
  duration: 400,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

//Button to top
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}
const showBanner = (selector) => {
  hideBanners();
  requestAnimationFrame(() => {
    const banner = document.querySelector(selector);
    banner.classList.add("visible");
  });
};

const hideBanners = (e) => {
  document
    .querySelectorAll(".banner.visible")
    .forEach((b) => b.classList.remove("visible"));
};
function send() {
  var arr = document.getElementsByName("1");
  console.log(arr);
  if (arr[0] != "" || arr[0] == null) {
    showBanner(".banner.error");
  } else {
    showBanner(".banner.success");
  }
}
