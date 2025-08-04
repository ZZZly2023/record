function trap(height) {
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0;
  let total = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      // 当左侧高度小于右侧高度时，水位由左侧决定
      if (height[left] >= leftMax) {
        leftMax = height[left]; // 更新左侧最大高度
      } else {
        // 如果左侧高度小于当前左侧最大高度，则可以计算积水量
        total += leftMax - height[left];
      }
      left++;
    } else {
      // 同理，水位由右侧决定
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        total += rightMax - height[right];
      }
      right--;
    }
  }

  return total;
}