import { scrollArrow } from "./functions/scroll-arrow";
import { nav } from "./functions/nav";
import { workSlider } from "./functions/workSlider";

document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".burger")) {
        nav();
    }

    if (document.querySelector(".scroll-to-top")) {
        scrollArrow();
    }

    if (document.querySelector(".work-slider")) {
        workSlider();
    }
});
