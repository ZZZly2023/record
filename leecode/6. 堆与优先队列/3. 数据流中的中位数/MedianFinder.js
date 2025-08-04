
var MedianFinder = function() {
    this.minHeap = new Heap('inc')
    this.maxHeap = new Heap('dec')
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  // 约定大顶堆元素最多比小顶堆多1
    this.maxHeap.insert(num)
    this.minHeap.insert(this.maxHeap.extractTop())
    if (this.minHeap.size > this.maxHeap.size) {
      this.maxHeap.insert(this.minHeap.extractTop())
    }
    
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.maxHeap.size === this.minHeap.size) {
      return (this.minHeap.peak + this.maxHeap.peak) / 2
    } else return this.maxHeap.peak
};

class Heap {
  constructor(type) {
    this.type = type || 'inc'
    this.heap = []
  }
  get size() {
    return this.heap.length
  }
  get peak() {
      return this.heap?.[0]
  }
  getParentIndex(index) {
    return Math.ceil(index/2) - 1
  }
  getLeftChildIndex(index) {
    return index * 2 + 1
  }
  getRightChildIndex(index) {
    return index * 2 + 2
  }
  swap(index1, index2) {
    const temp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = temp
  }
  insert(num) {
    this.heap.push(num)
    this.heapifyUp(this.size - 1)
  }
  extractTop() {
    this.swap(0, this.size - 1)
    const top = this.heap.pop()
    this.heapifyDown(0)
    return top
  }
  heapifyUp(index){
    let parentIndex
    const type = this.type
    while((parentIndex = this.getParentIndex(index)) >= 0 && ((type === 'dec' && this.heap[parentIndex] < this.heap[index]) || (type === 'inc' && this.heap[parentIndex] > this.heap[index]))) {
        this.swap(parentIndex, index)
        index = parentIndex
    }
  }
  heapifyDown(index){
    const leftChildIndex = this.getLeftChildIndex(index)
    const rightChildIndex = this.getRightChildIndex(index)
    const type = this.type
    let currentIndex = index
    if (leftChildIndex < this.size) {
      if (type === 'dec' && this.heap[leftChildIndex] > this.heap[currentIndex]) {
        currentIndex = leftChildIndex
      }
      if (type === 'inc' && this.heap[leftChildIndex] < this.heap[currentIndex]) {
        currentIndex = leftChildIndex
      }
    }
    if (rightChildIndex < this.size) {
      if (type === 'dec' && this.heap[rightChildIndex] > this.heap[currentIndex]) {
        currentIndex = rightChildIndex
      }
      if (type === 'inc' && this.heap[rightChildIndex] < this.heap[currentIndex]) {
        currentIndex = rightChildIndex
      }
    }
    if (currentIndex !== index) {
      this.swap(currentIndex, index)
      this.heapifyDown(currentIndex)
    }
  }
}