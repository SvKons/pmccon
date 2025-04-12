const workSlider = () => {
    document.addEventListener("DOMContentLoaded", function () {
        const slidesContainer = document.querySelector(".work-slider__slides");
        const slides = document.querySelectorAll(".work-slider__slide");
        const dotsContainer = document.querySelector(".work-slider__dots");
        const slideCount = slides.length;
        let currentIndex = 0;
        let interval;

        // Создание точек
        slides.forEach((_, index) => {
            const dot = document.createElement("div");
            dot.classList.add("work-slider__dot");
            dot.dataset.slide = index;
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll(".work-slider__dot");
        if (dots.length > 0) dots[0].classList.add("active");

        function goToSlide(index) {
            currentIndex = index;
            const offset = `-${index * 100}%`;
            slidesContainer.style.transform = `translateX(${offset})`;

            dots.forEach((dot) => dot.classList.remove("active"));
            dots[index].classList.add("active");

            resetAutoSlide();
        }

        dots.forEach((dot) => {
            dot.addEventListener("click", function () {
                const index = parseInt(this.dataset.slide, 10);
                goToSlide(index);
            });
        });

        function startAutoSlide() {
            interval = setInterval(() => {
                currentIndex = (currentIndex + 1) % slideCount;
                goToSlide(currentIndex);
            }, 3000);
        }

        function stopAutoSlide() {
            clearInterval(interval);
        }

        function resetAutoSlide() {
            stopAutoSlide();
            startAutoSlide();
        }

        slidesContainer.addEventListener("mouseenter", stopAutoSlide);
        slidesContainer.addEventListener("mouseleave", startAutoSlide);

        // Drag (мышью)
        let startX = 0;
        let moveX = 0;

        slidesContainer.addEventListener("mousedown", function (e) {
            e.preventDefault();
            startX = e.pageX;

            function onMouseMove(e) {
                moveX = e.pageX - startX;
            }

            function onMouseUpOrLeave() {
                slidesContainer.removeEventListener("mousemove", onMouseMove);
                slidesContainer.removeEventListener(
                    "mouseup",
                    onMouseUpOrLeave
                );
                slidesContainer.removeEventListener(
                    "mouseleave",
                    onMouseUpOrLeave
                );

                if (moveX > 50) {
                    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
                } else if (moveX < -50) {
                    currentIndex = (currentIndex + 1) % slideCount;
                }
                goToSlide(currentIndex);
            }

            slidesContainer.addEventListener("mousemove", onMouseMove);
            slidesContainer.addEventListener("mouseup", onMouseUpOrLeave);
            slidesContainer.addEventListener("mouseleave", onMouseUpOrLeave);
        });

        // Touch
        let touchStartX = 0;

        slidesContainer.addEventListener("touchstart", function (e) {
            touchStartX = e.touches[0].pageX;
        });

        slidesContainer.addEventListener(
            "touchmove",
            function (e) {
                const touchEndX = e.touches[0].pageX;
                const moveX = touchEndX - touchStartX;
                if (Math.abs(moveX) > 30) {
                    e.preventDefault();
                }
            },
            { passive: false }
        );

        slidesContainer.addEventListener("touchend", function (e) {
            const touchEndX = e.changedTouches[0].pageX;
            if (touchStartX - touchEndX > 50) {
                currentIndex = (currentIndex + 1) % slideCount;
            } else if (touchStartX - touchEndX < -50) {
                currentIndex = (currentIndex - 1 + slideCount) % slideCount;
            }
            goToSlide(currentIndex);
        });

        startAutoSlide();
    });
};
