// --- アプリケーション状態管理 ---
let currentSubject = "history"; // "history" | "geography"
let currentEraId = null;
let activeTab = "input"; // "input" | "output" | "essay"
let currentSlideIndex = 0;
let currentQuizIndex = 0;
let quizScore = 0;
let userAnswers = []; // 各クイズの選択履歴
let isQuizFinished = false;

// データベースの統合
let ALL_DATA = {};

// ユーザー学習進捗度 (LocalStorage)
let progressData = JSON.parse(localStorage.getItem("chrono_progress")) || {
  era1: 0, era2: 0, era3: 0, era4: 0,
  geo1: 0, geo2: 0, geo3: 0, geo4: 0
};

let userOverallScore = parseInt(localStorage.getItem("chrono_overall_score")) || 0;

// --- 初期化 ---
document.addEventListener("DOMContentLoaded", () => {
  // 分割ロードされたデータベースの結合
  ALL_DATA = {
    ...window.HISTORY_ERAS,
    ...window.GEOGRAPHY_ERAS
  };

  renderDashboard();
  updateGlobalStats();
  
  // イベントリスナー設定
  document.getElementById("btn-back-dashboard").addEventListener("click", backToDashboard);
  
  document.getElementById("tab-input").addEventListener("click", () => switchTab("input"));
  document.getElementById("tab-output").addEventListener("click", () => switchTab("output"));
  document.getElementById("tab-essay").addEventListener("click", () => switchTab("essay"));
  
  // 教科切り替えボタン
  document.getElementById("btn-sub-history").addEventListener("click", () => switchSubject("history"));
  document.getElementById("btn-sub-geography").addEventListener("click", () => switchSubject("geography"));
  
  // 赤シートの一括切り替え
  document.getElementById("btn-toggle-redsheet").addEventListener("click", toggleAllRedMasks);
  
  // スライダーのナビゲーション
  document.getElementById("btn-prev-slide").addEventListener("click", prevSlide);
  document.getElementById("btn-next-slide").addEventListener("click", nextSlide);
});

// --- 教科切り替え ---
function switchSubject(subject) {
  currentSubject = subject;
  document.querySelectorAll(".sub-btn").forEach(btn => btn.classList.remove("active"));
  if (subject === "history") {
    document.getElementById("btn-sub-history").classList.add("active");
  } else {
    document.getElementById("btn-sub-geography").classList.add("active");
  }
  renderDashboard();
}

// --- グローバル統計の更新 ---
function updateGlobalStats() {
  document.getElementById("stat-score").textContent = userOverallScore;
  
  // 全体進捗の計算
  const progressValues = Object.values(progressData);
  const avgProgress = Math.round(progressValues.reduce((sum, val) => sum + val, 0) / progressValues.length);
  document.getElementById("stat-progress").textContent = `${avgProgress}%`;
}

// --- ダッシュボードの描画 ---
function renderDashboard() {
  const questGrid = document.getElementById("quest-grid");
  questGrid.innerHTML = "";
  
  // 選択中の教科のクエストのみ抽出
  const filteredEras = Object.values(ALL_DATA).filter(era => era.subject === currentSubject);
  
  filteredEras.forEach(era => {
    const progress = progressData[era.id] || 0;
    const card = document.createElement("div");
    card.className = `quest-card ${era.class}`;
    card.addEventListener("click", () => startEraQuest(era.id));
    
    card.innerHTML = `
      <div class="quest-meta">
        <span>定期試験対策 [${era.subject === "history" ? "歴史" : "地理"}]</span>
        <span>${progress === 100 ? "🏆 CLEAR" : "QUEST"}</span>
      </div>
      <div>
        <h3 class="quest-title">${era.title}</h3>
        <p class="quest-desc">${era.subtitle}</p>
      </div>
      <div class="quest-progress-container">
        <div class="progress-label">
          <span>進捗度</span>
          <span>${progress}%</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: ${progress}%"></div>
        </div>
      </div>
      <div class="quest-footer">
        <button class="action-btn">
          ${progress === 100 ? "復習する" : "開始する"}
          <span style="font-family: var(--font-display)">→</span>
        </button>
      </div>
    `;
    questGrid.appendChild(card);
  });
}

// --- 時代クエスト開始 ---
function startEraQuest(eraId) {
  currentEraId = eraId;
  const era = ALL_DATA[eraId];
  
  // テーマカラー設定
  document.documentElement.style.setProperty("--era-color", era.color);
  document.documentElement.style.setProperty("--era-color-glow", era.glow);
  
  // 画面の切り替え
  document.getElementById("dashboard-view").style.display = "none";
  const workspaceView = document.getElementById("workspace-view");
  workspaceView.style.display = "flex";
  
  document.getElementById("workspace-era-title").textContent = era.title;
  
  // 状態のリセット
  currentSlideIndex = 0;
  currentQuizIndex = 0;
  quizScore = 0;
  userAnswers = [];
  isQuizFinished = false;
  
  switchTab("input");
  renderSlide();
}

// --- ダッシュボードに戻る ---
function backToDashboard() {
  document.getElementById("workspace-view").style.display = "none";
  document.getElementById("dashboard-view").style.display = "flex";
  renderDashboard();
  updateGlobalStats();
}

// --- タブの切り替え ---
function switchTab(tabId) {
  activeTab = tabId;
  
  // タブボタンのアクティブ表示
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  document.getElementById(`tab-${tabId}`).classList.add("active");
  
  // タブコンテンツの表示
  document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));
  document.getElementById(`content-${tabId}`).classList.add("active");
  
  if (tabId === "input") {
    renderSlide();
  } else if (tabId === "output") {
    startQuiz();
  } else if (tabId === "essay") {
    startEssay();
  }
}

// --- インプットスライドの描画 ---
function renderSlide() {
  const era = ALL_DATA[currentEraId];
  const slide = era.slides[currentSlideIndex];
  
  // スライドインジケータ
  document.getElementById("slide-num-current").textContent = currentSlideIndex + 1;
  document.getElementById("slide-num-total").textContent = era.slides.length;
  
  // ビジュアル(SVG)の配置
  const imgWrapper = document.getElementById("slide-image-container");
  imgWrapper.innerHTML = slide.imageSvg + `<div class="image-caption">${slide.caption}</div>`;
  
  // 解説テキスト（赤シート適用）
  const studyTitle = document.getElementById("slide-study-title");
  studyTitle.textContent = slide.title;
  
  const studyText = document.getElementById("slide-study-text");
  studyText.innerHTML = slide.text;
  
  // 赤シートマスクのクリックイベントを付与
  const masks = studyText.querySelectorAll(".red-mask");
  masks.forEach(mask => {
    mask.addEventListener("click", () => {
      mask.classList.toggle("revealed");
    });
  });
  
  // 赤シート全体トグルの文言をリセット
  const toggleBtn = document.getElementById("btn-toggle-redsheet");
  toggleBtn.classList.remove("active");
  toggleBtn.textContent = "赤シートを外す";
  
  // スライダーナビゲーションボタン制御
  document.getElementById("btn-prev-slide").disabled = currentSlideIndex === 0;
  
  const nextBtn = document.getElementById("btn-next-slide");
  if (currentSlideIndex === era.slides.length - 1) {
    nextBtn.innerHTML = `テストに挑戦! <span style="font-family: var(--font-display)">→</span>`;
    nextBtn.classList.add("btn-purple");
  } else {
    nextBtn.innerHTML = `次へ <span style="font-family: var(--font-display)">→</span>`;
    nextBtn.classList.remove("btn-purple");
  }
  
  // ドットインジケータ
  const dotsContainer = document.getElementById("slider-dots");
  dotsContainer.innerHTML = "";
  for (let i = 0; i < era.slides.length; i++) {
    const dot = document.createElement("div");
    dot.className = `dot ${i === currentSlideIndex ? 'active' : ''}`;
    dot.addEventListener("click", () => {
      currentSlideIndex = i;
      renderSlide();
    });
    dotsContainer.appendChild(dot);
  }
  
  // 進捗更新（インプット読了＝30%の進捗保証）
  updateProgress(currentEraId, Math.max(progressData[currentEraId], Math.round(((currentSlideIndex + 1) / era.slides.length) * 30)));
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    renderSlide();
  }
}

function nextSlide() {
  const era = ALL_DATA[currentEraId];
  if (currentSlideIndex < era.slides.length - 1) {
    currentSlideIndex++;
    renderSlide();
  } else {
    // 最後のスライドで次へを押すと、自動的にアウトプット（テスト）タブへ移行
    switchTab("output");
  }
}

// 赤シート全体の表示トグル
function toggleAllRedMasks() {
  const studyText = document.getElementById("slide-study-text");
  const masks = studyText.querySelectorAll(".red-mask");
  const toggleBtn = document.getElementById("btn-toggle-redsheet");
  
  const isCurrentlyRevealing = toggleBtn.classList.contains("active");
  
  if (isCurrentlyRevealing) {
    masks.forEach(mask => mask.classList.remove("revealed"));
    toggleBtn.classList.remove("active");
    toggleBtn.textContent = "赤シートを外す";
  } else {
    masks.forEach(mask => mask.classList.add("revealed"));
    toggleBtn.classList.add("active");
    toggleBtn.textContent = "赤シートをかける";
  }
}

// --- アウトプット（クイズ）モードの実装 ---
function startQuiz() {
  currentQuizIndex = 0;
  quizScore = 0;
  isQuizFinished = false;
  userAnswers = [];
  
  document.getElementById("quiz-play-box").style.display = "block";
  document.getElementById("quiz-result-box").style.display = "none";
  
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const era = ALL_DATA[currentEraId];
  const quiz = era.quizzes[currentQuizIndex];
  
  document.getElementById("quiz-current-num").textContent = currentQuizIndex + 1;
  document.getElementById("quiz-total-num").textContent = era.quizzes.length;
  
  const questionTitle = document.getElementById("quiz-question-title");
  questionTitle.textContent = quiz.question;
  
  const optionsList = document.getElementById("quiz-options-list");
  optionsList.innerHTML = "";
  
  const alphaMarkers = ["A", "B", "C", "D"];
  
  quiz.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.innerHTML = `
      <div class="quiz-option-marker">${alphaMarkers[idx]}</div>
      <div class="quiz-option-text">${opt}</div>
    `;
    btn.addEventListener("click", () => selectQuizOption(idx));
    optionsList.appendChild(btn);
  });
  
  document.getElementById("quiz-explanation").style.display = "none";
  const submitBtn = document.getElementById("btn-submit-quiz");
  submitBtn.textContent = "判定する";
  submitBtn.disabled = true;
  submitBtn.className = "btn";
  submitBtn.onclick = checkQuizAnswer;
}

let selectedOptionIndex = null;

function selectQuizOption(index) {
  if (userAnswers[currentQuizIndex] !== undefined) return;
  
  selectedOptionIndex = index;
  
  const options = document.querySelectorAll(".quiz-option");
  options.forEach((opt, idx) => {
    if (idx === index) {
      opt.classList.add("selected");
    } else {
      opt.classList.remove("selected");
    }
  });
  
  document.getElementById("btn-submit-quiz").disabled = false;
}

function checkQuizAnswer() {
  const era = ALL_DATA[currentEraId];
  const quiz = era.quizzes[currentQuizIndex];
  userAnswers[currentQuizIndex] = selectedOptionIndex;
  
  const options = document.querySelectorAll(".quiz-option");
  const isCorrect = selectedOptionIndex === quiz.correct;
  
  if (isCorrect) {
    quizScore++;
    userOverallScore += 10;
    localStorage.setItem("chrono_overall_score", userOverallScore);
    updateGlobalStats();
  }
  
  options.forEach((opt, idx) => {
    opt.classList.remove("selected");
    if (idx === quiz.correct) {
      opt.classList.add("correct");
    } else if (idx === selectedOptionIndex && !isCorrect) {
      opt.classList.add("wrong");
    }
  });
  
  const explanationBox = document.getElementById("quiz-explanation");
  explanationBox.innerHTML = `
    <strong style="color: ${isCorrect ? 'var(--color-green)' : 'var(--sheet-color)'}">
      ${isCorrect ? '✨ 正解！' : '❌ 不正解...'}
    </strong><br>
    ${quiz.explanation}
  `;
  explanationBox.style.display = "block";
  explanationBox.style.borderLeftColor = isCorrect ? 'var(--color-green)' : 'var(--sheet-color)';
  
  const submitBtn = document.getElementById("btn-submit-quiz");
  if (currentQuizIndex === era.quizzes.length - 1) {
    submitBtn.textContent = "結果を見る";
    submitBtn.className = "btn btn-purple";
    submitBtn.onclick = finishQuiz;
  } else {
    submitBtn.textContent = "次の問題へ";
    submitBtn.onclick = () => {
      currentQuizIndex++;
      renderQuizQuestion();
    };
  }
}

function finishQuiz() {
  document.getElementById("quiz-play-box").style.display = "none";
  const resultBox = document.getElementById("quiz-result-box");
  resultBox.style.display = "flex";
  
  const era = ALL_DATA[currentEraId];
  const maxScore = era.quizzes.length;
  const scorePercent = Math.round((quizScore / maxScore) * 100);
  
  document.getElementById("result-score-current").textContent = quizScore;
  document.getElementById("result-score-total").textContent = maxScore;
  
  const messageH3 = document.getElementById("result-msg-title");
  const messageP = document.getElementById("result-msg-desc");
  
  if (scorePercent === 100) {
    messageH3.textContent = "すばらしい！全問正解！";
    messageP.textContent = "完璧です！定期試験でも自信を持って臨めます！";
  } else if (scorePercent >= 70) {
    messageH3.textContent = "合格レベル！その調子です！";
    messageP.textContent = "よくできています。間違えた問題の解説をよく読んでおきましょう。";
  } else {
    messageH3.textContent = "もう一度復習してみよう！";
    messageP.textContent = "もう一度「インプット」に戻って、赤シートをめくりながら確認してみましょう。";
  }
  
  const quizProgressContribution = Math.round((quizScore / maxScore) * 50);
  const currentProgress = Math.max(progressData[currentEraId], 30 + quizProgressContribution);
  updateProgress(currentEraId, currentProgress);
  
  document.getElementById("btn-retry-quiz").onclick = startQuiz;
  document.getElementById("btn-go-essay").onclick = () => switchTab("essay");
}

// --- 記述（表現対策）クエストの実装 ---
function startEssay() {
  const era = ALL_DATA[currentEraId];
  
  document.getElementById("essay-question").textContent = era.essay.question;
  document.getElementById("essay-input-area").value = "";
  document.getElementById("essay-text-count").textContent = "0 文字";
  
  document.getElementById("essay-result-box").style.display = "none";
  
  const submitBtn = document.getElementById("btn-submit-essay");
  submitBtn.disabled = true;
  submitBtn.onclick = evaluateEssay;
  
  const textarea = document.getElementById("essay-input-area");
  textarea.oninput = () => {
    const len = textarea.value.trim().length;
    document.getElementById("essay-text-count").textContent = `${len} 文字`;
    submitBtn.disabled = len < 10;
  };
}

function evaluateEssay() {
  const era = ALL_DATA[currentEraId];
  const answerText = document.getElementById("essay-input-area").value.trim();
  
  const matchedKeywords = [];
  const unmatchedKeywords = [];
  
  era.essay.keywords.forEach(kw => {
    if (answerText.includes(kw)) {
      matchedKeywords.push(kw);
    } else {
      unmatchedKeywords.push(kw);
    }
  });
  
  const totalKwCount = era.essay.keywords.length;
  const matchCount = matchedKeywords.length;
  const matchRate = matchCount / totalKwCount;
  
  let scoreRank = "C";
  let scoreColor = "var(--text-secondary)";
  let feedback = "";
  
  if (matchRate >= 0.8) {
    scoreRank = "👑 S";
    scoreColor = "var(--color-green)";
    feedback = "完璧です！定期試験でそのまま満点がもらえる素晴らしい記述です。必要な歴史キーワードがすべて論理的に整理されています。";
    userOverallScore += 50;
  } else if (matchRate >= 0.5) {
    scoreRank = "A";
    scoreColor = "var(--color-blue)";
    feedback = "大変よく書けています！主要なポイントは押さえられています。さらに模範解答を確認して、抜け落ちているキーワード（例：" + unmatchedKeywords.join("、") + "）を意識して論述を強化しましょう。";
    userOverallScore += 30;
  } else if (matchRate >= 0.2) {
    scoreRank = "B";
    scoreColor = "var(--color-gold)";
    feedback = "少し説明が不足しているかもしれません。歴史用語を補うと、さらに素晴らしい解答になります。下の模範解答のキーワードを見てみましょう。";
    userOverallScore += 15;
  } else {
    scoreRank = "C";
    scoreColor = "var(--sheet-color)";
    feedback = "文章は書けていますが、定期テストで得点を取るための用語が不足しています。模範解答を確認し、どの用語を使って説明すべきか学びましょう。";
    userOverallScore += 5;
  }
  
  localStorage.setItem("chrono_overall_score", userOverallScore);
  updateGlobalStats();
  
  document.getElementById("essay-result-box").style.display = "flex";
  
  const rankSpan = document.getElementById("essay-rank-val");
  rankSpan.textContent = scoreRank;
  rankSpan.style.color = scoreColor;
  
  const badgesContainer = document.getElementById("essay-keywords-list");
  badgesContainer.innerHTML = "";
  
  era.essay.keywords.forEach(kw => {
    const badge = document.createElement("span");
    const isMatched = matchedKeywords.includes(kw);
    badge.className = `eval-keyword-badge ${isMatched ? 'matched' : ''}`;
    badge.innerHTML = `${isMatched ? '✔' : '✖'} ${kw}`;
    badgesContainer.appendChild(badge);
  });
  
  document.getElementById("essay-feedback-text").textContent = feedback;
  document.getElementById("essay-model-answer").textContent = era.essay.modelAnswer;
  
  let finalProgress = Math.max(progressData[currentEraId], 80);
  if (scoreRank === "👑 S" || scoreRank === "A") {
    finalProgress = 100;
  } else if (scoreRank === "B") {
    finalProgress = Math.max(finalProgress, 90);
  }
  updateProgress(currentEraId, finalProgress);
  
  if (finalProgress === 100) {
    triggerConfetti();
  }
}

// --- 進捗の保存と反映 ---
function updateProgress(eraId, percent) {
  progressData[eraId] = percent;
  localStorage.setItem("chrono_progress", JSON.stringify(progressData));
  updateGlobalStats();
}

// --- お祝い簡易コンフェッティエフェクト ---
function triggerConfetti() {
  const container = document.body;
  const colors = ['#10b981', '#f59e0b', '#06b6d4', '#a855f7', '#ef4444'];
  
  for (let i = 0; i < 40; i++) {
    const dot = document.createElement('div');
    dot.style.position = 'fixed';
    dot.style.top = '-10px';
    dot.style.left = Math.random() * 100 + 'vw';
    dot.style.width = Math.random() * 8 + 4 + 'px';
    dot.style.height = Math.random() * 8 + 4 + 'px';
    dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    dot.style.borderRadius = '50%';
    dot.style.zIndex = '9999';
    dot.style.pointerEvents = 'none';
    
    const fallDuration = Math.random() * 2 + 1.5;
    const swayRange = Math.random() * 60 - 30;
    
    dot.style.transition = `transform ${fallDuration}s linear, opacity ${fallDuration}s ease-out`;
    container.appendChild(dot);
    
    setTimeout(() => {
      dot.style.transform = `translate(${swayRange}px, 105vh) rotate(${Math.random() * 360}deg)`;
      dot.style.opacity = '0';
    }, 50);
    
    setTimeout(() => {
      dot.remove();
    }, fallDuration * 1000 + 100);
  }
}
