//Menu Variables
const menu = document.querySelector("header nav ul");
const burger = document.getElementById("burger");

// Handle Menu
burger.addEventListener("click", () => {
  burger.classList.toggle("clicked");
  menu.classList.toggle("hidden");
});

// Handle Scroll to Top Button
const scrollTop = document.getElementById("scrollTop");

window.onscroll = () => {
  if (window.scrollY >= 100) {
    scrollTop.classList.remove("hidden");
  } else {
    scrollTop.classList.add("hidden");
  }
};

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
