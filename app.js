const body = document.querySelector("body");
const nav = document.querySelector("nav");
const searchToggle = document.querySelector(".searchToggle");
const navOpenBtn = document.querySelector(".navOpenBtn");
const navCloseBtn = document.querySelector(".navCloseBtn");



searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active");
});

navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
});
navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
});