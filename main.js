/**
 * 梦想传奇3 - 主功能脚本
 * 包含：粒子效果、滚动动画、导航栏交互、通知栏开关等核心功能
 */

document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    initScrollAnimations();
    initMobileMenu();
    initBackToTop();
    initSmoothScroll();
    initNavbarScroll();
    initNotification();
});

/**
 * 初始化粒子背景效果
 */
function initParticles() {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#D4AF37' },
            shape: { type: 'circle', stroke: { width: 0, color: '#000' } },
            opacity: { value: 0.35 },
            size: { value: 2.6, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#D4AF37',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 0.5 } },
                push: { particles_nb: 3 }
            }
        },
        retina_detect: true
    });
}

/**
 * 滚动进入时的淡入动画
 */
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    elements.forEach(el => observer.observe(el));
}

/**
 * 移动端菜单
 */
function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('close-menu');
    const menu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('.mobile-nav-link');

    toggle.addEventListener('click', () => menu.classList.add('active'));
    closeBtn.addEventListener('click', () => menu.classList.remove('active'));

    links.forEach(link => {
        link.addEventListener('click', () => menu.classList.remove('active'));
    });
}

/**
 * 返回顶部按钮
 */
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            btn.classList.remove('opacity-0', 'invisible');
            btn.classList.add('opacity-100', 'visible');
        } else {
            btn.classList.remove('opacity-100', 'visible');
            btn.classList.add('opacity-0', 'invisible');
        }
    });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/**
 * 平滑滚动
 */
function initSmoothScroll() {
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * 导航栏滚动效果
 */
function initNavbarScroll() {
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.remove('bg-transparent');
            nav.classList.add('bg-glass', 'border-primary/30');
            nav.classList.remove('border-primary/10');
        } else {
            nav.classList.add('bg-transparent');
            nav.classList.remove('bg-glass', 'border-primary/30');
            nav.classList.add('border-primary/10');
        }
    });
}

/**
 * 顶部通知栏控制模块
 * 使用 Turn = true/false 控制是否显示
 */
function initNotification() {
    const notification = document.getElementById('top-notification');
    const closeBtn = document.getElementById('notification-close');
    const nav = document.querySelector('nav');

    // 🚀 控制开关：true = 显示通知栏，false = 不显示
    const Turn = true;

    if (!notification || !nav) return;

    if (Turn) {
        showNotification();
    } else {
        hideNotification();
        return;
    }

    // 关闭按钮
    closeBtn?.addEventListener('click', () => {
        hideNotification();
    });

    // 控制台手动切换函数
    window.toggleNotification = function() {
        if (notification.classList.contains('show')) {
            hideNotification();
        } else {
            showNotification();
        }
    };

    /** 显示通知 */
    function showNotification() {
        notification.classList.add('show');
        nav.style.top = '60px';
    }

    /** 隐藏通知 */
    function hideNotification() {
        notification.classList.remove('show');
        nav.style.top = '0';
    }
}
