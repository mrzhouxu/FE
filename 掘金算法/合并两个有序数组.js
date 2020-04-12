let nums1 = [1, 2, 3], nums2 = [2, 5, 6];

function fn(nums1 = [], nums2 = []) {
    let i = nums1.length, j = nums2.length;
    let len = i + j;
debugger
    while (i > 0 && j > 0) {
        if (nums1[i-1] > nums2[j-1]) {
            nums1[len - 1] = nums1[i-1];
            i--;
            len--;
        } else {
            nums1[len - 1] = nums2[j-1];
            j--;
            len--;
        }
    }

    while (j > 0) {
        nums1[len - 1] = nums2[j-1];
        j--;
        len--;
    }
    return nums1;
}

let result = fn(nums1, nums2);

console.log(result);