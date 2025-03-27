// 交互逻辑
document.querySelectorAll('.series-item').forEach(item => {
    item.addEventListener('click', function() {
        // 移除所有激活状态
        document.querySelectorAll('.series-item').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
        
        // 获取当前分类
        const category = this.dataset.category;
        
        // 滚动到对应产品区块
        const targetSection = document.querySelector(`[data-category="${category}"]`);
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // GSAP动画增强
        gsap.from(targetSection, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power3.out"
        });
    });
});