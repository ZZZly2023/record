
var threeSum = function (nums) {
  // 对数组进行排序
  nums = nums.sort((a, b) => a - b);
  let left, right;
  const res = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break; // 如果当前数字大于0，则不可能有三数之和为0
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 跳过重复的数字
    left = i + 1
    right = nums.length - 1;
    while(left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum == 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while(left < right && nums[left] === nums[left + 1]) left++; // 跳过重复的左指针数字
        while(left < right && nums[right] === nums[right - 1]) right--; // 跳过重复的右指针数字
        left++;
        right--;
      } else if (sum < 0) left++; // 如果和小于0，左指针右移
      else right--; // 如果和大于0，右指针左移
    }
  }
  return res
}