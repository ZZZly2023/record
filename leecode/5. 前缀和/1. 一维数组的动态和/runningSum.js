/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  // 注意reduce中每次返回值，将作为下次调用的前一个值。如果是数组，最终也是数组。如果是数字，最终也是数字。
    return nums.reduce((pre, current) => {
        if (!pre.length) {
            pre.push(current)
        } else {
            pre.push(pre[pre.length - 1] + current)
        }
        return pre
    }, [])
};

// var runningSum = function(nums) {
//     for (let i = 0; i < nums.length; i++) { 
//         if (i == 0) nums[i] = nums[i]
//         else {
//             nums[i] = nums[i] + nums[i - 1]
//         }
//     }
//     return nums
// };