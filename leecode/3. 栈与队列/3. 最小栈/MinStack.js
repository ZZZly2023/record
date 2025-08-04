
var MinStack = function() {
    this.st = []
    this.stMin = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.st.push(val)
    if (this.stMin.length) {
        const lastVal = this.stMin[this.stMin.length - 1]
        if (lastVal > val) {
            this.stMin.push(val)
        } else {
            this.stMin.push(lastVal)
        }
    } else {
        this.stMin.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stMin.pop()
    return this.st.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
     if (this.st.length) {
        return this.st[this.st.length - 1]
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
     if (this.stMin.length) {
        return this.stMin[this.stMin.length - 1]
    }
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */