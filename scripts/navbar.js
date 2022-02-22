const toggleBtn = document.querySelector(".icon-toggle");
const navLinks = document.querySelector(".navbar-right-container");


toggleBtn.addEventListener('click', () => {

    navLinks.classList.toggle("nav-expand");
})