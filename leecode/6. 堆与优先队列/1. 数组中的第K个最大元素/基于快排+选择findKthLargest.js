/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 基于快速选择算法实现，时间复杂度 O(n)，空间复杂度 O(1)
// 快速排序的时间复杂度是 O(nlogn)，但是为了查询目标值，只需要进行部分排序
// 只要在某次排序中查到目标值的位置即可
var findKthLargest = function(nums, k) {
    const targetIndex = nums.length - k // 因为是从大到小排序，所以第 k 大的元素在数组中的索引是 nums.length - k
    let left = 0, right = nums.length - 1
    let partation
    while(left <= right) {
        partation = getPartation(left, right, nums)
        if (partation === targetIndex) return nums[partation]
        else if (partation < targetIndex) {
            left = partation + 1
        } else {
            right = partation - 1
        }
    }
};

function getPartation(left, right, nums) {
    const pivotIndex = Math.floor(Math.random() * (right - left + 1) + left)
    const pivot = nums[pivotIndex]
    swap(pivotIndex, left, nums)
    let l = left + 1, r = right
    while(l <= r) {
        while(l <= r && nums[l] < pivot) l++
        while(l <= r && nums[r] > pivot) r--
        if (l <= r) {
            swap(l, r, nums)
            l++
            r--
        }
    }
    swap(left, r, nums)
    return r
}

function swap(index1, index2, nums) {
    const temp = nums[index1]
    nums[index1] = nums[index2]
    nums[index2] = temp
}