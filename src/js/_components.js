import { scrollArrow } from "./functions/scroll-arrow";
import { nav } from "./functions/nav";
import { slider } from "./functions/slider";

document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".burger")) {
        nav();
    }

    if (document.querySelector(".scroll-to-top")) {
        scrollArrow();
    }

    if (document.querySelector(".projects__slides")) {
        slider();
    }
});
