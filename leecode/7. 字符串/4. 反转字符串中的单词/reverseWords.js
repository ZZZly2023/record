// 从后向前遍历字符串
// var reverseWords = function(s) {
//   let res = '', temp = ''
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === ' ') {
//       if (temp === '') {
//         continue
//       } else {
//         if (res === '') res += temp
//         else res = res + ' ' + temp
//         temp = ''
//       }
//     } else {
//       temp = s[i] + temp
//     }
//   }
//   if (temp) {
//     if (res === '') res += temp
//     else res = res + ' ' + temp
//   }
//   return res
// }

// 方法二：正则表达式 + reverse + join
var reverseWords = function(s) {
  return s.match(/\w+/ig).reverse().join(' ')
  // return s.match(/\S+/g).reverse().join(' ') // 也可以使用\S匹配非空白字符
}