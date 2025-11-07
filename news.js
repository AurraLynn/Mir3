/**
 * 梦想传奇3 - 新闻功能模块
 * 负责处理新闻数据和新闻弹窗功能
 */

// 新闻数据
const newsData = {
    news1: {
        title: "梦想传奇3正式公测公告",
        date: "2025-11-01",
        icon: "bullhorn",
        content: `
        <p class="text-light mb-6">亲爱的玩家们：</p>
        <p class="text-light mb-6">经过数月的精心准备和测试，我们非常高兴地宣布，《梦想传奇3》将于2025年11月15日上午10:00正式开启全平台公测！</p>
        <p class="text-light mb-6">《梦想传奇3》是一款原汁原味复刻传奇3经典玩法的MMORPG游戏，我们致力于为玩家打造一个充满回忆又不失创新的游戏世界。在这次公测中，玩家将体验到：</p>
        <ul class="list-disc pl-6 text-light mb-6 space-y-2">
          <li>经典1.76版本玩法完美复刻</li>
          <li>七大元素系统全新体验</li>
          <li>三端互通，随时随地畅玩</li>
          <li>千人同屏，激情攻城</li>
          <li>高爆率，装备道具直接掉落</li>
        </ul>
        <p class="text-light mb-6">为庆祝公测开启，我们准备了丰富的开服活动和福利：</p>
        <ol class="list-decimal pl-6 text-light mb-6 space-y-2">
          <li>开服七日登录奖励，每日登录即可领取珍稀道具</li>
          <li>冲级大赛，等级排名前100的玩家将获得丰厚奖励</li>
          <li>首杀奖励，首杀各大BOSS的玩家将获得专属称号和道具</li>
          <li>行会争霸，开服第7天将开启首次沙巴克攻城战</li>
        </ol>
        <p class="text-light mb-6">我们深知，游戏的成长离不开玩家的支持和反馈。在公测期间，我们将持续关注玩家的意见和建议，不断优化游戏体验，为大家带来更好的《梦想传奇3》。</p>
        <p class="text-light mb-6">11月15日，让我们相约玛法大陆，重温经典，再创辉煌！</p>
        <p class="text-light">《梦想传奇3》运营团队</p>
        <p class="text-light">2025年11月1日</p>
      `
    },
    news2: {
        title: "开服活动抢先看",
        date: "2025-10-25",
        icon: "gift",
        content: `
        <p class="text-light mb-6">亲爱的玩家们：</p>
        <p class="text-light mb-6">《梦想传奇3》即将于11月15日正式公测，为感谢大家的支持与等待，我们准备了一系列丰富多彩的开服活动，让您在游戏中快速成长，畅享传奇乐趣！</p>
        <h4 class="text-xl font-bold text-primary mb-4">活动一：七日登录豪礼</h4>
        <p class="text-light mb-6">活动期间，每日登录游戏即可领取丰厚奖励：</p>
        <ul class="list-disc pl-6 text-light mb-6 space-y-2">
          <li>第一天：绑定元宝*1000，小瓶金创药*50</li>
          <li>第二天：双倍经验卷轴*2，中瓶金创药*30</li>
          <li>第三天：随机高级技能书*1，小瓶魔法药*50</li>
          <li>第四天：强化石*10，中瓶魔法药*30</li>
          <li>第五天：VIP体验卡（7天）*1，大瓶金创药*20</li>
          <li>第六天：高级装备箱*1，大瓶魔法药*20</li>
          <li>第七天：稀有坐骑（7天）*1，绑定元宝*2000</li>
        </ul>
        <h4 class="text-xl font-bold text-primary mb-4">活动二：冲级大赛</h4>
        <p class="text-light mb-6">开服后15天内，等级排名前100的玩家将获得丰厚奖励：</p>
        <ul class="list-disc pl-6 text-light mb-6 space-y-2">
          <li>第1名：极品武器*1，元宝*10000，专属称号"等级之王"</li>
          <li>第2-3名：高级武器*1，元宝*5000，专属称号"等级精英"</li>
          <li>第4-10名：优质武器*1，元宝*3000</li>
          <li>第11-50名：元宝*2000，强化石*50</li>
          <li>第51-100名：元宝*1000，强化石*20</li>
        </ul>
        <h4 class="text-xl font-bold text-primary mb-4">活动三：首杀奖励</h4>
        <p class="text-light mb-6">游戏内各大BOSS首次被击杀时，击杀队伍的所有成员将获得丰厚奖励：</p>
        <ul class="list-disc pl-6 text-light mb-6 space-y-2">
          <li>世界BOSS首杀：元宝*5000，高级装备箱*1</li>
          <li>精英BOSS首杀：元宝*2000，优质装备箱*1</li>
          <li>普通BOSS首杀：元宝*1000，强化石*30</li>
        </ul>
        <h4 class="text-xl font-bold text-primary mb-4">活动四：行会争霸</h4>
        <p class="text-light mb-6">开服第7天将开启首次沙巴克攻城战，胜利的行会将获得丰厚奖励：</p>
        <ul class="list-disc pl-6 text-light mb-6 space-y-2">
          <li>行会会长：专属武器*1，元宝*10000，专属称号"沙巴克城主"</li>
          <li>行会成员：元宝*2000，强化石*50</li>
        </ul>
        <p class="text-light mb-6">更多活动详情，请关注游戏内公告。我们期待与您一起，在《梦想传奇3》的世界中创造属于我们的传奇！</p>
        <p class="text-light">《梦想传奇3》运营团队</p>
        <p class="text-light">2025年10月25日</p>
      `
    },
    news3: {
        title: "玩家见面会圆满结束",
        date: "2025-10-20",
        icon: "comments",
        content: `
        <p class="text-light mb-6">亲爱的玩家们：</p>
        <p class="text-light mb-6">上周六（10月18日），我们在北京成功举办了《梦想传奇3》玩家见面会，感谢所有到场玩家的热情参与和支持！</p>
        <p class="text-light mb-6">本次见面会吸引了来自全国各地的近百名玩家代表参加，现场气氛热烈。开发团队与玩家们进行了深入的交流，分享了游戏的开发历程、特色玩法和未来更新计划。</p>
        <h4 class="text-xl font-bold text-primary mb-4">见面会精彩回顾</h4>
        <p class="text-light mb-6">1. 开发团队分享了《梦想传奇3》的开发理念和特色玩法，包括经典复刻、七大元素系统、三端互通等。</p>
        <p class="text-light mb-6">2. 现场展示了游戏的最新版本，玩家们亲身体验了游戏的操作和玩法，并提出了宝贵的意见和建议。</p>
        <p class="text-light mb-6">3. 开发团队回答了玩家们关心的问题，包括游戏平衡性、职业特色、社交系统等。</p>
        <p class="text-light mb-6">4. 现场举行了互动游戏和抽奖活动，送出了丰厚的周边礼品和游戏礼包。</p>
        <h4 class="text-xl font-bold text-primary mb-4">玩家反馈与未来计划</h4>
        <ul class="list-disc pl-6 text-light mb-6 space-y-2">
          <li>优化游戏画面和特效，提升视觉体验</li>
          <li>调整职业平衡性，确保各职业特色鲜明</li>
          <li>丰富社交系统，增加更多互动玩法</li>
          <li>优化任务系统，增加更多有趣的任务内容</li>
          <li>加强反外挂措施，保障游戏公平性</li>
        </ul>
        <p class="text-light mb-6">我们计划在公测后每月推出一次大版本更新，不断丰富游戏内容，提升游戏体验。同时，我们也将定期举办线上线下活动，与玩家保持密切互动。</p>
        <p class="text-light mb-6">再次感谢所有玩家的支持和反馈！《梦想传奇3》的成长离不开每一位玩家的参与和支持。我们将继续努力，为大家打造一个更加精彩的传奇世界！</p>
        <p class="text-light">《梦想传奇3》开发团队</p>
        <p class="text-light">2025年10月20日</p>
      `
    }
};

// 新闻弹窗功能
document.addEventListener('DOMContentLoaded', function() {
    const newsModal = document.getElementById('news-modal');
    const newsContent = document.getElementById('news-content');
    const closeModalBtn = document.querySelector('.close-modal-btn');

    // 为所有"阅读更多"按钮添加点击事件
    document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            const id = btn.getAttribute('data-news');
            const news = newsData[id];
            
            if (news) {
                // 填充新闻内容
                newsContent.innerHTML = `
                    <div class="text-primary text-3xl mb-6"><i class="fa fa-${news.icon}"></i></div>
                    <span class="text-primary text-sm">${news.date}</span>
                    <h3 class="text-2xl font-bold text-primary my-4">${news.title}</h3>
                    <div class="text-light">${news.content}</div>
                `;
                
                // 显示弹窗
                newsModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // 关闭弹窗按钮
    closeModalBtn.addEventListener('click', () => {
        newsModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // 点击弹窗外部关闭弹窗
    newsModal.addEventListener('click', e => {
        if (e.target === newsModal) {
            newsModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // 按ESC键关闭弹窗
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && newsModal.classList.contains('active')) {
            newsModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});
