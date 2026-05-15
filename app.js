const STORAGE_KEYS = {
  expression: "calc991.expression",
  angleMode: "calc991.angleMode",
  memory: "calc991.memory",
  history: "calc991.history",
  shift: "calc991.shift",
};

const FUNCTION_LIBRARY = [
  { label: "abs(", insert: "abs(" },
  { label: "floor(", insert: "floor(" },
  { label: "ceil(", insert: "ceil(" },
  { label: "round(", insert: "round(" },
  { label: "sinh(", insert: "sinh(" },
  { label: "cosh(", insert: "cosh(" },
  { label: "tanh(", insert: "tanh(" },
  { label: "asinh(", insert: "asinh(" },
  { label: "acosh(", insert: "acosh(" },
  { label: "atanh(", insert: "atanh(" },
  { label: "nCr(", insert: "ncr(" },
  { label: "nPr(", insert: "npr(" },
  { label: "mod(", insert: "mod(" },
  { label: "root(", insert: "root(" },
  { label: "rand()", insert: "rand()" },
  { label: "pi", insert: "pi" },
  { label: "e", insert: "e" },
  { label: "Ans", insert: "Ans" },
];

const KEY_ROWS = [
  [
    { label: "SHIFT", action: "shift", className: "key key--func" },
    { label: "DEG", action: "angle", className: "key key--func" },
    { label: "MC", action: "mc", className: "key key--accent" },
    { label: "MR", action: "mr", className: "key key--accent" },
    { label: "M+", action: "mplus", className: "key key--accent" },
    { label: "M-", action: "mminus", className: "key key--accent" },
  ],
  [
    { label: "sin", alt: "asin", insert: "sin(", altInsert: "asin(" },
    { label: "cos", alt: "acos", insert: "cos(", altInsert: "acos(" },
    { label: "tan", alt: "atan", insert: "tan(", altInsert: "atan(" },
    { label: "log", alt: "10^x", insert: "log(", altInsert: "pow10(" },
    { label: "ln", alt: "e^x", insert: "ln(", altInsert: "exp(" },
    { label: "√", alt: "x²", insert: "sqrt(", altInsert: "square(" },
  ],
  [
    { label: "π", action: "pi", className: "key key--func" },
    { label: "e", action: "e", className: "key key--func" },
    { label: "Ans", action: "Ans", className: "key key--func" },
    { label: "(", action: "(", className: "key key--func" },
    { label: ")", action: ")", className: "key key--func" },
    { label: "DEL", action: "del", className: "key key--danger" },
  ],
  [
    { label: "7", action: "7", className: "key" },
    { label: "8", action: "8", className: "key" },
    { label: "9", action: "9", className: "key" },
    { label: "÷", action: "/", className: "key key--op" },
    { label: "AC", action: "ac", className: "key key--danger" },
    { label: "^", action: "^", shiftAction: "root(", secondary: "root", className: "key key--op" },
  ],
  [
    { label: "4", action: "4", className: "key" },
    { label: "5", action: "5", className: "key" },
    { label: "6", action: "6", className: "key" },
    { label: "×", action: "*", className: "key key--op" },
    { label: "!", action: "!", shiftAction: "mod(", secondary: "mod", className: "key key--op" },
    { label: "=", action: "equals", className: "key key--op" },
  ],
  [
    { label: "1", action: "1", className: "key" },
    { label: "2", action: "2", className: "key" },
    { label: "3", action: "3", className: "key" },
    { label: "-", action: "-", className: "key key--op" },
    { label: "%", action: "%", className: "key key--op" },
  ],
  [
    { label: "0", action: "0", className: "key key--double" },
    { label: ".", action: ".", className: "key" },
    { label: "+/-", action: "negate", className: "key key--func" },
    { label: "+", action: "+", className: "key key--op" },
    { label: ",", action: ",", className: "key key--func" },
  ],
];

const state = {
  expression: "",
  preview: "",
  angleMode: "DEG",
  memory: 0,
  history: [],
  shift: false,
  ans: 0,
  justEvaluated: false,
};

const elements = {
  keypad: document.getElementById("keypad"),
  expressionView: document.getElementById("expressionView"),
  previewView: document.getElementById("previewView"),
  angleModeChip: document.getElementById("angleModeChip"),
  shiftChip: document.getElementById("shiftChip"),
  memoryChip: document.getElementById("memoryChip"),
  historyList: document.getElementById("historyList"),
  clearHistoryBtn: document.getElementById("clearHistoryBtn"),
  functionLibrary: document.getElementById("functionLibrary"),
};

initialize();

function initialize() {
  hydrateState();
  renderKeypad();
  renderFunctionLibrary();
  bindEvents();
  updateDisplay();
  evaluatePreview();
}

function hydrateState() {
  const storedExpression = window.localStorage.getItem(STORAGE_KEYS.expression);
  const storedAngleMode = window.localStorage.getItem(STORAGE_KEYS.angleMode);
  const storedMemory = window.localStorage.getItem(STORAGE_KEYS.memory);
  const storedHistory = window.localStorage.getItem(STORAGE_KEYS.history);
  const storedShift = window.localStorage.getItem(STORAGE_KEYS.shift);

  state.expression = storedExpression ?? "";
  state.angleMode = storedAngleMode ?? "DEG";
  state.memory = Number.isFinite(Number(storedMemory)) ? Number(storedMemory) : 0;
  state.history = storedHistory ? JSON.parse(storedHistory) : [];
  state.shift = storedShift === "true";
}

function bindEvents() {
  elements.keypad.addEventListener("click", handleKeypadClick);
  elements.functionLibrary.addEventListener("click", handleLibraryClick);
  elements.clearHistoryBtn.addEventListener("click", () => {
    state.history = [];
    persistHistory();
    renderHistory();
  });

  document.addEventListener("keydown", handleKeyboard);
}

function renderKeypad() {
  elements.keypad.innerHTML = KEY_ROWS.map((row) => {
    return `<div class="key-row">${row.map((key) => {
      if (key.insert) {
        return `
          <button class="key key--func" type="button" data-action="${escapeHtml(key.insert)}" data-shift-action="${escapeHtml(key.altInsert)}">
            <span class="key__primary">${escapeHtml(key.label)}</span>
            <span class="key__secondary">${escapeHtml(key.alt)}</span>
          </button>
        `;
      }

      const secondary = key.secondary ?? "";
      return `
        <button class="${key.className}" type="button" data-action="${escapeHtml(key.action)}" ${key.shiftAction ? `data-shift-action="${escapeHtml(key.shiftAction)}"` : ""}>
          <span class="key__primary">${escapeHtml(key.label)}</span>
          ${secondary ? `<span class="key__secondary">${escapeHtml(secondary)}</span>` : ""}
        </button>
      `;
    }).join("")}</div>`;
  }).join("");
}

function renderFunctionLibrary() {
  elements.functionLibrary.innerHTML = FUNCTION_LIBRARY.map((item) => {
    return `<button class="chip-btn" type="button" data-insert="${escapeHtml(item.insert)}">${escapeHtml(item.label)}</button>`;
  }).join("");
  renderHistory();
}

function handleKeypadClick(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) {
    return;
  }

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

function handleLibraryClick(event) {
  const button = event.target.closest("button[data-insert]");
  if (!button) {
    return;
  }

  insertText(button.dataset.insert);
  state.shift = false;
  persistShift();
  updateDisplay();
  evaluatePreview();
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

function cycleAngleMode() {
  state.angleMode = state.angleMode === "DEG" ? "RAD" : state.angleMode === "RAD" ? "GRAD" : "DEG";
  persistAngleMode();
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

  const prefix = boundaryMatch[1];
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
  if (!Number.isFinite(value)) {
    return;
  }

  state.memory += value * sign;
  persistMemory();
}

function insertText(text) {
  if (!text) {
    return;
  }

  const normalized = normalizeDisplayText(text);
  if (state.justEvaluated && /^[0-9.(a-zA-Z]/.test(normalized)) {
    state.expression = "";
  }

  if (!state.expression || state.expression === "0") {
    if (/^[+*/^,)]$/.test(normalized)) {
      state.expression = "0" + normalized;
      return;
    }
    state.expression = normalized;
    return;
  }

  const lastChar = state.expression.slice(-1);
  const startsWithDigit = /^[0-9.]$/.test(normalized[0]);
  const endsWithDigit = /[0-9.]$/.test(lastChar);
  const shouldInsertMultiplication = !(
    startsWithDigit && endsWithDigit
  ) && /[0-9)aeinrs]/i.test(lastChar) && /^[a-zA-Z(0-9]/.test(normalized);
  state.expression += shouldInsertMultiplication ? `*${normalized}` : normalized;
}

function commitEvaluation() {
  const value = evaluateExpression(state.expression);
  if (!Number.isFinite(value)) {
    state.preview = "Math error";
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
  elements.angleModeChip.textContent = state.angleMode;
  elements.shiftChip.textContent = state.shift ? "SHIFT ON" : "SHIFT OFF";
  elements.shiftChip.style.opacity = state.shift ? "1" : "0.7";
  elements.memoryChip.textContent = `M ${formatNumber(state.memory)}`;

  renderHistory();
  persistExpression();
}

function renderHistory() {
  elements.historyList.innerHTML = state.history.length
    ? state.history.map((item, index) => `
      <li>
        <button class="history-item" type="button" data-history-index="${index}">
          <div class="history-top">${escapeHtml(item.expression)}</div>
          <div class="history-bottom">= ${escapeHtml(item.result)}</div>
        </button>
      </li>
    `).join("")
    : `<li class="history-item history-item--empty" tabindex="0">No calculations yet</li>`;

  elements.historyList.querySelectorAll("button[data-history-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const entry = state.history[Number(button.dataset.historyIndex)];
      if (!entry) {
        return;
      }
      state.expression = entry.expression;
      state.preview = entry.result;
      persistExpression();
      updateDisplay();
      evaluatePreview();
    });
  });
}

function prettyExpression(expression) {
  return expression
    .replaceAll("*", "×")
    .replaceAll("/", "÷")
    .replaceAll("pi", "π")
    .replaceAll("Ans", "Ans")
    .replaceAll("sqrt(", "√(")
    .replaceAll("square(", "sq(")
    .replaceAll("pow10(", "10^(")
    .replaceAll("root(", "root(");
}

function normalizeDisplayText(text) {
  return text
    .replaceAll("π", "pi")
    .replaceAll("×", "*")
    .replaceAll("÷", "/")
    .replaceAll("−", "-")
    .replaceAll("^", "^");
}

function evaluateExpression(expression) {
  try {
    const normalized = normalizeExpression(expression);
    if (!normalized.trim()) {
      return NaN;
    }

    const tokens = tokenize(normalized);
    if (!tokens.length) {
      return NaN;
    }

    const parser = createParser(tokens);
    const value = parser.parseExpression();
    if (!parser.isAtEnd()) {
      return NaN;
    }
    return value;
  } catch (error) {
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
          if (input[end] === "+" || input[end] === "-") {
            end += 1;
          }
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
      while (end < input.length && /[a-zA-Z0-9_]/.test(input[end])) {
        end += 1;
      }
      tokens.push({ type: "identifier", value: input.slice(index, end).toLowerCase() });
      index = end;
      continue;
    }

    if ("+-*/^!,()%,".includes(char)) {
      const type = char === "(" ? "lparen" : char === ")" ? "rparen" : char === "," ? "comma" : "operator";
      tokens.push({ type, value: char });
      index += 1;
      continue;
    }

    throw new Error(`Unexpected token: ${char}`);
  }

  return insertImplicitMultiplication(tokens);
}

function insertImplicitMultiplication(tokens) {
  const result = [];
  const functionNames = new Set([
    "sin",
    "cos",
    "tan",
    "asin",
    "acos",
    "atan",
    "sinh",
    "cosh",
    "tanh",
    "asinh",
    "acosh",
    "atanh",
    "log",
    "ln",
    "sqrt",
    "square",
    "pow10",
    "exp",
    "abs",
    "floor",
    "ceil",
    "round",
    "ncr",
    "npr",
    "mod",
    "root",
    "rand",
  ]);

  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index];
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

  if (!leftCanEnd || !rightCanStart) {
    return false;
  }

  if (left.type === "identifier" && right.type === "lparen" && functionNames.has(left.value)) {
    return false;
  }

  return true;
}

function createParser(tokens) {
  let index = 0;

  function peek() {
    return tokens[index];
  }

  function consume() {
    return tokens[index++];
  }

  function match(type, value) {
    const token = peek();
    if (!token || token.type !== type) {
      return false;
    }
    if (typeof value !== "undefined" && token.value !== value) {
      return false;
    }
    index += 1;
    return token;
  }

  function expect(type, value) {
    const token = match(type, value);
    if (!token) {
      throw new Error(`Expected ${value ?? type}`);
    }
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
    if (match("operator", "+")) {
      return parseUnary();
    }
    if (match("operator", "-")) {
      return -parseUnary();
    }
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
    if (!token) {
      throw new Error("Unexpected end of expression");
    }

    if (match("number")) {
      return token.value;
    }

    if (match("identifier")) {
      const name = token.value;
      if (match("lparen")) {
        const args = [];
        if (!match("rparen")) {
          args.push(parseExpression());
          while (match("comma")) {
            args.push(parseExpression());
          }
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

    throw new Error(`Unexpected token ${token.value}`);
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
      throw new Error(`Unknown identifier: ${name}`);
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
      throw new Error(`Unknown function: ${name}`);
  }
}

function toRadians(value) {
  if (state.angleMode === "DEG") {
    return (value * Math.PI) / 180;
  }
  if (state.angleMode === "GRAD") {
    return (value * Math.PI) / 200;
  }
  return value;
}

function fromRadians(value) {
  if (state.angleMode === "DEG") {
    return (value * 180) / Math.PI;
  }
  if (state.angleMode === "GRAD") {
    return (value * 200) / Math.PI;
  }
  return value;
}

function factorial(value) {
  if (!Number.isFinite(value) || value < 0 || Math.floor(value) !== value) {
    throw new Error("Factorial requires a non-negative integer");
  }

  let result = 1;
  for (let number = 2; number <= value; number += 1) {
    result *= number;
  }
  return result;
}

function permutations(n, r) {
  return factorial(n) / factorial(n - r);
}

function combinations(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

function formatNumber(value) {
  if (!Number.isFinite(value)) {
    return "Math error";
  }

  if (Object.is(value, -0)) {
    return "0";
  }

  const magnitude = Math.abs(value);
  if (magnitude !== 0 && (magnitude >= 1e10 || magnitude < 1e-8)) {
    return value.toExponential(10).replace(/\.0+e/, "e").replace(/(\.\d*?)0+e/, "$1e");
  }

  const text = Number(value.toPrecision(12)).toString();
  return text.includes("e") ? text : text.replace(/\.0+$/, "").replace(/(\.\d*?)0+$/, "$1");
}

function persistExpression() {
  window.localStorage.setItem(STORAGE_KEYS.expression, state.expression);
}

function persistAngleMode() {
  window.localStorage.setItem(STORAGE_KEYS.angleMode, state.angleMode);
  updateDisplay();
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
  updateDisplay();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
