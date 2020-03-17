let obj = {
    a: 1,
    b: {
        a: 2
    }
}
obj.c = obj;

function cloneObj(obj, keys = {}) {
    if(keys[obj]) {
        return obj;
    }
    if (typeof obj === 'object' && obj !== null && !keys[obj]) {
        keys[obj] = true;
        let result = Array.isArray(obj) ? [] : {};
        for (let k in obj) {
            if (obj.hasOwnProperty(k)) {
                result[k] = cloneObj(obj[k], keys);
            }
        }
        return result;
    }
    return obj;
}


console.log(cloneObj(obj));