const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-section-mobile");
const hide = document.querySelector("body")


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  hide.classList.toggle("active");
})

document.querySelectorAll(".navbar-section-mobile").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  hide.classList.remove("active");

}))