Promise.allSettled = function (promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new TypeError('arguments must be an Array'))
        }
        let result = [];
        let count = 0;
        let len = promises.length;
        promises.forEach((item, index) => {
            count++;
            /**
             * 如果 item 不是一个 promise 我们可以这样做
             * Promise.resolve(item)
             * 这样 item 就变成了一个 promise 对象
             */
            item.then(function (data) {
                result[index] = data;
                if (len == count) {
                    return resolve(result);
                }
            }, function (err) {
                result[index] = err;
                if (len == count) {
                    return reject(result);
                }
            })
        })
    })
}