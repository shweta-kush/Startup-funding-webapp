
let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos) {
    navbar.classList.add("visible"); // Show navbar when scrolling up
  } else {
    navbar.classList.remove("visible"); // Hide navbar when scrolling down
  }
  
  prevScrollPos = currentScrollPos;
});

