// Task 1
const foo = () => {
    console.log(a)
    console.log(bar())

    function bar() {
        return 2
    }

    var a = 2;
}
foo();
// undefined  - переменная объявлена ниже вызова, если изменить на let то будет ошибка
// 2

// Task 2
(() => {
    let a = b = 5;
})()
console.log(b)
// 5 не строгий режим 'use strict'

// Task 3
const res = (a, b) => {
    console.log(b)
    return {
        obj: (z) => {
            res(a, z)
        }
    }
}
const temp = res(5) // undefined
temp.obj(4) // 4
temp.obj(2) // 2
temp.obj(1) // 1

// Task 4
name = 'Dima'
const a = {
    name: 'Alena',
    prop: {
        name: 'Denis',
        getName: function () {
            return this.name
        }
    }
};
console.log(a.prop.getName()) // Denis --this = объект перед точкой
const test = a.prop.getName;
console.log(test()) // Dima --name будет висеть на window, если повесить let || var => undefined

//Task 5
let i;
for (i = 0; i < 10; i++) {
    setTimeout(() => {
        //console.log(i)
    }, 0)
} // 10 десяток, потому что setTimeout будет вызывать на каждой итерации вызова стэка
//чтобы вывести от 0-9, нужно let перенести в условие

//Task 6
let animal = {
    eats: true
}

function Rabbit(name) {
    this.name = name
}

let rabbit = new Rabbit('White Rabbit')
console.log(rabbit.eats) // undefined --нет у rabbit.eats, он не наследует это свойство
// для того что бы сделать наследование => Rabbit.prototype = animal

//Task 7
function Car(model) {
    this.model = model;
    console.log(model)
}

let car = new Car('Volvo');
let car2 = new car.constructor('XC60')

// new car.__proto__ -> Car.prototype = {constructor: Car}

function Car1() {
}

Car1.prototype = {
    fast: true
}
let car1 = new Car1();
console.log(car1.constructor === Car1) // __proto__ -> Car1.prototype = {fast:true} || Car1.prototype.fast = true
// false потомуч что {} car1 пустой объект => constructor в нем нет

// Task 8
const c = {
    toString() {
        return 'key of c'
    },
    b: {
        name: 'b'
    }
}
const d = {}
d[c] = 'a'
d.b = c.b.name
console.log(d)
// {'key of c':'a', b: 'b'}

// Task 9
String.prototype.repeatIfy = function (n) {
    let res = this.toString()
    for (let i = 0; i < n; i++) {
        res += this
    }
    return res
}
console.log("Hi".repeatIfy(5))