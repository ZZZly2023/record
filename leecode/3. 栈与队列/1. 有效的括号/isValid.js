/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const st = []
    const pars = {
        ')':'(',
        '}':'{',
        ']':'['
    }
    for(let i = 0; i < s.length; i++) {
        if (['(', '[', '{'].includes(s[i])) {
            st.push(s[i])
        } else {
            if (pars[s[i]] == st[st.length - 1]) {
                st.pop()
            } else return false
            
        }
    }
    return !st.length
};