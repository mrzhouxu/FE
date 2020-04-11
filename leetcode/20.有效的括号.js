/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // var kv = {
    //     '(': ')',
    //     '{': '}',
    //     '[': ']'
    // };
    // var stack = [];
    // for (var i = 0, len = s.length; i < len; i++) {
    //     if (kv[stack[stack.length - 1]] == s[i]) {
    //         stack.pop();
    //     } else {
    //         if (!kv.hasOwnProperty(s[i])) return false;
    //         stack.push(s[i]);
    //     }
    // }
    // if (stack.length) {
    //     return false;
    // } else {
    //     return true;
    // }

    var kv = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    var stack = [];
    for (var v of s) {
        if (kv[stack[stack.length - 1]] == v) {
            stack.pop();
        } else {
            if(kv.hasOwnProperty(v)) stack.push(v);
            else return false;
        }
    }
    if (stack.length) {
        return false;
    } else {
        return true;
    }
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
