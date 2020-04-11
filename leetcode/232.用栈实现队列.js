/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
    this.arr = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.arr.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    let queue = new MyQueue();
    while (!this.empty()) {
        queue.push(this.arr.pop());
    }
    var result = queue.arr.pop();
    while (!queue.empty()) {
        this.push(queue.arr.pop());
    }
    return result;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    let queue = new MyQueue();
    while (!this.empty()) {
        queue.push(this.arr.pop());
    }
    let result = queue.arr[queue.arr.length - 1];
    while (!queue.empty()) {
        this.arr.push(queue.arr.pop());
    }
    return result;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return !this.arr.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// var obj = new MyQueue()
// var x1 = obj.push(1)
// var x2 = obj.push(2)
// var a = obj.peek()
// var b = obj.pop()
// var c = obj.empty()
// console.log(x1, x2, a, b, c);
