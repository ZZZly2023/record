var NumArray = function(nums) {
    let len = nums.length
    this.nums = new Array(len + 1).fill(0) // 注意这里第一项是0。
    for (let i = 0; i < len; i++) {
        this.nums[i+1] = this.nums[i] + nums[i]
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.nums[right + 1] - this.nums[left] // 注意这里的right + 1，因为this.nums[0]是0，所以可以直接用right + 1来获取到right位置的值。
};