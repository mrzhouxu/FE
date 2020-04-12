/**
 * 通过
 * @param {number} k
 * @param {number[]} nums
 */
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function heapify(arr, len, i) {
    while (true) {
        if (i >= len) return;
        let leftChildIndex = 2 * i + 1;
        let rightChildIndex = 2 * i + 2;
        let max = i;
        if (leftChildIndex < len && arr[leftChildIndex] < arr[max]) {
            max = leftChildIndex;
        }
        if (rightChildIndex < len && arr[rightChildIndex] < arr[max]) {
            max = rightChildIndex;
        }
        if (max != i) {
            swap(arr, max, i);
            i = max;
        } else {
            return;
        }
    }
}

function buildHeap(arr, len) {
    let lastNodeIndex = len - 1;
    let lastNodeParentIndex = (lastNodeIndex - 1) >> 1;
    for (let i = lastNodeParentIndex; i >= 0; i--) {
        heapify(arr, len, i);
    }
}

var KthLargest = function (k, nums) {
    this.nums = nums.sort((a, b) => b - a);
    this.k = k;
    if (this.nums.length >= this.k) {
        this.nums.length = this.k;
        buildHeap(this.nums, this.nums.length);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    if (this.nums.length < this.k) {
        this.nums.push(val);
        buildHeap(this.nums, this.nums.length);
        if (this.nums.length < this.k) {
            return undefined
        } else {
            return this.nums[0];
        }
    }
    if (val <= this.nums[0]) {
        return this.nums[0]
    }
    this.nums[0] = val;
    heapify(this.nums, this.nums.length, 0);
    return this.nums[0];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// var k = 3;
// var arr = [4, 5, 8, 2];
// var kthLargest = new KthLargest(3, arr);
// console.log(kthLargest.add(3));   // returns 4
// console.log(kthLargest.add(5));   // returns 5
// console.log(kthLargest.add(10));  // returns 5
// console.log(kthLargest.add(9));   // returns 8
// console.log(kthLargest.add(4));   // returns 8

// var k = 1;
// var arr = [];
// var kthLargest = new KthLargest(k, arr);
// console.log(kthLargest.add(-3));   // returns -3
// console.log(kthLargest.add(-2));   // returns -2
// console.log(kthLargest.add(-4));  // returns -2
// console.log(kthLargest.add(0));   // returns 0
// console.log(kthLargest.add(4));   // returns 4

// var k = 2;
// var arr = [0];
// var kthLargest = new KthLargest(k, arr);
// console.log(kthLargest.add(-1));   // returns -1
// console.log(kthLargest.add(1));   // returns 0
// console.log(kthLargest.add(-2));  // returns 0
// console.log(kthLargest.add(-4));   // returns 0
// console.log(kthLargest.add(3));   // returns 1

// var k = 3;
// var arr = [5, -1];
// var kthLargest = new KthLargest(k, arr);
// console.log(kthLargest.add(2));   // returns -1
// console.log(kthLargest.add(1));   // returns 1
// console.log(kthLargest.add(-1));  // returns 1
// console.log(kthLargest.add(3));   // returns 2
// console.log(kthLargest.add(4));   // returns 3