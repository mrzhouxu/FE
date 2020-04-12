let nums = [2, 7, 11, 15], target = 9;

function fn(nums, target) {
    let map = {};
    for (let i = 0, len = nums.length; i < len; i++) {
        if (map[target - nums[i]] !== undefined) {
            return [map[target - nums[i]], i]
        } else {
            map[nums[i]] = i;
        }
    }
}

let result = fn(nums, target);

console.log(result);