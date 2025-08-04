/**
 * @param {number[]} nums
 * @return {number}
 */
// var pivotIndex = function(nums) {
//     const arr = nums.reduce((pre, current) => {
//         if (pre.length == 0) {
//             pre.push(current)
//         } else {
//             const top = pre[pre.length - 1]
//             pre.push(top + current)
//         }
//         return pre
//     }, [])
//     const arrLast = arr[arr.length - 1]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] - nums[i] === arrLast - arr[i]) return i
//     }
//     return -1
// };

// arr[i] 可以在求解过程中动态计算得到
var pivotIndex = function(nums) {
    let totalSum = 0
    for(let i = 0; i < nums.length; i++) {
        totalSum += nums[i]
    }
    let pre = 0
    for (let i = 0; i < nums.length; i++) {
        if (pre * 2 + nums[i] === totalSum) return i
        else {
            pre += nums[i]
        }
    }
    return -1
}