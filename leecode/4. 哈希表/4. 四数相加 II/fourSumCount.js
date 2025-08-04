/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const mp = new Map()
    let sum, res = 0
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            sum = nums1[i] + nums2[j]
            if (!mp.has(sum)){
                mp.set(sum, 1)
            } else {
                mp.set(sum, mp.get(sum) + 1)
            }
        }
    }
    for (let i = 0; i < nums3.length; i++) {
        for (let j = 0; j < nums4.length; j++) {
            sum =  0 - (nums3[i] + nums4[j])
            if (mp.has(sum)) {
                res += mp.get(sum)
            }
        }
    }
    return res
};