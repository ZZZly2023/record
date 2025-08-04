class MinHeap {
    constructor(k) {
        this.maxSize = k // 优化
        this.heap = []
    } 
    swap(index1, index2) {
        const temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }
    getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }
    getLeftChildIndex(index){ 
        return index * 2 + 1
    }
    getRightChildIndex(index){
        return index * 2 + 2
    }
    insert(value){
        if (this.size < this.maxSize) {
            this.heap.push(value)
            this.heapifyUp(this.size - 1)
        } else {
            if (this.peak < value) {
                // 先取出最小值
                this.extractMinValue()
                this.heap.push(value)
                this.heapifyUp(this.size - 1)
            }
        }
    }
    extractMinValue(){
        const min = this.heap[0]
        this.swap(0, this.size - 1)
        this.heap.pop()
        this.heapifyDown(0)
        return min
    }
    heapifyDown(index){
        let rightChildIndex = this.getRightChildIndex(index)
        let leftChildIndex = this.getLeftChildIndex(index)
        let minIndex = index
        if (leftChildIndex < this.size && this.heap[leftChildIndex] < this.heap[minIndex]) {
            minIndex = leftChildIndex
        }
        if (rightChildIndex < this.size && this.heap[rightChildIndex] < this.heap[minIndex]) {
            minIndex = rightChildIndex
        }
        if (minIndex !== index) {
            this.swap(minIndex, index)
            this.heapifyDown(minIndex)
        }
    }
    heapifyUp(index){
        let parentIndex 
        while((parentIndex = this.getParentIndex(index)) >= 0 && this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index)
            index = parentIndex
        }
    }
    get peak() {
        return this.heap[0]
    }
    get size() {
        return this.heap.length
    }
}