const STORAGE_KEYS = {
  expression: "calc991cn.expression",
  angleMode: "calc991cn.angleMode",
  memory: "calc991cn.memory",
  history: "calc991cn.history",
  shift: "calc991cn.shift",
  mode: "calc991cn.mode",
  matrix: "calc991cn.matrix",
  equation: "calc991cn.equation",
  vector: "calc991cn.vector",
  stats: "calc991cn.stats",
  calculus: "calc991cn.calculus",
  complex: "calc991cn.complex",
  base: "calc991cn.base",
  logic: "calc991cn.logic",
  table: "calc991cn.table",
  tools: "calc991cn.tools",
};

const MODE_LABELS = {
  standard: "标准",
  equation: "方程",
  matrix: "矩阵",
  vector: "向量",
  stats: "统计",
  calculus: "微积分",
  complex: "复数",
  base: "进制",
  logic: "逻辑",
  table: "表格",
  tools: "工具",
};

const MODE_HINTS = {
  standard: "标准模式：表达式、常量、函数和记忆运算。",
  equation: "方程模式：线性方程组、多项式方程、不等式、SOLVE 与比例式。",
  matrix: "矩阵模式：支持 2~4 阶矩阵与 REF/RREF、单位矩阵等运算。",
  vector: "向量模式：支持最多 4 个 3 维向量的运算。",
  stats: "统计模式：录入数据后查看均值、方差、标准差和极值。",
  calculus: "微积分模式：数值微分、数值积分与 Σ 求和。",
  complex: "复数模式：进行复数四则运算、共轭、模长和辐角计算。",
  base: "进制模式：在二、八、十、十六进制之间转换。",
  logic: "逻辑模式：AND、OR、NOT、XOR、XNOR 运算。",
  table: "表格模式：函数值表与 5×45 电子表格。",
  tools: "工具模式：分数、DMS、极直坐标、素因数、常数和单位换算。",
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
  uiSearch: "",
  advSubMode: "equation",
  matrix: {
    size: 2,
    activeMatrix: "a",
    leftMatrix: "a",
    rightMatrix: "b",
    scalar: 2,
    activeAction: "add",
    matrices: {
      a: createMatrix(2),
      b: createMatrix(2),
      c: createMatrix(2),
      d: createMatrix(2),
    },
    refTarget: "a",
    result: "",
    operation: "A + B",
  },
  equation: {
    linearSize: 2,
    linearRows: defaultLinearRows(2),
    linearResult: "",
    activeAction: "solve-linear",
    polyDegree: 2,
    polyCoefficients: [1, 0, 0, 0, 0],
    polyResult: "",
    solveExpression: "x^3 - x - 1",
    solveInitial: "1",
    solveResult: "",
    inequalityDegree: 2,
    inequalityCoefficients: [1, 0, -1, 0, 0],
    inequalitySign: ">=",
    inequalityResult: "",
    proportion: { a: "1", b: "2", c: "3", d: "?" },
    proportionResult: "",
  },
  vector: {
    left: "v1",
    right: "v2",
    scalar: 2,
    activeAction: "vector-dot",
    vectors: {
      v1: [1, 0, 0],
      v2: [0, 1, 0],
      v3: [0, 0, 1],
      v4: [1, 1, 1],
    },
    result: "",
    operation: "v1 + v2",
  },
  stats: {
    values: [],
    input: "",
    pairedInput: "",
    paired: [],
    activeAction: "add",
    regressionType: "linear",
    regressionResult: "",
    distribution: {
      type: "normal",
      x: "0",
      mean: "0",
      sd: "1",
      n: "10",
      p: "0.5",
      lambda: "3",
    },
    distributionResult: "",
    replay: [],
  },
  calculus: {
    expression: "sin(x)",
    variable: "x",
    point: "0",
    order: 1,
    activeAction: "calc-derivative",
    derivativeResult: "",
    integralExpression: "sin(x)",
    lower: "0",
    upper: "3.1415926",
    intervals: "200",
    integralResult: "",
    sigmaExpression: "n^2",
    sigmaVar: "n",
    sigmaLower: "1",
    sigmaUpper: "10",
    sigmaResult: "",
  },
  complex: {
    a: { re: 0, im: 0 },
    b: { re: 0, im: 0 },
    operation: "加",
    activeAction: "add",
    result: { re: 0, im: 0 },
    polar: { r: "1", theta: "45" },
    powerN: "2",
  },
  base: {
    input: "1010",
    source: "BIN",
    target: "DEC",
    result: "10",
    activeQuick: "BIN",
  },
  logic: {
    a: "10",
    b: "12",
    base: "DEC",
    op: "AND",
    activeAction: "logic-and",
    result: "",
  },
  table: {
    fx: "x^2",
    gx: "sin(x)",
    start: "0",
    end: "10",
    step: "1",
    activeAction: "table",
    rows: [],
    sheet: createSheet(45, 5),
    sheetMessage: "",
  },
  tools: {
    fractionInput: "42/56",
    fractionResult: "",
    dmsInput: "12°30'0\"",
    dmsResult: "",
    polarX: "3",
    polarY: "4",
    polarResult: "",
    cartR: "5",
    cartTheta: "53.130102",
    cartResult: "",
    primeInput: "360",
    primeResult: "",
    randMin: "1",
    randMax: "100",
    randResult: "",
    formatMode: "fixed",
    decimalPlaces: 6,
    significantDigits: 10,
    rounding: "half-up",
    engInput: "1234567",
    engResult: "",
    constantKey: "c",
    constantValue: "",
    unitGroup: "length",
    unitFrom: "m",
    unitTo: "km",
    unitInput: "1000",
    unitResult: "",
    activeAction: "fraction",
  },
};

const elements = {
  keypad: document.getElementById("keypad"),
  expressionView: document.getElementById("expressionView"),
  previewView: document.getElementById("previewView"),
  modeChip: document.getElementById("modeChip"),
  modeSubtitle: document.getElementById("modeSubtitle"),
  angleModeChip: document.getElementById("angleModeChip"),
  shiftChip: document.getElementById("shiftChip"),
  memoryChip: document.getElementById("memoryChip"),
  hoverHint: document.getElementById("hoverHint"),
  historyList: document.getElementById("historyList"),
  clearHistoryBtn: document.getElementById("clearHistoryBtn"),
  uiSearchInput: document.getElementById("uiSearchInput"),
  clearUiSearchBtn: document.getElementById("clearUiSearchBtn"),
  uiSearchStatus: document.getElementById("uiSearchStatus"),
  quickActions: document.querySelector(".quick-actions"),
  modeWorkspace: document.getElementById("modeWorkspace"),
  modeTabs: Array.from(document.querySelectorAll(".mode-tab")),
};

initialize();

function initialize() {
  hydrateState();
  renderKeypad();
  renderModeWorkspace();
  bindEvents();
  updateDisplay();
  renderHistory();
  renderModeTabs();
  syncModeWorkspace();
  setHoverHint(MODE_HINTS[state.mode]);
  evaluatePreview();
  applyUiFilter();
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
  if (["equation", "vector", "calculus", "logic", "table", "tools"].includes(state.mode)) {
    state.advSubMode = state.mode;
  }

  hydrateMatrix();
  hydrateEquation();
  hydrateVector();
  hydrateStats();
  hydrateCalculus();
  hydrateComplex();
  hydrateBase();
  hydrateLogic();
  hydrateTable();
  hydrateTools();
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
    state.matrix.size = [2, 3, 4].includes(parsed.size) ? parsed.size : 2;
    const parsedMatrices = parsed.matrices || {};
    state.matrix.matrices.a = normalizeMatrix(parsedMatrices.a ?? parsed.a, state.matrix.size);
    state.matrix.matrices.b = normalizeMatrix(parsedMatrices.b ?? parsed.b, state.matrix.size);
    state.matrix.matrices.c = normalizeMatrix(parsedMatrices.c, state.matrix.size);
    state.matrix.matrices.d = normalizeMatrix(parsedMatrices.d, state.matrix.size);
    state.matrix.activeMatrix = normalizeMatrixKey(parsed.activeMatrix) ?? "a";
    state.matrix.leftMatrix = normalizeMatrixKey(parsed.leftMatrix) ?? "a";
    state.matrix.rightMatrix = normalizeMatrixKey(parsed.rightMatrix) ?? "b";
    state.matrix.refTarget = normalizeMatrixKey(parsed.refTarget) ?? "a";
    state.matrix.scalar = Number.isFinite(Number(parsed.scalar)) ? Number(parsed.scalar) : 2;
    state.matrix.result = parsed.result ?? "";
    state.matrix.operation = parsed.operation ?? "A + B";
  } catch {
    state.matrix.matrices.a = createMatrix(state.matrix.size);
    state.matrix.matrices.b = createMatrix(state.matrix.size);
    state.matrix.matrices.c = createMatrix(state.matrix.size);
    state.matrix.matrices.d = createMatrix(state.matrix.size);
  }
}

function renderComplexWorkspaceV2() {
  return `
    <div class="layout-stack">
      <section class="module-card">
        <h3>复数模式（扩展）</h3>
        <p class="mode-copy">支持复数四则、共轭、模、辐角、幂与开方；并支持极坐标互转。</p>
      </section>
    </div>
  `;
}

function buildModeWorkspace() {
  if (state.mode === "standard") {
    return `
      <div class="mode-banner">
        <h3 class="mode-title">标准模式</h3>
        <p class="mode-copy">标准表达式计算。高级功能请切换其他模式。</p>
      </div>
    `;
  }
  if (state.mode === "matrix") return renderMatrixWorkspaceV2();
  if (state.mode === "stats") return renderStatsWorkspaceV2();
  if (state.mode === "complex") return renderComplexWorkspaceV2();
  if (state.mode === "base") return renderBaseWorkspaceV2();
  return renderAdvancedWorkspace();
}

function handleAdvancedAction(action) {
  try {
    setActiveAdvancedAction(action);
    if (action === "solve-linear") {
      const n = state.equation.linearSize;
      const rows = state.equation.linearRows && state.equation.linearRows.length === n ? state.equation.linearRows : defaultLinearRows(n);
      const solution = solveLinearSystem(rows);
      const result = solution.map((v, i) => `x${i + 1}=${formatNumber(v)}`).join(", ");
      state.equation.linearResult = result;
      state.tools.unitResult = result;
      persistEquation();
    } else if (action === "solve-poly") {
      const deg = state.equation.polyDegree;
      const coeffs = state.equation.polyCoefficients && state.equation.polyCoefficients.length === deg + 1 ? state.equation.polyCoefficients : Array.from({ length: deg + 1 }, (_, i) => (i === 0 ? 1 : 0));
      const roots = solvePolynomialRealOnly(coeffs);
      const result = `根: ${roots.join(", ")}`;
      state.equation.polyResult = result;
      state.tools.unitResult = result;
      persistEquation();
    } else if (action === "solve-newton") {
      const root = solveByNewtonSimple(state.equation.solveExpression, Number(state.equation.solveInitial || 1));
      state.tools.unitResult = `x≈${formatNumber(root)}`;
      state.equation.solveResult = `x≈${formatNumber(root)}`;
      persistEquation();
    } else if (action === "solve-ineq") {
      const deg = state.equation.inequalityDegree;
      const coeffs = state.equation.inequalityCoefficients && state.equation.inequalityCoefficients.length === deg + 1 ? state.equation.inequalityCoefficients : [1, 0, -1, 0, 0];
      const roots = solvePolynomialRealOnly(coeffs);
      const sign = state.equation.inequalitySign || ">=";
      let result = `不等式根: ${roots.join(", ")}\n请根据根和符号${sign}判断解集`;
      state.equation.inequalityResult = result;
      state.tools.unitResult = result;
      persistEquation();
    } else if (action === "vector-dot") {
      const a = state.vector.vectors.v1 || [1, 0, 0];
      const b = state.vector.vectors.v2 || [0, 1, 0];
      state.tools.unitResult = `v1·v2 = ${formatNumber(a[0] * b[0] + a[1] * b[1] + a[2] * b[2])}`;
    } else if (action === "vector-cross") {
      const a = state.vector.vectors.v1 || [1, 0, 0];
      const b = state.vector.vectors.v2 || [0, 1, 0];
      const cx = a[1] * b[2] - a[2] * b[1];
      const cy = a[2] * b[0] - a[0] * b[2];
      const cz = a[0] * b[1] - a[1] * b[0];
      state.tools.unitResult = `v1×v2 = (${formatNumber(cx)}, ${formatNumber(cy)}, ${formatNumber(cz)})`;
    } else if (action === "vector-add") {
      const a = state.vector.vectors.v1 || [0, 0, 0];
      const b = state.vector.vectors.v2 || [0, 0, 0];
      state.tools.unitResult = `v1+v2 = (${formatNumber(a[0] + b[0])}, ${formatNumber(a[1] + b[1])}, ${formatNumber(a[2] + b[2])})`;
    } else if (action === "vector-sub") {
      const a = state.vector.vectors.v1 || [0, 0, 0];
      const b = state.vector.vectors.v2 || [0, 0, 0];
      state.tools.unitResult = `v1-v2 = (${formatNumber(a[0] - b[0])}, ${formatNumber(a[1] - b[1])}, ${formatNumber(a[2] - b[2])})`;
    } else if (action === "vector-norm1") {
      const a = state.vector.vectors.v1 || [0, 0, 0];
      state.tools.unitResult = `|v1| = ${formatNumber(Math.hypot(a[0], a[1], a[2]))}`;
    } else if (action === "vector-norm2") {
      const a = state.vector.vectors.v2 || [0, 0, 0];
      state.tools.unitResult = `|v2| = ${formatNumber(Math.hypot(a[0], a[1], a[2]))}`;
    } else if (action === "vector-angle") {
      const a = state.vector.vectors.v1 || [1, 0, 0];
      const b = state.vector.vectors.v2 || [0, 1, 0];
      const dot = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
      const normA = Math.hypot(a[0], a[1], a[2]);
      const normB = Math.hypot(b[0], b[1], b[2]);
      const cosAngle = dot / (normA * normB);
      const angleRad = Math.acos(Math.max(-1, Math.min(1, cosAngle)));
      const angleDeg = fromRadians(angleRad);
      state.tools.unitResult = `θ = ${formatNumber(angleDeg)}° (弧度: ${formatNumber(angleRad)})`;
    } else if (action === "calc-second-derivative") {
      const x0 = Number(state.calculus.point);
      const h = 1e-4;
      const f1 = evaluateScopedExpression(state.calculus.expression, { x: x0 + h });
      const f2 = evaluateScopedExpression(state.calculus.expression, { x: x0 });
      const f3 = evaluateScopedExpression(state.calculus.expression, { x: x0 - h });
      const result = (f1 - 2 * f2 + f3) / (h * h);
      state.tools.unitResult = `f''(${formatNumber(x0)})≈${formatNumber(result)}`;
      state.calculus.derivativeResult = state.tools.unitResult;
      persistCalculus();
    } else if (action === "solve-proportion") {
      const p = state.equation.proportion;
      const a = Number(p.a), b = Number(p.b), c = Number(p.c), dVal = p.d;
      if (dVal === "?" && a && b && c) {
        const result = (b * c) / a;
        state.equation.proportion.d = formatNumber(result);
        state.tools.unitResult = `d = ${formatNumber(result)}`;
      } else if (a && b && c && Number(dVal)) {
        const result = (b * c) / a;
        state.tools.unitResult = `d = ${formatNumber(result)} (验证: ${a}/${b} = ${c}/${Number(dVal)}，比值=${formatNumber(a/b)})`;
      } else {
        state.tools.unitResult = "比例式: 填写 a/b = c/d 中的三个值，未知项填 ?";
      }
      state.equation.proportionResult = state.tools.unitResult;
      persistEquation();
    } else if (action === "calc-derivative") {
      const x0 = Number(state.calculus.point);
      const h = 1e-5;
      const f1 = evaluateScopedExpression(state.calculus.expression, { x: x0 + h });
      const f2 = evaluateScopedExpression(state.calculus.expression, { x: x0 - h });
      const result = (f1 - f2) / (2 * h);
      state.tools.unitResult = `f'(${formatNumber(x0)})≈${formatNumber(result)}`;
      state.calculus.derivativeResult = state.tools.unitResult;
      persistCalculus();
    } else if (action === "calc-integral") {
      const a = Number(state.calculus.lower);
      const b = Number(state.calculus.upper);
      const n = 200;
      const h = (b - a) / n;
      let sum = 0;
      for (let i = 0; i <= n; i += 1) {
        const x = a + i * h;
        const y = evaluateScopedExpression(state.calculus.expression, { x });
        sum += (i === 0 || i === n ? 1 : (i % 2 === 0 ? 2 : 4)) * y;
      }
      const integral = (h / 3) * sum;
      state.tools.unitResult = `∫≈${formatNumber(integral)}`;
      state.calculus.integralResult = state.tools.unitResult;
      persistCalculus();
    } else if (action === "calc-sigma") {
      let total = 0;
      const lo = clampInt(state.calculus.sigmaLower, -100000, 100000, 1);
      const hi = clampInt(state.calculus.sigmaUpper, -100000, 100000, 10);
      for (let n = lo; n <= hi; n += 1) total += evaluateScopedExpression(state.calculus.sigmaExpression, { n });
      state.tools.unitResult = `Σ=${formatNumber(total)}`;
      state.calculus.sigmaResult = state.tools.unitResult;
      persistCalculus();
    } else if (action.startsWith("logic-")) {
      const a = parseInt(state.logic.a || "0", 10);
      const b = parseInt(state.logic.b || "0", 10);
      const base = state.logic.base || "DEC";
      const op = action.replace("logic-", "");
      let val;
      let label;
      switch (op) {
        case "and": val = a & b; label = "AND"; break;
        case "or": val = a | b; label = "OR"; break;
        case "xor": val = a ^ b; label = "XOR"; break;
        case "not": val = ~a; label = "NOT(A)"; break;
        case "xnor": val = ~(a ^ b); label = "XNOR"; break;
        default: val = 0; label = "?";
      }
      state.tools.unitResult = `${label} = ${formatLogicValue(val, base)} (十进制: ${formatNumber(val)})`;
    } else if (action === "table") {
      state.table.rows = [];
      const start = Number(state.table.start);
      const end = Number(state.table.end);
      const step = Number(state.table.step || 1);
      for (let x = start; x <= end && state.table.rows.length < 100; x += step) {
        const fx = evaluateScopedExpression(state.table.fx, { x });
        const gx = evaluateScopedExpression(state.table.gx, { x });
        state.table.rows.push(`x=${formatNumber(x)}, f=${formatNumber(fx)}, g=${formatNumber(gx)}`);
      }
      state.tools.unitResult = state.table.rows.slice(0, 12).join("\n");
    } else if (action === "fraction") {
      state.tools.unitResult = convertFractionFormats(state.tools.fractionInput || "1/2");
    } else if (action === "dms") {
      state.tools.unitResult = convertDms(state.tools.dmsInput || "30°15'0\"");
    } else if (action === "unit") {
      state.tools.unitResult = convertUnitValue(state.tools.unitGroup, state.tools.unitFrom, state.tools.unitTo, Number(state.tools.unitInput || 0));
    } else if (action === "prime") {
      const num = Number(state.tools.primeInput || 360);
      if (!Number.isFinite(num) || num < 2 || num !== Math.floor(num)) {
        state.tools.unitResult = "请输入 ≥2 的整数";
      } else {
        const factors = primeFactorization(num);
        state.tools.unitResult = `${num} = ${factors.join(" × ")}`;
      }
    } else if (action === "eng") {
      const v = Number(state.tools.engInput || 1234567);
      if (!Number.isFinite(v)) {
        state.tools.unitResult = "无效输入";
      } else {
        state.tools.unitResult = formatEng(v);
      }
    } else if (action === "random") {
      const min = Number(state.tools.randMin || 0);
      const max = Number(state.tools.randMax || 1);
      state.tools.unitResult = `随机数: ${formatNumber(min + Math.random() * (max - min))}`;
    } else if (action === "random-int") {
      const min = Math.ceil(Number(state.tools.randMin || 1));
      const max = Math.floor(Number(state.tools.randMax || 100));
      const r = Math.floor(Math.random() * (max - min + 1)) + min;
      state.tools.unitResult = `整数随机: ${r}`;
    } else if (action === "polar") {
      const x = Number(state.tools.polarX || 3);
      const y = Number(state.tools.polarY || 4);
      const r = Math.hypot(x, y);
      const theta = fromRadians(Math.atan2(y, x));
      state.tools.unitResult = `极坐标: r=${formatNumber(r)}, θ=${formatNumber(theta)}°`;
    } else if (action === "cartesian") {
      const r = Number(state.tools.cartR || 5);
      const thetaRad = toRadians(Number(state.tools.cartTheta || 53.130102));
      const x = r * Math.cos(thetaRad);
      const y = r * Math.sin(thetaRad);
      state.tools.unitResult = `直角坐标: x=${formatNumber(x)}, y=${formatNumber(y)}`;
    } else if (action === "constant") {
      const key = state.tools.constantKey || "c";
      const val = NAMED_CONSTANTS[key];
      state.tools.unitResult = val !== undefined ? `${key} = ${val}` : "未知常数";
      state.tools.constantValue = state.tools.unitResult;
    }
  } catch (error) {
    state.tools.unitResult = error.message || "计算失败";
  }
  persistTools();
  refreshToolsWorkspace();
}


function setActiveAdvancedAction(action) {
  switch (state.mode) {
    case "equation":
      state.equation.activeAction = action;
      break;
    case "vector":
      state.vector.activeAction = action;
      break;
    case "calculus":
      state.calculus.activeAction = action;
      break;
    case "logic":
      state.logic.activeAction = action;
      break;
    case "table":
      state.table.activeAction = action;
      break;
    case "tools":
      state.tools.activeAction = action;
      break;
    default:
      break;
  }
}
function evaluateScopedExpression(expression, scope) {
  const previous = runtimeScope;
  runtimeScope = { ...(runtimeScope || {}), ...scope };
  try {
    return evaluateExpression(expression);
  } finally {
    runtimeScope = previous;
  }
}

function solveLinearSystem(rows) {
  const n = rows.length;
  const aug = rows.map((r) => r.slice());
  for (let c = 0; c < n; c += 1) {
    let pivot = c;
    for (let r = c + 1; r < n; r += 1) if (Math.abs(aug[r][c]) > Math.abs(aug[pivot][c])) pivot = r;
    [aug[c], aug[pivot]] = [aug[pivot], aug[c]];
    if (Math.abs(aug[c][c]) < 1e-12) throw new Error("无唯一解");
    const div = aug[c][c];
    for (let j = c; j <= n; j += 1) aug[c][j] /= div;
    for (let r = 0; r < n; r += 1) {
      if (r === c) continue;
      const factor = aug[r][c];
      for (let j = c; j <= n; j += 1) aug[r][j] -= factor * aug[c][j];
    }
  }
  return aug.map((r) => r[n]);
}

function solvePolynomialRealOnly(coeffs) {
  const roots = [];
  for (let x = -100; x <= 100; x += 0.5) {
    const y1 = polyEval(coeffs, x);
    const y2 = polyEval(coeffs, x + 0.5);
    if (y1 === 0) roots.push(formatNumber(x));
    if (y1 * y2 < 0) roots.push(formatNumber(bisectRoot(coeffs, x, x + 0.5)));
  }
  return Array.from(new Set(roots)).slice(0, 8);
}

function polyEval(coeffs, x) {
  return coeffs.reduce((acc, c) => acc * x + c, 0);
}

function bisectRoot(coeffs, a, b) {
  let l = a;
  let r = b;
  for (let i = 0; i < 80; i += 1) {
    const m = (l + r) / 2;
    const fm = polyEval(coeffs, m);
    if (Math.abs(fm) < 1e-10) return m;
    if (polyEval(coeffs, l) * fm <= 0) r = m;
    else l = m;
  }
  return (l + r) / 2;
}

function solveByNewtonSimple(expr, x0) {
  let x = x0;
  for (let i = 0; i < 50; i += 1) {
    const fx = evaluateScopedExpression(expr, { x });
    const h = 1e-6;
    const d = (evaluateScopedExpression(expr, { x: x + h }) - evaluateScopedExpression(expr, { x: x - h })) / (2 * h);
    if (!Number.isFinite(d) || Math.abs(d) < 1e-12) break;
    const nx = x - fx / d;
    if (Math.abs(nx - x) < 1e-12) return nx;
    x = nx;
  }
  return x;
}

function convertFractionFormats(input) {
  const text = String(input || "").trim();
  const mixed = text.match(/^([+-]?\d+)\s+(\d+)\/(\d+)$/);
  if (mixed) {
    const whole = Number(mixed[1]);
    const n = Number(mixed[2]);
    const d = Number(mixed[3]);
    const improper = `${whole < 0 ? "-" : ""}${Math.abs(whole) * d + n}/${d}`;
    return `带分数=${text}\n假分数=${improper}`;
  }
  const frac = text.match(/^([+-]?\d+)\/([+-]?\d+)$/);
  if (!frac) return "分数格式错误";
  const n = Number(frac[1]);
  const d = Number(frac[2]);
  if (d === 0) return "分母不能为0";
  const g = gcdInt(Math.trunc(Math.abs(n)), Math.trunc(Math.abs(d)));
  const sn = Math.trunc(n / g);
  const sd = Math.trunc(d / g);
  const whole = Math.trunc(sn / sd);
  const rem = Math.abs(sn % sd);
  const mixedText = rem ? `${whole} ${rem}/${Math.abs(sd)}` : `${whole}`;
  return `最简=${sn}/${sd}\n带分数=${mixedText}`;
}

function gcdInt(a, b) {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const t = x % y;
    x = y;
    y = t;
  }
  return x || 1;
}

function convertDms(input) {
  const t = String(input || "").trim();
  const match = t.match(/^([+-]?\d+)(?:°|\s)\s*(\d+)?(?:'|\s)?\s*(\d+(?:\.\d+)?)?(?:"|)?$/);
  if (match) {
    const d = Number(match[1] || 0);
    const m = Number(match[2] || 0);
    const s = Number(match[3] || 0);
    const sign = d < 0 ? -1 : 1;
    const deg = sign * (Math.abs(d) + m / 60 + s / 3600);
    return `十进制度=${formatNumber(deg)}`;
  }
  const value = Number(t);
  if (!Number.isFinite(value)) return "DMS格式无效";
  const sign = value < 0 ? -1 : 1;
  const abs = Math.abs(value);
  const d = Math.floor(abs);
  const mFloat = (abs - d) * 60;
  const m = Math.floor(mFloat);
  const s = (mFloat - m) * 60;
  return `${sign < 0 ? "-" : ""}${d}°${m}'${formatNumber(s)}"`;
}

function convertUnitValue(group, from, to, value) {
  if (!Number.isFinite(value)) return "输入无效";
  const units = UNIT_GROUPS[group];
  if (!units || !(from in units) || !(to in units)) return "单位无效";
  if (group === "temperature") {
    return formatNumber(convertTemperature(value, from, to));
  }
  const base = value * units[from];
  return formatNumber(base / units[to]);
}

function convertTemperature(value, from, to) {
  let k = value;
  if (from === "C") k = value + 273.15;
  if (from === "F") k = ((value - 32) * 5) / 9 + 273.15;
  if (from === "K") k = value;
  if (to === "K") return k;
  if (to === "C") return k - 273.15;
  return ((k - 273.15) * 9) / 5 + 32;
}

function buildModeWorkspace() {
  if (state.mode === "standard") {
    return `
      <div class="mode-banner">
        <h3 class="mode-title">标准模式</h3>
        <p class="mode-copy">标准表达式计算。高级功能请切换其他模式。</p>
        <div class="mode-badges">
          <span class="mode-badge">角度：${angleModeLabel(state.angleMode)}</span>
          <span class="mode-badge">历史：${state.history.length} 条</span>
          <span class="mode-badge">内存：${formatNumber(state.memory)}</span>
        </div>
      </div>
    `;
  }
  if (state.mode === "matrix") return renderMatrixWorkspaceV2();
  if (state.mode === "stats") return renderStatsWorkspaceV2();
  if (state.mode === "complex") return renderComplexWorkspaceV2();
  if (state.mode === "base") return renderBaseWorkspaceV2();
  if (state.mode === "equation" || state.mode === "vector" || state.mode === "calculus" || state.mode === "logic" || state.mode === "table" || state.mode === "tools") {
    return renderAdvancedWorkspace();
  }
  return `<div class="mode-banner"><h3 class="mode-title">工具区</h3></div>`;
}

function renderMatrixWorkspaceV2() {
  return `
    <div class="layout-stack">
      <section class="module-card">
        <h3>矩阵（2~4 阶，A/B/C/D）</h3>
        <div class="mode-action-row">
          <label class="field-card"><span class="field-label">阶数</span><select id="matrixSizeSelect" class="base-select">${[2, 3, 4].map((n) => `<option value="${n}" ${state.matrix.size === n ? "selected" : ""}>${n}×${n}</option>`).join("")}</select></label>
          <label class="field-card"><span class="field-label">编辑矩阵</span><select id="matrixActive" class="base-select">${["a", "b", "c", "d"].map((k) => `<option value="${k}" ${state.matrix.activeMatrix === k ? "selected" : ""}>${k.toUpperCase()}</option>`).join("")}</select></label>
          <label class="field-card"><span class="field-label">左矩阵</span><select id="matrixLeft" class="base-select">${["a", "b", "c", "d"].map((k) => `<option value="${k}" ${state.matrix.leftMatrix === k ? "selected" : ""}>${k.toUpperCase()}</option>`).join("")}</select></label>
          <label class="field-card"><span class="field-label">右矩阵</span><select id="matrixRight" class="base-select">${["a", "b", "c", "d"].map((k) => `<option value="${k}" ${state.matrix.rightMatrix === k ? "selected" : ""}>${k.toUpperCase()}</option>`).join("")}</select></label>
          <label class="field-card"><span class="field-label">标量</span><input id="matrixScalar" class="stats-input" type="number" step="any" value="${escapeAttr(String(state.matrix.scalar))}" /></label>
        </div>
        <div class="matrix-grid" style="--matrix-size:${state.matrix.size}">${renderMatrixInputsV2(state.matrix.activeMatrix)}</div>
        <div class="button-row">
          <button class="mode-action is-active" data-matrix-op="add" type="button">L+R</button>
          <button class="mode-action" data-matrix-op="sub" type="button">L-R</button>
          <button class="mode-action" data-matrix-op="mul" type="button">L×R</button>
          <button class="mode-action" data-matrix-op="scale" type="button">k×L</button>
          <button class="mode-action" data-matrix-op="transpose" type="button">Lᵀ</button>
          <button class="mode-action" data-matrix-op="det" type="button">det(L)</button>
          <button class="mode-action" data-matrix-op="inverse" type="button">L⁻¹</button>
          <button class="mode-action" data-matrix-op="ref" type="button">REF</button>
          <button class="mode-action" data-matrix-op="rref" type="button">RREF</button>
          <button class="mode-action" data-matrix-op="identity" type="button">I(n)</button>
        </div>
        <p class="matrix-status">${escapeHtml(state.matrix.operation || "请选择运算")}</p>
        <pre id="matrixResult" class="result-pre">${escapeHtml(state.matrix.result || "尚未计算")}</pre>
      </section>
    </div>
  `;
}

function renderAdvancedWorkspace() {
  const tabs = [
    { id: "equation", label: "方程" },
    { id: "vector", label: "向量" },
    { id: "calculus", label: "微积分" },
    { id: "logic", label: "逻辑" },
    { id: "table", label: "表格" },
    { id: "tools", label: "工具" },
  ];
  const activeTab = state.advSubMode || "equation";

  return `
    <div class="layout-stack">
      <div class="adv-tabs">
        ${tabs.map((t) => `<button class="adv-tab ${activeTab === t.id ? "is-active" : ""}" type="button" data-adv-tab="${t.id}">${t.label}</button>`).join("")}
      </div>
      <div class="adv-panel">${renderAdvancedPanel(activeTab)}</div>
    </div>
  `;
}

function renderAdvancedPanel(mode) {
  switch (mode) {
    case "equation": return renderEquationPanel();
    case "vector": return renderVectorPanel();
    case "calculus": return renderCalculusPanel();
    case "logic": return renderLogicPanel();
    case "table": return renderTablePanel();
    case "tools": return renderToolsPanel();
    default: return "";
  }
}

function renderEquationPanel() {
  return `
    <section class="module-card">
      <h3>方程求解</h3>
      <div class="button-row">
        <button class="mode-action is-active" type="button" data-adv-action="solve-linear">线性方程组</button>
        <button class="mode-action" type="button" data-adv-action="solve-poly">2~4次方程</button>
        <button class="mode-action" type="button" data-adv-action="solve-newton">SOLVE</button>
        <button class="mode-action" type="button" data-adv-action="solve-ineq">不等式</button>
        <button class="mode-action" type="button" data-adv-action="solve-proportion">比例式</button>
      </div>
      <div class="summary-grid">
        <label class="field-card"><span class="field-label">线性方程元数</span><select id="linearSize" class="base-select">${[2, 3, 4].map((n) => `<option value="${n}" ${state.equation.linearSize === n ? "selected" : ""}>${n}</option>`).join("")}</select></label>
        <label class="field-card"><span class="field-label">多项式次数</span><select id="polyDegree" class="base-select">${[2, 3, 4].map((n) => `<option value="${n}" ${state.equation.polyDegree === n ? "selected" : ""}>${n}</option>`).join("")}</select></label>
        <label class="field-card"><span class="field-label">SOLVE f(x)</span><input id="solveExpr" class="stats-input" type="text" value="${escapeAttr(state.equation.solveExpression)}" /></label>
        <label class="field-card"><span class="field-label">SOLVE 初值</span><input id="solveInitial" class="stats-input" type="number" step="any" value="${escapeAttr(state.equation.solveInitial)}" /></label>
        <label class="field-card"><span class="field-label">比例 a</span><input id="propA" class="stats-input" type="text" value="${escapeAttr(state.equation.proportion.a)}" /></label>
        <label class="field-card"><span class="field-label">比例 b</span><input id="propB" class="stats-input" type="text" value="${escapeAttr(state.equation.proportion.b)}" /></label>
        <label class="field-card"><span class="field-label">比例 c</span><input id="propC" class="stats-input" type="text" value="${escapeAttr(state.equation.proportion.c)}" /></label>
        <label class="field-card"><span class="field-label">比例 d (未知填?)</span><input id="propD" class="stats-input" type="text" value="${escapeAttr(state.equation.proportion.d)}" /></label>
        <label class="field-card"><span class="field-label">不等号</span><select id="ineqSign" class="base-select">${[">=", ">", "<=", "<"].map((s) => `<option value="${s}" ${state.equation.inequalitySign === s ? "selected" : ""}>${s}</option>`).join("")}</select></label>
      </div>
      <pre id="advancedResult" class="result-pre">${escapeHtml(state.tools.unitResult || state.equation.linearResult || state.equation.polyResult || "点击按钮执行对应功能")}</pre>
    </section>
  `;
}

function renderVectorPanel() {
  return `
    <section class="module-card">
      <h3>向量运算 (3维)</h3>
      <div class="summary-grid">
        <label class="field-card"><span class="field-label">v1.x</span><input id="v1x" class="stats-input" type="number" step="any" value="${escapeAttr(String(state.vector.vectors.v1[0]))}" /></label>
        <label class="field-card"><span class="field-label">v1.y</span><input id="v1y" class="stats-input" type="number" step="any" value="${escapeAttr(String(state.vector.vectors.v1[1]))}" /></label>
        <label class="field-card"><span class="field-label">v1.z</span><input id="v1z" class="stats-input" type="number" step="any" value="${escapeAttr(String(state.vector.vectors.v1[2]))}" /></label>
        <label class="field-card"><span class="field-label">v2.x</span><input id="v2x" class="stats-input" type="number" step="any" value="${escapeAttr(String(state.vector.vectors.v2[0]))}" /></label>
        <label class="field-card"><span class="field-label">v2.y</span><input id="v2y" class="stats-input" type="number" step="any" value="${escapeAttr(String(state.vector.vectors.v2[1]))}" /></label>
        <label class="field-card"><span class="field-label">v2.z</span><input id="v2z" class="stats-input" type="number" step="any" value="${escapeAttr(String(state.vector.vectors.v2[2]))}" /></label>
      </div>
      <div class="button-row">
        <button class="mode-action is-active" type="button" data-adv-action="vector-dot">点积</button>
        <button class="mode-action" type="button" data-adv-action="vector-cross">叉积</button>
        <button class="mode-action" type="button" data-adv-action="vector-add">向量加</button>
        <button class="mode-action" type="button" data-adv-action="vector-sub">向量减</button>
        <button class="mode-action" type="button" data-adv-action="vector-norm1">|v1|</button>
        <button class="mode-action" type="button" data-adv-action="vector-norm2">|v2|</button>
        <button class="mode-action" type="button" data-adv-action="vector-angle">夹角</button>
      </div>
      <pre id="advancedResult" class="result-pre">${escapeHtml(state.tools.unitResult || "")}</pre>
    </section>
  `;
}

function renderCalculusPanel() {
  return `
    <section class="module-card">
      <h3>微积分与求和</h3>
      <div class="button-row">
        <button class="mode-action is-active" type="button" data-adv-action="calc-derivative">一阶导数</button>
        <button class="mode-action" type="button" data-adv-action="calc-second-derivative">二阶导数</button>
        <button class="mode-action" type="button" data-adv-action="calc-integral">定积分</button>
        <button class="mode-action" type="button" data-adv-action="calc-sigma">Σ求和</button>
      </div>
      <div class="summary-grid">
        <label class="field-card"><span class="field-label">f(x) 表达式</span><input id="diffExpr" class="stats-input" type="text" value="${escapeAttr(state.calculus.expression)}" /></label>
        <label class="field-card"><span class="field-label">求导点 x₀</span><input id="diffPoint" class="stats-input" type="number" step="any" value="${escapeAttr(state.calculus.point)}" /></label>
        <label class="field-card"><span class="field-label">积分下限</span><input id="intLower" class="stats-input" type="number" step="any" value="${escapeAttr(state.calculus.lower)}" /></label>
        <label class="field-card"><span class="field-label">积分上限</span><input id="intUpper" class="stats-input" type="number" step="any" value="${escapeAttr(state.calculus.upper)}" /></label>
        <label class="field-card"><span class="field-label">Σ 通项</span><input id="sigmaExpr" class="stats-input" type="text" value="${escapeAttr(state.calculus.sigmaExpression)}" /></label>
        <label class="field-card"><span class="field-label">Σ 下限</span><input id="sigmaLower" class="stats-input" type="number" step="1" value="${escapeAttr(state.calculus.sigmaLower)}" /></label>
        <label class="field-card"><span class="field-label">Σ 上限</span><input id="sigmaUpper" class="stats-input" type="number" step="1" value="${escapeAttr(state.calculus.sigmaUpper)}" /></label>
      </div>
      <pre id="advancedResult" class="result-pre">${escapeHtml(state.tools.unitResult || "")}</pre>
    </section>
  `;
}

function renderLogicPanel() {
  const a = parseInt(state.logic.a || "0", 10);
  const b = parseInt(state.logic.b || "0", 10);
  const base = state.logic.base || "DEC";
  const results = {
    and: a & b,
    or: a | b,
    xor: a ^ b,
    notA: ~a,
    xnor: ~(a ^ b),
  };
  return `
    <section class="module-card">
      <h3>逻辑运算</h3>
      <div class="summary-grid">
        <label class="field-card"><span class="field-label">A (十进制)</span><input id="logicA" class="stats-input" type="number" step="1" value="${escapeAttr(state.logic.a)}" /></label>
        <label class="field-card"><span class="field-label">B (十进制)</span><input id="logicB" class="stats-input" type="number" step="1" value="${escapeAttr(state.logic.b)}" /></label>
        <label class="field-card"><span class="field-label">显示进制</span><select id="logicBase" class="base-select"><option value="DEC" ${base==="DEC"?"selected":""}>十进制</option><option value="HEX" ${base==="HEX"?"selected":""}>十六进制</option><option value="BIN" ${base==="BIN"?"selected":""}>二进制</option><option value="OCT" ${base==="OCT"?"selected":""}>八进制</option></select></label>
      </div>
      <div class="button-row">
        <button class="mode-action is-active" type="button" data-adv-action="logic-and">AND</button>
        <button class="mode-action" type="button" data-adv-action="logic-or">OR</button>
        <button class="mode-action" type="button" data-adv-action="logic-xor">XOR</button>
        <button class="mode-action" type="button" data-adv-action="logic-not">NOT(A)</button>
        <button class="mode-action" type="button" data-adv-action="logic-xnor">XNOR</button>
      </div>
      <div class="summary-grid" style="margin-top:10px">
        <div class="summary-card"><span class="summary-label">A</span><strong>${formatLogicValue(a, base)}</strong></div>
        <div class="summary-card"><span class="summary-label">B</span><strong>${formatLogicValue(b, base)}</strong></div>
        <div class="summary-card"><span class="summary-label">AND</span><strong>${formatLogicValue(results.and, base)}</strong></div>
        <div class="summary-card"><span class="summary-label">OR</span><strong>${formatLogicValue(results.or, base)}</strong></div>
        <div class="summary-card"><span class="summary-label">XOR</span><strong>${formatLogicValue(results.xor, base)}</strong></div>
        <div class="summary-card"><span class="summary-label">NOT(A)</span><strong>${formatLogicValue(results.notA, base)}</strong></div>
        <div class="summary-card"><span class="summary-label">XNOR</span><strong>${formatLogicValue(results.xnor, base)}</strong></div>
      </div>
      <pre id="advancedResult" class="result-pre">${escapeHtml(state.tools.unitResult || "点击按钮查看运算结果")}</pre>
    </section>
  `;
}

function formatLogicValue(val, base) {
  const n = val >>> 0;
  switch (base) {
    case "HEX": return formatBaseNumber(n, 16);
    case "BIN": return formatBaseNumber(n, 2);
    case "OCT": return formatBaseNumber(n, 8);
    default: return formatNumber(val);
  }
}

function renderTablePanel() {
  return `
    <section class="module-card">
      <h3>函数表格</h3>
      <div class="summary-grid">
        <label class="field-card"><span class="field-label">f(x)</span><input id="tableFx" class="stats-input" type="text" value="${escapeAttr(state.table.fx)}" /></label>
        <label class="field-card"><span class="field-label">g(x) (可选)</span><input id="tableGx" class="stats-input" type="text" value="${escapeAttr(state.table.gx)}" /></label>
        <label class="field-card"><span class="field-label">x 起始</span><input id="tableStart" class="stats-input" type="number" step="any" value="${escapeAttr(state.table.start)}" /></label>
        <label class="field-card"><span class="field-label">x 结束</span><input id="tableEnd" class="stats-input" type="number" step="any" value="${escapeAttr(state.table.end)}" /></label>
        <label class="field-card"><span class="field-label">步长</span><input id="tableStep" class="stats-input" type="number" step="any" value="${escapeAttr(state.table.step)}" /></label>
      </div>
      <div class="button-row">
        <button class="mode-action is-active" type="button" data-adv-action="table">生成表格</button>
      </div>
      <pre id="advancedResult" class="result-pre">${escapeHtml(state.tools.unitResult || "")}</pre>
    </section>
  `;
}

function renderToolsPanel() {
  return `
    <section class="module-card">
      <h3>分数 / DMS / 坐标 / 素因数 / ENG / 随机数 / 常数 / 单位</h3>
      <div class="button-row" style="flex-wrap:wrap">
        <button class="mode-action is-active" type="button" data-adv-action="fraction">分数化简</button>
        <button class="mode-action" type="button" data-adv-action="dms">DMS转换</button>
        <button class="mode-action" type="button" data-adv-action="polar">极坐标</button>
        <button class="mode-action" type="button" data-adv-action="cartesian">直角坐标</button>
        <button class="mode-action" type="button" data-adv-action="prime">素因数分解</button>
        <button class="mode-action" type="button" data-adv-action="eng">ENG符号</button>
        <button class="mode-action" type="button" data-adv-action="random">随机数</button>
        <button class="mode-action" type="button" data-adv-action="random-int">整数随机</button>
        <button class="mode-action" type="button" data-adv-action="constant">科学常数</button>
        <button class="mode-action" type="button" data-adv-action="unit">单位换算</button>
      </div>
      <div class="summary-grid">
        <label class="field-card"><span class="field-label">分数 (a/b 或 a b/c)</span><input id="fractionInput" class="stats-input" type="text" value="${escapeAttr(state.tools.fractionInput)}" /></label>
        <label class="field-card"><span class="field-label">DMS (如 12°30'0\")</span><input id="dmsInput" class="stats-input" type="text" value="${escapeAttr(state.tools.dmsInput)}" /></label>
        <label class="field-card"><span class="field-label">极坐标 x</span><input id="polarX" class="stats-input" type="number" step="any" value="${escapeAttr(state.tools.polarX)}" /></label>
        <label class="field-card"><span class="field-label">极坐标 y</span><input id="polarY" class="stats-input" type="number" step="any" value="${escapeAttr(state.tools.polarY)}" /></label>
        <label class="field-card"><span class="field-label">直角 r</span><input id="cartR" class="stats-input" type="number" step="any" value="${escapeAttr(state.tools.cartR)}" /></label>
        <label class="field-card"><span class="field-label">直角 θ°</span><input id="cartTheta" class="stats-input" type="number" step="any" value="${escapeAttr(state.tools.cartTheta)}" /></label>
        <label class="field-card"><span class="field-label">素因数 数字</span><input id="primeInput" class="stats-input" type="number" step="1" value="${escapeAttr(state.tools.primeInput)}" /></label>
        <label class="field-card"><span class="field-label">ENG 数值</span><input id="engInput" class="stats-input" type="number" step="any" value="${escapeAttr(state.tools.engInput)}" /></label>
        <label class="field-card"><span class="field-label">随机最小</span><input id="randMin" class="stats-input" type="number" step="any" value="${escapeAttr(state.tools.randMin)}" /></label>
        <label class="field-card"><span class="field-label">随机最大</span><input id="randMax" class="stats-input" type="number" step="any" value="${escapeAttr(state.tools.randMax)}" /></label>
        <label class="field-card"><span class="field-label">常数</span><select id="constKey" class="base-select">${Object.keys(NAMED_CONSTANTS).map((k) => `<option value="${k}" ${state.tools.constantKey === k ? "selected" : ""}>${k}</option>`).join("")}</select></label>
        <label class="field-card"><span class="field-label">单位换算组</span><select id="unitGroup" class="base-select">${Object.keys(UNIT_GROUPS).map((g) => `<option value="${g}" ${state.tools.unitGroup === g ? "selected" : ""}>${g}</option>`).join("")}</select></label>
        <label class="field-card"><span class="field-label">从</span><input id="unitFrom" class="stats-input" type="text" value="${escapeAttr(state.tools.unitFrom)}" /></label>
        <label class="field-card"><span class="field-label">到</span><input id="unitTo" class="stats-input" type="text" value="${escapeAttr(state.tools.unitTo)}" /></label>
        <label class="field-card"><span class="field-label">单位值</span><input id="unitInput" class="stats-input" type="number" step="any" value="${escapeAttr(state.tools.unitInput)}" /></label>
      </div>
      <pre id="advancedResult" class="result-pre">${escapeHtml(state.tools.unitResult || "")}</pre>
    </section>
  `;
}

function renderStatsWorkspaceV2() {
  return `
    <div class="layout-stack">
      <section class="module-card">
        <h3>统计（单变量 + 二元回归 + 分布）</h3>
        <label class="field-card"><span class="field-label">单变量数据</span><input id="statsInput" class="stats-input" type="text" value="${escapeAttr(state.stats.input)}" /></label>
        <div class="button-row">
          <button class="stats-pill is-active" type="button" data-stats-action="add">加入</button>
          <button class="stats-pill" type="button" data-stats-action="clear">清空</button>
          <button class="stats-pill" type="button" data-stats-action="fill-demo">示例</button>
        </div>
        <ul id="statsList" class="stats-list">${renderStatsList()}</ul>
        <div class="summary-grid">${renderStatsSummary()}</div>
      </section>
    </div>
  `;
}

function renderComplexWorkspaceV2() {
  return buildModeWorkspace.__proto__ ? "" : `
    <div class="layout-stack">
      <section class="module-card">
        <h3>复数扩展</h3>
        <p class="mode-copy">支持复数四则、幂、根、共轭、模与辐角，含极坐标互转。</p>
      </section>
    </div>
  `;
}

function renderBaseWorkspaceV2() {
  return `
    <div class="base-layout">
      <section class="field-card"><span class="field-label">输入数值</span><input id="baseInput" class="base-input" type="text" value="${escapeAttr(state.base.input)}" /></section>
      <div class="base-grid">
        <section class="field-card"><span class="field-label">源进制</span><select id="baseSource" class="base-select">${baseOptionMarkup(state.base.source)}</select></section>
        <section class="field-card"><span class="field-label">目标进制</span><select id="baseTarget" class="base-select">${baseOptionMarkup(state.base.target)}</select></section>
      </div>
      <div class="base-btn-row"><button class="base-btn is-active" type="button" data-mode-action="convert-base">转换</button></div>
      <pre id="baseResult" class="result-pre">${escapeHtml(state.base.result || "尚未转换")}</pre>
      <div class="base-output-grid">${renderBaseSummary()}</div>
    </div>
  `;
}

function renderMatrixInputsV2(which) {
  const matrix = state.matrix.matrices[which] || createMatrix(state.matrix.size);
  let markup = "";
  for (let row = 0; row < state.matrix.size; row += 1) {
    for (let col = 0; col < state.matrix.size; col += 1) {
      const value = matrix[row][col] ?? 0;
      markup += `<label class="field-card"><span class="matrix-cell-label">${which.toUpperCase()}[${row + 1},${col + 1}]</span><input class="matrix-input" type="number" step="any" value="${escapeAttr(String(value))}" data-matrix-input="${which}" data-row="${row}" data-col="${col}" /></label>`;
    }
  }
  return markup;
}

function handleModeWorkspaceClick(event) {
  const target = event.target;
  const matrixOp = target.closest("[data-matrix-op]");
  if (matrixOp) return applyMatrixOperation(matrixOp.dataset.matrixOp);
  const statsAction = target.closest("[data-stats-action]");
  if (statsAction) return handleStatsAction(statsAction.dataset.statsAction, statsAction.dataset.index);
  const complexOp = target.closest("[data-complex-op]");
  if (complexOp) return applyComplexOperation(complexOp.dataset.complexOp);
  const baseConvert = target.closest('[data-mode-action="convert-base"]');
  if (baseConvert) return convertAndPersistBase();
  const advAction = target.closest("[data-adv-action]");
  if (advAction) return handleAdvancedAction(advAction.dataset.advAction);
}

function handleModeWorkspaceInput(event) {
  const target = event.target;
  if (target.id === "statsInput") state.stats.input = target.value;
  if (target.id === "baseInput") {
    state.base.input = target.value;
    persistBase();
    return;
  }
  if (target.id === "solveExpr") state.equation.solveExpression = target.value;
  if (target.id === "solveInitial") state.equation.solveInitial = target.value;
  if (target.id === "diffExpr") state.calculus.expression = target.value;
  if (target.id === "diffPoint") state.calculus.point = target.value;
  if (target.id === "intLower") state.calculus.lower = target.value;
  if (target.id === "intUpper") state.calculus.upper = target.value;
  if (target.id === "sigmaExpr") state.calculus.sigmaExpression = target.value;
  if (target.id === "sigmaLower") state.calculus.sigmaLower = target.value;
  if (target.id === "sigmaUpper") state.calculus.sigmaUpper = target.value;

  const matrixInput = target.closest("[data-matrix-input]");
  if (matrixInput) updateMatrixField(matrixInput);

  persistEquation();
  persistCalculus();
  persistStats();
}

function handleModeWorkspaceChange(event) {
  const target = event.target;
  if (target.id === "matrixSizeSelect") {
    const nextSize = Number(target.value);
    if ([2, 3, 4].includes(nextSize)) {
      state.matrix.size = nextSize;
      for (const key of ["a", "b", "c", "d"]) state.matrix.matrices[key] = resizeMatrix(state.matrix.matrices[key], nextSize);
      persistMatrix();
      renderModeWorkspace();
    }
    return;
  }
  if (target.id === "matrixActive") state.matrix.activeMatrix = target.value;
  if (target.id === "matrixLeft") state.matrix.leftMatrix = target.value;
  if (target.id === "matrixRight") state.matrix.rightMatrix = target.value;
  if (target.id === "matrixScalar") state.matrix.scalar = Number(target.value) || 0;
  if (target.id === "linearSize") {
    const n = [2, 3, 4].includes(Number(target.value)) ? Number(target.value) : 2;
    state.equation.linearSize = n;
    state.equation.linearRows = defaultLinearRows(n);
  }
  if (target.id === "polyDegree") state.equation.polyDegree = [2, 3, 4].includes(Number(target.value)) ? Number(target.value) : 2;
  if (target.id === "baseSource") state.base.source = normalizeBaseName(target.value) ?? state.base.source;
  if (target.id === "baseTarget") state.base.target = normalizeBaseName(target.value) ?? state.base.target;
  persistMatrix();
  persistEquation();
  persistBase();
}

function updateMatrixField(input) {
  const matrixName = input.dataset.matrixInput;
  const row = Number(input.dataset.row);
  const col = Number(input.dataset.col);
  const numericValue = Number.parseFloat(input.value);
  if (!state.matrix.matrices[matrixName]) return;
  state.matrix.matrices[matrixName][row][col] = Number.isFinite(numericValue) ? numericValue : 0;
  persistMatrix();
}

function applyMatrixOperation(operation) {
  const L = state.matrix.matrices[state.matrix.leftMatrix];
  const R = state.matrix.matrices[state.matrix.rightMatrix];
  let result;
  let label = "";
  try {
    switch (operation) {
      case "add": result = matrixAdd(L, R); label = "L + R"; break;
      case "sub": result = matrixSubtract(L, R); label = "L - R"; break;
      case "mul": result = matrixMultiply(L, R); label = "L × R"; break;
      case "scale": result = L.map((row) => row.map((v) => v * state.matrix.scalar)); label = "k × L"; break;
      case "transpose": result = transposeMatrix(L); label = "Lᵀ"; break;
      case "det": result = matrixDeterminant(L); label = "det(L)"; break;
      case "inverse": result = inverseMatrix(L); label = "L⁻¹"; break;
      case "ref": result = matrixRef(L); label = "REF(L)"; break;
      case "rref": result = matrixRref(L); label = "RREF(L)"; break;
      case "identity": result = identityMatrix(state.matrix.size); label = "I(n)"; break;
      default: return;
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

function matrixRef(matrix) {
  const m = matrix.map((row) => row.slice());
  const rows = m.length;
  const cols = m[0].length;
  let lead = 0;
  for (let r = 0; r < rows; r += 1) {
    if (lead >= cols) break;
    let i = r;
    while (Math.abs(m[i][lead]) < 1e-12) {
      i += 1;
      if (i === rows) {
        i = r;
        lead += 1;
        if (lead === cols) return m;
      }
    }
    [m[i], m[r]] = [m[r], m[i]];
    for (let j = r + 1; j < rows; j += 1) {
      const factor = m[j][lead] / m[r][lead];
      for (let k = lead; k < cols; k += 1) m[j][k] -= factor * m[r][k];
    }
    lead += 1;
  }
  return m;
}

function matrixRref(matrix) {
  const m = matrix.map((row) => row.slice());
  const rows = m.length;
  const cols = m[0].length;
  let lead = 0;
  for (let r = 0; r < rows; r += 1) {
    if (lead >= cols) break;
    let i = r;
    while (Math.abs(m[i][lead]) < 1e-12) {
      i += 1;
      if (i === rows) {
        i = r;
        lead += 1;
        if (lead === cols) return m;
      }
    }
    [m[i], m[r]] = [m[r], m[i]];
    const pivot = m[r][lead];
    for (let k = 0; k < cols; k += 1) m[r][k] /= pivot;
    for (let j = 0; j < rows; j += 1) {
      if (j === r) continue;
      const factor = m[j][lead];
      for (let k = 0; k < cols; k += 1) m[j][k] -= factor * m[r][k];
    }
    lead += 1;
  }
  return m;
}

function identityMatrix(size) {
  return Array.from({ length: size }, (_, r) => Array.from({ length: size }, (_, c) => (r === c ? 1 : 0)));
}

function hydrateEquation() {
  const stored = window.localStorage.getItem(STORAGE_KEYS.equation);
  if (!stored) return;
  try {
    const parsed = JSON.parse(stored);
    state.equation.linearSize = [2, 3, 4].includes(parsed.linearSize) ? parsed.linearSize : 2;
    state.equation.linearRows = normalizeLinearRows(parsed.linearRows, state.equation.linearSize);
    state.equation.linearResult = parsed.linearResult ?? "";
    state.equation.polyDegree = [2, 3, 4].includes(parsed.polyDegree) ? parsed.polyDegree : 2;
    state.equation.polyCoefficients = normalizeCoefficientArray(parsed.polyCoefficients, 5);
    state.equation.polyResult = parsed.polyResult ?? "";
    state.equation.solveExpression = typeof parsed.solveExpression === "string" ? parsed.solveExpression : state.equation.solveExpression;
    state.equation.solveInitial = typeof parsed.solveInitial === "string" ? parsed.solveInitial : state.equation.solveInitial;
    state.equation.solveResult = parsed.solveResult ?? "";
    state.equation.inequalityDegree = [2, 3, 4].includes(parsed.inequalityDegree) ? parsed.inequalityDegree : 2;
    state.equation.inequalityCoefficients = normalizeCoefficientArray(parsed.inequalityCoefficients, 5);
    state.equation.inequalitySign = [">", ">=", "<", "<="].includes(parsed.inequalitySign) ? parsed.inequalitySign : ">=";
    state.equation.inequalityResult = parsed.inequalityResult ?? "";
    state.equation.proportion = normalizeProportion(parsed.proportion);
    state.equation.proportionResult = parsed.proportionResult ?? "";
  } catch {
    // keep defaults
  }
}

function hydrateVector() {
  const stored = window.localStorage.getItem(STORAGE_KEYS.vector);
  if (!stored) return;
  try {
    const parsed = JSON.parse(stored);
    state.vector.left = normalizeVectorKey(parsed.left) ?? "v1";
    state.vector.right = normalizeVectorKey(parsed.right) ?? "v2";
    state.vector.scalar = Number.isFinite(Number(parsed.scalar)) ? Number(parsed.scalar) : 2;
    for (const key of ["v1", "v2", "v3", "v4"]) {
      state.vector.vectors[key] = normalizeVector(parsed.vectors?.[key]);
    }
    state.vector.result = parsed.result ?? "";
    state.vector.operation = parsed.operation ?? "v1 + v2";
  } catch {
    // keep defaults
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
    state.stats.pairedInput = typeof parsed.pairedInput === "string" ? parsed.pairedInput : "";
    state.stats.paired = Array.isArray(parsed.paired) ? parsed.paired.map(normalizePair).filter(Boolean) : [];
    state.stats.regressionType = normalizeRegressionType(parsed.regressionType) ?? "linear";
    state.stats.regressionResult = parsed.regressionResult ?? "";
    state.stats.distribution = { ...state.stats.distribution, ...(parsed.distribution || {}) };
    state.stats.distributionResult = parsed.distributionResult ?? "";
    state.stats.replay = Array.isArray(parsed.replay) ? parsed.replay.slice(0, 30) : [];
  } catch {
    state.stats.values = [];
  }
}

function hydrateCalculus() {
  const stored = window.localStorage.getItem(STORAGE_KEYS.calculus);
  if (!stored) return;
  try {
    const parsed = JSON.parse(stored);
    state.calculus = {
      ...state.calculus,
      ...parsed,
      order: parsed.order === 2 ? 2 : 1,
    };
  } catch {
    // keep defaults
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
    state.complex.polar = parsed.polar ? { r: String(parsed.polar.r ?? "1"), theta: String(parsed.polar.theta ?? "45") } : state.complex.polar;
    state.complex.powerN = typeof parsed.powerN === "string" ? parsed.powerN : state.complex.powerN;
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

function hydrateLogic() {
  const stored = window.localStorage.getItem(STORAGE_KEYS.logic);
  if (!stored) return;
  try {
    const parsed = JSON.parse(stored);
    state.logic.a = typeof parsed.a === "string" ? parsed.a : state.logic.a;
    state.logic.b = typeof parsed.b === "string" ? parsed.b : state.logic.b;
    state.logic.base = normalizeBaseName(parsed.base) ?? "DEC";
    state.logic.op = normalizeLogicOp(parsed.op) ?? "AND";
    state.logic.result = parsed.result ?? "";
  } catch {
    // keep defaults
  }
}

function hydrateTable() {
  const stored = window.localStorage.getItem(STORAGE_KEYS.table);
  if (!stored) return;
  try {
    const parsed = JSON.parse(stored);
    state.table.fx = typeof parsed.fx === "string" ? parsed.fx : state.table.fx;
    state.table.gx = typeof parsed.gx === "string" ? parsed.gx : state.table.gx;
    state.table.start = typeof parsed.start === "string" ? parsed.start : state.table.start;
    state.table.end = typeof parsed.end === "string" ? parsed.end : state.table.end;
    state.table.step = typeof parsed.step === "string" ? parsed.step : state.table.step;
    state.table.rows = Array.isArray(parsed.rows) ? parsed.rows.slice(0, 200) : [];
    state.table.sheet = normalizeSheet(parsed.sheet, 45, 5);
    state.table.sheetMessage = parsed.sheetMessage ?? "";
  } catch {
    // keep defaults
  }
}

function hydrateTools() {
  const stored = window.localStorage.getItem(STORAGE_KEYS.tools);
  if (!stored) return;
  try {
    const parsed = JSON.parse(stored);
    state.tools = {
      ...state.tools,
      ...parsed,
      decimalPlaces: clampInt(parsed.decimalPlaces, 0, 12, 6),
      significantDigits: clampInt(parsed.significantDigits, 1, 15, 10),
      rounding: normalizeRounding(parsed.rounding) ?? "half-up",
      formatMode: normalizeFormatMode(parsed.formatMode) ?? "fixed",
    };
  } catch {
    // keep defaults
  }
}

function bindEvents() {
  elements.modeTabs.forEach((button) => button.addEventListener("click", handleModeTabClick));
  if (elements.quickActions) {
    elements.quickActions.addEventListener("click", handleQuickActionClick);
  }
  elements.clearHistoryBtn.addEventListener("click", () => {
    state.history = [];
    persistHistory();
    renderHistory();
  });
  if (elements.uiSearchInput) {
    elements.uiSearchInput.addEventListener("input", handleUiSearchInput);
  }
  if (elements.clearUiSearchBtn) {
    elements.clearUiSearchBtn.addEventListener("click", clearUiSearch);
  }

  elements.historyList.addEventListener("click", handleHistoryClick);

  document.addEventListener("keydown", handleKeyboard);
  document.addEventListener("pointerover", handlePointerHint);
  document.addEventListener("pointerout", handlePointerHintLeave);

  document.addEventListener("click", handleGlobalClick);
  document.addEventListener("input", handleGlobalInput);
  document.addEventListener("change", handleGlobalChange);
}

function handleGlobalClick(event) {
  const target = event.target;

  if (elements.keypad && elements.keypad.contains(target)) {
    const btn = target.closest("button[data-action]");
    if (btn) {
      const action = btn.dataset.action;
      const shiftAction = btn.dataset.shiftAction;
      if (state.shift && shiftAction) {
        insertText(shiftAction);
        state.shift = false;
        persistShift();
      } else {
        handleAction(action);
      }
      if (action !== "shift") { state.shift = false; persistShift(); }
      if (action !== "equals") { state.justEvaluated = false; }
      if (state.expression === "") { state.preview = ""; }
      persistExpression();
      updateDisplay();
      evaluatePreview();
    }
    return;
  }

  if (!elements.modeWorkspace || !elements.modeWorkspace.contains(target)) return;

  handleWorkspaceClick(target);
}

function handleWorkspaceClick(target) {
  const matrixOp = target.closest("[data-matrix-op]");
  if (matrixOp) { try { applyMatrixOperation(matrixOp.dataset.matrixOp); } catch (e) { setHoverHint("矩阵运算出错: " + e.message); } return; }

  const statsAction = target.closest("[data-stats-action]");
  if (statsAction) { handleStatsAction(statsAction.dataset.statsAction, statsAction.dataset.index); return; }

  const complexOp = target.closest("[data-complex-op]");
  if (complexOp) { try { applyComplexOperation(complexOp.dataset.complexOp); } catch (e) { setHoverHint("复数运算出错: " + e.message); } return; }

  const baseQuick = target.closest("[data-base-quick]");
  if (baseQuick) {
    state.base.activeQuick = baseQuick.dataset.baseQuick;
    state.base.source = baseQuick.dataset.baseQuick;
    if (["BIN", "OCT", "DEC", "HEX"].includes(baseQuick.dataset.baseQuick)) state.base.target = baseQuick.dataset.baseQuick;
    persistBase();
    renderModeWorkspace();
    return;
  }

  const baseConvert = target.closest('[data-mode-action="convert-base"]');
  if (baseConvert) { convertAndPersistBase(); return; }

  const advAction = target.closest("[data-adv-action]");
  if (advAction) { handleAdvancedAction(advAction.dataset.advAction); return; }

  const advTab = target.closest("[data-adv-tab]");
  if (advTab) {
    state.advSubMode = advTab.dataset.advTab;
    renderModeWorkspace();
    return;
  }
}

function handleGlobalInput(event) {
  const target = event.target;
  if (!elements.modeWorkspace || !elements.modeWorkspace.contains(target)) return;

  switch (target.id) {
    case "statsInput": state.stats.input = target.value; persistStats(); break;
    case "baseInput": state.base.input = target.value; persistBase(); refreshBaseWorkspace(); break;
    case "solveExpr": state.equation.solveExpression = target.value; persistEquation(); break;
    case "solveInitial": state.equation.solveInitial = target.value; persistEquation(); break;
    case "diffExpr": state.calculus.expression = target.value; persistCalculus(); break;
    case "diffPoint": state.calculus.point = target.value; persistCalculus(); break;
    case "intLower": state.calculus.lower = target.value; persistCalculus(); break;
    case "intUpper": state.calculus.upper = target.value; persistCalculus(); break;
    case "sigmaExpr": state.calculus.sigmaExpression = target.value; persistCalculus(); break;
    case "sigmaLower": state.calculus.sigmaLower = target.value; persistCalculus(); break;
    case "sigmaUpper": state.calculus.sigmaUpper = target.value; persistCalculus(); break;
    case "propA": state.equation.proportion.a = target.value; persistEquation(); break;
    case "propB": state.equation.proportion.b = target.value; persistEquation(); break;
    case "propC": state.equation.proportion.c = target.value; persistEquation(); break;
    case "propD": state.equation.proportion.d = target.value; persistEquation(); break;
    case "v1x": if (state.vector.vectors.v1) state.vector.vectors.v1[0] = Number(target.value) || 0; persistVector(); break;
    case "v1y": if (state.vector.vectors.v1) state.vector.vectors.v1[1] = Number(target.value) || 0; persistVector(); break;
    case "v1z": if (state.vector.vectors.v1) state.vector.vectors.v1[2] = Number(target.value) || 0; persistVector(); break;
    case "v2x": if (state.vector.vectors.v2) state.vector.vectors.v2[0] = Number(target.value) || 0; persistVector(); break;
    case "v2y": if (state.vector.vectors.v2) state.vector.vectors.v2[1] = Number(target.value) || 0; persistVector(); break;
    case "v2z": if (state.vector.vectors.v2) state.vector.vectors.v2[2] = Number(target.value) || 0; persistVector(); break;
    case "logicA": state.logic.a = target.value; persistLogic(); break;
    case "logicB": state.logic.b = target.value; persistLogic(); break;
    case "tableFx": state.table.fx = target.value; persistTable(); break;
    case "tableGx": state.table.gx = target.value; persistTable(); break;
    case "tableStart": state.table.start = target.value; persistTable(); break;
    case "tableEnd": state.table.end = target.value; persistTable(); break;
    case "tableStep": state.table.step = target.value; persistTable(); break;
    case "fractionInput": state.tools.fractionInput = target.value; persistTools(); break;
    case "dmsInput": state.tools.dmsInput = target.value; persistTools(); break;
    case "polarX": state.tools.polarX = target.value; persistTools(); break;
    case "polarY": state.tools.polarY = target.value; persistTools(); break;
    case "cartR": state.tools.cartR = target.value; persistTools(); break;
    case "cartTheta": state.tools.cartTheta = target.value; persistTools(); break;
    case "primeInput": state.tools.primeInput = target.value; persistTools(); break;
    case "engInput": state.tools.engInput = target.value; persistTools(); break;
    case "randMin": state.tools.randMin = target.value; persistTools(); break;
    case "randMax": state.tools.randMax = target.value; persistTools(); break;
    case "unitFrom": state.tools.unitFrom = target.value; persistTools(); break;
    case "unitTo": state.tools.unitTo = target.value; persistTools(); break;
    case "unitInput": state.tools.unitInput = target.value; persistTools(); break;
  }

  const matrixInput = target.closest("[data-matrix-input]");
  if (matrixInput) { updateMatrixField(matrixInput); }
}

function handleGlobalChange(event) {
  const target = event.target;
  if (!elements.modeWorkspace || !elements.modeWorkspace.contains(target)) return;

  switch (target.id) {
    case "matrixSizeSelect": {
      const n = Number(target.value);
      if ([2, 3, 4].includes(n)) {
        state.matrix.size = n;
        state.matrix.matrices.a = resizeMatrix(state.matrix.matrices.a, n);
        state.matrix.matrices.b = resizeMatrix(state.matrix.matrices.b, n);
        state.matrix.matrices.c = resizeMatrix(state.matrix.matrices.c, n);
        state.matrix.matrices.d = resizeMatrix(state.matrix.matrices.d, n);
        persistMatrix();
        renderModeWorkspace();
      }
      break;
    }
    case "linearSize": {
      const n = Number(target.value);
      if ([2, 3, 4].includes(n)) { state.equation.linearSize = n; state.equation.linearRows = defaultLinearRows(n); persistEquation(); }
      break;
    }
    case "polyDegree": state.equation.polyDegree = Number(target.value); persistEquation(); break;
    case "ineqSign": state.equation.inequalitySign = target.value; persistEquation(); break;
    case "logicBase": state.logic.base = target.value; persistLogic(); renderModeWorkspace(); break;
    case "constKey": state.tools.constantKey = target.value; persistTools(); break;
    case "unitGroup": state.tools.unitGroup = target.value; persistTools(); break;
    case "baseSource": state.base.source = normalizeBaseName(target.value) ?? state.base.source; persistBase(); refreshBaseWorkspace(); break;
    case "baseTarget": state.base.target = normalizeBaseName(target.value) ?? state.base.target; persistBase(); refreshBaseWorkspace(); break;
  }
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
  const advancedModes = ["equation", "vector", "calculus", "logic", "table", "tools"];
  if (advancedModes.includes(mode)) {
    state.advSubMode = mode;
  }
  persistMode();
  persistShift();
  updateDisplay();
  renderModeTabs();
  renderModeWorkspace();
  syncModeWorkspace();
  updateModeSubtitle();
  setHoverHint(MODE_HINTS[state.mode]);
}

function renderModeTabs() {
  elements.modeTabs.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === state.mode);
  });
  applyUiFilter();
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
  applyUiFilter();
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
    : `<li class="history-empty">暂无计算记录</li>`;
  applyUiFilter();
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

  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    focusUiSearch();
    return;
  }

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
    if (state.uiSearch) {
      clearUiSearch();
      return;
    }
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

function handleQuickActionClick(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  handleAction(button.dataset.action);
}

function handleUiSearchInput(event) {
  state.uiSearch = event.target.value || "";
  applyUiFilter();
}

function clearUiSearch() {
  state.uiSearch = "";
  if (elements.uiSearchInput) {
    elements.uiSearchInput.value = "";
    elements.uiSearchInput.focus();
  }
  applyUiFilter();
}

function focusUiSearch() {
  if (!elements.uiSearchInput) return;
  elements.uiSearchInput.focus();
  elements.uiSearchInput.select();
}

function applyUiFilter() {
  const query = state.uiSearch.trim().toLowerCase();
  const selectors = ["#keypad button", ".mode-tabs button", ".quick-actions button", ".history-item", ".mode-workspace button"];
  const buttons = document.querySelectorAll(selectors.join(", "));
  let visibleCount = 0;

  buttons.forEach((button) => {
    const searchable = [
      button.textContent,
      button.dataset.action,
      button.dataset.mode,
      button.dataset.tip,
      button.getAttribute("aria-label"),
      button.getAttribute("title"),
    ].filter(Boolean).join(" ").toLowerCase();
    const matches = !query || searchable.includes(query);
    button.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  if (elements.uiSearchStatus) {
    elements.uiSearchStatus.textContent = query
      ? visibleCount > 0
        ? `找到 ${visibleCount} 个匹配项`
        : "未找到匹配按钮"
      : "输入关键字筛选按钮";
  }
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

function updateModeSubtitle() {
  if (elements.modeSubtitle) {
    elements.modeSubtitle.textContent = `${MODE_LABELS[state.mode] || "标准"}工具区`;
  }
}

function syncModeWorkspace() {
  switch (state.mode) {
    case "standard":
      break;
    case "equation":
      refreshEquationWorkspace();
      break;
    case "matrix":
      refreshMatrixWorkspace();
      break;
    case "vector":
      refreshVectorWorkspace();
      break;
    case "stats":
      refreshStatsWorkspace();
      break;
    case "calculus":
      refreshCalculusWorkspace();
      break;
    case "complex":
      refreshComplexWorkspace();
      break;
    case "base":
      refreshBaseWorkspace();
      break;
    case "logic":
      refreshLogicWorkspace();
      break;
    case "table":
      refreshTableWorkspace();
      break;
    case "tools":
      refreshToolsWorkspace();
      break;
    default:
      break;
  }
}

function renderModeWorkspace() {
  try {
    elements.modeWorkspace.innerHTML = buildModeWorkspace();
  } catch (e) {
    elements.modeWorkspace.innerHTML = `<div class="mode-banner"><h3 class="mode-title">加载错误</h3><p class="mode-copy">工作区渲染出错：${escapeHtml(e.message)}</p></div>`;
  }
  syncModeWorkspace();
  updateModeSubtitle();
  syncWorkspaceButtonStates();
  applyUiFilter();
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
        <p class="mode-copy">支持 2×2、3×3 和 4×4 矩阵的加法、减法、乘法、转置、行列式和逆矩阵。输入后点击运算按钮即可得到结果。</p>
      </div>
      <div class="matrix-layout">
        <div class="mode-action-row">
          <label class="field-card">
            <span class="field-label">阶数</span>
            <select id="matrixSizeSelect" class="base-select mode-control" data-mode-action="matrix-size">
              <option value="2" ${state.matrix.size === 2 ? "selected" : ""}>2 × 2</option>
              <option value="3" ${state.matrix.size === 3 ? "selected" : ""}>3 × 3</option>
              <option value="4" ${state.matrix.size === 4 ? "selected" : ""}>4 × 4</option>
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

  if (state.mode === "equation" || state.mode === "vector" || state.mode === "calculus" || state.mode === "logic" || state.mode === "table" || state.mode === "tools") {
    return renderAdvancedWorkspace();
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
  const matrix = state.matrix.matrices[which];
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
  try {
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
      return;
    }

    const advAction = target.closest("[data-adv-action]");
    if (advAction) {
      handleAdvancedAction(advAction.dataset.advAction);
      return;
    }

    const advTab = target.closest("[data-adv-tab]");
    if (advTab) {
      state.advSubMode = advTab.dataset.advTab;
      renderModeWorkspace();
      return;
    }
  } catch (e) {
    setHoverHint("操作出错: " + e.message);
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

  if (target.id === "solveExpr") {
    state.equation.solveExpression = target.value;
    persistEquation();
    return;
  }

  if (target.id === "solveInitial") {
    state.equation.solveInitial = target.value;
    persistEquation();
    return;
  }

  if (target.id === "diffExpr") {
    state.calculus.expression = target.value;
    persistCalculus();
    return;
  }

  if (target.id === "diffPoint") {
    state.calculus.point = target.value;
    persistCalculus();
    return;
  }

  if (target.id === "intLower") {
    state.calculus.lower = target.value;
    persistCalculus();
    return;
  }

  if (target.id === "intUpper") {
    state.calculus.upper = target.value;
    persistCalculus();
    return;
  }

  if (target.id === "sigmaExpr") {
    state.calculus.sigmaExpression = target.value;
    persistCalculus();
    return;
  }

  if (target.id === "sigmaLower") {
    state.calculus.sigmaLower = target.value;
    persistCalculus();
    return;
  }

  if (target.id === "sigmaUpper") {
    state.calculus.sigmaUpper = target.value;
    persistCalculus();
    return;
  }

  if (target.id === "propA") {
    state.equation.proportion.a = target.value;
    persistEquation();
    return;
  }

  if (target.id === "propB") {
    state.equation.proportion.b = target.value;
    persistEquation();
    return;
  }

  if (target.id === "propC") {
    state.equation.proportion.c = target.value;
    persistEquation();
    return;
  }

  if (target.id === "propD") {
    state.equation.proportion.d = target.value;
    persistEquation();
    return;
  }

  if (target.id === "v1x") { state.vector.vectors.v1[0] = Number(target.value) || 0; persistVector(); return; }
  if (target.id === "v1y") { state.vector.vectors.v1[1] = Number(target.value) || 0; persistVector(); return; }
  if (target.id === "v1z") { state.vector.vectors.v1[2] = Number(target.value) || 0; persistVector(); return; }
  if (target.id === "v2x") { state.vector.vectors.v2[0] = Number(target.value) || 0; persistVector(); return; }
  if (target.id === "v2y") { state.vector.vectors.v2[1] = Number(target.value) || 0; persistVector(); return; }
  if (target.id === "v2z") { state.vector.vectors.v2[2] = Number(target.value) || 0; persistVector(); return; }

  if (target.id === "logicA") { state.logic.a = target.value; persistLogic(); return; }
  if (target.id === "logicB") { state.logic.b = target.value; persistLogic(); return; }

  if (target.id === "tableFx") { state.table.fx = target.value; persistTable(); return; }
  if (target.id === "tableGx") { state.table.gx = target.value; persistTable(); return; }
  if (target.id === "tableStart") { state.table.start = target.value; persistTable(); return; }
  if (target.id === "tableEnd") { state.table.end = target.value; persistTable(); return; }
  if (target.id === "tableStep") { state.table.step = target.value; persistTable(); return; }

  if (target.id === "fractionInput") { state.tools.fractionInput = target.value; persistTools(); return; }
  if (target.id === "dmsInput") { state.tools.dmsInput = target.value; persistTools(); return; }
  if (target.id === "polarX") { state.tools.polarX = target.value; persistTools(); return; }
  if (target.id === "polarY") { state.tools.polarY = target.value; persistTools(); return; }
  if (target.id === "cartR") { state.tools.cartR = target.value; persistTools(); return; }
  if (target.id === "cartTheta") { state.tools.cartTheta = target.value; persistTools(); return; }
  if (target.id === "primeInput") { state.tools.primeInput = target.value; persistTools(); return; }
  if (target.id === "engInput") { state.tools.engInput = target.value; persistTools(); return; }
  if (target.id === "randMin") { state.tools.randMin = target.value; persistTools(); return; }
  if (target.id === "randMax") { state.tools.randMax = target.value; persistTools(); return; }
  if (target.id === "unitFrom") { state.tools.unitFrom = target.value; persistTools(); return; }
  if (target.id === "unitTo") { state.tools.unitTo = target.value; persistTools(); return; }
  if (target.id === "unitInput") { state.tools.unitInput = target.value; persistTools(); return; }

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
    if (nextSize === 2 || nextSize === 3 || nextSize === 4) {
      state.matrix.size = nextSize;
      state.matrix.matrices.a = resizeMatrix(state.matrix.matrices.a, nextSize);
      state.matrix.matrices.b = resizeMatrix(state.matrix.matrices.b, nextSize);
      persistMatrix();
      renderModeWorkspace();
    }
    return;
  }

  if (target.id === "linearSize") {
    state.equation.linearSize = Number(target.value);
    state.equation.linearRows = defaultLinearRows(state.equation.linearSize);
    persistEquation();
    return;
  }

  if (target.id === "polyDegree") {
    state.equation.polyDegree = Number(target.value);
    persistEquation();
    return;
  }

  if (target.id === "ineqSign") {
    state.equation.inequalitySign = target.value;
    persistEquation();
    return;
  }

  if (target.id === "constKey") {
    state.tools.constantKey = target.value;
    persistTools();
    return;
  }

  if (target.id === "unitGroup") {
    state.tools.unitGroup = target.value;
    const units = UNIT_GROUPS[target.value];
    if (units) {
      const keys = Object.keys(units);
      if (keys.length > 0 && !state.tools.unitFrom && !state.tools.unitTo) {
        state.tools.unitFrom = keys[0];
        state.tools.unitTo = keys.length > 1 ? keys[1] : keys[0];
      }
    }
    persistTools();
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
  if (!state.matrix.matrices[matrixName]) return;
  state.matrix.matrices[matrixName][row][col] = Number.isFinite(numericValue) ? numericValue : 0;
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
  state.stats.activeAction = action;
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
  state.matrix.activeAction = operation;
  let result;
  let label = "";

  try {
    switch (operation) {
      case "add":
        result = matrixAdd(state.matrix.matrices.a, state.matrix.matrices.b);
        label = "A + B";
        break;
      case "sub":
        result = matrixSubtract(state.matrix.matrices.a, state.matrix.matrices.b);
        label = "A - B";
        break;
      case "mul":
        result = matrixMultiply(state.matrix.matrices.a, state.matrix.matrices.b);
        label = "A × B";
        break;
      case "transposeA":
        result = transposeMatrix(state.matrix.matrices.a);
        label = "A 的转置";
        break;
      case "transposeB":
        result = transposeMatrix(state.matrix.matrices.b);
        label = "B 的转置";
        break;
      case "detA":
        result = matrixDeterminant(state.matrix.matrices.a);
        label = "A 的行列式";
        break;
      case "detB":
        result = matrixDeterminant(state.matrix.matrices.b);
        label = "B 的行列式";
        break;
      case "inverseA":
        result = inverseMatrix(state.matrix.matrices.a);
        label = "A 的逆矩阵";
        break;
      case "inverseB":
        result = inverseMatrix(state.matrix.matrices.b);
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
  state.complex.activeAction = operation;
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
  syncWorkspaceButtonStates();
}

function refreshStatsWorkspace() {
  const list = elements.modeWorkspace.querySelector("#statsList");
  if (list) list.innerHTML = renderStatsList();
  const summary = elements.modeWorkspace.querySelector(".summary-grid");
  if (summary) summary.innerHTML = renderStatsSummary();
  const input = elements.modeWorkspace.querySelector("#statsInput");
  if (input) input.value = state.stats.input;
  syncWorkspaceButtonStates();
}

function refreshComplexWorkspace() {
  const result = elements.modeWorkspace.querySelector("#complexResult");
  if (result) result.textContent = formatComplexResult(state.complex.result);
  const operation = elements.modeWorkspace.querySelector(".complex-status");
  if (operation) operation.textContent = state.complex.operation || "请选择一个复数运算。";
  syncWorkspaceButtonStates();
}

function refreshBaseWorkspace() {
  const result = elements.modeWorkspace.querySelector("#baseResult");
  if (result) result.textContent = state.base.result || "尚未转换";
  const outputs = elements.modeWorkspace.querySelector(".base-output-grid");
  if (outputs) outputs.innerHTML = renderBaseSummary();
  syncWorkspaceButtonStates();
}

function refreshEquationWorkspace() {
  const result = elements.modeWorkspace.querySelector("#advancedResult");
  if (result) result.textContent = state.tools.unitResult || "点击按钮执行对应功能。";
  syncWorkspaceButtonStates();
}

function refreshVectorWorkspace() {
  refreshEquationWorkspace();
}

function refreshCalculusWorkspace() {
  refreshEquationWorkspace();
}

function refreshLogicWorkspace() {
  refreshEquationWorkspace();
}

function refreshTableWorkspace() {
  refreshEquationWorkspace();
}

function refreshToolsWorkspace() {
  refreshEquationWorkspace();
}

function syncWorkspaceButtonStates() {
  if (!elements.modeWorkspace) return;

  const activeAdvAction = getActiveAdvancedAction();
  syncButtonGroup(elements.modeWorkspace, "[data-matrix-op]", state.matrix.activeAction);
  syncButtonGroup(elements.modeWorkspace, "[data-complex-op]", state.complex.activeAction);
  syncButtonGroup(elements.modeWorkspace, "[data-stats-action]", state.stats.activeAction);
  syncButtonGroup(elements.modeWorkspace, "[data-base-quick]", state.base.activeQuick);
  syncButtonGroup(elements.modeWorkspace, "[data-adv-action]", activeAdvAction);
}

function syncButtonGroup(container, selector, activeValue) {
  const buttons = container.querySelectorAll(selector);
  buttons.forEach((button) => {
    button.classList.toggle("is-active", Boolean(activeValue) && button.dataset[datasetKeyForSelector(selector)] === activeValue);
  });
}

function datasetKeyForSelector(selector) {
  switch (selector) {
    case "[data-matrix-op]": return "matrixOp";
    case "[data-complex-op]": return "complexOp";
    case "[data-stats-action]": return "statsAction";
    case "[data-base-quick]": return "baseQuick";
    case "[data-adv-action]": return "advAction";
    default: return "action";
  }
}

function getActiveAdvancedAction() {
  switch (state.mode) {
    case "equation": return state.equation.activeAction;
    case "vector": return state.vector.activeAction;
    case "calculus": return state.calculus.activeAction;
    case "logic": return state.logic.activeAction;
    case "table": return state.table.activeAction;
    case "tools": return state.tools.activeAction;
    default: return "";
  }
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
  if (runtimeScope && Object.prototype.hasOwnProperty.call(runtimeScope, name)) {
    return runtimeScope[name];
  }
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

const NAMED_CONSTANTS = {
  c: 299792458,
  g: 9.80665,
  h: 6.62607015e-34,
  k: 1.380649e-23,
  NA: 6.02214076e23,
  R: 8.314462618,
};

const UNIT_GROUPS = {
  length: { m: 1, km: 1000, cm: 0.01, mm: 0.001, in: 0.0254, ft: 0.3048, mi: 1609.344 },
  mass: { kg: 1, g: 0.001, mg: 1e-6, t: 1000, lb: 0.45359237 },
  time: { s: 1, ms: 0.001, min: 60, h: 3600, day: 86400 },
  speed: { "m/s": 1, "km/h": 0.2777777778, mph: 0.44704, knot: 0.5144444444 },
  pressure: { Pa: 1, kPa: 1000, MPa: 1e6, bar: 100000, atm: 101325, psi: 6894.757293168 },
  energy: { J: 1, kJ: 1000, cal: 4.184, kcal: 4184, Wh: 3600, kWh: 3.6e6 },
  temperature: { C: "temp", F: "temp", K: "temp" },
};

function primeFactorization(n) {
  const factors = [];
  let num = n;
  for (let i = 2; i * i <= num; i++) {
    while (num % i === 0) {
      factors.push(i);
      num /= i;
    }
  }
  if (num > 1) factors.push(num);
  return factors;
}

function formatEng(value) {
  const prefixes = [{ exp: -3, sym: "m" }, { exp: -6, sym: "μ" }, { exp: -9, sym: "n" }, { exp: -12, sym: "p" }, { exp: 3, sym: "k" }, { exp: 6, sym: "M" }, { exp: 9, sym: "G" }, { exp: 12, sym: "T" }];
  for (const p of prefixes) {
    const scaled = value / Math.pow(10, p.exp);
    if (Math.abs(scaled) >= 1 && Math.abs(scaled) < 1000) {
      return `${formatNumber(scaled)} ${p.sym}`;
    }
  }
  return formatNumber(value);
}

function normalizeLinearRows(rows, size) {
  if (!Array.isArray(rows)) return defaultLinearRows(size);
  return rows.slice(0, size).map((row) => {
    if (!Array.isArray(row)) return Array(size + 1).fill(0);
    return row.slice(0, size + 1).map((v) => Number.isFinite(Number(v)) ? Number(v) : 0);
  });
}

function normalizeCoefficientArray(arr, len) {
  if (!Array.isArray(arr)) return new Array(len).fill(0);
  const result = arr.slice(0, len).map((v) => Number.isFinite(Number(v)) ? Number(v) : 0);
  while (result.length < len) result.push(0);
  return result;
}

function normalizeProportion(obj) {
  if (!obj || typeof obj !== "object") return { a: "1", b: "2", c: "3", d: "?" };
  return {
    a: typeof obj.a === "string" ? obj.a : "1",
    b: typeof obj.b === "string" ? obj.b : "2",
    c: typeof obj.c === "string" ? obj.c : "3",
    d: typeof obj.d === "string" ? obj.d : "?",
  };
}

function normalizeVectorKey(key) {
  return ["v1", "v2", "v3", "v4"].includes(key) ? key : null;
}

function normalizeVector(arr) {
  if (!Array.isArray(arr)) return [0, 0, 0];
  return arr.slice(0, 3).map((v) => Number.isFinite(Number(v)) ? Number(v) : 0);
}

function normalizeRegressionType(type) {
  return ["linear", "quadratic", "logarithmic", "exponential", "power", "inverse"].includes(type) ? type : null;
}

function normalizePair(pair) {
  if (!Array.isArray(pair) || pair.length < 2) return null;
  const x = Number(pair[0]);
  const y = Number(pair[1]);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
  return [x, y];
}

function normalizeRounding(val) {
  return ["half-up", "half-down", "ceil", "floor"].includes(val) ? val : null;
}

function normalizeFormatMode(val) {
  return ["fixed", "scientific", "engineering"].includes(val) ? val : null;
}

function normalizeMatrixKey(key) {
  return ["a", "b", "c", "d"].includes(key) ? key : null;
}

function normalizeLogicOp(op) {
  return ["AND", "OR", "NOT", "XOR", "XNOR"].includes(op) ? op : null;
}

let runtimeScope = null;

function defaultLinearRows(size) {
  return Array.from({ length: size }, (_, row) => Array.from({ length: size + 1 }, (_, col) => (col === row ? 1 : 0)));
}

function createSheet(rows, cols) {
  return Array.from({ length: rows }, () => Array.from({ length: cols }, () => ""));
}

function clampInt(value, min, max, fallback) {
  const n = Number(value);
  if (!Number.isFinite(n)) return fallback;
  return Math.max(min, Math.min(max, Math.round(n)));
}

function persistEquation() {
  window.localStorage.setItem(STORAGE_KEYS.equation, JSON.stringify(state.equation));
}

function persistVector() {
  window.localStorage.setItem(STORAGE_KEYS.vector, JSON.stringify(state.vector));
}

function persistCalculus() {
  window.localStorage.setItem(STORAGE_KEYS.calculus, JSON.stringify(state.calculus));
}

function persistLogic() {
  window.localStorage.setItem(STORAGE_KEYS.logic, JSON.stringify(state.logic));
}

function persistTable() {
  window.localStorage.setItem(STORAGE_KEYS.table, JSON.stringify(state.table));
}

function persistTools() {
  window.localStorage.setItem(STORAGE_KEYS.tools, JSON.stringify(state.tools));
}

function hydrateMatrix() {
  const stored = window.localStorage.getItem(STORAGE_KEYS.matrix);
  if (!stored) {
    state.matrix.matrices = { a: createMatrix(state.matrix.size), b: createMatrix(state.matrix.size), c: createMatrix(state.matrix.size), d: createMatrix(state.matrix.size) };
    return;
  }
  try {
    const parsed = JSON.parse(stored);
    state.matrix.size = [2, 3, 4].includes(parsed.size) ? parsed.size : 2;
    const matrices = parsed.matrices || {};
    state.matrix.matrices = {
      a: normalizeMatrix(matrices.a ?? parsed.a, state.matrix.size),
      b: normalizeMatrix(matrices.b ?? parsed.b, state.matrix.size),
      c: normalizeMatrix(matrices.c, state.matrix.size),
      d: normalizeMatrix(matrices.d, state.matrix.size),
    };
    state.matrix.activeMatrix = ["a", "b", "c", "d"].includes(parsed.activeMatrix) ? parsed.activeMatrix : "a";
    state.matrix.leftMatrix = ["a", "b", "c", "d"].includes(parsed.leftMatrix) ? parsed.leftMatrix : "a";
    state.matrix.rightMatrix = ["a", "b", "c", "d"].includes(parsed.rightMatrix) ? parsed.rightMatrix : "b";
    state.matrix.scalar = Number.isFinite(Number(parsed.scalar)) ? Number(parsed.scalar) : 2;
    state.matrix.result = typeof parsed.result === "string" ? parsed.result : "";
    state.matrix.operation = typeof parsed.operation === "string" ? parsed.operation : "A + B";
  } catch {
    state.matrix.matrices = { a: createMatrix(state.matrix.size), b: createMatrix(state.matrix.size), c: createMatrix(state.matrix.size), d: createMatrix(state.matrix.size) };
  }
}
