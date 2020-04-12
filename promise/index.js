const PENDING = 'pending'; //初始态
const FULFILLED = 'fulfilled'; // 成功态
const REJECTED = 'rejected'; // 失败态
function Promise(executor) {
    let self = this; //先缓存当前promise实例
    self.status = PENDING; //设置状态
    // 定义存放成功回调的数组
    self.onResolvedCallbacks = [];
    // 定义存放失败回调的数组
    self.onRejectedCallbacks = [];
    // 当调用此方法的时候，如果 promise 状态为 pending 的话可以转换成 成功态，如果已经是成功态或者失败态 则什么也不做
    // 2.1
    function resolve(value) { // 2.1.1
        // if (value instanceof Promise) {
        //     return value.then(resolve, reject)
        // }
        // setTimeout(function () {
        // 如果是初始态，则转成成功态
        if (self.status == PENDING) {
            self.status = FULFILLED;
            self.value = value; // 成功后会得到一个值，这个值不能改
            // 调用所有成功的回调
            self.onResolvedCallbacks.forEach(cb => cb(self.value));
        }
        // });
    }
    function reject(reason) { // 2.1.2
        // setTimeout(function () {
        // 如果是初始态，则转成失败态
        if (self.status == PENDING) {
            self.status = REJECTED
            self.value = reason; // 把失败的原因给了 value
            self.onRejectedCallbacks.forEach(cb => cb(self.vaule));
        }
        // })
    }
    try {
        // 因为此函数执行可能出异常，所以需要捕获，如果出错了，需要用错误对象 reject
        executor(resolve, reject);
    } catch (e) {
        // 如果这个函数执行失败了，则用失败的原因 reject 这个 promise
        reject(e);
    }
}
function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError('循环引用'));
    }
    let called = false; // promise2 是否已经 resolve 或 reject 了
    if (x != null && ((typeof x == 'object') || (typeof x == 'function'))) {
        // 当我们的 promise 和别的 promise 进行交互，编写这段代码的时候尽量的考虑兼容性，允许别人瞎写
        try {
            let then = x.then
            if (typeof then == 'function') {
                // 有些 promise 会同时执行成功和失败的回调
                then.call(x, function (y) {
                    // 如果 promise2 已经成功或失败了，则不会再处理了
                    if (called) return;
                    called = true;
                    resolvePromise(promise2, y, resolve, reject)
                }, function (err) {
                    if (called) return;
                    called = true;
                    reject(err)
                })
            } else {
                // 到此的话 x 不是一个 thenable 对象，那直接把它当成值 resolve promise2 就可以了
                resolve(x)
            }
        } catch (error) {
            if (called) return;
            called = true;
            reject(error)
        }
    } else {
        // 如果 x 是一个普通的值，则用 x 的值去 resolve promise2
        resolve(x)
    }
}
// onFulfilled 是用来接收 promise 成功的值或者失败的原因
Promise.prototype.then = function (onFulfilled, onRejected) {
    // 如果成功和失败的回调没有传，则表示这个 then 没有任何逻辑，只会把值往后抛
    // 2.2.1
    onFulfilled = typeof onFulfilled == 'function' ? onFulfilled : function (value) { return value };
    onRejected = typeof onRejected == 'function' ? onRejected : reason => { throw reason };
    // 如果当前的 promise 状态已经是成功态了，onFulfilled 直接取值
    let self = this;
    let promise2 = new Promise(function (resolve, reject) {
        debugger
        if (self.status == FULFILLED) {
            setTimeout(function () {
                try {
                    let x = onFulfilled(self.value);
                    // 如果获取到了返回值 x，会走解析 promise 的过程
                    resolvePromise(promise2, x, resolve, reject);
                } catch (error) {
                    // 如果执行成功的回调过程中出错了，用错误原因把 promise2 reject
                    reject(error);
                }
            }, 0)
        }
        if (self.status == REJECTED) {
            setTimeout(function () {
                try {
                    let x = onRejected(self.value);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }
            }, 0)
        }
        if (self.status == PENDING) {
            self.onResolvedCallbacks.push(function () {
                setTimeout(function () {
                    try {
                        let x = onFulfilled(self.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error);

                    }
                }, 0)
            })
            self.onRejectedCallbacks.push(function () {
                setTimeout(function () {
                    try {
                        let x = onRejected(self.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error);
                    }
                }, 0)
            })
        }
    });
    return promise2;

}

Promise.deferred = Promise.defer = function () {
    let defer = {};
    defer.promise = new Promise(function (resolve, reject) {
        defer.resolve = resolve;
        defer.reject = reject;
    });
    return defer;
}
module.exports = Promise;

