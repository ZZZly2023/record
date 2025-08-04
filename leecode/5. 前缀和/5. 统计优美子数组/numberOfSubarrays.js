/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    const map = new Map()
    map.set(0, 1) // 注意初始值是设置为1
    let sum = 0, count = 0
    for (let num of nums) {
        if (num % 2 === 1) sum++
        if (map.has(sum - k)) {
            count += map.get(sum - k)
        }
        map.set(sum, (map.get(sum) || 0) + 1)
    }
    return count
};


// 高效解法
// var numberOfSubarrays = function(nums, k) {
//     // >= k 个子数组 减去 >= k - 1 个子数组

//     let l1 = 0, l2 = 0;
//     let l1c = 0, l2c = 0;
//     let ans = 0;
//     for (let right = 0; right < nums.length; right++) {
//         const c = nums[right] & 1;
//         l1c += c;
//         l2c += c;

//         while (l1c >= k) {
//             l1c -= (nums[l1++] & 1);
//         }

//         while (l2c >= k + 1) {
//             l2c -= (nums[l2++] & 1);
//         }

//         ans += (l1 - l2);
//     }

//     return ans;
// };