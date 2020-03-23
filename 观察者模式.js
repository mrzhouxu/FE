class Publish {
    constructor() {
        this.list = [];
    }
    register(fn) {
        if (!this.list.includes(fn)) {
            this.list.push(fn)
        } else {
            console.log('该事件已经注册过，请勿重复注册')
        }
    }
    notice() {
        this.list.forEach((fn) => {
            fn();
        })
    }
}

let xxx = new Publish();
function test() {
    console.log(1)
}
xxx.register(test);
xxx.register(test);
xxx.register(test);

xxx.notice();
