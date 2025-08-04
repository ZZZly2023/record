var findLength = function(nums1, nums2) {
  const dp = new Array(nums2.length + 1).fill(0)
  let maxLength = 0
  for (let i = 0; i < nums1.length; i++) {
    // 注意这里是从后往前遍历，避免覆盖前面的结果
    for (let j = nums2.length; j > 0; j--) { 
      if (nums1[i] === nums2[j - 1]) {
        dp[j] = dp[j - 1] + 1
      } else {
        dp[j] = 0
      }
      maxLength = Math.max(maxLength, dp[j])
    }
  }
  return maxLength
}