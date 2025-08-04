
/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.queue = new Array(k)
    this.rear = 0 // 队尾索引
    this.front = 0 // 对头索引
    this.length = 0
    this.maxLength = k
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) return false
    this.length++
    this.queue[this.rear] = value
    this.rear = (this.rear + 1) % this.maxLength
    return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (!this.isEmpty()) {
        this.front = (this.front + 1) % this.maxLength
        this.length--
        return true
    }
    return false
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (!this.isEmpty()) {
        return this.queue[this.front]
    } else return -1
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (!this.isEmpty()) {
        if (this.rear === 0) {
            return this.queue[(this.rear - 1 + this.maxLength) % this.maxLength]
        } else return this.queue[this.rear - 1]
    } else return -1
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.length === 0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.length === this.maxLength
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */