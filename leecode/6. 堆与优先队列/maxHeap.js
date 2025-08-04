class MaxHeap {
    constructor(k) {
        this.heap = []
        this.maxSize = k // 优化
    }
    parentIndex(index) {
        return Math.floor((index - 1) / 2)
    }
    leftChildIndex(index) {
        return index * 2 + 1
    }
    rightChildIndex(index) {
        return index * 2 + 2
    }
    swap(index1, index2) {
        const temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }
    // 插入操作，从队
    insert(value) {
        if (this.size < this.maxSize) {
            this.heap.push(value)
            this.heapifyUp(this.size - 1)
        } else {
            if (this.peak > value) {
                // 如果比最大值要小，先将最大值出队，再进
                this.extractMax()
                this.heap.push(value)
                this.heapifyUp(this.size - 1)
            }
        }
    }
    extractMax() {
        if (this.heap.length) {
            this.swap(0, this.heap.length - 1)
            const max = this.heap.pop()
            this.heapifyDown(0)
            return max
        }
    }
    heapifyUp(index){
        // 将元素逐级向上对比，找到合适的位置插入
        let parentIndex 
        while((parentIndex = this.parentIndex(index)) >= 0 && this.heap[parentIndex] < this.heap[index]) {
            this.swap(index, parentIndex)
            index = parentIndex
        }
    }
    heapifyDown(index){
        let rightChildIndex = this.rightChildIndex(index)
        let leftChildIndex = this.leftChildIndex(index)
        // 选择较大的元素索引值
        // 左孩子节点索引存在，使用左孩子对比
        if (leftChildIndex < this.size && this.heap[maxIndex] <this.heap[leftChildIndex]) {
            maxIndex = leftChildIndex
        }
        // 右孩子节点索引存在，使用右孩子对比
        if (rightChildIndex < this.size && this.heap[maxIndex] <this.heap[rightChildIndex]) {
            maxIndex = rightChildIndex
        }
        if (maxIndex !== index) {
            this.swap(index, maxIndex)
            this.heapifyDown(maxIndex) 
        }
    }
    get peak() {
        if (this.heap.length) return this.heap[0]
    }
    get size() {
        return this.heap.length
    }
}