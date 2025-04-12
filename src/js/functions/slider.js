"use strict";

import Hammer from "hammerjs";

export const slider = () => {
    const slider = document.querySelector(".projects__slides");
    const slides = document.querySelectorAll(".projects__slide");
    const prevBtn = document.querySelector(".projects__button-step_arrow");
    const nextBtn = document.querySelector(".projects__button-step_colored");
    const counter = document.querySelector(".projects__page-count");
    const activeCounter = counter.querySelector(".projects__page-count_active");

    let currentSlide = 0;

    const updateSlider = () => {
        slides.forEach((slide, index) => {
            slide.style.display = index === currentSlide ? "block" : "none";
        });

        const formattedCurrent = String(currentSlide + 1).padStart(2, "0");
        const formattedTotal = String(slides.length).padStart(2, "0");

        activeCounter.textContent = formattedCurrent;
        counter.lastChild.textContent = `-${formattedTotal}`;

        // Блокируем кнопки на крайних слайдах
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === slides.length - 1;

        // Меняем курсоры
        prevBtn.style.cursor = prevBtn.disabled ? "not-allowed" : "pointer";
        nextBtn.style.cursor = nextBtn.disabled ? "not-allowed" : "pointer";
    };

    const showNextSlide = () => {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            updateSlider();
        }
    };

    const showPrevSlide = () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    };

    updateSlider();

    nextBtn.addEventListener("click", showNextSlide);
    prevBtn.addEventListener("click", showPrevSlide);

    const hammer = new Hammer(slider);
    hammer.on("swipeleft", () => {
        if (currentSlide < slides.length - 1) {
            showNextSlide();
        }
    });
    hammer.on("swiperight", () => {
        if (currentSlide > 0) {
            showPrevSlide();
        }
    });
};
