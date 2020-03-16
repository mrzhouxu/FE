let arr = [1, 2, 3, 4, 5, 6];

let obj = {
    value: 123
}

Array.prototype.map = function (fn, thisObj) {
    let arr = this;
    let resultArr = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        resultArr[i] = fn.call(thisObj, arr[i], i, arr)
    }
    return resultArr;
}

let xxx = arr.map(function (item, index, arr) {
    return item;
}, { a: 1 });

console.log(xxx)