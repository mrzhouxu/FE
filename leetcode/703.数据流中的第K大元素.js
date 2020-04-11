/**
 * @param {number} k
 * @param {number[]} nums
 */

 /**
  * sort 超时
  */
// /**
//  * @param {number} k
//  * @param {number[]} nums
//  */
// var KthLargest = function (k, nums) {
//     this.nums = nums;
//     this.k = k;
// };

// /** 
//  * @param {number} val
//  * @return {number}
//  */
// KthLargest.prototype.add = function (val) {
//     this.nums.push(val);
//     this.nums = this.nums.sort(function (a, b) {
//         return b - a;
//     })
//     this.nums.length = this.k;
//     return this.nums[this.k - 1];
// };

// /**
//  * Your KthLargest object will be instantiated and called as such:
//  * var obj = new KthLargest(k, nums)
//  * var param_1 = obj.add(val)
//  */

// // var k = 3;
// // var arr = [4, 5, 8, 2];
// // var kthLargest = new KthLargest(3, arr);
// // console.log(kthLargest.add(3));   // returns 4
// // console.log(kthLargest.add(5));   // returns 5
// // console.log(kthLargest.add(10));  // returns 5
// // console.log(kthLargest.add(9));   // returns 8
// // console.log(kthLargest.add(4));   // returns 8

/**
 * leetcode demo 耗时
 */
// var KthLargest = function (k, nums) {
//     this.nums = nums.sort((a,b) => b-a);
//     this.k = k;
// };

// /** 
//  * @param {number} val
//  * @return {number}
//  */
// KthLargest.prototype.add = function (val) {
//     if(this.nums.length < 1) {
//         this.nums.push(val);
//         return val;
//     }
//     for(let i = 0; i < this.nums.length; i++) {
//         if(val > this.nums[i]) {
//             this.nums.splice(i,0,val);
//             break;
//         }
//         if(i === this.nums.length-1) {
//             this.nums.push(val);
//             break;
//         }
//     }
//     return this.nums[this.k-1]  
// };

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

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function heapify(arr, len, i) {
    if (i >= len) return;
    let leftChildIndex = 2 * i + 1;
    let rightChildIndex = 2 * i + 2;
    let max = i;
    if (leftChildIndex < len && arr[leftChildIndex] > arr[max]) {
        max = leftChildIndex;
    }
    if (rightChildIndex < len && arr[rightChildIndex] > arr[max]) {
        max = rightChildIndex;
    }
    if (max != i) {
        swap(arr, i, max);
        heapify(arr, len, max);
    }
}

function buildHeap(arr, len) {
    let lastNodeIndex = len - 1;
    let lastNodeParent = (lastNodeIndex - 1) / 2 << 0;
    for (let i = lastNodeParent; i >= 0; i--) {
        heapify(arr, len, i);
    }
}

function filterArr(arr, len, k) {
    buildHeap(arr, len);
    // console.log(arr);
    let count = 0;
    for (let i = len - 1; i >= 0; i--) {
        count++;
        swap(arr, i, 0);
        heapify(arr, i, 0);
        if(count == k) {
            return arr.slice(len - k);
        }
    }
    // console.log(arr);
    return arr.slice(len - k);
}
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    for (let i = 0; i < k; i++) {
        nums[i] = (nums[i] === undefined ? -Infinity : nums[i]);
    }
    this.nums = filterArr(nums, nums.length, k);
    // console.log('this.nums', this.nums);
    this.k = k;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    if (val > this.nums[0]) {
        this.nums[0] = val;
        buildHeap(this.nums, this.k);
        // console.log('buildHeap', this.nums);
        for (let i = this.k - 1; i >= 0; i--) {
            swap(this.nums, i, 0);
            heapify(this.nums, i, 0);
        }
    }
    // console.log('add', this.nums);
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
// console.log(kthLargest.add(-3));   // returns 4
// console.log(kthLargest.add(-2));   // returns 5
// console.log(kthLargest.add(-4));  // returns 5
// console.log(kthLargest.add(0));   // returns 8
// console.log(kthLargest.add(4));   // returns 8

// var k = 2;
// var arr = [0];
// var kthLargest = new KthLargest(k, arr);
// console.log(kthLargest.add(-1));   // returns 4
// console.log(kthLargest.add(1));   // returns 5
// console.log(kthLargest.add(-2));  // returns 5
// console.log(kthLargest.add(-4));   // returns 8
// console.log(kthLargest.add(3));   // returns 8

// var k = 3;
// var arr = [5,-1];
// var kthLargest = new KthLargest(k, arr);
// console.log(kthLargest.add(2));   // returns 4
// console.log(kthLargest.add(1));   // returns 5
// console.log(kthLargest.add(-1));  // returns 5
// console.log(kthLargest.add(3));   // returns 8
// console.log(kthLargest.add(4));   // returns 8

