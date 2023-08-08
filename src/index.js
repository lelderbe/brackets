module.exports = function check(str, bracketsConfig) {
  const brackets = {};
  for (const [open, close] of bracketsConfig) {
    brackets[close] = open;
  }

  const stack = [];
  for (const char of str) {
    if (char in brackets && brackets[char] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};
