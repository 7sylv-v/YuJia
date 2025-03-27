document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const slideItems = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".arrow.left");
    const nextButton = document.querySelector(".arrow.right");

    let currentIndex = 0;
    const totalSlides = slideItems.length;

    function updateSlidePosition() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    }

    function showPreviousSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    }

    // Event listeners for buttons
    nextButton.addEventListener("click", showNextSlide);
    prevButton.addEventListener("click", showPreviousSlide);

    // Automatic slide change every 3 seconds
    setInterval(showNextSlide, 3000);
});



// 全局动效
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section-element'); // 找到所有需要监控的元素

    // 检查元素是否进入视口的50%位置
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        console.log('Element rect:', rect);  // 调试输出位置
        return (
            rect.top <= window.innerHeight && rect.bottom >= 0 // 视口范围内
        );
    }

    // 监听滚动事件
    window.addEventListener('scroll', () => {
        sections.forEach((section) => {
            if (isElementInViewport(section) && !section.classList.contains('visible')) {
                section.classList.add('visible');
                console.log('Element visible:', section);  // 调试输出
            }
        });
    });

    // 在页面加载时，检查一下当前视口中已经出现的元素
    sections.forEach((section) => {
        if (isElementInViewport(section)) {
            section.classList.add('visible');
        }
    });
});
// 制作方法
document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step");

    // 检查元素是否进入视口的函数
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // 判断元素的顶部是否进入视口并且底部未超出视口
        return rect.top <= windowHeight && rect.bottom >= 0;
    }

    // 处理每个step元素的显示
    function handleStepVisibility() {
        steps.forEach((step) => {
            if (isElementInViewport(step) && !step.classList.contains('visible')) {
                step.classList.add('visible'); // 添加可见的class
                step.style.opacity = 1; // 触发显示动画
                step.style.transform = "translateY(0)"; // 触发上移动画
            }
        });
    }

    // 初始加载检查
    handleStepVisibility();

    // 滚动监听，优化性能
    window.addEventListener("scroll", () => {
        handleStepVisibility(); // 检查元素是否进入视口
    });

    // 还可以用requestAnimationFrame来优化性能，避免频繁触发滚动事件
    // let ticking = false;
    // window.addEventListener('scroll', () => {
    //     if (!ticking) {
    //         window.requestAnimationFrame(() => {
    //             handleStepVisibility();
    //             ticking = false;
    //         });
    //         ticking = true;
    //     }
    // });
});

//合作伙伴轮播
$(document).ready(function() {
    var currentIndex = 0;
    setInterval(function() {
      currentIndex = (currentIndex + 1) % $('.partner-card').length;
      $('.partner-wall').animate({
        marginLeft: -currentIndex * 200
      }, 500);
    }, 3000);
});