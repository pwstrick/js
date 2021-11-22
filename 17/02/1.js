// 第一种思路
function isValidParentheses(s) {
  const length = s.length;
  let i = 0;
  const stack = [];
  while (i < length) {
    let stackLen = stack.length > 0 ? stack.length - 1 : stack.length;
    if (
      (stack[stackLen] == "(" && s[i] == ")") ||
      (stack[stackLen] == "{" && s[i] == "}") ||
      (stack[stackLen] == "[" && s[i] == "]")
    ) {
      stack.pop();
      i++;
      continue;
    }
    stack.push(s[i]);
    i++;
  }
  return stack.length === 0;
}

console.log(isValidParentheses("()[]{}"));
console.log(isValidParentheses("([)]"));

// 第二种思路
function isValidParentheses2(s) {
  const stack = [],
    map = { "}": "{", "]": "[", ")": "(" };
  for (let i = 0, len = s.length; i < len; i++) {
    let c = s[i];
    if (!map[c]) {
      stack.push(c);
      continue;
    }
    if (stack.length > 0 && map[c] != stack.pop())
      return false;
  }
  return stack.length == 0;
}
console.log(isValidParentheses2("()"));
console.log(isValidParentheses2("()[]{}"));
console.log(isValidParentheses2("(]"));
console.log(isValidParentheses2("([)]"));
console.log(isValidParentheses2("{[]}"));