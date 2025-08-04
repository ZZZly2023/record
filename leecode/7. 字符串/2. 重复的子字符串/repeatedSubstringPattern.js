/**
 * @param {string} s
 * @returns {boolean}
 * 结论：如果一个字符串可以由其子字符串重复构成，那么将该字符串与自身连接后去掉首尾字符，仍然会包含原字符串。
 * 证明：假设原字符串为s，重复的子字符串为x，则有s = x + x + ... + x（共k个x），k >= 2。
 * 则s + s = x + x + ... + x + x + x + ... + x（共2k个x），去掉首尾字符后仍然包含s。
 */
var repeatedSubstringPattern = function(s) {
    return (s + s).slice(1, -1).includes(s)
};

/**
 * 方法二：KMP算法
 * 通过KMP算法的部分匹配表（也称为前缀表）来判断是否存在重复的子字符串。
 */
var repeatedSubstringPatternKMP = function(s) {
    const n = s.length;
    const lps = new Array(n).fill(0); // 前缀表
    let j = 0; // 前缀长度

    for (let i = 1; i < n; i++) {
        while (j > 0 && s[i] !== s[j]) {
            j = lps[j - 1];
        }
        if (s[i] === s[j]) {
            j++;
            lps[i] = j;
        } else {
            lps[i] = 0;
        }
    }
    // 如果最后一个前缀长度能整除字符串长度，则存在重复子字符串
    return lps[n - 1] > 0 && n % (n - lps[n - 1]) === 0;
};