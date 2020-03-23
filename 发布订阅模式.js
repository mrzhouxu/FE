class EventEmitter {
    constructor() {
        this.events = Object.create(null);
    }
    addListener(event, fn) {
        if (this.events[event]) {
            this.events[event].push(fn);
        } else {
            this.events[event] = [fn];
        }
    }
    emit() {
        let key = Array.prototype.shift.call(arguments);
        if (this.events[key]) {
            this.events[key].forEach((fn) => {
                fn(arguments);
            })
        }
    }
}

let xxx = new EventEmitter();
xxx.addListener('eat',function() {
    console.log('小猫吃饭')
})
xxx.addListener('eat',function() {
    console.log('小狗吃饭')
})
xxx.addListener('eat',function() {
    console.log('小猪吃饭')
})

xxx.emit('eat');

