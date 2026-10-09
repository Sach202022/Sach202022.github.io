const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", function () {
  const isOpen = mobileNav.classList.toggle("show");

  menuBtn.textContent = isOpen ? "✕" : "☰";
  menuBtn.setAttribute("aria-expanded", isOpen);
  menuBtn.setAttribute(
    "aria-label",
    isOpen ? "Close menu" : "Open menu"
  );
});

document.querySelectorAll("#mobileNav a").forEach(function (link) {
  link.addEventListener("click", function () {
    mobileNav.classList.remove("show");
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open menu");
  });
});
