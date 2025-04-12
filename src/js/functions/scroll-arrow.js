"use strict";

export const scrollArrow = () => {
    const scrollToTopButton = document.querySelector(".scroll-to-top");

    if (!scrollToTopButton) {
        return;
    }

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            scrollToTopButton.classList.add("visible");
        } else {
            scrollToTopButton.classList.remove("visible");
        }
    });

    scrollToTopButton.addEventListener("click", (event) => {
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
};
