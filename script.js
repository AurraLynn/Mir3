// 1. 职业信息数据
const classInfo = {
    "战士": {
        subtitle: "前排肉盾，高防御高生命",
        info: "战士：高生命、高防御、近战输出为主，前排抗伤害的核心。擅长单体物理攻击，拥有多种防御和反击技能，是战场前排不可或缺的存在。",
        img: "https://save.aura.us.kg/Mir3/%E5%8D%A1%E7%89%87%E8%83%8C%E6%99%AF.jpg"
    },
    "法师": {
        subtitle: "远程魔法输出，群体伤害强",
        info: "法师：高魔法输出，远程攻击为主，技能范围广且强力。擅长火焰、雷电等元素攻击，能够在短时间内造成巨大群体伤害，但防御较低。",
        img: "https://save.aura.us.kg/Mir3/%E5%8D%A1%E7%89%87%E8%83%8C%E6%99%AF.jpg"
    },
    "道士": {
        subtitle: "兼顾辅助与远程，团队多面手",
        info: "道士：兼顾辅助和远程，擅长召唤和治疗技能。能够召唤宠物助战，并拥有群体治疗和buff技能，是团队战斗中的多面手。",
        img: "https://save.aura.us.kg/Mir3/%E5%8D%A1%E7%89%87%E8%83%8C%E6%99%AF.jpg"
    }
};

// 2. 新闻完整内容数据
const newsData = {
    1: {
        title: "全新服务器「热血沙城」震撼开启",
        date: "2024-06-20",
        content: `<p>亲爱的传奇3玩家：</p><p>为感谢大家一直以来的支持与热爱，我们将于2024年6月20日正式开启全新服务器——「热血沙城」！</p><p>新服专属福利：</p><ul><li>登录即送VIP3，畅享尊贵特权！</li><li>绑定元宝10000，助你快速成长！</li><li>首充任意金额，即可获得双倍返利！</li><li>开服7日内，每日参与「沙城争霸」活动，有机会获得稀有装备「屠龙刀」、「麻痹戒指」等！</li></ul><p>新服采用最新优化引擎，运行更流畅，体验更极致！快来与兄弟并肩作战，重铸传奇辉煌！</p><p>——传奇3运营团队</p>`
    },
    2: {
        title: "v1.3.2版本上线，优化战斗体验",
        date: "2024-06-15",
        content: `<p>尊敬的玩家：</p><p>我们已于2024年6月15日成功上线v1.3.2版本，本次更新重点优化了游戏性能与平衡性，具体内容如下：</p><h4>【优化内容】</h4><p>1. 修复法师「冰咆哮」技能范围判定不准确的问题，现在技能效果更加精准。</p><p>2. 调整法师部分技能伤害系数，提升其在团战中的输出稳定性。</p><p>3. 新增「沙巴克攻城战」专属地图——「皇宫广场」，地图内设有箭塔、城墙、补给点等战略元素，增强攻城战策略性。</p><p>4. 优化战士「烈火剑法」技能冷却时间，由10秒缩短至8秒，提升其爆发频率。</p><p>5. 增强道士「群体治愈术」治疗量，现在可更有效地支持团队续航。</p><p>感谢大家的理解与支持！我们将持续努力，为大家带来更优质的游戏体验。</p><p>——传奇3技术团队</p>`
    },
    3: {
        title: "道士职业进阶指南，轻松成为团队核心",
        date: "2024-06-10",
        content: `<p>道士作为传奇3中唯一的辅助职业，在团队中扮演着至关重要的角色。想要成为一名优秀的道士，不仅需要合理的技能搭配，还需掌握正确的战斗策略。以下是一份实用的道士职业进阶指南：</p><h4>一、召唤兽养成</h4><p>道士的召唤兽（如骷髅、神兽）是重要的输出与吸引仇恨的手段。建议优先提升「召唤骷髅」或「召唤神兽」技能等级，并配合「强化召唤兽」技能增强其属性。</p><h4>二、治疗技能使用时机</h4><p>「群体治愈术」应在团队血量低于60%时及时释放，避免集中掉血导致团灭。同时，「治愈术」可用于单体急救，尤其对战士等高血职业效果显著。</p><p>——传奇3攻略组</p>`
    }
};

// 3. 悬浮通知关闭功能
document.getElementById('notificationClose').addEventListener('click', () => {
    document.getElementById('notificationModal').style.display = 'none';
});

// 4. 职业弹窗交互逻辑
const classModal = document.getElementById('classModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalInfo = document.getElementById('modalInfo');
const classModalContent = document.getElementById('classModalContent');

// 职业卡片点击打开弹窗
document.querySelectorAll('.class-card').forEach(card => {
    card.addEventListener('click', () => {
        const cls = card.getAttribute('data-class');
        const info = classInfo[cls];
        modalTitle.textContent = cls;
        modalSubtitle.textContent = info.subtitle;
        modalInfo.textContent = info.info;
        classModalContent.style.backgroundImage = `url(${info.img})`;
        classModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

// 关闭职业弹窗
modalClose.addEventListener('click', () => {
    classModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// 点击弹窗外部关闭
classModal.addEventListener('click', (e) => {
    if (e.target === classModal) {
        classModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// 5. 新闻弹窗交互逻辑
const newsModal = document.getElementById('newsModal');
const newsModalClose = document.getElementById('newsModalClose');
const newsModalTitle = document.getElementById('newsModalTitle');
const newsModalDate = document.getElementById('newsModalDate');
const newsModalBody = document.getElementById('newsModalBody');

// 新闻卡片点击打开弹窗
document.querySelectorAll('.news-card').forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        const news = newsData[id];
        newsModalTitle.textContent = news.title;
        newsModalDate.textContent = news.date;
        newsModalBody.innerHTML = news.content;
        newsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// 关闭新闻弹窗
newsModalClose.addEventListener('click', () => {
    newsModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// 点击弹窗外部关闭
newsModal.addEventListener('click', (e) => {
    if (e.target === newsModal) {
        newsModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// 6. 下载卡片与弹窗交互逻辑
const downloadCard = document.getElementById('pcDownloadCard');
const downloadModal = document.getElementById('downloadModal');
const downloadModalClose = document.getElementById('downloadModalClose');
const modalDownloadBtn = document.getElementById('modalDownloadBtn');
const downloadStatus = document.getElementById('downloadStatus');
const progressFill = document.getElementById('progressFill');
const statusText = downloadStatus.querySelector('.status-text');

// 下载卡片点击打开弹窗
downloadCard.addEventListener('click', () => {
    downloadModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// 关闭下载弹窗
downloadModalClose.addEventListener('click', () => {
    downloadModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    resetDownloadStatus();
});

// 点击弹窗外部关闭
downloadModal.addEventListener('click', (e) => {
    if (e.target === downloadModal) {
        downloadModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        resetDownloadStatus();
    }
});

// 7. 下载进度模拟逻辑
let isDownloading = false;
modalDownloadBtn.addEventListener('click', () => {
    if (isDownloading) return;

    isDownloading = true;
    modalDownloadBtn.disabled = true;
    modalDownloadBtn.innerHTML = '<span class="download-btn-icon">⏳</span> 正在下载...';
    downloadStatus.style.display = 'block';

    let progress = 0;
    const interval = setInterval(() => {
        progress += 1;
        progressFill.style.width = `${progress}%`;
        statusText.textContent = `正在下载... ${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
            statusText.textContent = '👌 下载完成！';
            statusText.classList.add('status-success');
            modalDownloadBtn.innerHTML = '<span class="download-btn-icon">📁</span> 打开文件';
            modalDownloadBtn.disabled = false;
            isDownloading = false;

            // 模拟跳转下载链接
            setTimeout(() => {
                window.open('https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBZ204d3BjSVhDanNnNHRuV2VyWDNxWk9BM0JBcUE.sd', '_blank');
            }, 1000);
        }
    }, 50);
});

// 重置下载状态
function resetDownloadStatus() {
    isDownloading = false;
    modalDownloadBtn.disabled = false;
    modalDownloadBtn.innerHTML = '<span class="download-btn-icon">⬇</span> 立即下载';
    downloadStatus.style.display = 'none';
    progressFill.style.width = '0%';
    statusText.textContent = '准备下载...';
    statusText.classList.remove('status-success');
}