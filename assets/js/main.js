window.addEventListener("scroll", (e) => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
});

//Loading
window.addEventListener("load", () => {
    const loader = document.querySelector(".loading");
    loader.classList.add("loading-hidden");
});
