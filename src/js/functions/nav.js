"use strict";

export const nav = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav");
    const header = document.querySelector(".header");

    burger.addEventListener("click", function () {
        nav.classList.toggle("active");
        burger.classList.toggle("open");
    });

    const navLinks = document.querySelectorAll(".nav__link");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.remove("active");
            burger.classList.remove("open");
        });
    });

    document.addEventListener("click", function (e) {
        if (!nav.contains(e.target) && !burger.contains(e.target)) {
            nav.classList.remove("active");
            burger.classList.remove("open");
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        const currentPage = window.location.pathname.split("/").pop();
        const navLinks = document.querySelectorAll(".nav__link");

        navLinks.forEach((link) => {
            if (link.getAttribute("href") === currentPage) {
                link.classList.add("link_active");
            }
        });
    });
};
