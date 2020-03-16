let defaultValue = 0;

let arr = [1, 2, 3, 4, 5, 6];

Array.prototype.reduce = function (fn, defaultValue) {
    let arr = this;
    let result = 0;
    let index = 0;
    if (defaultValue == undefined) {
        result = arr[0]
        index++;
    }
    for (let i = index, len = arr.length; i < len; i++) {
        result = fn(result, arr[i], i, arr)
    }
    return result;
}

let xxx = arr.reduce(function (count, item, index, arr) {
    console.log(count, item, index, arr)
    return count + item;
}, defaultValue)

console.log(xxx)