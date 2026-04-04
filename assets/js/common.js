const fadeInItems = document.querySelectorAll(".animation-fade-in");

const fadeInAnimation = () => {
    for (let i = 0; i < fadeInItems.length; i++) {
        const item = fadeInItems[i];

        const windowPosition = window.pageYOffset;
        const windowHeight = window.innerHeight;

        const itemTop = item.getBoundingClientRect().top + window.pageYOffset;

        if (itemTop < windowPosition + windowHeight) {
            item.classList.add("is-show");
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    fadeInAnimation();
});

document.addEventListener("scroll", () => {
    fadeInAnimation();
});
