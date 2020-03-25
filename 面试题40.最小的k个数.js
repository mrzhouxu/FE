/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
    // let newArr = arr.sort((a, b) => {
    //     return a - b;
    // });
    // return newArr.slice(0, k);
    let newArr = sort(arr, k);
    return newArr
};

function sort(arr, k) {
    let temp = {};
    let result = [];
    arr.forEach(item => {
        if (!temp[item]) {
            temp[item] = 1;
        } else {
            temp[item] = temp[item] + 1;
        }
    })
    for(let i in temp) {
        while(temp[i] > 0 && k > 0) {
            result.push(parseInt(i));
            temp[i] = temp[i] - 1;
            k--;
        }
        if( k == 0) {
            return result;
        }
    }
    return [];
}

var arr = []

var k = 0;

let result = getLeastNumbers(arr, k);
console.log(result);