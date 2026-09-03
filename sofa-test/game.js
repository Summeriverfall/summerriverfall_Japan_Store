const TIMER_SEC = 12;
const MAX_FAVOR = 100;
const START_FAVOR = 18;
const ROUND_SIZE = 12;
const BLOCKS = 20;

const TYPE_LABEL = {
  sweet: "会哄",
  action: "行动",
  honest: "真诚",
  literal: "直球",
  tease: "贫嘴",
  timeout: "沉默",
};

const PERSONALITIES = [
  {
    key: "sweet",
    name: "情绪价值批发商",
    caption: "你回的不是句子，是她今天的情绪稳定剂。",
    indexName: "哄人指数",
    indexLine: "不是你会说话。是她听你说话时，世界会变安静。",
    ending:
      "门铃一响你还在看那句「开门」。她进门没换鞋，先把脸埋进你脖子里：好想你，让我抱一下。外套掉在玄关，灯也懒得开。今晚她不走，还要你说爱她。",
  },
  {
    key: "action",
    name: "补救速度拉满",
    caption: "她话还没说完，你人已经到了。这叫胜负在手上。",
    indexName: "男友力指数",
    indexLine: "口才可以练。你这种动手的人，是现货。",
    ending:
      "二十分钟后门铃狂响。她用备用钥匙进来，把你按在墙上亲，喘着说跑过来的。手机扔到沙发上：题答完了，该亲亲验收了。喜欢你。",
  },
  {
    key: "honest",
    name: "嘴拙心软限定款",
    caption: "你说得不漂亮，但每句都能对上她的心跳。",
    indexName: "真心指数",
    indexLine: "不会说话也可以。她要的本来就不是演讲。",
    ending:
      "她提了两杯奶茶站在门口笑你：回消息笨笨的，但我就是吃这套。进门把你的手按在腰上，说今晚不用说漂亮话，靠近就好。爱你。",
  },
  {
    key: "literal",
    name: "直球进球王",
    caption: "你回答的是字面上那个问题。这次刚好，她问的也是那个。",
    indexName: "实在指数",
    indexLine: "字面派也有春天。春天叫她爱你。",
    ending:
      "她靠在玄关笑出声：你说话好直，但我爱听。然后不让你分析了，吻先印在嘴角。她说今晚很简单，就是你。么么。",
  },
  {
    key: "tease",
    name: "贫嘴但命好",
    caption: "你在刀尖上跳舞，她在下面给你铺玫瑰。",
    indexName: "命好指数",
    indexLine: "嘴贫是技能。被爱是天赋。你两个都点了。",
    ending:
      "她进门先咬了一下你的嘴唇：贫嘴的人今晚罚你闭嘴。然后自己先笑场，把你拉到沙发上亲。所谓处罚，就是更靠近一点。喜欢你。",
  },
  {
    key: "timeout",
    name: "沉默是金文学",
    caption: "你什么都没回。她自己把空白填成了喜欢。",
    indexName: "脑补浓度",
    indexLine: "已读不回也能赢。因为读你的人是她。",
    ending:
      "她贴着你耳朵：你不回我的那几秒，我已经想好怎么罚你了。然后不给你开口。沉默被她翻译成邀请，邀请是今晚留下来。爱你。",
  },
  {
    key: "mixed",
    name: "天选恋爱体质",
    caption: "有的话她听进去了，有的话她只是没走。",
    indexName: "被爱指数",
    indexLine: "发挥不算稳，但她还是把这一局看完了。",
    ending:
      "她没发定位，直接出现在门口，像闯关奖励本人。亲吻从门锁开始，她小声说好感度满了，该发放抱抱和亲亲。你真好。",
  },
];

const state = {
  favor: START_FAVOR,
  qIndex: 0,
  history: [],
  typeCounts: { sweet: 0, action: 0, honest: 0, literal: 0, tease: 0, timeout: 0 },
  muted: true,
  seconds: TIMER_SEC,
  locked: false,
  timerId: null,
  order: [],
  viewingReplay: false,
  reached: false,
};

function $(id) {
  return document.getElementById(id);
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function show(id) {
  document.querySelectorAll(".screen").forEach((el) => el.classList.remove("active"));
  $(id).classList.add("active");
}

function buildMeter() {
  const track = $("meterTrack");
  track.innerHTML = "";
  for (let i = 0; i < BLOCKS; i++) {
    const b = document.createElement("span");
    b.className = "meter-block";
    track.appendChild(b);
  }
}

function applyMood(favor) {
  const t = Math.max(0, Math.min(1, favor / MAX_FAVOR));
  const mix = (a, b) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
  const rgb = (c) => `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
  const page = mix([236, 235, 233], [247, 208, 216]);
  const phone = mix([243, 241, 239], [250, 220, 226]);
  document.documentElement.style.setProperty("--mood-page", rgb(page));
  document.documentElement.style.setProperty("--bg", rgb(phone));
}

function favorDeltaLabel(delta) {
  if (delta > 0) return `好感 +${delta}`;
  if (delta < 0) return `好感 ${delta}`;
  return "好感 0";
}

function renderMeter() {
  const n = Math.max(0, Math.min(MAX_FAVOR, Math.round(state.favor)));
  $("meterNum").textContent = String(n);
  const filled = Math.round((n / MAX_FAVOR) * BLOCKS);
  [...$("meterTrack").children].forEach((el, i) => {
    el.classList.toggle("on", i < filled);
  });
  const round = Math.min(state.history.length + 1, state.order.length || ROUND_SIZE);
  $("progressMeta").textContent = `${round} / ${state.order.length || ROUND_SIZE}`;
  applyMood(n);
}

function setMuteIcons() {
  const t = state.muted ? "♪" : "♫";
  $("btnMute").textContent = t;
  $("btnMuteStart").textContent = t;
}

function beep() {
  if (state.muted) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.value = state.seconds <= 3 ? 880 : 520;
    g.gain.value = 0.04;
    o.connect(g);
    g.connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + 0.07);
    setTimeout(() => ctx.close(), 200);
  } catch (_) {}
}

function stopTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function startTimer() {
  stopTimer();
  state.seconds = TIMER_SEC;
  const el = $("countdown");
  el.textContent = String(state.seconds).padStart(2, "0");
  el.classList.remove("warn");
  state.timerId = setInterval(() => {
    state.seconds -= 1;
    el.textContent = String(Math.max(0, state.seconds)).padStart(2, "0");
    el.classList.toggle("warn", state.seconds <= 3);
    if (state.seconds <= 3 && state.seconds > 0) beep();
    if (state.seconds <= 0) {
      stopTimer();
      choose(null);
    }
  }, 1000);
}

function addChat(html) {
  const chat = $("chat");
  chat.insertAdjacentHTML("beforeend", html);
  chat.scrollTop = chat.scrollHeight;
}

function currentQuestion() {
  return QUESTIONS[state.order[state.qIndex]];
}

function renderQuestion() {
  const q = currentQuestion();
  state.locked = false;
  $("chat").innerHTML = "";
  $("choiceHint").textContent = "你要回什么";
  addChat(`<div class="scene">${escapeHtml(q.scene)}</div>`);
  addChat(`<div class="bubble her">${escapeHtml(q.prompt)}</div>`);
  const box = $("options");
  box.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "opt";
    btn.textContent = opt.text;
    btn.addEventListener("click", () => choose(i));
    box.appendChild(btn);
  });
  $("choiceWrap").style.display = "";
  renderMeter();
  startTimer();
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function choose(optionIndex) {
  if (state.locked) return;
  state.locked = true;
  stopTimer();
  $("choiceWrap").style.display = "none";

  const q = currentQuestion();
  let picked;
  let isTimeout = false;
  if (optionIndex === null) {
    isTimeout = true;
    picked = {
      text: "（没有回复）",
      type: "timeout",
      favor: 0,
      reply: q.timeout.reply,
    };
  } else {
    picked = q.options[optionIndex];
  }

  state.typeCounts[picked.type] = (state.typeCounts[picked.type] || 0) + 1;
  const delta = picked.favor;
  state.favor = Math.max(0, Math.min(MAX_FAVOR, state.favor + delta));
  const popClass = delta > 0 ? "up" : delta < 0 ? "down" : "flat";

  state.history.push({
    id: q.id,
    prompt: q.prompt,
    scene: q.scene,
    category: q.category,
    answer: picked.text,
    reply: picked.reply,
    type: picked.type,
    favor: delta,
    timeout: isTimeout,
  });

  if (!isTimeout) {
    addChat(`<div class="bubble me">${escapeHtml(picked.text)}</div>`);
  }
  addChat(`<div class="favor-pop ${popClass}">${favorDeltaLabel(delta)}</div>`);
  renderMeter();

  setTimeout(() => {
    addChat(`<div class="bubble her">${escapeHtml(picked.reply)}</div>`);
    $("chat").scrollTop = $("chat").scrollHeight;
    showNextButton();
  }, isTimeout ? 280 : 420);
}

function showNextButton() {
  const last = state.qIndex >= state.order.length - 1;
  const full = state.favor >= MAX_FAVOR;
  $("choiceHint").textContent = "";
  $("choiceWrap").style.display = "";
  const box = $("options");
  box.innerHTML = "";
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn-main next-q";
  btn.textContent = full || last ? "继续" : "下一题";
  btn.addEventListener("click", goNext);
  box.appendChild(btn);
}

function goNext() {
  if (state.favor >= MAX_FAVOR) {
    playEnding(true);
    return;
  }
  if (state.qIndex >= state.order.length - 1) {
    playEnding(false);
    return;
  }
  state.qIndex += 1;
  renderQuestion();
}

function playEnding(reached) {
  $("choiceWrap").style.display = "none";
  stopTimer();
  state.reached = reached;
  if (reached) {
    addChat(`<div class="sys">对方正在输入…</div>`);
    setTimeout(() => {
      addChat(`<div class="bubble her">我现在就出门。你在家等我，不准跑。</div>`);
      setTimeout(() => {
        addChat(`<div class="bubble her">开门，我要亲你。</div>`);
        setTimeout(() => showResult(true), 900);
      }, 700);
    }, 600);
    return;
  }
  addChat(`<div class="sys">对话结束</div>`);
  addChat(`<div class="bubble her">我先去忙啦。回头找你，想我就说。</div>`);
  setTimeout(() => showResult(false), 900);
}

function dominantType() {
  const entries = Object.entries(state.typeCounts).sort((a, b) => b[1] - a[1]);
  const top = entries[0];
  const second = entries[1];
  if (!top || top[1] === 0) return "mixed";
  if (second && top[1] - second[1] <= 1 && top[1] < 3) return "mixed";
  return top[0];
}

function persona() {
  const key = dominantType();
  return PERSONALITIES.find((p) => p.key === key) || PERSONALITIES[PERSONALITIES.length - 1];
}

function loveIndex() {
  const total = state.history.length || 1;
  const sweetish = (state.typeCounts.sweet || 0) + (state.typeCounts.action || 0) + (state.typeCounts.honest || 0);
  const base = 62 + Math.round((sweetish / total) * 28);
  const timeoutBoost = Math.min(10, (state.typeCounts.timeout || 0) * 2);
  return Math.min(99, base + timeoutBoost);
}

function radarScores() {
  const t = state.typeCounts;
  const n = Math.max(1, state.history.length);
  const scale = (v) => Math.round(28 + (v / n) * 70);
  return [
    { label: "会哄", v: scale(t.sweet || 0) },
    { label: "行动", v: scale(t.action || 0) },
    { label: "真诚", v: scale(t.honest || 0) },
    { label: "直球", v: scale(t.literal || 0) },
    { label: "贫嘴", v: scale(t.tease || 0) },
    { label: "读心", v: scale(t.timeout || 0) },
    { label: "稳定", v: 54 + Math.min(36, n * 3) },
    { label: "被爱", v: 78 + Math.min(18, Math.round(state.favor / 8)) },
  ];
}

function drawRadar(canvas, scores) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  const cx = w / 2;
  const cy = h / 2 + 6;
  const r = Math.min(w, h) * 0.34;
  const n = scores.length;
  ctx.clearRect(0, 0, w, h);
  ctx.strokeStyle = "rgba(80,60,50,0.18)";
  ctx.lineWidth = 1;
  for (let ring = 1; ring <= 3; ring++) {
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const ang = -Math.PI / 2 + (i % n) * (Math.PI * 2 / n);
      const x = cx + Math.cos(ang) * r * (ring / 3);
      const y = cy + Math.sin(ang) * r * (ring / 3);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  ctx.beginPath();
  scores.forEach((s, i) => {
    const ang = -Math.PI / 2 + i * (Math.PI * 2 / n);
    const rr = r * (s.v / 100);
    const x = cx + Math.cos(ang) * rr;
    const y = cy + Math.sin(ang) * rr;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(196,92,74,0.22)";
  ctx.strokeStyle = "#c45c4a";
  ctx.lineWidth = 2;
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#5c514c";
  ctx.font = "12px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  scores.forEach((s, i) => {
    const ang = -Math.PI / 2 + i * (Math.PI * 2 / n);
    const x = cx + Math.cos(ang) * (r + 22);
    const y = cy + Math.sin(ang) * (r + 22);
    ctx.fillText(s.label, x, y);
  });
}

function showResult(reached) {
  const p = persona();
  const idx = loveIndex();
  const n = state.history.length;
  const best = Number(localStorage.getItem("bond-best") || 0);
  const record = Math.max(best, n);
  localStorage.setItem("bond-best", String(record));
  const favorNow = Math.round(state.favor);

  const scored = state.history.filter((h) => h.favor > 0);
  const fatal = (scored.length ? scored : state.history).slice().sort((a, b) => b.favor - a.favor)[0];
  const reviews = state.history.slice(-6);
  const catCount = {};
  state.history.forEach((h) => {
    catCount[h.category] = (catCount[h.category] || 0) + 1;
  });
  const topCat = Object.entries(catCount).sort((a, b) => b[1] - a[1])[0];
  const filled = Math.round((favorNow / MAX_FAVOR) * BLOCKS);

  const result = $("result");
  result.innerHTML = `
    <div class="result-lang"><span>简体中文</span><span>♪</span></div>
    <p class="result-end">对话结束</p>
    <p class="fail-note success"><span>● ${reached ? "消息已读。她说她到门口了，要亲你。" : "消息已读。她说回头找你。"}</span><span>${reached ? "等待开门" : "已读"}</span></p>
    <hr class="hr" />
    <p class="kicker">判决</p>
    <h2 class="verdict">${reached ? "她来找你了" : "今天先到这"}</h2>
    <p class="verdict-sub">${reached ? "她说好感满了，要上门来收抱抱和亲亲。" : "她没有生气。只是这一局，还没走到门口。"}</p>
    <div class="meter" style="margin:16px 0 8px">
      <span class="meter-label">最终好感</span>
      <div class="meter-track" id="resultMeter"></div>
      <span class="meter-num">${favorNow}</span>
    </div>
    <hr class="hr" />
    <p class="kicker">这一局走了多久</p>
    <p class="stat-big">${n} / ${state.order.length} 题</p>
    <p class="muted">最近纪录 ${record} 题。</p>
    <hr class="hr" />
    <p class="kicker">这一局</p>
    <p class="muted">${topCat ? `「${topCat[0]}」里你停留得比较久。` : ""}</p>
    ${reviews
      .map(
        (h) => `
      <div class="review-item">
        <h4>第 ${state.history.indexOf(h) + 1} 题 · ${escapeHtml(h.category)}</h4>
        <p class="her-line">对方：${escapeHtml(h.prompt)}</p>
        <p class="me-line">${h.timeout ? "你没有回。" : `你回「${escapeHtml(h.answer)}」`}</p>
        <p class="her-line">她：${escapeHtml(h.reply)}</p>
      </div>`
      )
      .join("")}
    <button type="button" class="btn-ghost" id="btnReplayMid">再看一遍对话</button>
    <hr class="hr" />
    <p class="kicker">你的恋爱人格</p>
    <h3 class="persona-name">${p.name}</h3>
    <p class="verdict-sub">${p.caption}</p>
    <div class="radar-wrap"><canvas id="radar" width="320" height="300"></canvas></div>
    <p class="kicker">${p.indexName}</p>
    <p class="index-num">${idx}%</p>
    <p class="verdict-sub">${p.indexLine}</p>
    <hr class="hr" />
    <p class="kicker">${reached ? "最甜的一句" : "留下的一句"}</p>
    <div class="quote-box">
      <div>对方：${escapeHtml(fatal.prompt)}</div>
      <div>${fatal.timeout ? "你没有回。" : `你回「${escapeHtml(fatal.answer)}」`}</div>
      <div>她：${escapeHtml(fatal.reply)}</div>
    </div>
    ${
      reached
        ? `<hr class="hr" />
    <p class="kicker">结局</p>
    <div class="ending-card">${escapeHtml(p.ending)}</div>`
        : ""
    }
    <hr class="hr" />
    <div class="share-row">
      <button type="button" class="btn-main" id="btnAgain">再来一局</button>
      <button type="button" class="btn-ghost" id="btnShare">把这一局传出去</button>
    </div>
  `;
  const rm = $("resultMeter");
  rm.innerHTML = "";
  for (let i = 0; i < BLOCKS; i++) {
    const b = document.createElement("span");
    b.className = "meter-block" + (i < filled ? " on" : "");
    rm.appendChild(b);
  }
  drawRadar($("radar"), radarScores());
  $("btnAgain").onclick = startGame;
  $("btnReplayMid").onclick = () => {
    state.viewingReplay = true;
    $("choiceWrap").style.display = "none";
    show("play");
    $("chat").scrollTop = $("chat").scrollHeight;
  };
  $("btnShare").onclick = shareRound;
  show("result");
}

async function shareRound() {
  const p = persona();
  const text = `羁绊对话｜我是「${p.name}」\n${p.caption}`;
  try {
    if (navigator.share) {
      await navigator.share({ title: "羁绊对话", text });
      return;
    }
  } catch (_) {}
  try {
    await navigator.clipboard.writeText(text);
    alert("已复制到剪贴板");
  } catch (_) {
    prompt("复制这段分享：", text);
  }
}

function startGame() {
  stopTimer();
  state.favor = START_FAVOR;
  state.qIndex = 0;
  state.history = [];
  state.typeCounts = { sweet: 0, action: 0, honest: 0, literal: 0, tease: 0, timeout: 0 };
  state.locked = false;
  state.viewingReplay = false;
  state.reached = false;
  const picked = shuffle(QUESTIONS.map((_, i) => i)).slice(0, ROUND_SIZE);
  state.order = picked;
  $("choiceWrap").style.display = "";
  renderMeter();
  show("play");
  renderQuestion();
}

window.addEventListener("DOMContentLoaded", () => {
  buildMeter();
  renderMeter();
  setMuteIcons();
  $("btnStart").onclick = startGame;
  $("btnBack").onclick = () => {
    if (state.viewingReplay) {
      state.viewingReplay = false;
      show("result");
      return;
    }
    if (confirm("要结束这一局吗？")) {
      stopTimer();
      applyMood(START_FAVOR);
      show("start");
    }
  };
  $("btnMute").onclick = $("btnMuteStart").onclick = () => {
    state.muted = !state.muted;
    setMuteIcons();
  };
});
