/**
 * CNC 밀링 기술자 독일어 학습 애플리케이션 핵심 비즈니스 로직
 * D-Day 플래닝, 로컬스토리지, 음성 시뮬레이터(TTS/STT 루프), 단어 도서관 및 퀴즈 스코어러
 * 이름 정정(한바울), 햄버거 메뉴 및 회독수/취소 기능 완비 버전
 */

// 애플리케이션 상태 (State)
let appState = {
  progress: {},            // { chapterId: number } (0 = 미완료, >=1 = 학습 완료 횟수)
  bookmarks: [],           // 즐겨찾기 문장 배열
  memorizedVocab: {},      // { germanWord: boolean } (단어 도서관 암기 여부)
  dDay: null,              // 출국일
  currentChapterId: 1,
  ttsSpeed: 1.0,
  lastCertifiedCycle: 0,   // 수료증 발급 완료한 마지막 회독수
  
  // 단어 게임 인덱스
  vocabIndex: 0,
  swipeIndex: 0,
  
  // 퀴즈 관련 상태
  currentQuizIndex: 0,
  quizScores: [],          // [true, false, true] 각 문제 정오표
  
  // 롤플레이 시뮬레이터 상태
  simActive: false,
  simIndex: 0,
  simRecognition: null,
  isListening: false
};

// 음성 판별용 임시 변수
let speechTargetText = "";
let generalRecognition = null;

// 초기화
document.addEventListener("DOMContentLoaded", () => {
  loadLocalStorage();
  setupEventListeners();
  updateDDayDisplay();
  renderRoadmap();
  renderDashboardProgress();
  setupWordOfDay();
  renderVocabLibrary();
  
  // 첫 1단계 자동 로드
  loadChapter(appState.currentChapterId);
});

// 로컬 스토리지 데이터 로드
function loadLocalStorage() {
  const savedProgress = localStorage.getItem("deuttech_progress");
  const savedBookmarks = localStorage.getItem("deuttech_bookmarks");
  const savedMemorized = localStorage.getItem("deuttech_memorized");
  const savedDDay = localStorage.getItem("deuttech_dday");
  const savedCertCycle = localStorage.getItem("deuttech_cert_cycle");
  
  if (savedProgress) {
    appState.progress = JSON.parse(savedProgress);
    // 하위 호환성 패치 (boolean -> number 마이그레이션)
    for (let k in appState.progress) {
      if (typeof appState.progress[k] === "boolean") {
        appState.progress[k] = appState.progress[k] ? 1 : 0;
      }
    }
  }
  if (savedBookmarks) appState.bookmarks = JSON.parse(savedBookmarks);
  if (savedMemorized) appState.memorizedVocab = JSON.parse(savedMemorized);
  if (savedDDay) appState.dDay = savedDDay;
  if (savedCertCycle) appState.lastCertifiedCycle = parseInt(savedCertCycle, 10);
}

// 상태 저장
function saveState() {
  localStorage.setItem("deuttech_progress", JSON.stringify(appState.progress));
  localStorage.setItem("deuttech_bookmarks", JSON.stringify(appState.bookmarks));
  localStorage.setItem("deuttech_memorized", JSON.stringify(appState.memorizedVocab));
  localStorage.setItem("deuttech_cert_cycle", appState.lastCertifiedCycle.toString());
  if (appState.dDay) {
    localStorage.setItem("deuttech_dday", appState.dDay);
  }
}

// 이벤트 리스너 세팅
function setupEventListeners() {
  // 0. 햄버거 버튼 토글
  document.getElementById("sidebar-toggle-btn").addEventListener("click", () => {
    document.getElementById("app-wrapper").classList.toggle("sidebar-collapsed");
  });

  // 1. 사이드바 메뉴 탭 전환
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => {
    item.addEventListener("click", (e) => {
      const target = item.getAttribute("data-target");
      
      // 롤플레이 시뮬레이터 진행 중 탭이동 시 자동 종료
      if (appState.simActive) {
        stopDialogueSimulator();
      }

      navItems.forEach(n => n.classList.remove("active"));
      item.classList.add("active");
      
      document.querySelectorAll(".content-section").forEach(sec => {
        sec.classList.remove("active");
      });
      document.getElementById(target).classList.add("active");

      // 모바일 등 환경에서 탭 전환 시 사이드바 자동 닫기 편의
      if (window.innerWidth <= 1024) {
        document.getElementById("app-wrapper").classList.add("sidebar-collapsed");
      }

      // 각 탭별 즉시 렌더러
      if (target === "vocab-training") {
        renderFlashcard();
        renderSwipeCard();
      } else if (target === "vocab-library") {
        renderVocabLibrary();
      } else if (target === "bookmarks") {
        renderBookmarks();
      }
    });
  });

  // 2. D-Day 설정
  const ddayInput = document.getElementById("dday-date-input");
  document.getElementById("dday-set-btn").addEventListener("click", () => {
    if (appState.dDay) ddayInput.value = appState.dDay;
    document.getElementById("dday-modal").classList.add("active");
  });
  document.getElementById("dday-close-btn").addEventListener("click", () => {
    document.getElementById("dday-modal").classList.remove("active");
  });
  document.getElementById("dday-save-btn").addEventListener("click", () => {
    if (ddayInput.value) {
      appState.dDay = ddayInput.value;
      saveState();
      updateDDayDisplay();
      renderDashboardProgress();
    }
    document.getElementById("dday-modal").classList.remove("active");
  });

  // 3. 오늘의 단어 제어
  document.getElementById("wod-next-btn").addEventListener("click", () => setupWordOfDay());
  document.getElementById("wod-audio-btn").addEventListener("click", () => {
    const text = document.getElementById("wod-german").textContent;
    playTTS(text);
  });

  // 4. 로드맵 복귀
  document.getElementById("back-to-roadmap-btn").addEventListener("click", () => {
    document.querySelector('[data-target="dashboard"]').click();
  });

  // 5. 학습 창 탭 토글
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (appState.simActive) stopDialogueSimulator();

      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const tabId = btn.getAttribute("data-tab");
      document.querySelectorAll(".tab-content").forEach(tc => tc.classList.remove("active"));
      document.getElementById(tabId).classList.add("active");
    });
  });

  // 6. TTS 발음 속도 세팅
  const speedBtns = document.querySelectorAll(".speed-toggle-btn");
  speedBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      speedBtns.forEach(b => {
        b.classList.remove("active");
        b.style.background = "rgba(255,255,255,0.05)";
        b.style.color = "var(--color-text-muted)";
      });
      btn.classList.add("active");
      btn.style.background = "var(--color-primary)";
      btn.style.color = "white";
      appState.ttsSpeed = parseFloat(btn.getAttribute("data-speed"));
    });
  });

  // 7. 단원 공부 완료 버튼
  document.getElementById("complete-chapter-btn").addEventListener("click", () => {
    const currentCount = appState.progress[appState.currentChapterId] || 0;
    appState.progress[appState.currentChapterId] = currentCount + 1;
    saveState();
    
    // UI 동적 갱신
    loadChapter(appState.currentChapterId);
    renderRoadmap();
    renderDashboardProgress();
    checkFullCompletion();
    
    alert(`${appState.currentChapterId}단계 학습이 완료되었습니다! (누적 완료 횟수: ${currentCount + 1}회)`);
  });

  // 7.5 단원 완료 취소 버튼
  document.getElementById("cancel-chapter-btn").addEventListener("click", () => {
    if (confirm("정말로 이 챕터의 학습 완료 기록을 초기화하시겠습니까?")) {
      appState.progress[appState.currentChapterId] = 0;
      saveState();
      
      loadChapter(appState.currentChapterId);
      renderRoadmap();
      renderDashboardProgress();
      
      alert("이 챕터의 학습 완료 내역이 초기화되었습니다.");
    }
  });

  // 8. 단어장 필터 및 검색 바인딩
  document.getElementById("vl-search").addEventListener("input", renderVocabLibrary);
  document.getElementById("vl-filter-category").addEventListener("change", renderVocabLibrary);
  document.getElementById("vl-filter-gender").addEventListener("change", renderVocabLibrary);

  // 9. 단어 게임 제어
  const flashcard = document.getElementById("flashcard-element");
  flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("flipped");
  });
  document.getElementById("fc-prev-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    flashcard.classList.remove("flipped");
    appState.vocabIndex = (appState.vocabIndex - 1 + vocabularyDataset.length) % vocabularyDataset.length;
    setTimeout(renderFlashcard, 150);
  });
  document.getElementById("fc-next-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    flashcard.classList.remove("flipped");
    appState.vocabIndex = (appState.vocabIndex + 1) % vocabularyDataset.length;
    setTimeout(renderFlashcard, 150);
  });
  document.getElementById("fc-audio-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    const text = document.getElementById("fc-german").textContent;
    playTTS(text);
  });

  // 10. 단어 게임 서브 모드 전환
  const modeBtns = document.querySelectorAll(".vocab-mode-btn");
  modeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modeBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const mode = btn.getAttribute("data-mode");
      document.querySelectorAll(".vocab-sub-mode").forEach(sm => sm.style.display = "none");
      document.getElementById(`vocab-${mode}-mode`).style.display = "block";
    });
  });

  // 11. 성별 맞추기 버튼
  document.querySelectorAll(".gender-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-gender");
      const targetWordObj = vocabularyDataset[appState.swipeIndex];
      const feedback = document.getElementById("swipe-feedback");
      
      if (targetWordObj.gender === selected) {
        feedback.textContent = "Richtig! (정답!) 🟢";
        feedback.style.color = "var(--color-primary)";
      } else {
        feedback.textContent = `Falsch! (오답! 정답은 ${targetWordObj.gender.toUpperCase()}) 🔴`;
        feedback.style.color = "var(--color-die)";
      }
      
      setTimeout(() => {
        feedback.textContent = "";
        appState.swipeIndex = (appState.swipeIndex + 1) % vocabularyDataset.length;
        renderSwipeCard();
      }, 1000);
    });
  });

  // 12. 일반 회화용 음성인식 모달 제어
  document.getElementById("mic-record-btn").addEventListener("click", startGeneralSpeechRecognition);
  document.getElementById("speech-close-btn").addEventListener("click", () => {
    stopGeneralSpeechRecognition();
    document.getElementById("speech-modal").classList.remove("active");
  });

  // 13. 수료증 모달 닫기
  document.getElementById("cert-close-btn").addEventListener("click", () => {
    document.getElementById("cert-modal").classList.remove("active");
  });

  // 14. 롤플레이 시뮬레이터 조작반 바인딩
  document.getElementById("sim-start-btn").addEventListener("click", startDialogueSimulator);
  document.getElementById("sim-stop-btn").addEventListener("click", stopDialogueSimulator);
  document.getElementById("sim-skip-btn").addEventListener("click", skipDialogueStep);
}

// D-Day 날짜 출력 및 스케줄링 가이드
function updateDDayDisplay() {
  const display = document.getElementById("dday-display");
  const advice = document.getElementById("dday-advice");
  
  if (!appState.dDay) {
    display.textContent = "D-?";
    advice.textContent = "출국 일정을 설정해 학습 페이스를 체크하세요!";
    return;
  }
  
  const targetDate = new Date(appState.dDay + "T00:00:00+09:00");
  const today = new Date();
  const diffTime = targetDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays > 0) {
    display.textContent = `D-${diffDays}`;
    const weeksLeft = Math.ceil(diffDays / 7);
    if (weeksLeft > 8) {
      advice.textContent = `출국까지 ${weeksLeft}주 남았습니다. 일주일에 1~2개 챕터 학습을 권장합니다!`;
    } else if (weeksLeft >= 4) {
      advice.textContent = `출국까지 ${weeksLeft}주 남았습니다! 일주일에 2~3개 챕터 학습을 권장합니다.`;
    } else {
      advice.textContent = `출국까지 단 ${weeksLeft}주! 매일 1개 이상의 챕터를 완료하며 집중 복습하세요! 🔥`;
    }
  } else if (diffDays === 0) {
    display.textContent = "D-Day";
    advice.textContent = "오늘 출국하시는 날입니다! Gute Reise! (안전한 여행 되세요!)";
  } else {
    display.textContent = `D+${Math.abs(diffDays)}`;
    advice.textContent = "이미 독일에 정착해 활동 중이시군요. 매일 실무 표현을 갈고닦으세요!";
  }
}

// 오늘의 단어 추출
function setupWordOfDay() {
  const randIdx = Math.floor(Math.random() * vocabularyDataset.length);
  const word = vocabularyDataset[randIdx];
  const wordCard = document.getElementById("word-of-day-container");
  
  wordCard.className = "word-of-day-card";
  document.getElementById("wod-german").textContent = `${word.gender} ${word.german}`;
  document.getElementById("wod-korean").textContent = word.korean;
  document.getElementById("wod-plural").textContent = `복수형: ${word.plural}`;
  
  if (word.gender === "der") wordCard.classList.add("der");
  else if (word.gender === "die") wordCard.classList.add("die");
  else if (word.gender === "das") wordCard.classList.add("das");
}

// 대시보드 로드맵 타임라인 리스트
function renderRoadmap() {
  const container = document.getElementById("roadmap-timeline-container");
  container.innerHTML = "";
  
  germanCurriculum.forEach(ch => {
    const node = document.createElement("div");
    node.className = "chapter-node";
    const completedCount = appState.progress[ch.id] || 0;
    
    if (appState.currentChapterId === ch.id) node.classList.add("active-node");
    if (completedCount > 0) node.classList.add("completed");
    
    const isCompleted = completedCount > 0;
    const statusText = isCompleted ? `<i class="fa-solid fa-circle-check" style="color: var(--color-secondary);"></i> ${completedCount}회 완료` : `미완료`;
    
    node.innerHTML = `
      <div class="chapter-node-left">
        <div class="chapter-status-dot"></div>
        <div class="chapter-info">
          <h3>${ch.title}</h3>
          <p>${ch.description}</p>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:12px;">
        <span class="chapter-badge">${ch.level}</span>
        <span style="font-size:0.8rem; font-weight:600; color: ${isCompleted ? 'var(--color-secondary)' : 'var(--color-text-muted)'}">${statusText}</span>
      </div>
    `;
    
    node.addEventListener("click", () => {
      appState.currentChapterId = ch.id;
      document.querySelectorAll(".chapter-node").forEach(n => n.classList.remove("active-node"));
      node.classList.add("active-node");
      
      loadChapter(ch.id);
      document.querySelector('[data-target="learning-center"]').click();
    });
    
    container.appendChild(node);
  });
}

// 대시보드 및 전체 학습 진도 업데이트 (회독수 계산)
function renderDashboardProgress() {
  const total = germanCurriculum.length;
  const completedChaptersCount = Object.keys(appState.progress).filter(k => appState.progress[k] > 0).length;
  const percentage = total > 0 ? Math.round((completedChaptersCount / total) * 100) : 0;
  
  document.getElementById("progress-bar").style.width = `${percentage}%`;
  
  // 전체 회독수 계산 (모든 15개 챕터의 완료 횟수 중 최솟값)
  const counts = germanCurriculum.map(ch => appState.progress[ch.id] || 0);
  const globalCycle = Math.min(...counts);
  
  document.getElementById("global-cycle-count").textContent = `전체 학습 회독수: ${globalCycle}회독 완료`;
  
  // 단어 진도와 결합하여 퍼센트 출력
  updateDashboardProgressStats();
}

// 특정 단원 데이터 세팅
function loadChapter(id) {
  const chapter = germanCurriculum.find(c => c.id === id);
  if (!chapter) return;
  
  appState.currentQuizIndex = 0;
  appState.quizScores = [];
  
  document.getElementById("current-chapter-title").textContent = chapter.title;
  document.getElementById("current-chapter-desc").textContent = `${chapter.section} (${chapter.level}) - ${chapter.description}`;
  
  // 완료 상태에 따른 우측 제어 패널 텍스트 및 버튼 토글
  const completedCount = appState.progress[id] || 0;
  const statusField = document.getElementById("chapter-completion-status");
  const cancelBtn = document.getElementById("cancel-chapter-btn");
  const completeBtn = document.getElementById("complete-chapter-btn");
  
  if (completedCount > 0) {
    statusField.innerHTML = `<span style="color: var(--color-secondary); font-weight:700;"><i class="fa-solid fa-circle-check"></i> 학습 완료 (${completedCount}회 학습됨)</span>`;
    cancelBtn.style.display = "flex";
    completeBtn.innerHTML = `<i class="fa-solid fa-rotate-left"></i> 추가 복습 완료 (+1회독)`;
  } else {
    statusField.textContent = "현재 학습 상태: 미완료 (0회 학습 완료)";
    cancelBtn.style.display = "none";
    completeBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> 학습 완료 (+1회독)`;
  }

  renderPhraseTab(chapter.expressions);
  renderDrillTab(chapter.drillPatterns);
  renderDialogueTab(chapter.dialogue);
  renderQuizTab(chapter.quiz);
}

// 1. 회화 탭 UI 빌드
function renderPhraseTab(expressions) {
  const container = document.getElementById("phrase-list-container");
  container.innerHTML = "";
  
  expressions.forEach((exp, idx) => {
    const isBookmarked = appState.bookmarks.some(b => b.german === exp.german);
    const card = document.createElement("div");
    card.className = "phrase-card";
    card.innerHTML = `
      <div class="phrase-row-top">
        <div>
          <div class="phrase-german">${exp.german}</div>
          <div class="phrase-pronunciation">${exp.pronunciation}</div>
        </div>
        <div class="phrase-meaning">${exp.korean}</div>
      </div>
      <div class="phrase-nuance">${exp.nuance}</div>
      <div class="phrase-actions">
        <button class="action-btn bookmark-btn ${isBookmarked ? 'active' : ''}" title="즐겨찾기">
          <i class="fa-solid fa-star"></i>
        </button>
        <button class="action-btn" onclick="playTTS('${exp.german.replace(/'/g, "\\'")}')" title="발음 듣기">
          <i class="fa-solid fa-volume-high"></i>
        </button>
        <button class="action-btn speech-test-btn" onclick="openSpeechModal('${exp.german.replace(/'/g, "\\'")}', '${exp.korean.replace(/'/g, "\\'")}')" title="발음 연습">
          <i class="fa-solid fa-microphone"></i>
        </button>
      </div>
    `;
    
    const bookmarkBtn = card.querySelector(".bookmark-btn");
    bookmarkBtn.addEventListener("click", () => {
      const idx = appState.bookmarks.findIndex(b => b.german === exp.german);
      if (idx > -1) {
        appState.bookmarks.splice(idx, 1);
        bookmarkBtn.classList.remove("active");
      } else {
        appState.bookmarks.push(exp);
        bookmarkBtn.classList.add("active");
      }
      saveState();
    });
    
    container.appendChild(card);
  });
}

// 2. 드릴 탭 UI 빌드
function renderDrillTab(drills) {
  const container = document.getElementById("drill-section-container");
  container.innerHTML = "";
  
  if (!drills || drills.length === 0) {
    container.innerHTML = `<p style="color:var(--color-text-muted);">이 단원에는 패턴 드릴이 없습니다.</p>`;
    return;
  }
  
  drills.forEach(drill => {
    const sec = document.createElement("div");
    sec.className = "drill-section";
    
    let optionsHtml = "";
    drill.options.forEach(opt => {
      const fullGerman = drill.pattern.replace("[Nomen]", opt.german).replace("[Aktion]", opt.german);
      optionsHtml += `
        <div class="drill-card" onclick="playTTS('${fullGerman.replace(/'/g, "\\'")}')">
          <div>
            <div class="drill-german"><span style="color:var(--color-primary);">${opt.german}</span></div>
            <div style="font-size: 1rem; font-weight:700; margin: 6px 0;">${fullGerman}</div>
          </div>
          <div class="drill-korean">${drill.meaning.replace("[명사]", opt.korean).replace("[행동]", opt.korean)}</div>
        </div>
      `;
    });
    
    sec.innerHTML = `
      <div class="drill-pattern-header">
        <h3>기본 구조: ${drill.pattern}</h3>
        <p style="color:var(--color-text-muted); font-size:0.85rem; margin-top:4px;">하단 카드를 클릭하면 원어민 발음으로 조립된 문장을 들을 수 있습니다.</p>
      </div>
      <div class="drill-grid">
        ${optionsHtml}
      </div>
    `;
    container.appendChild(sec);
  });
}

// 3. 롤플레이 대화 탭 UI 빌드
function renderDialogueTab(dialogues) {
  const container = document.getElementById("dialogue-box-container");
  container.innerHTML = "";
  
  dialogues.forEach((dia, idx) => {
    const isUser = dia.speaker === "Sie";
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${isUser ? 'right' : 'left'}`;
    bubble.id = `chat-bubble-${idx}`;
    bubble.innerHTML = `
      <div class="speaker-label">${dia.speaker}</div>
      <div class="bubble-german">${dia.text}</div>
      <div class="bubble-translation">${dia.translation}</div>
      <i class="fa-solid fa-volume-high" style="position:absolute; bottom:12px; right:12px; font-size:0.8rem; cursor:pointer; color:var(--color-text-muted);" onclick="playTTS('${dia.text.replace(/'/g, "\\'")}')"></i>
    `;
    container.appendChild(bubble);
  });
}

// 4. 퀴즈 탭 UI 빌드 (복수 문제 지원)
function renderQuizTab(quizzes) {
  const container = document.getElementById("quiz-container-box");
  container.innerHTML = "";
  
  if (!quizzes || quizzes.length === 0) return;
  
  const currentQuiz = quizzes[appState.currentQuizIndex];
  const totalQuizzes = quizzes.length;
  
  const box = document.createElement("div");
  box.className = "quiz-container";
  
  let optionsHtml = "";
  currentQuiz.options.forEach(opt => {
    optionsHtml += `<button class="quiz-opt-btn" onclick="checkMultiQuizAnswer(this, '${opt}', '${currentQuiz.answer}', '${currentQuiz.explanation.replace(/'/g, "\\'")}', ${totalQuizzes})">${opt}</button>`;
  });
  
  box.innerHTML = `
    <div style="background: rgba(255,255,255,0.05); padding: 4px 12px; border-radius: 20px; font-size:0.75rem; font-weight:700; color: var(--color-secondary); margin-bottom:12px;">문제 ${appState.currentQuizIndex + 1} / ${totalQuizzes}</div>
    <div class="quiz-question">${currentQuiz.question}</div>
    <div class="quiz-options">
      ${optionsHtml}
    </div>
    <div class="quiz-feedback" id="quiz-feedback-field" style="margin-top:20px; font-weight:600; min-height:24px; line-height:1.5;"></div>
    <div id="quiz-nav-container" style="margin-top: 24px; display:none;"></div>
  `;
  
  container.appendChild(box);
}

// 복합 퀴즈 정오 답 판별
function checkMultiQuizAnswer(btnElement, selectedOpt, correctOpt, explanation, totalQuizzes) {
  const feedback = document.getElementById("quiz-feedback-field");
  const buttons = document.querySelectorAll(".quiz-opt-btn");
  
  buttons.forEach(btn => btn.style.pointerEvents = "none");
  
  const isCorrect = selectedOpt === correctOpt;
  appState.quizScores[appState.currentQuizIndex] = isCorrect;
  
  if (isCorrect) {
    btnElement.classList.add("correct");
    feedback.textContent = `Richtig! (정답!) 🎉 - ${explanation}`;
    feedback.style.color = "var(--color-primary)";
  } else {
    btnElement.classList.add("wrong");
    feedback.textContent = `Falsch! (오답! 정답은: ${correctOpt}) 🔴 - ${explanation}`;
    feedback.style.color = "var(--color-die)";
  }
  
  const navContainer = document.getElementById("quiz-nav-container");
  navContainer.style.display = "block";
  
  if (appState.currentQuizIndex < totalQuizzes - 1) {
    navContainer.innerHTML = `<button class="dday-save-btn" onclick="nextQuizStep()" style="padding:10px 24px;">다음 문제 <i class="fa-solid fa-arrow-right"></i></button>`;
  } else {
    navContainer.innerHTML = `<button class="dday-save-btn" onclick="showQuizFinalResult(${totalQuizzes})" style="background:var(--color-secondary); padding:10px 24px;">최종 결과 확인</button>`;
  }
}

function nextQuizStep() {
  appState.currentQuizIndex++;
  const chapter = germanCurriculum.find(c => c.id === appState.currentChapterId);
  renderQuizTab(chapter.quiz);
}

function showQuizFinalResult(totalQuizzes) {
  const container = document.getElementById("quiz-container-box");
  container.innerHTML = "";
  
  const correctCount = appState.quizScores.filter(s => s).length;
  const isPassed = correctCount === totalQuizzes;
  
  const box = document.createElement("div");
  box.className = "quiz-container";
  
  box.innerHTML = `
    <div style="font-size:3rem; margin-bottom:12px;">${isPassed ? '🏆' : '✏️'}</div>
    <h2>단원 퀴즈 결과</h2>
    <div style="font-size: 1.8rem; font-weight:700; margin: 16px 0; color: ${isPassed ? 'var(--color-primary)' : 'white'}">
      맞힌 문제: ${correctCount} / ${totalQuizzes}
    </div>
    <p style="color:var(--color-text-muted); font-size:0.9rem; line-height:1.6; margin-bottom:24px;">
      ${isPassed ? '모든 문제를 맞히셨습니다! 이제 이 단원의 공부 완료(Mastered) 도장을 찍으셔도 좋습니다.' : '틀린 문제가 있습니다. 다시 한 번 퀴즈에 도전하시거나 위 탭에서 오답 부분을 꼼꼼히 청취해 보세요!'}
    </p>
    <div style="display:flex; gap:12px;">
      <button class="dday-input-btn" onclick="retryChapterQuiz()" style="padding:10px 20px;"><i class="fa-solid fa-arrows-rotate"></i> 퀴즈 다시 풀기</button>
      ${isPassed ? `<button class="dday-save-btn" onclick="autoCompleteChapter()" style="padding:10px 20px;"><i class="fa-solid fa-check-double"></i> 즉시 공부 완료 도장</button>` : ''}
    </div>
  `;
  
  container.appendChild(box);
}

function retryChapterQuiz() {
  appState.currentQuizIndex = 0;
  appState.quizScores = [];
  const chapter = germanCurriculum.find(c => c.id === appState.currentChapterId);
  renderQuizTab(chapter.quiz);
}

function autoCompleteChapter() {
  document.getElementById("complete-chapter-btn").click();
  retryChapterQuiz();
}

// ----------------------------------------------------
// 단어 도서관 (Vocab Library) 구현부
// ----------------------------------------------------
function renderVocabLibrary() {
  const grid = document.getElementById("vocab-library-grid");
  grid.innerHTML = "";
  
  const searchQuery = document.getElementById("vl-search").value.toLowerCase();
  const catFilter = document.getElementById("vl-filter-category").value;
  const genderFilter = document.getElementById("vl-filter-gender").value;
  
  const filteredList = vocabularyDataset.filter(word => {
    const matchesSearch = word.german.toLowerCase().includes(searchQuery) || 
                          word.korean.toLowerCase().includes(searchQuery);
    const matchesCat = catFilter === "all" || word.category === catFilter;
    const matchesGender = genderFilter === "all" || word.gender === genderFilter;
    
    return matchesSearch && matchesCat && matchesGender;
  });
  
  if (filteredList.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 40px 0; color:var(--color-text-muted);">조건에 일치하는 단어가 없습니다.</p>`;
    return;
  }
  
  filteredList.forEach(word => {
    const isMemorized = appState.memorizedVocab[word.german] === true;
    const card = document.createElement("div");
    card.className = `vocab-lib-card ${word.gender} ${isMemorized ? 'memorized' : ''}`;
    
    card.innerHTML = `
      <div class="vl-card-header">
        <span class="vl-card-gender ${word.gender}">${word.gender}</span>
        <span style="font-size:0.75rem; color:var(--color-text-muted); font-weight:600;">
          ${word.category === 'cnc' ? '실무 기술' : '생활 생존'}
        </span>
      </div>
      <div>
        <div class="vl-card-word">${word.german}</div>
        <div class="vl-card-plural">복수: ${word.plural}</div>
        <div class="vl-card-meaning" style="margin-top:8px;">${word.korean}</div>
      </div>
      <div class="vl-card-actions">
        <button class="vl-memorize-btn ${isMemorized ? 'memorized' : ''}" onclick="toggleVocabMemorized('${word.german.replace(/'/g, "\\'")}')">
          <i class="fa-solid ${isMemorized ? 'fa-square-check' : 'fa-square'}"></i> 암기완료
        </button>
        <i class="fa-solid fa-volume-high" style="cursor:pointer; color:var(--color-text-muted);" onclick="playTTS('${word.german.replace(/'/g, "\\'")}')"></i>
      </div>
    `;
    grid.appendChild(card);
  });
  
  updateDashboardProgressStats();
}

function toggleVocabMemorized(germanWord) {
  if (appState.memorizedVocab[germanWord]) {
    delete appState.memorizedVocab[germanWord];
  } else {
    appState.memorizedVocab[germanWord] = true;
  }
  saveState();
  renderVocabLibrary();
}

function updateDashboardProgressStats() {
  const total = vocabularyDataset.length;
  const memorized = Object.keys(appState.memorizedVocab).filter(k => appState.memorizedVocab[k]).length;
  
  const progressTextSpan = document.getElementById("progress-text");
  const completedChaptersCount = Object.keys(appState.progress).filter(k => appState.progress[k] > 0).length;
  const totalChapters = germanCurriculum.length;
  const chapPercent = totalChapters > 0 ? Math.round((completedChaptersCount / totalChapters) * 100) : 0;
  
  if (progressTextSpan) {
    progressTextSpan.innerHTML = `
      챕터 진도: ${chapPercent}% (${completedChaptersCount}/${totalChapters} 챕터 완료) | 
      단어 암기: ${Math.round((memorized/total)*100)}% (${memorized}/${total} 단어)
    `;
  }
}

// ----------------------------------------------------
// 단어 트레이닝 (플래시카드/스와이프 게임)
// ----------------------------------------------------
function renderFlashcard() {
  const word = vocabularyDataset[appState.vocabIndex];
  if (!word) return;
  
  const front = document.getElementById("fc-front");
  const genderBadge = document.getElementById("fc-gender");
  
  front.className = "card-front";
  genderBadge.className = "gender-badge";
  
  genderBadge.textContent = word.gender;
  genderBadge.classList.add(word.gender);
  front.classList.add(word.gender);
  
  document.getElementById("fc-german").textContent = word.german;
  document.getElementById("fc-plural").textContent = `복수형: ${word.plural}`;
  document.getElementById("fc-korean").textContent = word.korean;
  document.getElementById("fc-category").textContent = `카테고리: ${word.category === 'cnc' ? '실무 기술 (CNC)' : '생활 생존'}`;
}

function renderSwipeCard() {
  const word = vocabularyDataset[appState.swipeIndex];
  if (!word) return;
  
  document.getElementById("swipe-german").textContent = word.german;
  document.getElementById("swipe-plural").textContent = `복수형: ${word.plural}`;
  document.getElementById("swipe-korean").textContent = `뜻: ${word.korean}`;
}

// ----------------------------------------------------
// 보관함 렌더
// ----------------------------------------------------
function renderBookmarks() {
  const container = document.getElementById("bookmark-list-box");
  container.innerHTML = "";
  
  if (appState.bookmarks.length === 0) {
    container.innerHTML = `<p style="color:var(--color-text-muted); text-align:center; padding: 40px 0;">아직 보관된 문장이 없습니다. 학습 중에 핵심 문장을 즐겨찾기(★) 해보세요!</p>`;
    return;
  }
  
  appState.bookmarks.forEach(exp => {
    const card = document.createElement("div");
    card.className = "phrase-card";
    card.innerHTML = `
      <div class="phrase-row-top">
        <div>
          <div class="phrase-german">${exp.german}</div>
          <div class="phrase-pronunciation">${exp.pronunciation}</div>
        </div>
        <div class="phrase-meaning">${exp.korean}</div>
      </div>
      <div class="phrase-nuance">${exp.nuance}</div>
      <div class="phrase-actions">
        <button class="action-btn bookmark-btn active" onclick="removeBookmark('${exp.german.replace(/'/g, "\\'")}')" title="보관함에서 삭제">
          <i class="fa-solid fa-trash-can"></i>
        </button>
        <button class="action-btn" onclick="playTTS('${exp.german.replace(/'/g, "\\'")}')">
          <i class="fa-solid fa-volume-high"></i>
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

function removeBookmark(germanText) {
  const idx = appState.bookmarks.findIndex(b => b.german === germanText);
  if (idx > -1) {
    appState.bookmarks.splice(idx, 1);
    saveState();
    renderBookmarks();
  }
}

// ----------------------------------------------------
// Web Speech API - Text to Speech (발음 듣기)
// ----------------------------------------------------
function playTTS(text, callback = null) {
  if (!('speechSynthesis' in window)) {
    if (callback) callback();
    return;
  }
  
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  utterance.rate = appState.ttsSpeed;
  
  const voices = window.speechSynthesis.getVoices();
  const deVoice = voices.find(voice => voice.lang.includes("de-DE") && voice.name.toLowerCase().includes("google"));
  if (deVoice) utterance.voice = deVoice;
  
  if (callback) {
    utterance.onend = callback;
    utterance.onerror = callback;
  }
  
  window.speechSynthesis.speak(utterance);
}

// ----------------------------------------------------
// Web Speech API - 롤플레이 시뮬레이터 가동 (TTS + STT 루프)
// ----------------------------------------------------
function startDialogueSimulator() {
  const chapter = germanCurriculum.find(c => c.id === appState.currentChapterId);
  if (!chapter || !chapter.dialogue || chapter.dialogue.length === 0) return;
  
  appState.simActive = true;
  appState.simIndex = 0;
  
  document.getElementById("sim-start-btn").style.display = "none";
  document.getElementById("sim-stop-btn").style.display = "inline-block";
  document.getElementById("sim-skip-btn").style.display = "inline-block";
  
  document.querySelectorAll(".chat-bubble").forEach(bubble => {
    bubble.className = bubble.className.replace(/\b(active-bubble|speaking-bubble)\b/g, "");
  });
  
  playSimStep(chapter.dialogue);
}

function stopDialogueSimulator() {
  appState.simActive = false;
  window.speechSynthesis.cancel();
  
  if (appState.simRecognition) {
    appState.simRecognition.abort();
    appState.simRecognition = null;
  }
  
  document.querySelectorAll(".chat-bubble").forEach(bubble => {
    bubble.className = bubble.className.replace(/\b(active-bubble|speaking-bubble)\b/g, "").trim();
    const ind = bubble.querySelector(".speaking-indicator");
    if (ind) ind.remove();
  });
  
  document.getElementById("sim-start-btn").style.display = "inline-block";
  document.getElementById("sim-stop-btn").style.display = "none";
  document.getElementById("sim-skip-btn").style.display = "none";
  document.getElementById("sim-status-text").textContent = "시뮬레이터가 중지되었습니다.";
  document.getElementById("sim-status-text").style.color = "var(--color-text-muted)";
}

function playSimStep(dialogue) {
  if (!appState.simActive) return;
  
  if (appState.simIndex >= dialogue.length) {
    const statusText = document.getElementById("sim-status-text");
    statusText.textContent = "🎉 대화가 완료되었습니다! 수료 도장을 찍으세요!";
    statusText.style.color = "var(--color-primary)";
    
    // 시뮬레이터 완주 시 완료 회수 증가
    const currentCount = appState.progress[appState.currentChapterId] || 0;
    appState.progress[appState.currentChapterId] = currentCount + 1;
    saveState();
    
    // 대시보드/로드맵 즉시 반영
    loadChapter(appState.currentChapterId);
    renderRoadmap();
    renderDashboardProgress();
    checkFullCompletion();
    
    setTimeout(stopDialogueSimulator, 3000);
    return;
  }
  
  const line = dialogue[appState.simIndex];
  const activeBubble = document.getElementById(`chat-bubble-${appState.simIndex}`);
  const statusText = document.getElementById("sim-status-text");
  
  document.querySelectorAll(".chat-bubble").forEach(b => {
    b.classList.remove("active-bubble", "speaking-bubble");
    const indicator = b.querySelector(".speaking-indicator");
    if (indicator) indicator.remove();
  });
  
  if (activeBubble) {
    activeBubble.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  if (line.speaker !== "Sie") {
    activeBubble.classList.add("speaking-bubble");
    statusText.textContent = `🤖 ${line.speaker}가 말하는 중...`;
    statusText.style.color = "var(--color-secondary)";
    
    const ind = document.createElement("div");
    ind.className = "speaking-indicator";
    ind.innerHTML = `<span class="speaking-dot"></span><span class="speaking-dot"></span><span class="speaking-dot"></span>`;
    activeBubble.appendChild(ind);
    
    playTTS(line.text, () => {
      ind.remove();
      if (!appState.simActive) return;
      
      setTimeout(() => {
        appState.simIndex++;
        playSimStep(dialogue);
      }, 1200);
    });
  } else {
    activeBubble.classList.add("active-bubble");
    statusText.textContent = "🗣️ 당신의 차례입니다! 화면의 독일어 대사를 소리 내어 읽으세요.";
    statusText.style.color = "var(--color-primary)";
    
    startSimSpeechRecognition(line.text, dialogue);
  }
}

function startSimSpeechRecognition(targetText, dialogue) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    document.getElementById("sim-status-text").innerHTML = `🗣️ (음성미지원 환경) 아래 문장을 소리내 읽으신 후, 우측 [수동 넘기기]를 클릭하세요.`;
    return;
  }
  
  if (appState.simRecognition) {
    appState.simRecognition.abort();
  }
  
  appState.simRecognition = new SpeechRecognition();
  appState.simRecognition.lang = "de-DE";
  appState.simRecognition.interimResults = false;
  appState.simRecognition.maxAlternatives = 1;
  
  appState.simRecognition.onstart = () => {
    document.getElementById("sim-status-text").textContent = "🎙️ 듣는 중... 독일어로 말씀해 주세요!";
    document.getElementById("sim-status-text").style.color = "var(--color-primary)";
  };
  
  appState.simRecognition.onresult = (event) => {
    const resultText = event.results[0][0].transcript;
    const score = calculateSimilarity(targetText, resultText);
    const statusText = document.getElementById("sim-status-text");
    
    statusText.textContent = `인식: "${resultText}" | 일치율 ${score}%`;
    
    if (score >= 60) {
      statusText.textContent = `🟢 발음 일치율 ${score}%! 정답입니다. 다음 대화로 넘어갑니다...`;
      statusText.style.color = "var(--color-primary)";
      
      setTimeout(() => {
        if (!appState.simActive) return;
        appState.simIndex++;
        playSimStep(dialogue);
      }, 2000);
    } else {
      statusText.textContent = `🔴 일치율 ${score}%. 발음이 어긋났습니다. 다시 시도하거나 [수동 넘기기]를 누르세요.`;
      statusText.style.color = "var(--color-die)";
    }
  };
  
  appState.simRecognition.onerror = (e) => {
    console.warn("Sim STT error", e.error);
    document.getElementById("sim-status-text").innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> 마이크가 응답하지 않습니다. 수동 넘기기를 클릭하여 진행하세요.`;
  };
  
  appState.simRecognition.start();
}

function skipDialogueStep() {
  if (!appState.simActive) return;
  if (appState.simRecognition) {
    appState.simRecognition.abort();
  }
  const chapter = germanCurriculum.find(c => c.id === appState.currentChapterId);
  appState.simIndex++;
  playSimStep(chapter.dialogue);
}

// ----------------------------------------------------
// 일반 발음 판정용 모달 관련 음성인식
// ----------------------------------------------------
function openSpeechModal(targetGerman, targetKorean) {
  speechTargetText = targetGerman;
  document.getElementById("speech-prompt-german").textContent = targetGerman;
  document.getElementById("speech-prompt-korean").textContent = targetKorean;
  document.getElementById("speech-recognized-text").textContent = "(마이크 버튼을 눌러 말씀하세요)";
  document.getElementById("speech-match-percentage").textContent = "0%";
  document.getElementById("speech-status").textContent = "준비 완료";
  document.getElementById("speech-modal").classList.add("active");
}

function startGeneralSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("이 브라우저는 발음 측정을 지원하지 않습니다. Chrome 브라우저를 사용해 주세요.");
    return;
  }
  
  if (appState.isListening) {
    stopGeneralSpeechRecognition();
    return;
  }
  
  generalRecognition = new SpeechRecognition();
  generalRecognition.lang = "de-DE";
  generalRecognition.interimResults = false;
  
  const recordBtn = document.getElementById("mic-record-btn");
  const pulse = document.getElementById("mic-pulse-circle");
  const status = document.getElementById("speech-status");
  
  generalRecognition.onstart = () => {
    appState.isListening = true;
    recordBtn.style.background = "var(--color-die)";
    pulse.style.animation = "pulseScale 1.0s infinite ease-out";
    status.textContent = "녹음 중... 말씀하세요!";
  };
  
  generalRecognition.onresult = (event) => {
    const resultText = event.results[0][0].transcript;
    document.getElementById("speech-recognized-text").textContent = `인식된 발음: "${resultText}"`;
    
    const score = calculateSimilarity(speechTargetText, resultText);
    document.getElementById("speech-match-percentage").textContent = `${score}%`;
    
    if (score >= 80) {
      status.textContent = "Ausgezeichnet! (훌륭한 발음입니다!) 🌟";
      status.style.color = "var(--color-primary)";
    } else if (score >= 50) {
      status.textContent = "Gut. (조금만 더 명확하게 발음해 보세요!) 👍";
      status.style.color = "var(--color-secondary)";
    } else {
      status.textContent = "Nochmal versuchen. (다시 한 번 도전해 보세요!) 🔄";
      status.style.color = "var(--color-die)";
    }
  };
  
  generalRecognition.onerror = (e) => {
    status.textContent = "인식 에러: " + e.error;
    stopGeneralSpeechRecognition();
  };
  
  generalRecognition.onend = () => {
    stopGeneralSpeechRecognition();
  };
  
  generalRecognition.start();
}

function stopGeneralSpeechRecognition() {
  appState.isListening = false;
  const recordBtn = document.getElementById("mic-record-btn");
  const pulse = document.getElementById("mic-pulse-circle");
  
  recordBtn.style.background = "var(--color-primary)";
  pulse.style.animation = "none";
  
  if (generalRecognition) {
    generalRecognition.abort();
    generalRecognition = null;
  }
}

// Levenshtein 거리 연산으로 두 문장의 자모 정합성 계산
function calculateSimilarity(str1, str2) {
  const cleanString = (str) => {
    return str.toLowerCase()
              .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "")
              .replace(/\s{2,}/g, " ")
              .trim();
  };
  
  const s1 = cleanString(str1);
  const s2 = cleanString(str2);
  
  if (s1 === s2) return 100;
  if (s1.length === 0 || s2.length === 0) return 0;
  
  const track = Array(s2.length + 1).fill(null).map(() => Array(s1.length + 1).fill(null));
  for (let i = 0; i <= s1.length; i += 1) track[0][i] = i;
  for (let j = 0; j <= s2.length; j += 1) track[j][0] = j;
  
  for (let j = 1; j <= s2.length; j += 1) {
    for (let i = 1; i <= s1.length; i += 1) {
      const indicator = s1[i - 1] === s2[j - 1] ? 0 : 1;
      track[j][i] = Math.min(
        track[j][i - 1] + 1,
        track[j - 1][i] + 1,
        track[j - 1][i - 1] + indicator
      );
    }
  }
  
  const distance = track[s2.length][s1.length];
  const maxLength = Math.max(s1.length, s2.length);
  return Math.round(((maxLength - distance) / maxLength) * 100);
}

// 완강 및 수료증 팝업 체크 (회독수 기준)
function checkFullCompletion() {
  const counts = germanCurriculum.map(ch => appState.progress[ch.id] || 0);
  const globalCycle = Math.min(...counts);
  
  // 모든 챕터가 1회 이상 완료되었고, 마지막으로 인증한 회독수보다 커졌을 때 수료증 팝업
  if (globalCycle >= 1 && globalCycle > appState.lastCertifiedCycle) {
    appState.lastCertifiedCycle = globalCycle;
    saveState();
    
    const today = new Date();
    const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    
    // 수료증 모달에 텍스트 갱신
    document.getElementById("cert-modal").classList.add("active");
    document.querySelector(".cert-meta p:nth-child(2)").textContent = `발급일: ${formattedDate}`;
    
    // 수료증 문장에 회독차 명시
    document.querySelector(".cert-document p:nth-child(2)").innerHTML = `
      위 사람은 독일 CNC 기술자 취업 이주 대비 실전 생존 및 오피스 가공 실무 독일어(A1~B2 과정) 전 15단계를 성공적으로 마스터하여, 
      총 <strong style="color:#fbbf24; font-size:1.15rem;">${globalCycle}회독</strong>을 완료하였음을 깊이 인증합니다.
    `;
  }
}
