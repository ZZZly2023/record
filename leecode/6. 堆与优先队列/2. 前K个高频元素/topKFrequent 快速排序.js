function topKFrequent(nums, k) {
  const map = new Map()
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  const arrays = Array.from(map.entries())
  const range = arrays.length - k
  quickSelect(0, arrays.length - 1, arrays, range)
  return arrays.slice(range).map(item => item[0])
}

function quickSelect(left, right, arr, kSmallest) {
  if (left >= right) return

  const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left
  swap(arr, pivotIndex, left)

  const pivotFreq = arr[left][1]
  let l = left + 1, r = right

  while (l <= r) {
    while (l <= r && arr[l][1] < pivotFreq) l++
    while (l <= r && arr[r][1] > pivotFreq) r--
    if (l <= r) {
      swap(arr, l, r)
      l++
      r--
    }
  }
  swap(arr, left, r)

  if (kSmallest < r) {
    quickSelect(left, r - 1, arr, kSmallest)
  } else if (kSmallest > r) {
    quickSelect(r + 1, right, arr, kSmallest)
  }
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}