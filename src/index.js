module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const brackets = bracketsConfig.reduce(
    (acc, item) => Object.assign(acc, { [item[0]]: item[1] }),
    {},
  );

  for (const char of str) {
    const last = stack.pop();

    if (!last) {
      stack.push(char);
    } else if (char !== brackets[last]) {
      stack.push(last);
      stack.push(char);
    }
  }

  return stack.length === 0;
};
