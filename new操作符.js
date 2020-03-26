/**
 * https://juejin.im/post/5bde7c926fb9a049f66b8b52
 * https://juejin.im/post/5c7b963ae51d453eb173896e
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new
 */


// https://juejin.im/post/5c75048cf265da2d98090c75
//  //方案1
// result.__proto__ = Person.prototype; //有一定副作用(可枚举)
// //方案2
// Object.setPrototypeOf(result, Person.prototype);
// //方案3
// result = Object.create(Person.prototype);

function newObject(Con, ...args) {
    let obj = {};
    // let obj = Object.create(null); // TODO 有问题 
    // Object.setPrototypeOf(obj, Con.prototype);
    obj.__proto__ = Con.prototype;  
    let result = Con.apply(obj, args);
    // console.log(result,'----', obj);
    if(typeof result == 'object' && result != null || typeof result == 'function') {
        return result;
    }
    return obj;
    // return result instanceof Object  ? result : obj;
}

function Student(name, age) {
    this.name = name;
    this.age = age;
    // return this;
}
Student.prototype.doSth = function () {
    return this.name;
};
var student1 = newObject(Student, '若', 18);
var student2 = newObject(Student, '川', 18);
// var student1 = new Student('若');
// var student2 = new Student('川');
console.log(student1, student1.doSth()); // {name: '若'} '若'
console.log(student2, student2.doSth()); // {name: '川'} '川'

student1.__proto__ === Student.prototype; // true
student2.__proto__ === Student.prototype; // true
// __proto__ 是浏览器实现的查看原型方案。
// 用ES5 则是：
Object.getPrototypeOf(student1) === Student.prototype; // true
Object.getPrototypeOf(student2) === Student.prototype; // true




function Test(name, age) {
    this.name = name
    this.age = age
}
Test.prototype.sayName = function () {
    console.log(this.name)
}
const a = newObject(Test, 'yck', 26)
console.log(a.name) // 'yck'
console.log(a.age) // 26
a.sayName() // 'yck'