/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = [];
    let useFilterObj = {};
    for (const [k1, v1] of Object.entries(nums)) {
        for (const [k2, v2] of Object.entries(nums)) {
            for (const [k3, v3] of Object.entries(nums)) {
                if (k1 != k2 && k1 != k3 && k2 != k3 && v1 + v2 + v3 == 0) {
                    let item = [v1, v2, v3].sort(function(a,b){return a-b;}).join('');
                    if (!useFilterObj[item]) {
                        result.push([v1, v2, v3]);
                        useFilterObj[item] = 1;
                    }
                }
            }
        }
    }
    return result;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([-13, 5, 13, 12, -2, -11, -1, 12, -3, 0, -3, -7, -7, -5, -3, -15, -2, 14, 14, 13, 6, -11, -11, 5, -15, -14, 5, -5, -2, 0, 3, -8, -10, -7, 11, -5, -10, -5, -7, -6, 2, 5, 3, 2, 7, 7, 3, -10, -2, 2, -12, -11, -1, 14, 10, -9, -15, -8, -7, -9, 7, 3, -2, 5, 11, -13, -15, 8, -3, -7, -12, 7, 5, -2, -6, -3, -10, 4, 2, -5, 14, -3, -1, -10, -3, -14, -4, -3, -7, -4, 3, 8, 14, 9, -2, 10, 11, -10, -4, -15, -9, -1, -1, 3, 4, 1, 8, 1]))
