document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".join-image", {
        x: (i, target) => (i - 2) * 100, // 根据索引控制左右移动的距离
        ease: "power1.out",
        scrollTrigger: {
            trigger: ".join-images",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });
});
