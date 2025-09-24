const menuClose = document.querySelector(".menu-close");
const menuOpen = document.querySelector(".menu-open");
const themeBtn = document.querySelector(".theme-btn");
const themeImg = document.querySelector(".theme-btn>img");
const sidebar = document.querySelector(".sidebar");
const nav = document.querySelector("nav");
const sidebarContent = document.querySelector(".sidebar-inner");

menuOpen.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    sidebar.classList.toggle("sidebar-open");
    setTimeout(() => {
        sidebarContent.classList.toggle("hidden");
    }, 600);
});

menuClose.addEventListener("click", () => {
    sidebarContent.classList.toggle("hidden");
    nav.classList.toggle("nav-open");
    setTimeout(() => {
        sidebar.classList.toggle("sidebar-open");
    }, 600);
});

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeImg.src =
        themeImg.getAttribute("src") === "/moon.svg" ? "/sun.svg" : "/moon.svg";
});
