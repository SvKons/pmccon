import { scrollArrow } from "./functions/scroll-arrow";
import { nav } from "./functions/nav";
import { slider } from "./functions/slider";
import { popup } from "./functions/popup";

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

    if (document.getElementById("consultationPopup")) {
        popup();
    }
});
