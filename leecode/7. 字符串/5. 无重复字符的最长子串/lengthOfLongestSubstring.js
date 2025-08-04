/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口+哈希表
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) return s.length
    let maxLeng = 0
    let left = 0
    const map = new Map()
    for (let right = 0; right < s.length; right++) {
        const char = s[right]
        // 如果哈希表中存在该字符，并且该字符的索引大于等于左指针，则将左指针移动到该字符的索引+1
        // 注意，该索引必须是在窗口内，必须大于左边界索引，才能移动左指针
        if (map.has(char) && map.get(char) >= left) {
            left = map.get(char) + 1
        }
        // 更新哈希表，包括重复的和非重复的字符索引。
        map.set(char, right)
        maxLeng = Math.max(maxLeng, right - left + 1)
    }
    return maxLeng
};