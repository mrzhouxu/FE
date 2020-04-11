// /**
//  * @param {number} k
//  * @param {number[]} nums
//  */
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
 * ------
 */
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.heap = new Heap();
    this.heapMaxSize = k;
    for(let i = 0; i < nums.length; i++){
        if(i < k){
            this.heap.add(nums[i]);
        }else if(nums[i] > this.heap.top()){
            this.heap.remove(nums[i]);
        }
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if(this.heap.length < this.heapMaxSize){
        this.heap.add(val);
        return this.heap.top();
    }
    if(val > this.heap.top()){
        this.heap.remove(val);
    }
    return this.heap.top();
};

function Heap(){
    this.heap = [];
}
Heap.prototype = {
    get length(){
        return this.heap.length;
    }
}
Heap.prototype.top = function(){
    return this.heap[0];
}
Heap.prototype.add = function(num){
    this.heap.push(num);
    let index = this.heap.length - 1,
        parentIndex = Math.floor((index - 1) / 2);
    while(parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]){
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
        parentIndex = Math.floor((index - 1) / 2);
    }
}
Heap.prototype.remove = function(num){
    let res = this.top();
    num = num == undefined ? this.heap.pop() : num;
    let index = 0,
        left = 2 * index + 1,
        right = 2 * index + 2;
    this.heap[index] = num;
    while(this.heap[index] >= this.heap[left] || this.heap[index] >= this.heap[right]){
        if(this.heap[left] > this.heap[right]){
            [this.heap[index], this.heap[right]] = [this.heap[right], this.heap[index]];
            index = right;
        }else{
            [this.heap[index], this.heap[left]] = [this.heap[left], this.heap[index]];
            index = left;
        }
        left = 2 * index + 1;
        right = 2 * index + 2;
    }
    return res;
}


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
