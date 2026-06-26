document.addEventListener('DOMContentLoaded', () => {
    // Cursor glow
    const glow = document.getElementById('cursor-glow');
    if (glow) {
        document.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                glow.style.left = e.clientX + 'px';
                glow.style.top = e.clientY + 'px';
            });
        });

        const clickables = document.querySelectorAll('a, .project-card');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                glow.style.width = '700px';
                glow.style.height = '700px';
                glow.style.background = 'radial-gradient(circle, rgba(212, 160, 74, 0.12) 0%, transparent 70%)';
            });
            el.addEventListener('mouseleave', () => {
                glow.style.width = '500px';
                glow.style.height = '500px';
                glow.style.background = 'radial-gradient(circle, rgba(212, 160, 74, 0.08) 0%, transparent 70%)';
            });
        });
    }

    // Scroll-triggered fade-in
    const fadeEls = document.querySelectorAll('.fade-in');
    if (fadeEls.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        fadeEls.forEach(el => observer.observe(el));
    }
});
