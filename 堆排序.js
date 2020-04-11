// /**
//  * 堆排序
//  * 大顶堆/小顶堆
//  */
// var swap = function (arr, i, j) {
//     var temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// /**
//  * heapify 局部构建堆
//  * arr 数组代表树
//  * n 树里面一共有多少个节点
//  * 
//  */
// var heapify = function (arr, n, i) {
//     if (i >= n) {
//         return;
//     }
//     var c1 = 2 * i + 1;
//     var c2 = 2 * i + 2;
//     var max = i;
//     if (c1 < n && arr[c1] > arr[max]) {
//         max = c1;
//     }
//     if (c2 < n && arr[c2] > arr[max]) {
//         max = c2;
//     }
//     if (max != i) {
//         swap(arr, max, i);
//         heapify(arr, n, max);
//     }
// }

// /**
//  * 构建堆
//  */
// var buildHeap = function (arr, n) {
//     var lastNode = n - 1;
//     var parent = parseInt((lastNode - 1) / 2);
//     for (var i = parent; i >= 0; i--) {
//         heapify(arr, n, i);
//     }
//     return arr;
// }

// var heapSort = function (arr) {
//     var n = arr.length;
//     buildHeap(arr, n);
//     // 将堆顶和最后一个元素交换，在数组中相当于把第一个元素放在最后面，然后调用 heapify 继续调整堆，注意这时 heapify 传入的第二个参数是 i ，也就不包含移出去的元素
//     for (var i = n - 1; i >= 0; i--) {
//         swap(arr, i, 0);
//         heapify(arr, i, 0);
//     }
//     return arr;
// }


// // console.log(heapSort([2, 5, 3, 1, 10, 4]))
// console.log(heapSort([9, 1, 58, 5, 2, 1, 4, 5, 8, 7, 9, 8, 7, 4, 1, 2, 3, 6, 9, 8, 7, 4, 5, 1, 2, 3, 6, 9, 8, 75, 1]))

/**
 * 手写第一遍
 */
// function heapify(data, len, i) {
//     if (i >= len) {
//         return;
//     }
//     let leftChildIndex = 2 * i + 1;
//     let rightChildIndex = 2 * i + 2;
//     let max = i;
//     if (leftChildIndex < len && data[leftChildIndex] > data[max]) {
//         max = leftChildIndex;
//     }
//     if (rightChildIndex < len && data[rightChildIndex] > data[max]) {
//         max = rightChildIndex;
//     }
//     if (max != i) {
//         let temp = data[max];
//         data[max] = data[i];
//         data[i] = temp;
//         heapify(data, len, max);
//     }
// }

// function heapSort(data) {
//     let len = data.length;
//     let lastNodeIndex = len - 1;
//     let parent = (lastNodeIndex - 1) / 2 << 0;
//     for (let i = parent; i >= 0; i--) {
//         heapify(data, len, i);
//     }
//     for (let i = len - 1; i >= 0; i--) {
//         let temp = data[0];
//         data[0] = data[i];
//         data[i] = temp;
//         heapify(data, i, 0);
//     }
//     return data;
// }

// console.log(heapSort([5, 1, 2, 3, 9, 7, 4, 6, 8, 10]))

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function heapify(arr, len, i) {
    if (i >= len) {
        return;
    }
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

function heapSort(arr) {
    let len = arr.length;
    let lastNodeIndex = len - 1;
    let lastNodeParent = (lastNodeIndex - 1) / 2 << 0;
    for (let i = lastNodeParent; i >= 0; i--) {
        heapify(arr, len, i);
    }
    for (let i = len - 1; i >= 0; i--) {
        swap(arr, i, 0);
        heapify(arr, i, 0);
    }
    return arr;
}

console.log(heapSort([5, 1, 2, 3, 9, 7, 4, 6, 8, 10]))
