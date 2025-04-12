"use strict";

export const popup = () => {
    const openBtns = document.querySelectorAll("[data-popup-target]");

    // Вычисление ширины скроллбара
    const getScrollbarWidth = () => {
        const scrollDiv = document.createElement("div");
        scrollDiv.style.visibility = "hidden";
        scrollDiv.style.overflow = "scroll";
        scrollDiv.style.width = "100px";
        scrollDiv.style.position = "absolute";
        scrollDiv.style.top = "-9999px";
        document.body.appendChild(scrollDiv);

        const innerDiv = document.createElement("div");
        innerDiv.style.width = "100%";
        scrollDiv.appendChild(innerDiv);

        const scrollbarWidth = scrollDiv.offsetWidth - innerDiv.offsetWidth;

        scrollDiv.remove();
        return scrollbarWidth;
    };

    openBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-popup-target");
            const popup = document.getElementById(targetId);

            if (popup) {
                const scrollbarWidth = getScrollbarWidth();
                document.body.style.paddingRight = `${scrollbarWidth}px`;
                document.body.classList.add("popup__no-scroll");

                popup.classList.add("active");

                const overlay = popup.querySelector(".popup__overlay");
                const closeBtn = popup.querySelector(".popup__close");

                const closePopup = () => {
                    popup.classList.remove("active");
                    document.body.classList.remove("popup__no-scroll");
                    document.body.style.paddingRight = "";
                };

                if (overlay) {
                    overlay.addEventListener("click", closePopup);
                }

                if (closeBtn) {
                    closeBtn.addEventListener("click", closePopup);
                }
            }
        });
    });
};
