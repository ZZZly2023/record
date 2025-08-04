
var MyQueue = function() {
   this.st1 = []
   this.st2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    // 直接加入到st1中
    this.st1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  // 如果st2为空，则将st1中的元素全部转移到st2中
  // 否则，仍然取用st2中的元素
    if (!this.st2.length) {
        while(this.st1.length) {
            this.st2.push(this.st1.pop())
        }
    }
    return this.st2.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    // 如果st2为空，则将st1中的元素全部转移到st2中
    // 否则，仍然取用st2中的元素
    const peek = this.pop()
    this.st2.push(peek)
    return peek
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.st1.length + this.st2.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */