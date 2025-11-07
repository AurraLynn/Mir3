/**
 * 梦想传奇3 - 截图查看器模块
 * 负责处理游戏截图的查看和筛选功能
 */

document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const screenshotItems = document.querySelectorAll('.screenshot-item');
    const viewer = document.getElementById('screenshot-viewer');
    const viewerImg = document.getElementById('viewer-image');
    const closeBtn = document.querySelector('.close-viewer-btn');
    const prevBtn = document.querySelector('.prev-viewer-btn');
    const nextBtn = document.querySelector('.next-viewer-btn');

    // 收集所有截图数据
    const screenshots = [];
    screenshotItems.forEach(item => {
        const img = item.querySelector('img');
        screenshots.push({
            src: img.src,
            alt: img.alt
        });
    });

    // 当前显示的截图索引
    let current = 0;

    /**
     * 更新查看器显示的截图
     */
    function updateViewer() {
        viewerImg.src = screenshots[current].src;
        viewerImg.alt = screenshots[current].alt;
    }

    /**
     * 为所有截图项添加点击事件
     */
    screenshotItems.forEach(item => {
        item.addEventListener('click', () => {
            current = parseInt(item.getAttribute('data-index'));
            updateViewer();
            viewer.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    /**
     * 关闭查看器
     */
    closeBtn.addEventListener('click', () => {
        viewer.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    /**
     * 点击查看器外部关闭查看器
     */
    viewer.addEventListener('click', e => {
        if (e.target === viewer) {
            viewer.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    /**
     * 上一张截图
     */
    prevBtn.addEventListener('click', e => {
        e.stopPropagation();
        current = (current - 1 + screenshots.length) % screenshots.length;
        updateViewer();
    });

    /**
     * 下一张截图
     */
    nextBtn.addEventListener('click', e => {
        e.stopPropagation();
        current = (current + 1) % screenshots.length;
        updateViewer();
    });

    /**
     * 键盘导航
     */
    document.addEventListener('keydown', e => {
        if (viewer.classList.contains('active')) {
            // ESC键关闭查看器
            if (e.key === 'Escape') {
                viewer.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
            
            // 左箭头显示上一张
            if (e.key === 'ArrowLeft') {
                current = (current - 1 + screenshots.length) % screenshots.length;
                updateViewer();
            }
            
            // 右箭头显示下一张
            if (e.key === 'ArrowRight') {
                current = (current + 1) % screenshots.length;
                updateViewer();
            }
        }
    });

    /**
     * 截图筛选功能
     */
    const filterBtns = document.querySelectorAll('.screenshot-filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 更新按钮样式
            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-primary', 'text-dark');
                b.classList.add('bg-dark/50', 'text-light');
            });
            btn.classList.add('active', 'bg-primary', 'text-dark');
            btn.classList.remove('bg-dark/50', 'text-light');
            
            // 筛选截图
            const filter = btn.getAttribute('data-filter');
            document.querySelectorAll('.screenshot-item').forEach(item => {
                item.style.display = (filter === 'all' || item.getAttribute('data-category') === filter) ? 'block' : 'none';
            });
        });
    });
});
