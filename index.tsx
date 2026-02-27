<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>2026有道考研破晓开学季</title>
  
  <!-- 引入 Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- 引入 Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <style>
    /* 自定义动画 */
    @keyframes breathe {
      0%, 100% { transform: scale(1); box-shadow: 0 0 15px rgba(234, 88, 12, 0.4); }
      50% { transform: scale(1.05); box-shadow: 0 0 25px rgba(234, 88, 12, 0.8); }
    }
    .btn-breathe {
      animation: breathe 2s infinite ease-in-out;
    }
    
    @keyframes floatUp {
      0% { transform: translateY(0); }
      100% { transform: translateY(-50%); }
    }
    .animate-float-up {
      animation: floatUp 15s linear infinite;
    }
    .animate-float-up:hover {
      animation-play-state: paused;
    }

    /* 3D 翻转卡片基础样式 */
    .perspective-1000 { perspective: 1000px; }
    .transform-style-3d { 
      transform-style: preserve-3d; 
      transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1); 
    }
    .backface-hidden { backface-visibility: hidden; }
    .rotate-y-180 { transform: rotateY(180deg); }
    
    /* 隐藏滚动条但保留滚动功能 */
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  </style>
</head>
<body class="w-full min-h-screen bg-gradient-to-b from-[#0a0f24] via-[#3b1f50] to-[#e65c00] text-white font-sans overflow-x-hidden">

  <!-- PC端主容器：限制最大宽度为 max-w-6xl 并居中 -->
  <div class="max-w-6xl mx-auto bg-black/10 min-h-screen shadow-2xl relative pb-28">
    
    <!-- ================= 模块一：头屏主视觉 ================= -->
    <section class="relative pt-20 pb-24 px-8 overflow-hidden flex flex-col items-center text-center">
      <!-- 背景光晕 -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-400/40 via-purple-900/20 to-transparent blur-3xl -z-10"></div>
      
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6 text-sm text-orange-200">
        <i data-lucide="sparkles" class="w-4 h-4"></i>
        <span>2026考研首发季</span>
      </div>

      <h1 class="text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-wide drop-shadow-[0_0_15px_rgba(255,165,0,0.5)]">
        <span class="block text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-500 mb-2">只争朝夕</span>
        网易有道考研开学季
      </h1>
      <p class="text-purple-200 text-lg mb-10 font-light tracking-widest">破晓已至，你的上岸之路从此刻启程！</p>

      <!-- 紧迫感组件：倒计时 -->
      <div class="w-full max-w-lg bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-xl">
        <div class="text-sm text-gray-300 mb-4 flex justify-center items-center gap-2">
          <i data-lucide="clock" class="text-orange-400 w-5 h-5"></i>
          距开学季超值福利下线仅剩
        </div>
        <div class="flex justify-center gap-4 text-4xl font-mono font-bold text-white">
          <div class="flex flex-col items-center"><span id="t-days" class="bg-white/10 rounded-lg px-4 py-3 min-w-[70px]">00</span><span class="text-xs text-gray-400 mt-2 font-sans">天</span></div>
          <span class="py-3">:</span>
          <div class="flex flex-col items-center"><span id="t-hours" class="bg-white/10 rounded-lg px-4 py-3 min-w-[70px]">00</span><span class="text-xs text-gray-400 mt-2 font-sans">时</span></div>
          <span class="py-3">:</span>
          <div class="flex flex-col items-center"><span id="t-minutes" class="bg-white/10 rounded-lg px-4 py-3 min-w-[70px]">00</span><span class="text-xs text-gray-400 mt-2 font-sans">分</span></div>
          <span class="py-3">:</span>
          <div class="flex flex-col items-center"><span id="t-seconds" class="bg-orange-500 text-white rounded-lg px-4 py-3 min-w-[70px] shadow-[0_0_15px_rgba(249,115,22,0.8)]">00</span><span class="text-xs text-gray-400 mt-2 font-sans">秒</span></div>
        </div>
      </div>
    </section>

    <!-- ================= 模块二：互动引流 (MBTI) ================= -->
    <section class="px-8 py-12">
      <div class="max-w-3xl mx-auto bg-gradient-to-br from-indigo-900/80 to-purple-900/80 rounded-3xl p-10 border border-purple-500/30 shadow-[0_0_40px_rgba(109,40,217,0.3)] text-center relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <h2 class="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
          <i data-lucide="target" class="text-pink-400 w-8 h-8"></i>
          考研界MBTI大揭秘
        </h2>
        <p class="text-lg text-purple-200 mb-8 leading-relaxed">
          是J型规划大师，还是P型极限冲刺王？<br/>测一测，获取你的专属高分复习策略！
        </p>

        <button 
          onclick="openMbtiModal()"
          class="btn-breathe max-w-md mx-auto w-full py-5 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold text-xl shadow-lg flex justify-center items-center gap-3 transition-transform active:scale-95 cursor-pointer"
        >
          👉 测测你的考研人格
        </button>
        <p class="text-sm text-purple-300/80 mt-6 flex items-center justify-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
          已有 <span class="font-mono text-white text-lg">15,392</span> 名研友完成测试并领取规划
        </p>
      </div>
    </section>

    <!-- ================= 模块三：品牌背书 ================= -->
    <section class="px-8 py-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-emerald-400">带你“稳稳”上岸的实力派天团</h2>
        <p class="text-sm text-gray-300">点击卡片，解锁名师反差萌隐藏语录 👇</p>
      </div>

      <!-- 3.1 名师天团 (PC端改为4列布局) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <!-- 老师卡片 1 -->
        <div class="perspective-1000 h-[320px] w-full cursor-pointer group" onclick="this.querySelector('.transform-style-3d').classList.toggle('rotate-y-180')">
          <div class="relative w-full h-full transform-style-3d">
            <!-- 正面 -->
            <div class="absolute inset-0 backface-hidden rounded-2xl p-6 flex flex-col justify-end bg-gradient-to-b from-blue-500 to-cyan-400 border border-white/20 shadow-lg">
              <div class="absolute top-4 left-4 bg-black/30 backdrop-blur-md rounded-full px-3 py-1.5 text-xs font-bold">考研英语</div>
              <div class="absolute bottom-0 right-0 w-2/3 h-2/3 bg-white/10 rounded-tl-full opacity-50 pointer-events-none"></div>
              <div class="relative z-10 pointer-events-none">
                <h3 class="text-2xl font-bold">王牌阅读</h3>
                <p class="text-sm text-white/90">严谨词汇专家</p>
              </div>
            </div>
            <!-- 背面 -->
            <div class="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl p-6 flex flex-col items-center justify-center bg-[#1e293b] border border-gray-600 shadow-lg text-center gap-4">
              <span class="text-6xl">🤯</span>
              <p class="text-base font-medium text-orange-300 leading-snug">"别背abandon了！跟我学，阅读理解直接起飞！"</p>
            </div>
          </div>
        </div>
        <!-- 老师卡片 2 -->
        <div class="perspective-1000 h-[320px] w-full cursor-pointer group" onclick="this.querySelector('.transform-style-3d').classList.toggle('rotate-y-180')">
          <div class="relative w-full h-full transform-style-3d">
            <!-- 正面 -->
            <div class="absolute inset-0 backface-hidden rounded-2xl p-6 flex flex-col justify-end bg-gradient-to-b from-red-500 to-orange-400 border border-white/20 shadow-lg">
              <div class="absolute top-4 left-4 bg-black/30 backdrop-blur-md rounded-full px-3 py-1.5 text-xs font-bold">考研政治</div>
              <div class="absolute bottom-0 right-0 w-2/3 h-2/3 bg-white/10 rounded-tl-full opacity-50 pointer-events-none"></div>
              <div class="relative z-10 pointer-events-none">
                <h3 class="text-2xl font-bold">押题王者</h3>
                <p class="text-sm text-white/90">哲学引路人</p>
              </div>
            </div>
            <!-- 背面 -->
            <div class="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl p-6 flex flex-col items-center justify-center bg-[#1e293b] border border-gray-600 shadow-lg text-center gap-4">
              <span class="text-6xl">😎</span>
              <p class="text-base font-medium text-orange-300 leading-snug">"选择题闭眼选？不存在的，押题我只玩真实的！"</p>
            </div>
          </div>
        </div>
        <!-- 老师卡片 3 -->
        <div class="perspective-1000 h-[320px] w-full cursor-pointer group" onclick="this.querySelector('.transform-style-3d').classList.toggle('rotate-y-180')">
          <div class="relative w-full h-full transform-style-3d">
            <!-- 正面 -->
            <div class="absolute inset-0 backface-hidden rounded-2xl p-6 flex flex-col justify-end bg-gradient-to-b from-emerald-500 to-teal-400 border border-white/20 shadow-lg">
              <div class="absolute top-4 left-4 bg-black/30 backdrop-blur-md rounded-full px-3 py-1.5 text-xs font-bold">考研数学</div>
              <div class="absolute bottom-0 right-0 w-2/3 h-2/3 bg-white/10 rounded-tl-full opacity-50 pointer-events-none"></div>
              <div class="relative z-10 pointer-events-none">
                <h3 class="text-2xl font-bold">满分制造机</h3>
                <p class="text-sm text-white/90">逻辑推演大师</p>
              </div>
            </div>
            <!-- 背面 -->
            <div class="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl p-6 flex flex-col items-center justify-center bg-[#1e293b] border border-gray-600 shadow-lg text-center gap-4">
              <span class="text-6xl">🤓</span>
              <p class="text-base font-medium text-orange-300 leading-snug">"基础差？不慌，把这套公式盘包浆，135+稳了！"</p>
            </div>
          </div>
        </div>
        <!-- 老师卡片 4 -->
        <div class="perspective-1000 h-[320px] w-full cursor-pointer group" onclick="this.querySelector('.transform-style-3d').classList.toggle('rotate-y-180')">
          <div class="relative w-full h-full transform-style-3d">
            <!-- 正面 -->
            <div class="absolute inset-0 backface-hidden rounded-2xl p-6 flex flex-col justify-end bg-gradient-to-b from-purple-500 to-pink-400 border border-white/20 shadow-lg">
              <div class="absolute top-4 left-4 bg-black/30 backdrop-blur-md rounded-full px-3 py-1.5 text-xs font-bold">专业课</div>
              <div class="absolute bottom-0 right-0 w-2/3 h-2/3 bg-white/10 rounded-tl-full opacity-50 pointer-events-none"></div>
              <div class="relative z-10 pointer-events-none">
                <h3 class="text-2xl font-bold">名校领航员</h3>
                <p class="text-sm text-white/90">院校解密猎手</p>
              </div>
            </div>
            <!-- 背面 -->
            <div class="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl p-6 flex flex-col items-center justify-center bg-[#1e293b] border border-gray-600 shadow-lg text-center gap-4">
              <span class="text-6xl">🕵️‍♂️</span>
              <p class="text-base font-medium text-orange-300 leading-snug">"自命题有多难？掌握核心逻辑，导师的心思全拿捏！"</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 3.2 2025届高分捷报 (瀑布流滚动 - 居中较宽) -->
      <div class="max-w-4xl mx-auto bg-white/5 rounded-2xl p-8 border border-white/10 overflow-hidden relative">
        <h3 class="text-lg font-bold text-center mb-6 text-orange-300 flex items-center justify-center gap-2">
          <i data-lucide="check-circle-2" class="w-5 h-5"></i>
          2025届学长学姐疯狂刷屏
        </h3>
        <!-- 上下遮罩使其融合 -->
        <div class="absolute top-16 left-0 w-full h-12 bg-gradient-to-b from-[#181a33] to-transparent z-10"></div>
        <div class="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#181a33] to-transparent z-10"></div>
        
        <div class="h-[200px] overflow-hidden relative">
          <div class="flex flex-col gap-4 animate-float-up absolute w-full px-4">
            <div class="bg-black/40 backdrop-blur-sm rounded-lg p-4 text-sm text-gray-200 border border-white/5 flex items-start gap-3"><div class="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex-shrink-0 mt-0.5"></div><p class="mt-1">🎓 某双非逆袭985，总分412，多亏了有道的专业课指导！</p></div>
            <div class="bg-black/40 backdrop-blur-sm rounded-lg p-4 text-sm text-gray-200 border border-white/5 flex items-start gap-3"><div class="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex-shrink-0 mt-0.5"></div><p class="mt-1">📈 数学135+！基础极差星人的救星啊啊啊！</p></div>
            <div class="bg-black/40 backdrop-blur-sm rounded-lg p-4 text-sm text-gray-200 border border-white/5 flex items-start gap-3"><div class="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex-shrink-0 mt-0.5"></div><p class="mt-1">🔥 政治选择题几乎全中，跟着老师走绝对稳！</p></div>
            <div class="bg-black/40 backdrop-blur-sm rounded-lg p-4 text-sm text-gray-200 border border-white/5 flex items-start gap-3"><div class="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex-shrink-0 mt-0.5"></div><p class="mt-1">✨ 英语阅读满分跨考上岸，感谢老师的逻辑拆解法！</p></div>
            <div class="bg-black/40 backdrop-blur-sm rounded-lg p-4 text-sm text-gray-200 border border-white/5 flex items-start gap-3"><div class="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex-shrink-0 mt-0.5"></div><p class="mt-1">🌟 考研期间心态崩溃好几次，助教姐姐真的很贴心陪伴！</p></div>
            <!-- 重复内容以实现无缝 -->
            <div class="bg-black/40 backdrop-blur-sm rounded-lg p-4 text-sm text-gray-200 border border-white/5 flex items-start gap-3"><div class="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex-shrink-0 mt-0.5"></div><p class="mt-1">🎓 某双非逆袭985，总分412，多亏了有道的专业课指导！</p></div>
            <div class="bg-black/40 backdrop-blur-sm rounded-lg p-4 text-sm text-gray-200 border border-white/5 flex items-start gap-3"><div class="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex-shrink-0 mt-0.5"></div><p class="mt-1">📈 数学135+！基础极差星人的救星啊啊啊！</p></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= 模块四：转化截杀 (PC端采用左右/网格布局) ================= -->
    <section class="px-8 py-16 bg-gradient-to-b from-transparent via-[#4a2311]/80 to-[#1c0f08] relative">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500 tracking-wider">
          开学季抢跑计划<br/>限定福利大放送
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        <!-- 左侧：价格与福利卡片 -->
        <div class="bg-gradient-to-b from-orange-500 to-red-600 p-1.5 rounded-3xl shadow-[0_0_40px_rgba(239,68,68,0.4)] transform hover:scale-[1.02] transition-transform">
          <div class="bg-[#111] rounded-[20px] p-8 text-center h-full relative overflow-hidden flex flex-col justify-center">
            <div class="absolute top-0 right-0 bg-red-500 text-white text-sm font-bold px-4 py-1.5 rounded-bl-xl">限时特惠</div>
            
            <div class="mb-6 mt-4">
              <span class="text-gray-400 text-base">开学季专属神券</span>
              <div class="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 mt-2">
                💰1000<span class="text-2xl">元</span>
              </div>
            </div>

            <div class="bg-white/10 rounded-xl p-5 mb-6 border border-white/5">
              <div class="flex items-center justify-center gap-2 text-orange-400 font-bold text-xl mb-2">
                <i data-lucide="zap" class="fill-current w-6 h-6"></i>
                进阶福利：19.9元 抵 300元 膨胀金！
              </div>
              <p class="text-sm text-gray-300">花小钱，省大钱！添加专属助教微信即可激活</p>
            </div>

            <button 
              onclick="openWechatModal()"
              class="w-full py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black text-xl rounded-xl shadow-[0_6px_0_#b45309] active:shadow-none active:translate-y-1 transition-all"
            >
              一键领取全部福利
            </button>
          </div>
        </div>

        <!-- 右侧：赠礼 & 班级亮点 -->
        <div class="flex flex-col gap-6">
          <!-- 赠礼卡片 -->
          <div class="bg-[#1e1b38] border border-indigo-500/30 rounded-2xl p-6 flex items-center gap-6 h-1/3">
            <div class="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 animate-bounce">
              <i data-lucide="gift" class="text-white w-10 h-10"></i>
            </div>
            <div>
              <h4 class="font-bold text-xl mb-2 text-indigo-300">报名即赠【上岸大礼包】</h4>
              <p class="text-sm text-gray-400 leading-relaxed">含独家内部纸质讲义、长线规划日历、学霸同款开学盲盒等实物周边免费邮寄。</p>
            </div>
          </div>

          <!-- 班级亮点展示 -->
          <div class="bg-white/5 rounded-2xl p-6 border border-white/10 h-2/3 flex flex-col justify-center">
            <h3 class="font-bold text-gray-300 mb-4 flex items-center gap-2 text-lg">
              <i data-lucide="book-open" class="text-orange-400 w-5 h-5"></i>
              硬核课程，全面覆盖提分死角
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="bg-white/5 p-4 rounded-lg border border-white/5 text-sm text-gray-200 shadow-sm flex items-center">📘 英语：长难句秒懂，词汇暴涨</div>
              <div class="bg-white/5 p-4 rounded-lg border border-white/5 text-sm text-gray-200 shadow-sm flex items-center">📕 政治：拒绝死背，精准踩分速成</div>
              <div class="bg-white/5 p-4 rounded-lg border border-white/5 text-sm text-gray-200 shadow-sm flex items-center">📗 数学：构建思维，告别题海战术</div>
              <div class="bg-white/5 p-4 rounded-lg border border-white/5 text-sm text-gray-200 shadow-sm flex items-center">📙 专业课：1对1定向，直击自命题</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部引导占位 -->
      <div class="text-center pb-12 pt-10">
        <p class="text-gray-400 text-base mb-6">机会不等人，扫码开启你的研究生生涯 👇</p>
        <div class="w-64 h-64 bg-white p-3 rounded-2xl mx-auto flex items-center justify-center cursor-pointer hover:scale-105 transition-transform" onclick="openWechatModal()">
            <div class="w-full h-full border-4 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-500 gap-3">
              <span class="text-5xl">📱</span>
              <span class="text-sm font-bold">点击添加企微</span>
            </div>
        </div>
      </div>
    </section>

    <!-- ================= 底部固定悬浮栏 (CTA) ================= -->
    <div class="fixed bottom-0 left-0 right-0 z-40 flex justify-center pointer-events-none">
      <div class="w-full max-w-6xl bg-black/80 backdrop-blur-lg border-t border-white/10 p-4 md:p-6 flex items-center justify-between pointer-events-auto rounded-t-xl">
        <div class="flex items-center gap-3 animate-pulse cursor-pointer" onclick="openWechatModal()">
          <div class="bg-green-500 p-2.5 rounded-full">
            <i data-lucide="message-circle" class="text-white fill-current w-6 h-6"></i>
          </div>
          <span class="text-sm md:text-base text-gray-300 font-medium hidden sm:inline-block">专属助教在线，随时答疑解惑</span>
          <span class="text-sm md:text-base text-gray-300 font-medium sm:hidden">专属助教在线</span>
        </div>
        
        <button 
          onclick="openWechatModal()"
          class="btn-breathe bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded-full shadow-lg flex items-center gap-2 text-base md:text-lg"
        >
          抢 19.9 膨胀金 <i data-lucide="arrow-up-right" class="w-5 h-5"></i>
        </button>
      </div>
    </div>

    <!-- ================= 弹窗组件 ================= -->
    
    <!-- MBTI 测试弹窗 -->
    <div id="mbti-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
      <div class="w-full max-w-lg bg-[#1e1b4b] rounded-3xl p-8 border border-purple-500/50 relative shadow-2xl">
        <button onclick="closeMbtiModal()" class="absolute top-5 right-5 text-gray-400 hover:text-white cursor-pointer">
          <i data-lucide="x" class="w-6 h-6"></i>
        </button>
        <div id="mbti-content">
          <!-- JS 动态注入内容 -->
        </div>
      </div>
    </div>

    <!-- 统一添加微信/领福利弹窗 -->
    <div id="wechat-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
      <div class="w-full max-w-md bg-white rounded-3xl p-8 relative shadow-2xl text-center">
        <button onclick="closeWechatModal()" class="absolute -top-12 right-0 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 cursor-pointer transition-colors">
          <i data-lucide="x" class="w-6 h-6"></i>
        </button>
        
        <div class="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-5 -mt-12 border-4 border-white shadow-lg">
          <i data-lucide="message-circle" class="fill-current w-10 h-10"></i>
        </div>
        
        <h3 class="text-2xl font-bold text-gray-900 mb-2">长按扫码添加专属助教</h3>
        <p class="text-sm text-gray-500 mb-8">获取规划 / 激活19.9膨胀金 / 领报名神券</p>
        
        <div class="w-64 h-64 bg-gray-100 rounded-xl mx-auto mb-8 p-3">
          <!-- 微信二维码占位 -->
          <div class="w-full h-full border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-400">
            <span class="text-sm font-medium">企业微信二维码区域</span>
          </div>
        </div>

        <div class="bg-orange-50 text-orange-600 text-sm py-3 px-6 rounded-full font-medium inline-block animate-pulse">
          今日还剩 8 个膨胀金名额
        </div>
      </div>
    </div>

  </div> <!-- /End max-w-6xl -->

  <!-- JavaScript 逻辑交互 -->
  <script>
    // 1. 初始化 Lucide Icons
    lucide.createIcons();

    // 2. 倒计时逻辑
    const targetDate = new Date('2026-03-31T23:59:59').getTime();
    
    function updateTimer() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) return;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('t-days').innerText = days;
      document.getElementById('t-hours').innerText = hours.toString().padStart(2, '0');
      document.getElementById('t-minutes').innerText = minutes.toString().padStart(2, '0');
      document.getElementById('t-seconds').innerText = seconds.toString().padStart(2, '0');
    }
    
    setInterval(updateTimer, 1000);
    updateTimer();

    // 3. 弹窗控制逻辑
    const wechatModal = document.getElementById('wechat-modal');
    
    function openWechatModal() {
      wechatModal.classList.remove('hidden');
    }
    function closeWechatModal() {
      wechatModal.classList.add('hidden');
    }

    // 4. MBTI 测试逻辑
    const mbtiModal = document.getElementById('mbti-modal');
    const mbtiContent = document.getElementById('mbti-content');
    
    const mbtiQuestions = [
      { q: "面对长难句，你的第一反应是？", options: ["A. 结构拆解，理性分析 (T)", "B. 凭语感盲猜，主打一个随缘 (F)"] },
      { q: "距离考研还有100天，你的复习状态？", options: ["A. 严格按计划表，精确到分钟 (J)", "B. 计划是什么？极限冲刺才刺激 (P)"] },
      { q: "选学校时，你更看重？", options: ["A. 报录比、专业排名、就业率 (S)", "B. 校园风光、城市氛围、直觉 (N)"] }
    ];
    let mbtiStep = 0;

    function renderMbtiStep() {
      if (mbtiStep < 3) {
        const q = mbtiQuestions[mbtiStep];
        mbtiContent.innerHTML = `
          <div class="flex justify-between items-center mb-8 mt-2">
            <span class="text-purple-300 text-base font-bold">考研人格测试</span>
            <span class="text-sm text-purple-400 bg-purple-900 px-3 py-1 rounded-full">${mbtiStep + 1} / 3</span>
          </div>
          <h3 class="text-2xl font-bold text-white mb-10">${q.q}</h3>
          <div class="flex flex-col gap-5">
            ${q.options.map(opt => `
              <button onclick="handleMbtiAnswer()" class="w-full text-left p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-purple-600/40 hover:border-purple-400 transition-colors text-base text-gray-200 cursor-pointer">
                ${opt}
              </button>
            `).join('')}
          </div>
        `;
      } else {
        mbtiContent.innerHTML = `
          <div class="text-center py-8">
            <div class="text-7xl mb-6">🔮</div>
            <h3 class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 mb-4">
              你是「INTJ 战略规划家」
            </h3>
            <p class="text-base text-gray-300 mb-10 leading-relaxed">
              精准踩分，拒绝无用功！<br/>我们为你生成了一份专属高分复习策略。
            </p>
            <button onclick="closeMbtiModal(); openWechatModal();" class="btn-breathe w-full py-5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full font-bold text-xl shadow-[0_0_20px_rgba(236,72,153,0.5)] cursor-pointer">
              👉 领取开学季专属规划
            </button>
          </div>
        `;
      }
    }

    function openMbtiModal() {
      mbtiStep = 0;
      renderMbtiStep();
      mbtiModal.classList.remove('hidden');
    }

    function closeMbtiModal() {
      mbtiModal.classList.add('hidden');
    }

    function handleMbtiAnswer() {
      mbtiStep++;
      renderMbtiStep();
    }
  </script>
</body>
</html>
