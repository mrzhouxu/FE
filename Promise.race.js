Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        if(!Array.isArray(promises)) {
            return reject(new TypeError('arguments must be an array'))
        }

        promises.forEach(item => {
            item.then(resolve, reject);
        })
    })
}