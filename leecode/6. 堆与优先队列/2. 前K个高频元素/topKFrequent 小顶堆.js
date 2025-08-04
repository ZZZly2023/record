class MinHeap {
  constructor(k) {
    this.maxSize = k
    this.heap = []
  }
  getLeftChildIndex(index) {
    return index * 2 + 1
  }
  getRightChildIndex(index) {
    return index * 2 + 2
  }
  getParentIndex(index) {
    return Math.ceil(index/2) - 1
  }
  swap(index1, index2) {
    const temp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = temp
  }
  get peek() {
    return this.heap[0]
  }
  get size() {
    return this.heap.length
  }
  /**
   * 
   * @param {*} item
   * item[0] : num
   * item[1] : count 出现次数
   */
  insert(item) {
    if (this.size < this.maxSize) {
      this.heap.push(item)
      this.heapifyUp(this.size - 1)
    } else {
      if (item[1] > this.peek[1]) {
        this.remove()
        this.insert(item)
      }
    }
  }
  remove() {
    this.swap(0, this.size - 1)
    this.heap.pop()
    this.heapifyDown(0)
  }
  heapifyUp(index) {
    let parentIndex 
    while((parentIndex = this.getParentIndex(index)) >= 0 && this.heap[parentIndex][1] > this.heap[index][1]) {
      this.swap(index, parentIndex)
      index = parentIndex
    }
  }
  heapifyDown(index) {
    if (this.size) {
      let leftChildIndex = this.getLeftChildIndex(index)
      let rightChildIndex = this.getRightChildIndex(index)
      let minIndex = index
      if (leftChildIndex < this.size && this.heap[minIndex][1] > this.heap[leftChildIndex][1]) {
        minIndex = leftChildIndex
      }
      if (rightChildIndex < this.size && this.heap[minIndex][1] > this.heap[rightChildIndex][1]) {
        minIndex = rightChildIndex
      }
      if (minIndex !== index) {
        this.swap(minIndex, index)
        this.heapifyDown(minIndex)
      }
    }
  }
}

function topKFrequent(nums, k) {
  const map = new Map()
  const minHeap = new MinHeap(k)
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)
  }
  const arr = Array.from(map.entries())
  for(let i = 0; i < arr.length; i++) {
    minHeap.insert(arr[i])
  }
  return minHeap.heap.map(item => item[0])
}
