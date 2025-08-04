// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var firstMissingPositive = function(nums) {
    // 原地修改数组，空间复杂度O(1)，空间复杂度O(n)
    // 答案只能是[1, nums.length+1]范围内的值。
    let num
    for (let i = 0; i < nums.length; i++) {
        // 先处理0和负数，将其值设置为 n + 1， 后续处理1-n时，可以跳过
        if (nums[i] <= 0) nums[i] = nums.length + 1
    }
    for (let i = 0; i < nums.length; i++) {
        // 原数组中，处理 1 - n。如果出现了1-n之间的值，将对应索引位置标记为负数
        num = Math.abs(nums[i])
        if (num <= nums.length) {
            nums[num - 1] = - Math.abs(nums[num-1])
        }
    }
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) return i + 1
    }
    return nums.length + 1
};