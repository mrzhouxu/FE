Promise.all = function (promises) {
    return new Promise(function (resolve, reject) {
        if(!Array.isArray(promises)) {
            return reject(new TypeError('arguments must be an array'))
        }
        let result = [];
        let count = 0;
        promises.forEach((item, index) => {
            item.then(function (data) {
                result[index] = data;
                count++;
                if (count == promises.length) {
                    resolve(result);
                }
            }, reject)
        })
    })
}