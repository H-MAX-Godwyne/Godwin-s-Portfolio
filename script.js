
const menuButton = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

// Open and close the mobile menu
menuButton.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.textContent = isOpen ? "✕" : "☰";
});

// Close menu after selecting a section
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
    });
});

// Automatically update copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();
