/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (!s || !t) return true;
    if (s.length != t.length) return false;
    let wrapper = Object.create(null);
    for (const val of s) {
        if (wrapper[val]) wrapper[val]++;
        else wrapper[val] = 1;
    }
    for (const val of t) {
        if (wrapper[val]) wrapper[val]--;
        else wrapper[val] = -1;
    }
    for (const key in wrapper) {
        if (wrapper[key] != 0) {
            return false;
        }
    }
    return true;
};

// console.log(isAnagram('anagram', 'nagaram'));