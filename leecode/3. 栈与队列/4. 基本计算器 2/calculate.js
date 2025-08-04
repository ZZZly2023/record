/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = []
    let num = 0
    let lastSign = '+' // 默认第一个符号是加号
    s = s.replaceAll(' ', '') // 去除空格
    for (let i = 0; i < s.length; i++) {
        const current = s[i]
        if (isDigital(current)) {
            num = num * 10 + parseInt(current)
        }
        if (!isDigital(current) || i === s.length - 1) {
            if (lastSign === '+') {
                stack.push(num)
            } else if (lastSign === '-') {
                stack.push(-num)
            } else if (lastSign === '*') {
                const top = stack.pop()
                stack.push(top * num)
            } else if (lastSign === '/') {
                const top = stack.pop()
                top > 0 ? stack.push(Math.floor(top / num)) : stack.push(Math.ceil(top / num))
            }
            num = 0
            lastSign = current
        }
    }
    return stack.reduce((a, b) => a + b, 0)
};

function isDigital(c) {
    return c >= '0' && c <= '9'
}