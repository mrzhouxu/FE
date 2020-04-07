/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var kv = {};
    for (var i = 0, len = nums.length; i < len; i++) {
        let k = target - nums[i];
        if (kv[k] != void(0)) {
            return [kv[k], i];
        } else {
            kv[nums[i]] = i;
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9))