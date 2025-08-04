var spiralOrder = function(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length; 
  const res = []
  const tatal = cols * rows
  // 定义四个边界变量
  let top = 0, bottom = rows - 1, left = 0, right = cols - 1, index;
  while (res.length < tatal) {
   for (index = left; index <= right; index++) { // 从左到右
      res.push(matrix[top][index]);
    }
    top++; // 上边界下移
    if (res.length == tatal) break

    for (index = top; index <= bottom; index++) { // 从上到下
      res.push(matrix[index][right]);
    }
    right--; // 右边界左移
    if (res.length == tatal) break

    for (index = right; index >= left; index--) { // 从右到左
    res.push(matrix[bottom][index]);
    }
    bottom--; // 下边界上移
    if (res.length == tatal) break

    for (index = bottom; index >= top; index--) { // 从下到上
    res.push(matrix[index][left]);
    }
    left++; // 左边界右移
    if (res.length == tatal) break
  }
  return res
}