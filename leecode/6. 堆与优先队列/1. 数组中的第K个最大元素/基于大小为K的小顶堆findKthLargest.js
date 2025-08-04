/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 基于最小堆实现，时间复杂度 O(nlogk)，空间复杂度 O(k)
var findKthLargest = function(nums, k) {
    const minHeap = new MinHeap(k)
    for (let i = 0; i < nums.length; i++) {
        minHeap.insert(nums[i])
    }
    return minHeap.peak
};

class MinHeap {
    constructor(maxSize) {
        this.maxSize = maxSize
        this.heap = []
    }
    get size() {
        return this.heap.length
    }
    get peak() {
        return this.heap[0]
    }
    sweap(index1, index2) {
        const temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }
    getParentIndex(current) {
        return Math.floor((current - 1) / 2)
    }
    getLeftChildIndex(current) {
        return current * 2 + 1
    }
    getRightChildIndex(current) {
        return current * 2 + 2
    }
    insert(num) {
        if (this.size == this.maxSize) {
            // 已经满 
            // 不大于峰顶值，忽略
            if (num <= this.peak) {
                return
            } else {
                this.extractMin()
                this.insert(num)
            }
        } else {
            this.heap.push(num)
            this.heapifyUp(this.size - 1)
        }
    }
    extractMin() {
        const peak = this.peak
        this.sweap(0, this.size - 1)
        this.heap.pop()
        this.heapifyDown(0)
        return peak
    }
    heapifyUp(currentIndex) {
        let parent
        while((parent = this.getParentIndex(currentIndex)) >= 0 && this.heap[parent] > this.heap[currentIndex]) {
            this.sweap(parent, currentIndex)
            currentIndex = parent
        }
    }
    heapifyDown(currentIndex){
        let left = this.getLeftChildIndex(currentIndex)
        let right = this.getRightChildIndex(currentIndex)
        let minIndex = currentIndex
        if (left < this.size && this.heap[left] < this.heap[minIndex]) {
            minIndex = left
        }
        if (right < this.size && this.heap[right] < this.heap[minIndex]) {
            minIndex = right
        }
        if (minIndex != currentIndex) {
            this.sweap(minIndex, currentIndex)
            this.heapifyDown(minIndex)
        }
    }
    
}