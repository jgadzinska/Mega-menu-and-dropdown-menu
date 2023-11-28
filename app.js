const body = document.querySelector("body");
const nav = document.querySelector("nav");
const searchToggle = document.querySelector(".searchToggle");

//Search box
searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active");
});
