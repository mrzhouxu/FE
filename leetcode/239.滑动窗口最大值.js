/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let window = [];
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let xx = window.map(item=>nums[item]);
        console.log(xx,result);
        if (i >= k && window[0] <= i - k) {
            window.shift();
        }

        while (window.length && nums[window[window.length - 1]] <= nums[i]) {
            window.pop();
        }

        window.push(i);

        if (i >= k - 1) {
            result.push(nums[window[0]])
        }
    }
    return result;
};

console.log(maxSlidingWindow([3,3,3,5,4,3,2,1,0,9], 3))
// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
