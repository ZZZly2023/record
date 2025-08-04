
// 解法1：使用数组计数
// var isAnagram = function(s, t) {
//     if (s === t || s.length !== t.length) return false
//     const arr = new Array(26).fill(0)
//     const arr2 = new Array(26).fill(0)
//     for (let i = 0; i < s.length; i++) {
//         arr[s[i].charCodeAt() - 97]++
//         arr2[t[i].charCodeAt() - 97]++
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== arr2[i]) return false
//     }
//     return true
// };

// 解法2：使用哈希表
var isAnagram = function(s, t) {
    if (s === t || s.length !== t.length) return false
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1)
        map.set(t[i], (map.get(t[i]) || 0) - 1)
    }
    for (const count of map.values()) {
        if (count !== 0) return false
    }
    return true
};