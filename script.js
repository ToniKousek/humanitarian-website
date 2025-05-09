// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    animateText(250);

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const tagsToBeAnimated = document.getElementsByClassName("animate-text");
function animateText(interval) {
  setInterval(() => {
    Array.from(tagsToBeAnimated).forEach((e) => {
      e.classList.add("animate-text-on");
    });
  }, interval);
}

if (window.scrollY) {
  animateText(0);
}

// Show navbar
let scrolled = false;
window.onscroll = function () {
  if (window.scrollY && scrolled) return;

  animateText(250);

  document.getElementById("navbar").style.top = "0"; // Show the navbar
  scrolled = true;
};

if (window.location.href.includes("kontakt")) {
  document.getElementById("navbar").style.top = "0";
}
