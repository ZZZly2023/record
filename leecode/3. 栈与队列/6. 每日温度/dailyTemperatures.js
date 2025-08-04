// 单调栈，栈中存入递减值的索引
var dailyTemperatures = function(temperatures) {
  const n = temperatures.length;
  const answer = new Array(n).fill(0);
  const stack = []; // 存索引，保持单调递减

  for (let i = 0; i < n; i++) {
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const prevIndex = stack.pop();
      answer[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  return answer;
};