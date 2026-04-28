const STORAGE_KEYS = {
  expression: "calc991cn.expression",
  angleMode: "calc991cn.angleMode",
  memory: "calc991cn.memory",
  history: "calc991cn.history",
  shift: "calc991cn.shift",
  mode: "calc991cn.mode",
  matrix: "calc991cn.matrix",
  stats: "calc991cn.stats",
  complex: "calc991cn.complex",
  base: "calc991cn.base",
};

const MODE_LABELS = {
  standard: "标准",
  matrix: "矩阵",
  stats: "统计",
  complex: "复数",
  base: "进制",
};

const MODE_HINTS = {
  standard: "标准模式：表达式、常量、函数和记忆运算。",
  matrix: "矩阵模式：支持 2×2 / 3×3 的加减乘、转置、行列式和逆矩阵。",
  stats: "统计模式：录入数据后查看均值、方差、标准差和极值。",
  complex: "复数模式：进行复数四则运算、共轭、模长和辐角计算。",
  base: "进制模式：在二、八、十、十六进制之间转换。",
};

const SCIENTIFIC_KEYS = [
  { label: "反选", action: "shift", tip: "开启副功能；下一次按键会使用按钮右上角的替代功能。", className: "key key--func" },
  { label: "角度", action: "angle", tip: "在 度 / 弧度 / 百分度 之间切换。", className: "key key--func" },
  { label: "清内存", action: "mc", tip: "清空内存寄存器。", className: "key key--accent" },
  { label: "取内存", action: "mr", tip: "把当前内存值插入到表达式中。", className: "key key--accent" },
  { label: "内存加", action: "mplus", tip: "把当前结果加入内存。", className: "key key--accent" },
  { label: "内存减", action: "mminus", tip: "把当前结果从内存中减去。", className: "key key--accent" },
  { label: "正弦", action: "sin(", shiftAction: "asin(", secondary: "反正弦", tip: "输入正弦函数。开启副功能后可输入反正弦。", className: "key key--func" },
  { label: "余弦", action: "cos(", shiftAction: "acos(", secondary: "反余弦", tip: "输入余弦函数。开启副功能后可输入反余弦。", className: "key key--func" },
  { label: "正切", action: "tan(", shiftAction: "atan(", secondary: "反正切", tip: "输入正切函数。开启副功能后可输入反正切。", className: "key key--func" },
  { label: "常对数", action: "log(", shiftAction: "pow10(", secondary: "10 的幂", tip: "输入常用对数。副功能可输入 10 的幂。", className: "key key--func" },
  { label: "自然对数", action: "ln(", shiftAction: "exp(", secondary: "e 的幂", tip: "输入自然对数。副功能可输入 e 的幂。", className: "key key--func" },
  { label: "平方根", action: "sqrt(", shiftAction: "square(", secondary: "平方", tip: "输入平方根。副功能可快速输入平方。", className: "key key--func" },
  { label: "π", action: "pi", tip: "插入圆周率 π。", className: "key key--func" },
  { label: "e", action: "e", tip: "插入自然常数 e。", className: "key key--func" },
  { label: "结果", action: "Ans", tip: "插入上一次计算结果。", className: "key key--func" },
  { label: "(", action: "(", tip: "插入左括号。", className: "key key--func" },
  { label: ")", action: ")", tip: "插入右括号。", className: "key key--func" },
  { label: "删除", action: "del", tip: "删除表达式最后一个字符。", className: "key key--danger" },
  { label: "7", action: "7", tip: "输入数字 7。", className: "key" },
  { label: "8", action: "8", tip: "输入数字 8。", className: "key" },
  { label: "9", action: "9", tip: "输入数字 9。", className: "key" },
  { label: "除", action: "/", tip: "输入除号。", className: "key key--op" },
  { label: "清空", action: "ac", tip: "清空当前表达式。", className: "key key--danger" },
  { label: "幂", action: "^", shiftAction: "root(", secondary: "开方", tip: "输入幂运算。副功能可输入开方。", className: "key key--op" },
  { label: "4", action: "4", tip: "输入数字 4。", className: "key" },
  { label: "5", action: "5", tip: "输入数字 5。", className: "key" },
  { label: "6", action: "6", tip: "输入数字 6。", className: "key" },
  { label: "乘", action: "*", tip: "输入乘号。", className: "key key--op" },
  { label: "阶乘", action: "!", shiftAction: "mod(", secondary: "取模", tip: "输入阶乘。副功能可输入取模函数。", className: "key key--op" },
  { label: "1", action: "1", tip: "输入数字 1。", className: "key" },
  { label: "2", action: "2", tip: "输入数字 2。", className: "key" },
  { label: "3", action: "3", tip: "输入数字 3。", className: "key" },
  { label: "减", action: "-", tip: "输入减号。", className: "key key--op" },
  { label: "百分比", action: "%", tip: "输入百分比运算。", className: "key key--op" },
  { label: "0", action: "0", tip: "输入数字 0。", className: "key key--double" },
  { label: "小数点", action: ".", tip: "输入小数点。", className: "key" },
  { label: "正负", action: "negate", tip: "切换当前项的正负号。", className: "key key--func" },
  { label: "加", action: "+", tip: "输入加号。", className: "key key--op" },
  { label: "=", action: "equals", tip: "执行计算并保存到记录。", className: "key key--tall key--op" },
  { label: "逗号", action: ",", tip: "输入函数参数分隔符。", className: "key key--func" },
];

const FUNCTION_LIBRARY = [
  { label: "正弦", insert: "sin(", tip: "插入正弦函数。" },
  { label: "余弦", insert: "cos(", tip: "插入余弦函数。" },
  { label: "正切", insert: "tan(", tip: "插入正切函数。" },
  { label: "常对数", insert: "log(", tip: "插入常用对数函数。" },
  { label: "自然对数", insert: "ln(", tip: "插入自然对数函数。" },
  { label: "平方根", insert: "sqrt(", tip: "插入平方根函数。" },
  { label: "绝对值", insert: "abs(", tip: "插入绝对值函数。" },
  { label: "向下取整", insert: "floor(", tip: "插入向下取整函数。" },
  { label: "四舍五入", insert: "round(", tip: "插入四舍五入函数。" },
  { label: "随机数", insert: "rand()", tip: "插入 0 到 1 之间的随机数。" },
  { label: "组合", insert: "ncr(", tip: "插入组合函数。" },
  { label: "排列", insert: "npr(", tip: "插入排列函数。" },
  { label: "开方", insert: "root(", tip: "插入开方函数。" },
  { label: "10 的幂", insert: "pow10(", tip: "插入 10 的幂函数。" },
  { label: "e 的幂", insert: "exp(", tip: "插入 e 的幂函数。" },
  { label: "π", insert: "pi", tip: "插入圆周率常量。" },
  { label: "e", insert: "e", tip: "插入自然常量。" },
  { label: "结果", insert: "Ans", tip: "插入上一次结果。" },
];

const state = {
  mode: "standard",
  expression: "",
  preview: "",
  angleMode: "DEG",
  memory: 0,
  history: [],
  shift: false,
  ans: 0,
  justEvaluated: false,
  matrix: {
    size: 2,
    a: createMatrix(2),
    b: createMatrix(2),
    result: "",
    operation: "A+B",
  },
  stats: {
    values: [],
    input: "",
    result: null,
  },
  complex: {
    a: { re: 0, im: 0 },
    b: { re: 0, im: 0 },
    operation: "加",
    result: { re: 0, im: 0 },
  },
  base: {
    input: "1010",
    source: "BIN",
    target: "DEC",
    result: "10",
  },
};

const elements = {
  keypad: document.getElementById("keypad"),
  expressionView: document.getElementById("expressionView"),
  previewView: document.getElementById("previewView"),
  modeChip: document.getElementById("modeChip"),
  angleModeChip: document.getElementById("angleModeChip"),
  shiftChip: document.getElementById("shiftChip"),
  memoryChip: document.getElementById("memoryChip"),
  hoverHint: document.getElementById("hoverHint"),
  historyList: document.getElementById("historyList"),
  clearHistoryBtn: document.getElementById("clearHistoryBtn"),
  functionLibrary: document.getElementById("functionLibrary"),
  modeWorkspace: document.getElementById("modeWorkspace"),
  modeTabs: Array.from(document.querySelectorAll(".mode-tab")),
};

initialize();

function initialize() {
  hydrateState();
  renderKeypad();
  renderFunctionLibrary();
  renderModeWorkspace();
  bindEvents();
  updateDisplay();
  renderHistory();
  renderModeTabs();
  syncModeWorkspace();
  setHoverHint(MODE_HINTS[state.mode]);
  evaluatePreview();
}

function hydrateState() {
  const storedExpression = window.localStorage.getItem(STORAGE_KEYS.expression);
  const storedAngleMode = window.localStorage.getItem(STORAGE_KEYS.angleMode);
  const storedMemory = window.localStorage.getItem(STORAGE_KEYS.memory);
  const storedHistory = window.localStorage.getItem(STORAGE_KEYS.history);
  const storedShift = window.localStorage.getItem(STORAGE_KEYS.shift);
  const storedMode = window.localStorage.getItem(STORAGE_KEYS.mode);

  if (storedExpression !== null) state.expression = storedExpression;
  if (storedAngleMode) state.angleMode = storedAngleMode;
  if (Number.isFinite(Number(storedMemory))) state.memory = Number(storedMemory);
  if (storedHistory) {
    try {
      state.history = JSON.parse(storedHistory);
    } catch {
      state.history = [];
    }
  }
  state.shift = storedShift === "true";
  if (storedMode && MODE_LABELS[storedMode]) state.mode = storedMode;

  hydrateMatrix();
  hydrateStats();
  hydrateComplex();
  hydrateBase();
}

function hydrateMatrix() {
  const stored = window.localStorage.getItem(STORAGE_KEYS.matrix);
  if (!stored) {
    state.matrix.a = createMatrix(state.matrix.size);
    state.matrix.b = createMatrix(state.matrix.size);
    return;
  }

  try {
    const parsed = JSON.parse(stored);
    state.matrix.size = parsed.size === 3 ? 3 : 2;
    state.matrix.a = normalizeMatrix(parsed.a, state.matrix.size);
    state.matrix.b = normalizeMatrix(parsed.b, state.matrix.size);
    state.matrix.result = parsed.result ?? "";
    state.matrix.operation = parsed.operation ?? "A+B";
  } catch {
    state.matrix.a = createMatrix(state.matrix.size);
    state.matrix.b = createMatrix(state.matrix.size);
  }
}

function hydrateStats() {
  const stored = window.localStorage.getItem(STORAGE_KEYS.stats);
  if (!stored) {
    state.stats.values = [];
    return;
  }

  try {
    const parsed = JSON.parse(stored);
    state.stats.values = Array.isArray(parsed.values) ? parsed.values.map(Number).filter(Number.isFinite) : [];
    state.stats.input = typeof parsed.input === "string" ? parsed.input : "";
  } catch {
    state.stats.values = [];
  }
}

function hydrateComplex() {
  const stored = window.localStorage.getItem(STORAGE_KEYS.complex);
  if (!stored) return;

  try {
    const parsed = JSON.parse(stored);
    state.complex.a = normalizeComplex(parsed.a);
    state.complex.b = normalizeComplex(parsed.b);
    state.complex.operation = parsed.operation ?? "加";
    state.complex.result = normalizeComplex(parsed.result ?? state.complex.result);
  } catch {
    // keep defaults
  }
}

function hydrateBase() {
  const stored = window.localStorage.getItem(STORAGE_KEYS.base);
  if (!stored) return;

  try {
    const parsed = JSON.parse(stored);
    state.base.input = typeof parsed.input === "string" ? parsed.input : state.base.input;
    state.base.source = normalizeBaseName(parsed.source) ?? state.base.source;
    state.base.target = normalizeBaseName(parsed.target) ?? state.base.target;
    state.base.result = typeof parsed.result === "string" ? parsed.result : state.base.result;
  } catch {
    // keep defaults
  }
}

function bindEvents() {
  elements.keypad.addEventListener("click", handleKeypadClick);
  elements.modeTabs.forEach((button) => button.addEventListener("click", handleModeTabClick));
  elements.clearHistoryBtn.addEventListener("click", () => {
    state.history = [];
    persistHistory();
    renderHistory();
  });

  elements.functionLibrary.addEventListener("click", handleLibraryClick);
  elements.modeWorkspace.addEventListener("click", handleModeWorkspaceClick);
  elements.modeWorkspace.addEventListener("input", handleModeWorkspaceInput);
  elements.modeWorkspace.addEventListener("change", handleModeWorkspaceChange);
  elements.historyList.addEventListener("click", handleHistoryClick);

  document.addEventListener("keydown", handleKeyboard);
  document.addEventListener("pointerover", handlePointerHint);
  document.addEventListener("pointerout", handlePointerHintLeave);
}

function handlePointerHint(event) {
  const target = event.target.closest("[data-tip]");
  if (!target) return;
  setHoverHint(target.dataset.tip);
}

function handlePointerHintLeave(event) {
  const target = event.target.closest("[data-tip]");
  if (!target) return;

  const related = event.relatedTarget && event.relatedTarget.closest ? event.relatedTarget.closest("[data-tip]") : null;
  if (related === target) return;
  setHoverHint(MODE_HINTS[state.mode]);
}

function setHoverHint(text) {
  elements.hoverHint.textContent = text || MODE_HINTS[state.mode];
}

function handleModeTabClick(event) {
  const button = event.target.closest("button[data-mode]");
  if (!button) return;
  switchMode(button.dataset.mode);
}

function switchMode(mode) {
  if (!MODE_LABELS[mode]) return;
  state.mode = mode;
  state.shift = false;
  persistMode();
  persistShift();
  renderModeTabs();
  renderModeWorkspace();
  syncModeWorkspace();
  setHoverHint(MODE_HINTS[state.mode]);
}

function renderModeTabs() {
  elements.modeTabs.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === state.mode);
  });
}

function renderKeypad() {
  elements.keypad.innerHTML = SCIENTIFIC_KEYS.map((key) => {
    const secondary = key.secondary ? `<span class="key__secondary">${escapeHtml(key.secondary)}</span>` : "";
    return `
      <button class="${key.className}" type="button" data-action="${escapeHtml(key.action)}" ${key.shiftAction ? `data-shift-action="${escapeHtml(key.shiftAction)}"` : ""} data-tip="${escapeHtml(key.tip)}">
        <span class="key__primary">${escapeHtml(key.label)}</span>
        ${secondary}
      </button>
    `;
  }).join("");
}

function renderFunctionLibrary() {
  elements.functionLibrary.innerHTML = FUNCTION_LIBRARY.map((item) => {
    return `<button class="chip-btn" type="button" data-insert="${escapeHtml(item.insert)}" data-tip="${escapeHtml(item.tip)}">${escapeHtml(item.label)}</button>`;
  }).join("");
}

function renderHistory() {
  elements.historyList.innerHTML = state.history.length
    ? state.history.map((item, index) => `
      <li>
        <button class="history-item" type="button" data-history-index="${index}" data-tip="点击可恢复这条表达式">
          <div class="history-top">${escapeHtml(prettyExpression(item.expression))}</div>
          <div class="history-bottom">= ${escapeHtml(item.result)}</div>
        </button>
      </li>
    `).join("")
    : `<li class="history-item" tabindex="0" data-tip="这里会显示最近的计算结果">暂无计算记录</li>`;
}

function handleHistoryClick(event) {
  const button = event.target.closest("button[data-history-index]");
  if (!button) return;
  const entry = state.history[Number(button.dataset.historyIndex)];
  if (!entry) return;
  state.expression = entry.expression;
  state.preview = entry.result;
  state.justEvaluated = false;
  persistExpression();
  updateDisplay();
  evaluatePreview();
}

function handleLibraryClick(event) {
  const button = event.target.closest("button[data-insert]");
  if (!button) return;
  insertText(button.dataset.insert);
  state.shift = false;
  persistShift();
  updateDisplay();
  evaluatePreview();
}

function handleKeypadClick(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  const shiftAction = button.dataset.shiftAction;

  if (state.shift && shiftAction) {
    insertText(shiftAction);
    state.shift = false;
    persistShift();
    updateDisplay();
    evaluatePreview();
    return;
  }

  handleAction(action);
}

function handleAction(action) {
  switch (action) {
    case "shift":
      state.shift = !state.shift;
      persistShift();
      break;
    case "angle":
      cycleAngleMode();
      break;
    case "ac":
      state.expression = "";
      state.preview = "";
      state.justEvaluated = false;
      break;
    case "del":
      state.expression = state.expression.slice(0, -1);
      break;
    case "equals":
      commitEvaluation();
      break;
    case "negate":
      toggleSignedTerm();
      break;
    case "mc":
      state.memory = 0;
      persistMemory();
      break;
    case "mr":
      insertText(formatNumber(state.memory));
      break;
    case "mplus":
      applyMemoryDelta(1);
      break;
    case "mminus":
      applyMemoryDelta(-1);
      break;
    default:
      insertText(action);
      break;
  }

  if (action !== "shift") {
    state.shift = false;
    persistShift();
  }

  if (action !== "equals") {
    state.justEvaluated = false;
  }

  if (state.expression === "") {
    state.preview = "";
  }

  persistExpression();
  updateDisplay();
  evaluatePreview();
}

function handleKeyboard(event) {
  if (isEditableTarget(event.target)) return;

  const key = event.key;

  if (key === "Enter" || key === "=") {
    event.preventDefault();
    commitEvaluation();
    return;
  }

  if (key === "Backspace") {
    event.preventDefault();
    state.expression = state.expression.slice(0, -1);
    persistExpression();
    updateDisplay();
    evaluatePreview();
    return;
  }

  if (key === "Escape") {
    event.preventDefault();
    handleAction("ac");
    return;
  }

  const keyMap = {
    "/": "/",
    "*": "*",
    "-": "-",
    "+": "+",
    "^": "^",
    "(": "(",
    ")": ")",
    ".": ".",
    ",": ",",
    "!": "!",
    "%": "%",
  };

  if (Object.prototype.hasOwnProperty.call(keyMap, key)) {
    insertText(keyMap[key]);
    persistExpression();
    updateDisplay();
    evaluatePreview();
    return;
  }

  if (/^[0-9]$/.test(key)) {
    insertText(key);
    persistExpression();
    updateDisplay();
    evaluatePreview();
  }
}

function isEditableTarget(target) {
  if (!target || !target.tagName) return false;
  const tag = target.tagName.toLowerCase();
  return tag === "input" || tag === "textarea" || tag === "select" || target.isContentEditable;
}

function cycleAngleMode() {
  state.angleMode = state.angleMode === "DEG" ? "RAD" : state.angleMode === "RAD" ? "GRAD" : "DEG";
  persistAngleMode();
  updateDisplay();
}

function toggleSignedTerm() {
  if (!state.expression) {
    state.expression = "-";
    return;
  }

  const boundaryMatch = state.expression.match(/(^|[+\-*/^(,])([^+\-*/^(,]+)$/);
  if (!boundaryMatch) {
    state.expression = state.expression.startsWith("-") ? state.expression.slice(1) : `-${state.expression}`;
    return;
  }

  const term = boundaryMatch[2];
  const startIndex = state.expression.length - term.length;
  const beforeTerm = state.expression.slice(0, startIndex);

  if (term.startsWith("-")) {
    state.expression = `${beforeTerm}${term.slice(1)}`;
    return;
  }

  state.expression = `${beforeTerm}(-${term})`;
}

function applyMemoryDelta(sign) {
  const value = getCurrentValue();
  if (!Number.isFinite(value)) return;
  state.memory += value * sign;
  persistMemory();
}

function insertText(text) {
  if (!text) return;

  const normalized = normalizeDisplayText(text);
  if (state.justEvaluated && /^[0-9.(a-zA-Z]/.test(normalized)) {
    state.expression = "";
  }

  if (!state.expression || state.expression === "0") {
    if (/^[+*/^,)]$/.test(normalized)) {
      state.expression = `0${normalized}`;
      return;
    }
    state.expression = normalized;
    return;
  }

  const lastChar = state.expression.slice(-1);
  const startsWithDigit = /^[0-9.]$/.test(normalized[0]);
  const endsWithDigit = /[0-9.]$/.test(lastChar);
  const shouldInsertMultiplication = !(startsWithDigit && endsWithDigit) && /[0-9)aeinrs]/i.test(lastChar) && /^[a-zA-Z(0-9]/.test(normalized);
  state.expression += shouldInsertMultiplication ? `*${normalized}` : normalized;
}

function commitEvaluation() {
  const value = evaluateExpression(state.expression);
  if (!Number.isFinite(value)) {
    state.preview = "数学错误";
    updateDisplay();
    return;
  }

  const result = formatNumber(value);
  if (state.expression.trim()) {
    state.history.unshift({ expression: state.expression, result });
    state.history = state.history.slice(0, 12);
    persistHistory();
    renderHistory();
  }

  state.ans = value;
  state.expression = result;
  state.preview = result;
  state.justEvaluated = true;
  persistExpression();
  updateDisplay();
}

function evaluatePreview() {
  if (!state.expression.trim()) {
    state.preview = "";
    updateDisplay();
    return;
  }

  const value = evaluateExpression(state.expression);
  if (!Number.isFinite(value)) {
    state.preview = "";
    updateDisplay();
    return;
  }

  state.preview = formatNumber(value);
  updateDisplay();
}

function getCurrentValue() {
  const previewValue = evaluateExpression(state.expression);
  if (Number.isFinite(previewValue)) {
    state.ans = previewValue;
    return previewValue;
  }
  return state.ans;
}

function updateDisplay() {
  elements.expressionView.textContent = prettyExpression(state.expression || "0");
  elements.previewView.textContent = state.preview || "";
  elements.modeChip.textContent = MODE_LABELS[state.mode] || "标准";
  elements.angleModeChip.textContent = `角度：${angleModeLabel(state.angleMode)}`;
  elements.shiftChip.textContent = state.shift ? "副功能：开" : "副功能：关";
  elements.memoryChip.textContent = `内存 ${formatNumber(state.memory)}`;
  persistExpression();
}

function syncModeWorkspace() {
  switch (state.mode) {
    case "standard":
      break;
    case "matrix":
      refreshMatrixWorkspace();
      break;
    case "stats":
      refreshStatsWorkspace();
      break;
    case "complex":
      refreshComplexWorkspace();
      break;
    case "base":
      refreshBaseWorkspace();
      break;
    default:
      break;
  }
}

function renderModeWorkspace() {
  elements.modeWorkspace.innerHTML = buildModeWorkspace();
  syncModeWorkspace();
}

function buildModeWorkspace() {
  if (state.mode === "standard") {
    return `
      <div class="mode-banner">
        <h3 class="mode-title">标准模式</h3>
        <p class="mode-copy">在上方键盘输入表达式，右侧函数库可快速插入函数。你也可以用鼠标悬停查看每个按钮的中文说明。</p>
        <div class="mode-badges">
          <span class="mode-badge">角度：${angleModeLabel(state.angleMode)}</span>
          <span class="mode-badge">历史：${state.history.length} 条</span>
          <span class="mode-badge">内存：${formatNumber(state.memory)}</span>
        </div>
      </div>
      <div class="module-card">
        <h3>使用提示</h3>
        <p class="mode-copy">支持常用三角函数、指数对数、阶乘、组合排列、随机数、常量和上次结果。副功能键可以快速输入反三角、平方、开方和取模。</p>
      </div>
    `;
  }

  if (state.mode === "matrix") {
    return `
      <div class="mode-banner">
        <h3 class="mode-title">矩阵模式</h3>
        <p class="mode-copy">支持 2×2 和 3×3 矩阵的加法、减法、乘法、转置、行列式和逆矩阵。输入后点击运算按钮即可得到结果。</p>
      </div>
      <div class="matrix-layout">
        <div class="mode-action-row">
          <label class="field-card">
            <span class="field-label">阶数</span>
            <select id="matrixSizeSelect" class="base-select mode-control" data-mode-action="matrix-size">
              <option value="2" ${state.matrix.size === 2 ? "selected" : ""}>2 × 2</option>
              <option value="3" ${state.matrix.size === 3 ? "selected" : ""}>3 × 3</option>
            </select>
          </label>
          <button class="mode-action is-active" type="button" data-matrix-op="add" data-tip="计算 A + B">A + B</button>
          <button class="mode-action" type="button" data-matrix-op="sub" data-tip="计算 A - B">A - B</button>
          <button class="mode-action" type="button" data-matrix-op="mul" data-tip="计算 A × B">A × B</button>
          <button class="mode-action" type="button" data-matrix-op="transposeA" data-tip="计算 A 的转置">Aᵀ</button>
          <button class="mode-action" type="button" data-matrix-op="transposeB" data-tip="计算 B 的转置">Bᵀ</button>
          <button class="mode-action" type="button" data-matrix-op="detA" data-tip="计算 A 的行列式">det A</button>
          <button class="mode-action" type="button" data-matrix-op="detB" data-tip="计算 B 的行列式">det B</button>
          <button class="mode-action" type="button" data-matrix-op="inverseA" data-tip="计算 A 的逆矩阵">A⁻¹</button>
          <button class="mode-action" type="button" data-matrix-op="inverseB" data-tip="计算 B 的逆矩阵">B⁻¹</button>
        </div>

        <div class="matrix-columns">
          <section class="matrix-card">
            <div class="panel-head">
              <h3 class="section-title">矩阵 A</h3>
              <span class="section-subtitle">可编辑</span>
            </div>
            <div class="matrix-grid" style="--matrix-size:${state.matrix.size}">
              ${renderMatrixInputs("a")}
            </div>
          </section>

          <section class="matrix-card">
            <div class="panel-head">
              <h3 class="section-title">矩阵 B</h3>
              <span class="section-subtitle">可编辑</span>
            </div>
            <div class="matrix-grid" style="--matrix-size:${state.matrix.size}">
              ${renderMatrixInputs("b")}
            </div>
          </section>
        </div>

        <section class="result-panel">
          <h3>结果</h3>
          <p class="matrix-status">${escapeHtml(state.matrix.operation || "请先选择一个矩阵运算。")}</p>
          <pre id="matrixResult" class="result-pre">${escapeHtml(state.matrix.result || "尚未计算")}</pre>
        </section>
      </div>
    `;
  }

  if (state.mode === "stats") {
    return `
      <div class="mode-banner">
        <h3 class="mode-title">统计模式</h3>
        <p class="mode-copy">录入样本数据后，可直接查看样本数量、总和、均值、方差、标准差、最小值和最大值。</p>
      </div>
      <div class="layout-stack">
        <section class="field-card">
          <span class="field-label">输入样本</span>
          <input id="statsInput" class="stats-input" type="text" value="${escapeAttr(state.stats.input)}" placeholder="例如：12, 18, 24" data-tip="输入一个数字后按加入，或用逗号、空格分隔多个样本。" />
          <div class="button-row" style="margin-top: 10px;">
            <button class="stats-pill is-active" type="button" data-stats-action="add" data-tip="把输入框中的样本加入统计列表">加入样本</button>
            <button class="stats-pill" type="button" data-stats-action="clear" data-tip="清空所有统计数据">清空</button>
            <button class="stats-pill" type="button" data-stats-action="fill-demo" data-tip="填入一组示例数据">示例数据</button>
          </div>
        </section>

        <section class="module-card">
          <h3>样本列表</h3>
          <ul id="statsList" class="stats-list">${renderStatsList()}</ul>
        </section>

        <section class="result-panel">
          <h3>统计结果</h3>
          <div class="summary-grid">${renderStatsSummary()}</div>
        </section>
      </div>
    `;
  }

  if (state.mode === "complex") {
    return `
      <div class="mode-banner">
        <h3 class="mode-title">复数模式</h3>
        <p class="mode-copy">输入 a + bi 与 c + di 两个复数，可以直接做加减乘除，也能查看共轭、模长和辐角。</p>
      </div>
      <div class="complex-layout">
        <div class="complex-grid">
          <section class="field-card">
            <span class="field-label">复数 A 实部</span>
            <input id="complexARe" class="complex-input" type="number" step="any" value="${escapeAttr(String(state.complex.a.re))}" data-complex-field="aRe" data-tip="复数 A 的实数部分。" />
          </section>
          <section class="field-card">
            <span class="field-label">复数 A 虚部</span>
            <input id="complexAIm" class="complex-input" type="number" step="any" value="${escapeAttr(String(state.complex.a.im))}" data-complex-field="aIm" data-tip="复数 A 的虚数部分。" />
          </section>
          <section class="field-card">
            <span class="field-label">复数 B 实部</span>
            <input id="complexBRe" class="complex-input" type="number" step="any" value="${escapeAttr(String(state.complex.b.re))}" data-complex-field="bRe" data-tip="复数 B 的实数部分。" />
          </section>
          <section class="field-card">
            <span class="field-label">复数 B 虚部</span>
            <input id="complexBIm" class="complex-input" type="number" step="any" value="${escapeAttr(String(state.complex.b.im))}" data-complex-field="bIm" data-tip="复数 B 的虚数部分。" />
          </section>
        </div>

        <div class="button-row">
          <button class="complex-op-btn is-active" type="button" data-complex-op="add" data-tip="A + B">加法</button>
          <button class="complex-op-btn" type="button" data-complex-op="sub" data-tip="A - B">减法</button>
          <button class="complex-op-btn" type="button" data-complex-op="mul" data-tip="A × B">乘法</button>
          <button class="complex-op-btn" type="button" data-complex-op="div" data-tip="A ÷ B">除法</button>
          <button class="complex-op-btn" type="button" data-complex-op="conjA" data-tip="A 的共轭">A 共轭</button>
          <button class="complex-op-btn" type="button" data-complex-op="absA" data-tip="A 的模长">|A|</button>
          <button class="complex-op-btn" type="button" data-complex-op="argA" data-tip="A 的辐角">arg A</button>
        </div>

        <section class="result-panel">
          <h3>结果</h3>
          <p class="complex-status">${escapeHtml(state.complex.operation || "请选择一个复数运算。")}</p>
          <pre id="complexResult" class="result-pre">${escapeHtml(formatComplexResult(state.complex.result))}</pre>
        </section>
      </div>
    `;
  }

  return `
    <div class="mode-banner">
      <h3 class="mode-title">进制模式</h3>
      <p class="mode-copy">输入数值后，选择源进制和目标进制即可转换。也会同步显示二、八、十、十六进制结果。</p>
    </div>
    <div class="base-layout">
      <section class="field-card">
        <span class="field-label">输入数值</span>
        <input id="baseInput" class="base-input" type="text" value="${escapeAttr(state.base.input)}" placeholder="例如：1010 或 1A3F" data-tip="输入待转换的数值。支持 2 到 36 进制的字符。" />
      </section>

      <div class="base-grid">
        <section class="field-card">
          <span class="field-label">源进制</span>
          <select id="baseSource" class="base-select" data-tip="选择输入值所属的进制。">
            ${baseOptionMarkup(state.base.source)}
          </select>
        </section>
        <section class="field-card">
          <span class="field-label">目标进制</span>
          <select id="baseTarget" class="base-select" data-tip="选择希望得到的目标进制。">
            ${baseOptionMarkup(state.base.target)}
          </select>
        </section>
      </div>

      <div class="base-btn-row">
        <button class="base-btn is-active" type="button" data-base-quick="BIN" data-tip="快速切换到二进制">二进制</button>
        <button class="base-btn" type="button" data-base-quick="OCT" data-tip="快速切换到八进制">八进制</button>
        <button class="base-btn" type="button" data-base-quick="DEC" data-tip="快速切换到十进制">十进制</button>
        <button class="base-btn" type="button" data-base-quick="HEX" data-tip="快速切换到十六进制">十六进制</button>
        <button class="base-btn" type="button" data-mode-action="convert-base" data-tip="立即执行转换">转换</button>
      </div>

      <section class="result-panel">
        <h3>转换结果</h3>
        <p class="base-status">${escapeHtml(state.base.source)} → ${escapeHtml(state.base.target)}</p>
        <pre id="baseResult" class="result-pre">${escapeHtml(state.base.result || "尚未转换")}</pre>
        <div class="base-output-grid">${renderBaseSummary()}</div>
      </section>
    </div>
  `;
}

function baseOptionMarkup(selected) {
  const options = ["BIN", "OCT", "DEC", "HEX"];
  return options.map((base) => `<option value="${base}" ${base === selected ? "selected" : ""}>${base}</option>`).join("");
}

function renderMatrixInputs(which) {
  const matrix = state.matrix[which];
  let markup = "";
  for (let row = 0; row < state.matrix.size; row += 1) {
    for (let col = 0; col < state.matrix.size; col += 1) {
      const value = matrix[row][col] ?? 0;
      markup += `
        <label class="field-card">
          <span class="matrix-cell-label">${which.toUpperCase()}[${row + 1},${col + 1}]</span>
          <input
            class="matrix-input"
            type="number"
            step="any"
            value="${escapeAttr(String(value))}"
            data-matrix-input="${which}"
            data-row="${row}"
            data-col="${col}"
            data-tip="编辑矩阵 ${which.toUpperCase()} 的第 ${row + 1} 行第 ${col + 1} 列。"
          />
        </label>
      `;
    }
  }
  return markup;
}

function renderStatsList() {
  if (!state.stats.values.length) {
    return `<li class="matrix-status">尚未添加样本。</li>`;
  }

  return state.stats.values.map((value, index) => `<li><button type="button" data-stats-action="remove" data-index="${index}" data-tip="点击删除这个样本">${formatNumber(value)}</button></li>`).join("");
}

function renderStatsSummary() {
  const summary = calculateStats(state.stats.values);
  const cards = [
    ["样本数", formatNumber(summary.count)],
    ["总和", formatNumber(summary.sum)],
    ["平均值", formatNumber(summary.mean)],
    ["最小值", formatNumber(summary.min)],
    ["最大值", formatNumber(summary.max)],
    ["总体标准差", formatNumber(summary.populationStdDev)],
    ["样本标准差", formatNumber(summary.sampleStdDev)],
    ["总体方差", formatNumber(summary.populationVariance)],
    ["样本方差", formatNumber(summary.sampleVariance)],
  ];

  return cards.map(([label, value]) => `
    <div class="summary-card">
      <span class="summary-label">${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `).join("");
}

function renderBaseSummary() {
  const converted = convertBaseValue(state.base.input, state.base.source, state.base.target);
  if (!converted.ok) {
    return `
      <div class="summary-card">
        <span class="summary-label">错误</span>
        <strong>${escapeHtml(converted.error)}</strong>
      </div>
    `;
  }

  return [
    ["二进制", converted.bin],
    ["八进制", converted.oct],
    ["十进制", converted.dec],
    ["十六进制", converted.hex],
  ].map(([label, value]) => `
    <div class="summary-card">
      <span class="summary-label">${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `).join("");
}

function handleModeWorkspaceClick(event) {
  const target = event.target;

  const matrixOp = target.closest("[data-matrix-op]");
  if (matrixOp) {
    applyMatrixOperation(matrixOp.dataset.matrixOp);
    return;
  }

  const statsAction = target.closest("[data-stats-action]");
  if (statsAction) {
    handleStatsAction(statsAction.dataset.statsAction, statsAction.dataset.index);
    return;
  }

  const complexOp = target.closest("[data-complex-op]");
  if (complexOp) {
    applyComplexOperation(complexOp.dataset.complexOp);
    return;
  }

  const baseQuick = target.closest("[data-base-quick]");
  if (baseQuick) {
    state.base.source = baseQuick.dataset.baseQuick;
    if (baseQuick.dataset.baseQuick === "BIN" || baseQuick.dataset.baseQuick === "OCT" || baseQuick.dataset.baseQuick === "DEC" || baseQuick.dataset.baseQuick === "HEX") {
      state.base.target = baseQuick.dataset.baseQuick;
    }
    persistBase();
    renderModeWorkspace();
    return;
  }

  const baseConvert = target.closest('[data-mode-action="convert-base"]');
  if (baseConvert) {
    convertAndPersistBase();
  }
}

function handleModeWorkspaceInput(event) {
  const target = event.target;

  if (target.id === "statsInput") {
    state.stats.input = target.value;
    persistStats();
    return;
  }

  if (target.id === "baseInput") {
    state.base.input = target.value;
    persistBase();
    refreshBaseWorkspace();
    return;
  }

  const matrixInput = target.closest("[data-matrix-input]");
  if (matrixInput) {
    updateMatrixField(matrixInput);
    return;
  }

  const complexField = target.closest("[data-complex-field]");
  if (complexField) {
    updateComplexField(complexField);
    return;
  }
}

function handleModeWorkspaceChange(event) {
  const target = event.target;

  if (target.id === "matrixSizeSelect") {
    const nextSize = Number(target.value);
    if (nextSize === 2 || nextSize === 3) {
      state.matrix.size = nextSize;
      state.matrix.a = resizeMatrix(state.matrix.a, nextSize);
      state.matrix.b = resizeMatrix(state.matrix.b, nextSize);
      persistMatrix();
      renderModeWorkspace();
    }
    return;
  }

  if (target.id === "baseSource") {
    state.base.source = normalizeBaseName(target.value) ?? state.base.source;
    persistBase();
    refreshBaseWorkspace();
    return;
  }

  if (target.id === "baseTarget") {
    state.base.target = normalizeBaseName(target.value) ?? state.base.target;
    persistBase();
    refreshBaseWorkspace();
  }
}

function updateMatrixField(input) {
  const matrixName = input.dataset.matrixInput;
  const row = Number(input.dataset.row);
  const col = Number(input.dataset.col);
  const numericValue = Number.parseFloat(input.value);
  if (!state.matrix[matrixName]) return;
  state.matrix[matrixName][row][col] = Number.isFinite(numericValue) ? numericValue : 0;
  persistMatrix();
}

function updateComplexField(input) {
  const field = input.dataset.complexField;
  const value = Number.parseFloat(input.value);
  const numeric = Number.isFinite(value) ? value : 0;
  if (field === "aRe") state.complex.a.re = numeric;
  if (field === "aIm") state.complex.a.im = numeric;
  if (field === "bRe") state.complex.b.re = numeric;
  if (field === "bIm") state.complex.b.im = numeric;
  persistComplex();
}

function handleStatsAction(action, index) {
  if (action === "add") {
    const parsed = parseStatsInput(state.stats.input);
    if (!parsed.length) return;
    state.stats.values.push(...parsed);
    state.stats.input = "";
    persistStats();
    refreshStatsWorkspace();
    return;
  }

  if (action === "clear") {
    state.stats.values = [];
    state.stats.input = "";
    state.stats.result = null;
    persistStats();
    refreshStatsWorkspace();
    return;
  }

  if (action === "fill-demo") {
    state.stats.values = [12, 18, 24, 30, 32, 36];
    state.stats.input = "";
    persistStats();
    refreshStatsWorkspace();
    return;
  }

  if (action === "remove") {
    const idx = Number(index);
    if (Number.isInteger(idx) && idx >= 0 && idx < state.stats.values.length) {
      state.stats.values.splice(idx, 1);
      persistStats();
      refreshStatsWorkspace();
    }
  }
}

function applyMatrixOperation(operation) {
  let result;
  let label = "";

  try {
    switch (operation) {
      case "add":
        result = matrixAdd(state.matrix.a, state.matrix.b);
        label = "A + B";
        break;
      case "sub":
        result = matrixSubtract(state.matrix.a, state.matrix.b);
        label = "A - B";
        break;
      case "mul":
        result = matrixMultiply(state.matrix.a, state.matrix.b);
        label = "A × B";
        break;
      case "transposeA":
        result = transposeMatrix(state.matrix.a);
        label = "A 的转置";
        break;
      case "transposeB":
        result = transposeMatrix(state.matrix.b);
        label = "B 的转置";
        break;
      case "detA":
        result = matrixDeterminant(state.matrix.a);
        label = "A 的行列式";
        break;
      case "detB":
        result = matrixDeterminant(state.matrix.b);
        label = "B 的行列式";
        break;
      case "inverseA":
        result = inverseMatrix(state.matrix.a);
        label = "A 的逆矩阵";
        break;
      case "inverseB":
        result = inverseMatrix(state.matrix.b);
        label = "B 的逆矩阵";
        break;
      default:
        return;
    }
  } catch (error) {
    state.matrix.operation = `${label || "矩阵运算"} 失败`;
    state.matrix.result = error.message || "矩阵运算失败";
    persistMatrix();
    refreshMatrixWorkspace();
    return;
  }

  state.matrix.operation = label;
  state.matrix.result = Array.isArray(result) ? formatMatrix(result) : formatNumber(result);
  persistMatrix();
  refreshMatrixWorkspace();
}

function applyComplexOperation(operation) {
  let result;
  let label = "";

  switch (operation) {
    case "add":
      result = complexAdd(state.complex.a, state.complex.b);
      label = "A + B";
      break;
    case "sub":
      result = complexSubtract(state.complex.a, state.complex.b);
      label = "A - B";
      break;
    case "mul":
      result = complexMultiply(state.complex.a, state.complex.b);
      label = "A × B";
      break;
    case "div":
      result = complexDivide(state.complex.a, state.complex.b);
      label = "A ÷ B";
      break;
    case "conjA":
      result = complexConjugate(state.complex.a);
      label = "A 的共轭";
      break;
    case "absA":
      result = { re: complexMagnitude(state.complex.a), im: 0 };
      label = "A 的模长";
      break;
    case "argA":
      result = { re: complexArgument(state.complex.a), im: 0 };
      label = "A 的辐角";
      break;
    default:
      return;
  }

  state.complex.operation = label;
  state.complex.result = normalizeComplex(result);
  persistComplex();
  refreshComplexWorkspace();
}

function convertAndPersistBase() {
  const converted = convertBaseValue(state.base.input, state.base.source, state.base.target);
  state.base.result = converted.ok ? converted.target : converted.error;
  persistBase();
  refreshBaseWorkspace();
}

function refreshMatrixWorkspace() {
  const result = elements.modeWorkspace.querySelector("#matrixResult");
  if (result) result.textContent = state.matrix.result || "尚未计算";

  const operation = elements.modeWorkspace.querySelector(".matrix-status");
  if (operation) operation.textContent = state.matrix.operation || "请先选择一个矩阵运算。";
}

function refreshStatsWorkspace() {
  const list = elements.modeWorkspace.querySelector("#statsList");
  if (list) list.innerHTML = renderStatsList();
  const summary = elements.modeWorkspace.querySelector(".summary-grid");
  if (summary) summary.innerHTML = renderStatsSummary();
  const input = elements.modeWorkspace.querySelector("#statsInput");
  if (input) input.value = state.stats.input;
}

function refreshComplexWorkspace() {
  const result = elements.modeWorkspace.querySelector("#complexResult");
  if (result) result.textContent = formatComplexResult(state.complex.result);
  const operation = elements.modeWorkspace.querySelector(".complex-status");
  if (operation) operation.textContent = state.complex.operation || "请选择一个复数运算。";
}

function refreshBaseWorkspace() {
  const result = elements.modeWorkspace.querySelector("#baseResult");
  if (result) result.textContent = state.base.result || "尚未转换";
  const outputs = elements.modeWorkspace.querySelector(".base-output-grid");
  if (outputs) outputs.innerHTML = renderBaseSummary();
}

function renderModeWorkspaceRefresh() {
  renderModeWorkspace();
}

function persistExpression() {
  window.localStorage.setItem(STORAGE_KEYS.expression, state.expression);
}

function persistAngleMode() {
  window.localStorage.setItem(STORAGE_KEYS.angleMode, state.angleMode);
}

function persistMemory() {
  window.localStorage.setItem(STORAGE_KEYS.memory, String(state.memory));
  updateDisplay();
}

function persistHistory() {
  window.localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(state.history));
}

function persistShift() {
  window.localStorage.setItem(STORAGE_KEYS.shift, String(state.shift));
}

function persistMode() {
  window.localStorage.setItem(STORAGE_KEYS.mode, state.mode);
}

function persistMatrix() {
  window.localStorage.setItem(STORAGE_KEYS.matrix, JSON.stringify(state.matrix));
}

function persistStats() {
  window.localStorage.setItem(STORAGE_KEYS.stats, JSON.stringify(state.stats));
}

function persistComplex() {
  window.localStorage.setItem(STORAGE_KEYS.complex, JSON.stringify(state.complex));
}

function persistBase() {
  window.localStorage.setItem(STORAGE_KEYS.base, JSON.stringify(state.base));
}

function prettyExpression(expression) {
  const replacements = [
    ["asin(", "反正弦("],
    ["acos(", "反余弦("],
    ["atan(", "反正切("],
    ["sin(", "正弦("],
    ["cos(", "余弦("],
    ["tan(", "正切("],
    ["log(", "常对数("],
    ["ln(", "自然对数("],
    ["sqrt(", "平方根("],
    ["square(", "平方("],
    ["pow10(", "10的幂("],
    ["exp(", "e的幂("],
    ["ncr(", "组合("],
    ["npr(", "排列("],
    ["mod(", "取模("],
    ["root(", "开方("],
    ["rand()", "随机数()"],
    ["Ans", "结果"],
    ["pi", "π"],
  ];

  let output = expression || "";
  for (const [from, to] of replacements) {
    output = output.replaceAll(from, to);
  }
  return output
    .replaceAll("*", "×")
    .replaceAll("/", "÷")
    .replaceAll("-", "−");
}

function normalizeDisplayText(text) {
  return text.replaceAll("π", "pi").replaceAll("×", "*").replaceAll("÷", "/").replaceAll("−", "-");
}

function evaluateExpression(expression) {
  try {
    const normalized = normalizeExpression(expression);
    if (!normalized.trim()) return NaN;
    const tokens = tokenize(normalized);
    if (!tokens.length) return NaN;
    const parser = createParser(tokens);
    const value = parser.parseExpression();
    if (!parser.isAtEnd()) return NaN;
    return value;
  } catch {
    return NaN;
  }
}

function normalizeExpression(expression) {
  return expression
    .replaceAll("×", "*")
    .replaceAll("÷", "/")
    .replaceAll("−", "-")
    .replaceAll("π", "pi")
    .replaceAll("ANS", "Ans")
    .replace(/\s+/g, "");
}

function tokenize(input) {
  const tokens = [];
  let index = 0;

  while (index < input.length) {
    const char = input[index];

    if (/[0-9.]/.test(char)) {
      let end = index + 1;
      let sawExponent = false;
      while (end < input.length) {
        const current = input[end];
        if (/[0-9.]/.test(current)) {
          end += 1;
          continue;
        }
        if ((current === "e" || current === "E") && !sawExponent) {
          sawExponent = true;
          end += 1;
          if (input[end] === "+" || input[end] === "-") end += 1;
          continue;
        }
        break;
      }
      tokens.push({ type: "number", value: Number(input.slice(index, end)) });
      index = end;
      continue;
    }

    if (/[a-zA-Z_]/.test(char)) {
      let end = index + 1;
      while (end < input.length && /[a-zA-Z0-9_]/.test(input[end])) end += 1;
      tokens.push({ type: "identifier", value: input.slice(index, end).toLowerCase() });
      index = end;
      continue;
    }

    if ("+-*/^!,()% ,".replace(/\s+/g, "").includes(char)) {
      const type = char === "(" ? "lparen" : char === ")" ? "rparen" : char === "," ? "comma" : "operator";
      tokens.push({ type, value: char });
      index += 1;
      continue;
    }

    throw new Error(`无法识别的字符：${char}`);
  }

  return insertImplicitMultiplication(tokens);
}

function insertImplicitMultiplication(tokens) {
  const result = [];
  const functionNames = new Set([
    "sin", "cos", "tan", "asin", "acos", "atan", "sinh", "cosh", "tanh", "asinh", "acosh", "atanh",
    "log", "ln", "sqrt", "square", "pow10", "exp", "abs", "floor", "ceil", "round", "ncr", "npr", "mod", "root", "rand",
  ]);

  for (const token of tokens) {
    const previous = result[result.length - 1];
    if (previous && needsMultiplication(previous, token, functionNames)) {
      result.push({ type: "operator", value: "*" });
    }
    result.push(token);
  }
  return result;
}

function needsMultiplication(left, right, functionNames) {
  const leftCanEnd = left.type === "number" || left.type === "identifier" || left.type === "rparen" || (left.type === "operator" && left.value === "!");
  const rightCanStart = right.type === "number" || right.type === "identifier" || right.type === "lparen";

  if (!leftCanEnd || !rightCanStart) return false;
  if (left.type === "identifier" && right.type === "lparen" && functionNames.has(left.value)) return false;
  return true;
}

function createParser(tokens) {
  let index = 0;

  function peek() {
    return tokens[index];
  }

  function match(type, value) {
    const token = peek();
    if (!token || token.type !== type) return false;
    if (typeof value !== "undefined" && token.value !== value) return false;
    index += 1;
    return token;
  }

  function expect(type, value) {
    const token = match(type, value);
    if (!token) throw new Error(`缺少 ${value ?? type}`);
    return token;
  }

  function parseExpression() {
    return parseAdditive();
  }

  function parseAdditive() {
    let value = parseMultiplicative();
    while (true) {
      if (match("operator", "+")) {
        value += parseMultiplicative();
        continue;
      }
      if (match("operator", "-")) {
        value -= parseMultiplicative();
        continue;
      }
      return value;
    }
  }

  function parseMultiplicative() {
    let value = parsePower();
    while (true) {
      if (match("operator", "*")) {
        value *= parsePower();
        continue;
      }
      if (match("operator", "/")) {
        value /= parsePower();
        continue;
      }
      if (match("operator", "%")) {
        value %= parsePower();
        continue;
      }
      return value;
    }
  }

  function parsePower() {
    let value = parseUnary();
    if (match("operator", "^")) {
      value = Math.pow(value, parsePower());
    }
    return value;
  }

  function parseUnary() {
    if (match("operator", "+")) return parseUnary();
    if (match("operator", "-")) return -parseUnary();
    return parsePostfix();
  }

  function parsePostfix() {
    let value = parsePrimary();
    while (true) {
      if (match("operator", "!")) {
        value = factorial(value);
        continue;
      }
      if (match("operator", "%")) {
        value /= 100;
        continue;
      }
      return value;
    }
  }

  function parsePrimary() {
    const token = peek();
    if (!token) throw new Error("表达式不完整");

    if (match("number")) return token.value;

    if (match("identifier")) {
      const name = token.value;
      if (match("lparen")) {
        const args = [];
        if (!match("rparen")) {
          args.push(parseExpression());
          while (match("comma")) args.push(parseExpression());
          expect("rparen");
        }
        return evaluateFunction(name, args);
      }
      return resolveIdentifier(name);
    }

    if (match("lparen")) {
      const value = parseExpression();
      expect("rparen");
      return value;
    }

    throw new Error(`无法识别的符号：${token.value}`);
  }

  return {
    parseExpression,
    isAtEnd() {
      return index >= tokens.length;
    },
  };
}

function resolveIdentifier(name) {
  switch (name) {
    case "pi":
      return Math.PI;
    case "e":
      return Math.E;
    case "ans":
      return state.ans;
    case "m":
      return state.memory;
    default:
      throw new Error(`未知标识符：${name}`);
  }
}

function evaluateFunction(name, args) {
  const single = args[0];
  const pair = args.slice(0, 2);

  switch (name) {
    case "sin":
      return Math.sin(toRadians(single));
    case "cos":
      return Math.cos(toRadians(single));
    case "tan":
      return Math.tan(toRadians(single));
    case "asin":
      return fromRadians(Math.asin(single));
    case "acos":
      return fromRadians(Math.acos(single));
    case "atan":
      return fromRadians(Math.atan(single));
    case "sinh":
      return Math.sinh(single);
    case "cosh":
      return Math.cosh(single);
    case "tanh":
      return Math.tanh(single);
    case "asinh":
      return Math.asinh(single);
    case "acosh":
      return Math.acosh(single);
    case "atanh":
      return Math.atanh(single);
    case "log":
      return Math.log10(single);
    case "ln":
      return Math.log(single);
    case "sqrt":
      return Math.sqrt(single);
    case "square":
      return single * single;
    case "pow10":
      return Math.pow(10, single);
    case "exp":
      return Math.exp(single);
    case "abs":
      return Math.abs(single);
    case "floor":
      return Math.floor(single);
    case "ceil":
      return Math.ceil(single);
    case "round":
      return Math.round(single);
    case "ncr":
      return combinations(pair[0], pair[1]);
    case "npr":
      return permutations(pair[0], pair[1]);
    case "mod":
      return pair[0] % pair[1];
    case "root":
      return Math.pow(pair[1], 1 / pair[0]);
    case "rand":
      return Math.random();
    default:
      throw new Error(`未知函数：${name}`);
  }
}

function toRadians(value) {
  if (state.angleMode === "DEG") return (value * Math.PI) / 180;
  if (state.angleMode === "GRAD") return (value * Math.PI) / 200;
  return value;
}

function fromRadians(value) {
  if (state.angleMode === "DEG") return (value * 180) / Math.PI;
  if (state.angleMode === "GRAD") return (value * 200) / Math.PI;
  return value;
}

function factorial(value) {
  if (!Number.isFinite(value) || value < 0 || Math.floor(value) !== value) {
    throw new Error("阶乘仅支持非负整数");
  }
  let result = 1;
  for (let number = 2; number <= value; number += 1) result *= number;
  return result;
}

function permutations(n, r) {
  return factorial(n) / factorial(n - r);
}

function combinations(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

function formatNumber(value) {
  if (!Number.isFinite(value)) return "数学错误";
  if (Object.is(value, -0)) return "0";
  const magnitude = Math.abs(value);
  if (magnitude !== 0 && (magnitude >= 1e10 || magnitude < 1e-8)) {
    return value.toExponential(10).replace(/\.0+e/, "e").replace(/(\.\d*?)0+e/, "$1e");
  }
  const text = Number(value.toPrecision(12)).toString();
  return text.includes("e") ? text : text.replace(/\.0+$/, "").replace(/(\.\d*?)0+$/, "$1");
}

function angleModeLabel(mode) {
  if (mode === "DEG") return "度";
  if (mode === "RAD") return "弧度";
  return "百分度";
}

function formatMatrix(matrix) {
  return matrix.map((row) => `[ ${row.map((value) => formatNumber(value)).join(" , ")} ]`).join("\n");
}

function createMatrix(size, fill = 0) {
  return Array.from({ length: size }, () => Array.from({ length: size }, () => fill));
}

function normalizeMatrix(matrix, size) {
  const output = createMatrix(size);
  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      const value = matrix?.[row]?.[col];
      output[row][col] = Number.isFinite(Number(value)) ? Number(value) : 0;
    }
  }
  return output;
}

function resizeMatrix(matrix, size) {
  const output = createMatrix(size);
  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      output[row][col] = Number.isFinite(matrix?.[row]?.[col]) ? matrix[row][col] : 0;
    }
  }
  return output;
}

function matrixAdd(a, b) {
  return a.map((row, rowIndex) => row.map((value, colIndex) => value + b[rowIndex][colIndex]));
}

function matrixSubtract(a, b) {
  return a.map((row, rowIndex) => row.map((value, colIndex) => value - b[rowIndex][colIndex]));
}

function matrixMultiply(a, b) {
  const size = a.length;
  const result = createMatrix(size);
  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      let sum = 0;
      for (let index = 0; index < size; index += 1) {
        sum += a[row][index] * b[index][col];
      }
      result[row][col] = sum;
    }
  }
  return result;
}

function transposeMatrix(matrix) {
  const size = matrix.length;
  const result = createMatrix(size);
  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      result[col][row] = matrix[row][col];
    }
  }
  return result;
}

function matrixDeterminant(matrix) {
  const size = matrix.length;
  const working = matrix.map((row) => row.slice());
  let sign = 1;

  for (let pivot = 0; pivot < size; pivot += 1) {
    let bestRow = pivot;
    for (let row = pivot + 1; row < size; row += 1) {
      if (Math.abs(working[row][pivot]) > Math.abs(working[bestRow][pivot])) bestRow = row;
    }

    if (Math.abs(working[bestRow][pivot]) < 1e-12) return 0;
    if (bestRow !== pivot) {
      [working[pivot], working[bestRow]] = [working[bestRow], working[pivot]];
      sign *= -1;
    }

    for (let row = pivot + 1; row < size; row += 1) {
      const factor = working[row][pivot] / working[pivot][pivot];
      for (let col = pivot; col < size; col += 1) {
        working[row][col] -= factor * working[pivot][col];
      }
    }
  }

  return working.reduce((product, row, index) => product * row[index], sign);
}

function inverseMatrix(matrix) {
  const size = matrix.length;
  const augmented = matrix.map((row, rowIndex) => [...row, ...identityRow(size, rowIndex)]);

  for (let pivot = 0; pivot < size; pivot += 1) {
    let bestRow = pivot;
    for (let row = pivot; row < size; row += 1) {
      if (Math.abs(augmented[row][pivot]) > Math.abs(augmented[bestRow][pivot])) bestRow = row;
    }

    if (Math.abs(augmented[bestRow][pivot]) < 1e-12) {
      throw new Error("矩阵不可逆");
    }

    if (bestRow !== pivot) [augmented[pivot], augmented[bestRow]] = [augmented[bestRow], augmented[pivot]];

    const pivotValue = augmented[pivot][pivot];
    for (let col = 0; col < size * 2; col += 1) {
      augmented[pivot][col] /= pivotValue;
    }

    for (let row = 0; row < size; row += 1) {
      if (row === pivot) continue;
      const factor = augmented[row][pivot];
      for (let col = 0; col < size * 2; col += 1) {
        augmented[row][col] -= factor * augmented[pivot][col];
      }
    }
  }

  return augmented.map((row) => row.slice(size));
}

function identityRow(size, index) {
  return Array.from({ length: size }, (_, col) => (col === index ? 1 : 0));
}

function parseStatsInput(text) {
  return text
    .split(/[,\s，]+/)
    .map((item) => Number.parseFloat(item))
    .filter(Number.isFinite);
}

function calculateStats(values) {
  if (!values.length) {
    return {
      count: 0,
      sum: 0,
      mean: 0,
      min: 0,
      max: 0,
      populationVariance: 0,
      sampleVariance: 0,
      populationStdDev: 0,
      sampleStdDev: 0,
    };
  }

  const count = values.length;
  const sum = values.reduce((total, value) => total + value, 0);
  const mean = sum / count;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const populationVariance = values.reduce((total, value) => total + (value - mean) ** 2, 0) / count;
  const sampleVariance = count > 1 ? values.reduce((total, value) => total + (value - mean) ** 2, 0) / (count - 1) : 0;

  return {
    count,
    sum,
    mean,
    min,
    max,
    populationVariance,
    sampleVariance,
    populationStdDev: Math.sqrt(populationVariance),
    sampleStdDev: Math.sqrt(sampleVariance),
  };
}

function formatComplexResult(value) {
  if (!value) return "尚未计算";
  if (typeof value === "number") return formatNumber(value);
  const re = formatNumber(value.re);
  const im = formatNumber(Math.abs(value.im));
  if (Math.abs(value.im) < 1e-12) return re;
  return `${re} ${value.im >= 0 ? "+" : "-"} ${im}i`;
}

function normalizeComplex(value) {
  if (!value) return { re: 0, im: 0 };
  return {
    re: Number.isFinite(Number(value.re)) ? Number(value.re) : 0,
    im: Number.isFinite(Number(value.im)) ? Number(value.im) : 0,
  };
}

function complexAdd(a, b) {
  return { re: a.re + b.re, im: a.im + b.im };
}

function complexSubtract(a, b) {
  return { re: a.re - b.re, im: a.im - b.im };
}

function complexMultiply(a, b) {
  return { re: a.re * b.re - a.im * b.im, im: a.re * b.im + a.im * b.re };
}

function complexDivide(a, b) {
  const denominator = b.re * b.re + b.im * b.im;
  if (Math.abs(denominator) < 1e-12) throw new Error("复数除法的分母不能为 0");
  return {
    re: (a.re * b.re + a.im * b.im) / denominator,
    im: (a.im * b.re - a.re * b.im) / denominator,
  };
}

function complexConjugate(a) {
  return { re: a.re, im: -a.im };
}

function complexMagnitude(a) {
  return Math.hypot(a.re, a.im);
}

function complexArgument(a) {
  return Math.atan2(a.im, a.re);
}

function normalizeBaseName(value) {
  const name = String(value || "").toUpperCase();
  if (["BIN", "OCT", "DEC", "HEX"].includes(name)) return name;
  return null;
}

function convertBaseValue(input, source, target) {
  const decimal = parseBaseNumber(input, source);
  if (!Number.isFinite(decimal)) {
    return { ok: false, error: "输入数值无法按源进制解析" };
  }

  const bin = formatBaseNumber(decimal, 2);
  const oct = formatBaseNumber(decimal, 8);
  const dec = formatBaseNumber(decimal, 10);
  const hex = formatBaseNumber(decimal, 16);
  const targetValue = formatBaseNumber(decimal, baseToNumber(target));

  return { ok: true, bin, oct, dec, hex, target: targetValue };
}

function baseToNumber(base) {
  switch (normalizeBaseName(base)) {
    case "BIN":
      return 2;
    case "OCT":
      return 8;
    case "DEC":
      return 10;
    case "HEX":
      return 16;
    default:
      return 10;
  }
}

function parseBaseNumber(input, baseName) {
  const base = baseToNumber(baseName);
  const text = String(input || "").trim().replaceAll("_", "").toUpperCase();
  if (!text) return NaN;

  let sign = 1;
  let working = text;
  if (working.startsWith("+")) working = working.slice(1);
  if (working.startsWith("-")) {
    sign = -1;
    working = working.slice(1);
  }

  const parts = working.split(".");
  if (parts.length > 2) return NaN;

  const integerPart = parts[0] || "0";
  const fractionPart = parts[1] || "";
  let integerValue = 0;

  for (const char of integerPart) {
    const digit = charToDigit(char);
    if (digit >= base) return NaN;
    integerValue = integerValue * base + digit;
  }

  let fractionValue = 0;
  let divisor = base;
  for (const char of fractionPart) {
    const digit = charToDigit(char);
    if (digit >= base) return NaN;
    fractionValue += digit / divisor;
    divisor *= base;
  }

  return sign * (integerValue + fractionValue);
}

function formatBaseNumber(value, base) {
  if (!Number.isFinite(value)) return "无法转换";
  if (Object.is(value, -0)) value = 0;
  const sign = value < 0 ? "-" : "";
  let working = Math.abs(value);
  const integerPart = Math.floor(working);
  let fractionPart = working - integerPart;
  let integerText = integerPart.toString(base).toUpperCase();

  if (fractionPart < 1e-12) {
    return `${sign}${integerText}`;
  }

  let fractionText = "";
  for (let index = 0; index < 12 && fractionPart > 1e-12; index += 1) {
    fractionPart *= base;
    const digit = Math.floor(fractionPart + 1e-12);
    fractionText += digitToChar(digit);
    fractionPart -= digit;
  }

  fractionText = fractionText.replace(/0+$/, "");
  return fractionText ? `${sign}${integerText}.${fractionText}` : `${sign}${integerText}`;
}

function charToDigit(char) {
  if (char >= "0" && char <= "9") return char.charCodeAt(0) - 48;
  if (char >= "A" && char <= "Z") return char.charCodeAt(0) - 55;
  return 36;
}

function digitToChar(digit) {
  if (digit >= 0 && digit <= 9) return String(digit);
  return String.fromCharCode(55 + digit);
}

function formatAttr(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttr(value) {
  return formatAttr(value);
}