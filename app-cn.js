    state.matrix.matrices = { a: createMatrix(state.matrix.size), b: createMatrix(state.matrix.size), c: createMatrix(state.matrix.size), d: createMatrix(state.matrix.size) };
  }
}

// DMS (度分秒) 转换函数
function parseDMS(input) {
  const dmsRegex = /^(\d+)°(\d+)'(\d+(?:\.\d+)?)"$/;
  const match = input.match(dmsRegex);
  if (!match) return null;
  const degrees = parseFloat(match[1]);
  const minutes = parseFloat(match[2]);
  const seconds = parseFloat(match[3]);
  if (minutes >= 60 || seconds >= 60) return null;
  return degrees + minutes / 60 + seconds / 3600;
}

function toDMS(decimal) {
  if (!Number.isFinite(decimal)) return "无效输入";
  const sign = decimal < 0 ? "-" : "";
  const abs = Math.abs(decimal);
  const degrees = Math.floor(abs);
  const minutesFull = (abs - degrees) * 60;
  const minutes = Math.floor(minutesFull);
  const seconds = (minutesFull - minutes) * 60;
  return `${sign}${degrees}°${minutes}'${seconds.toFixed(4)}"`;
}

// 极坐标与直角坐标转换
function polarToRectangular(r, theta) {
  const rad = (theta * Math.PI) / 180;
  return {
    x: r * Math.cos(rad),
    y: r * Math.sin(rad),
  };
}

function rectangularToPolar(x, y) {
  return {
    r: Math.hypot(x, y),
    theta: (Math.atan2(y, x) * 180) / Math.PI,
  };
}

// 素因数分解
function primeFactorization(n) {
  if (!Number.isFinite(n) || n < 2 || Math.floor(n) !== n) return "请输入大于等于2的整数";
  const factors = [];
  let num = n;
  for (let i = 2; i * i <= num; i++) {
    while (num % i === 0) {
      factors.push(i);
      num /= i;
    }
  }
  if (num > 1) factors.push(num);
  if (factors.length === 1) return `${n} 是质数`;
  return factors.join(" × ");
}

// ENG 工程符号格式化
function formatENG(value) {
  if (!Number.isFinite(value)) return "无效输入";
  const abs = Math.abs(value);
  if (abs === 0) return "0";
  const exponent = Math.floor(Math.log10(abs) / 3) * 3;
  const mantissa = value / Math.pow(10, exponent);
  const prefix = getENGPrefix(exponent);
  return `${mantissa.toFixed(6).replace(/\.?0+$/, "")}${prefix}`;
}

function getENGPrefix(exponent) {
  const prefixes = {
    "-24": "y", "-21": "z", "-18": "a", "-15": "f", "-12": "p",
    "-9": "n", "-6": "μ", "-3": "m", "0": "", "3": "k",
    "6": "M", "9": "G", "12": "T", "15": "P", "18": "E",
    "21": "Z", "24": "Y",
  };
  return prefixes[String(exponent)] || `e${exponent}`;
}

// 分数化简
function simplifyFraction(numerator, denominator) {
  if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || denominator === 0) {
    return { valid: false, error: "无效输入" };
  }
  const num = Math.round(numerator);
  const den = Math.round(denominator);
  const gcd = calculateGCD(Math.abs(num), Math.abs(den));
  return {
    valid: true,
    numerator: num / gcd,
    denominator: den / gcd,
    mixed: toMixedNumber(num / gcd, den / gcd),
  };
}

function calculateGCD(a, b) {
  return b === 0 ? a : calculateGCD(b, a % b);
}

function toMixedNumber(num, den) {
  if (Math.abs(num) < Math.abs(den)) return `${num}/${den}`;
  const whole = Math.floor(num / den);
  const remainder = Math.abs(num % den);
  if (remainder === 0) return `${whole}`;
  return `${whole} ${remainder}/${Math.abs(den)}`;
}

// 温度转换
function convertTemperature(value, from, to) {
  if (from === to) return value;
  let celsius;
  switch (from) {
    case "C": celsius = value; break;
    case "F": celsius = (value - 32) * 5 / 9; break;
    case "K": celsius = value - 273.15; break;
    case "R": celsius = (value - 491.67) * 5 / 9; break;
    default: return null;
  }
  switch (to) {
    case "C": return celsius;
    case "F": return celsius * 9 / 5 + 32;
    case "K": return celsius + 273.15;
    case "R": return (celsius + 273.15) * 1.8;
    default: return null;
  }
}

// 单位换算主函数
function convertUnit(value, group, from, to) {
  if (group === "temperature") {
    return convertTemperature(value, from, to);
  }
  const units = UNIT_GROUPS[group];
  if (!units || !units[from] || !units[to]) return null;
  const baseValue = value * units[from];
  return baseValue / units[to];
}
