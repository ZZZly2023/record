/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   // 去除字符串两边的空格
   s = s.trim()
   let i = s.length - 1
   // 从后往前找到第一个空格
   while(s[i] !== ' ' && i >= 0) i--
   // 这里的i是指向的空格, 所以最后一个单词的长度是 s.length - i - 1
   return s.length - i - 1
};