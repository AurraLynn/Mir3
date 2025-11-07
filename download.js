/**
 * 梦想传奇3 - 下载功能模块
 * 负责处理游戏客户端的下载流程
 */

document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const btn1 = document.getElementById('download-btn-1');
    const btn2 = document.getElementById('download-btn-2');
    const modal = document.getElementById('download-modal');
    const closeModalBtn = document.getElementById('close-modal');

    const stepServer = document.getElementById('step-server-check');
    const stepValidate = document.getElementById('step-file-validation');
    const stepDownloading = document.getElementById('step-downloading');
    const stepError = document.getElementById('step-error');

    const mainServerStatus = document.getElementById('main-server-status');
    const downloadServerStatus = document.getElementById('download-server-status');
    const networkStatus = document.getElementById('network-status');
    const serverBar = document.getElementById('server-check-progress');
    const serverMsg = document.getElementById('server-check-message');

    const vName = document.getElementById('validation-file-name');
    const vSize = document.getElementById('validation-file-size');
    const vMd5 = document.getElementById('validation-file-md5');
    const vVer = document.getElementById('validation-file-version');
    const vBar = document.getElementById('validation-progress');
    const vMsg = document.getElementById('validation-message');

    const errMsg = document.getElementById('error-message');
    const retryBtn = document.getElementById('retry-download');
    const openFolderBtn = document.getElementById('open-folder-btn');

    // 下载配置
    const config = {
        full: {
            name: 'PC完整版',
            sizeText: '1.62GB',
            md5: '8f434346648f6b96df89dda901c5176b',
            version: 'v1.0.2',
            url: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvYy9hOGRiOGExOGY3YmE2OWM1L0VlT1Rzd0VkRHloTWl1WUlNUTRLeGlrQmNwV0E2bmtTdWM1eWk0QTNHM21JbUE_ZT1McVJTMmI.zz'
        }
    };
    
    // 当前选择的下载类型
    let current = config.full;

    /**
     * 显示指定步骤，隐藏其他步骤
     * @param {HTMLElement} step - 要显示的步骤元素
     */
    function showStep(step) {
        [stepServer, stepValidate, stepDownloading, stepError].forEach(s => {
            s.classList.add('hidden');
        });
        step.classList.remove('hidden');
    }

    /**
     * 重置所有步骤的状态
     */
    function resetSteps() {
        // 重置服务器检查步骤
        mainServerStatus.innerHTML = '<i class="fa fa-circle-o-notch fa-spin mr-2 text-gray-500"></i><span class="text-gray-500">检查中...</span>';
        downloadServerStatus.innerHTML = '<i class="fa fa-circle-o-notch fa-spin mr-2 text-gray-500"></i><span class="text-gray-500">检查中...</span>';
        networkStatus.innerHTML = '<i class="fa fa-circle-o-notch fa-spin mr-2 text-gray-500"></i><span class="text-gray-500">检查中...</span>';
        serverBar.style.width = '0%';
        serverMsg.textContent = '正在检查服务器状态...';

        // 重置文件验证步骤
        vName.textContent = `正在获取${current.name}信息...`;
        vSize.textContent = '获取中...';
        vMd5.textContent = '计算中...';
        vVer.textContent = '获取中...';
        vBar.style.width = '0%';
        vMsg.textContent = '正在校验文件信息...';
    }

    /**
     * 更新状态显示
     * @param {HTMLElement} element - 要更新的元素
     * @param {string} type - 状态类型：success, warning, error
     * @param {string} text - 状态文本
     */
    function updateStatus(element, type, text) {
        const icon = document.createElement('i');
        const span = document.createElement('span');
        element.innerHTML = '';

        if (type === 'success') {
            icon.className = 'fa fa-check-circle mr-2 text-green-500';
            span.className = 'text-green-500';
        } else if (type === 'warning') {
            icon.className = 'fa fa-exclamation-circle mr-2 text-yellow-500';
            span.className = 'text-yellow-500';
        } else {
            icon.className = 'fa fa-times-circle mr-2 text-red-500';
            span.className = 'text-red-500';
        }

        span.textContent = text;
        element.appendChild(icon);
        element.appendChild(span);
    }

    /**
     * 模拟服务器检查过程
     */
    function startServerCheck() {
        showStep(stepServer);
        let progress = 0;

        const timer = setInterval(() => {
            progress += 1;
            serverBar.style.width = progress + '%';

            // 更新检查状态
            if (progress === 20) {
                serverMsg.textContent = '正在连接主服务器...';
            }
            if (progress === 40) {
                updateStatus(mainServerStatus, 'success', '在线');
                serverMsg.textContent = '正在连接下载服务器...';
            }
            if (progress === 60) {
                updateStatus(downloadServerStatus, 'success', '在线');
                serverMsg.textContent = '正在测试网络连接...';
            }
            if (progress === 80) {
                updateStatus(networkStatus, 'success', '良好');
                serverMsg.textContent = '正在完成检查...';
            }

            // 检查完成
            if (progress >= 100) {
                clearInterval(timer);
                serverMsg.textContent = '服务器状态检查完成';

                // 模拟10%的概率出现服务器维护
                setTimeout(() => {
                    if (Math.random() < 0.10) {
                        showStep(stepError);
                        errMsg.textContent = '下载服务器正在维护中，请稍后再试';
                    } else {
                        startFileValidation();
                    }
                }, 300);
            }
        }, 30); // 每30毫秒更新一次，总共约3秒
    }

    /**
     * 模拟文件验证过程
     */
    function startFileValidation() {
        showStep(stepValidate);
        let progress = 0;

        const timer = setInterval(() => {
            progress += 1;
            vBar.style.width = progress + '%';

            // 更新验证状态
            if (progress === 30) {
                vSize.textContent = current.sizeText;
                vMsg.textContent = '正在校验文件完整性...';
            }
            if (progress === 60) {
                vMd5.textContent = current.md5;
                vMsg.textContent = '正在检查文件版本...';
            }
            if (progress === 90) {
                vVer.textContent = current.version;
                vMsg.textContent = '正在完成验证...';
            }

            // 验证完成
            if (progress >= 100) {
                clearInterval(timer);
                vMsg.textContent = '文件验证完成';

                // 模拟5%的概率出现文件损坏
                setTimeout(() => {
                    if (Math.random() < 0.05) {
                        showStep(stepError);
                        errMsg.textContent = '文件校验失败，可能已损坏';
                    } else {
                        startDownload();
                    }
                }, 300);
            }
        }, 30); // 每30毫秒更新一次，总共约3秒
    }

    /**
     * 开始下载
     */
    function startDownload() {
        showStep(stepDownloading);

        // 延迟500毫秒开始下载，给用户一个视觉过渡
        setTimeout(() => {
            const a = document.createElement('a');
            a.href = current.url;
            a.download = `梦想传奇3_${current.name}_${current.version}.exe`;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }, 500);
    }

    /**
     * 打开下载文件夹按钮点击事件
     * 仅提示，不实际打开文件夹
     */
    openFolderBtn.addEventListener('click', function() {
        alert('提示：请在浏览器的"下载"页面查看进度或打开下载文件。\n\n常见方式：\n• Windows/Linux：Ctrl + J\n• macOS（Chrome/Edge）：Command + J\n• Safari：点击顶部菜单 "显示" → "显示下载"');
    });

    /**
     * 重试下载按钮点击事件
     */
    retryBtn.addEventListener('click', () => {
        resetSteps();
        startServerCheck();
    });

    /**
     * 打开下载弹窗
     */
    function openDownloadModal() {
        modal.classList.remove('hidden');
        resetSteps();
        startServerCheck();
    }

    /**
     * 关闭下载弹窗
     */
    function closeDownloadModal() {
        modal.classList.add('hidden');
    }

    /**
     * 关闭弹窗按钮点击事件
     */
    document.getElementById('close-modal').addEventListener('click', closeDownloadModal);

    /**
     * 点击弹窗外部关闭弹窗
     */
    modal.addEventListener('click', e => {
        if (e.target === modal) {
            closeDownloadModal();
        }
    });

    /**
     * 按ESC键关闭弹窗
     */
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeDownloadModal();
        }
    });

    /**
     * 下载按钮点击事件
     */
    btn1.addEventListener('click', () => {
        current = config.full;
        openDownloadModal();
    });

    btn2.addEventListener('click', () => {
        current = config.full;
        openDownloadModal();
    });
});
