// Task 1
console.log(10 + '4'); //104 конкатинация
console.log(10 * '4'); // 40
console.log(10 - '4'); // 6
console.log(true + true); // будет 2, потому что true приводится к единице(1)
console.log([20, 4, 4] + {}); // 20,4,4 [obj, obj]-объект приводиться к строке
console.log((true + false) === (2 + false)) // преобразование к числу 1 === 2 => false
console.log(true & true) // 1
console.log(false & false) // 0
console.log(false & true) // 0

// Task 2
const user = {
    name: 'Alex',
    hello: function () {
        console.log(`Hello, ${this.name}`)
    }
}
setTimeout(user.hello, 1000) // Hello, undefined - функция не сработает, нужно воспользоваться .bind(user) или ()=>user.hello()

// Task 3
const a = {
    go: function () {
        console.log(this.toString())
    },
    run: () => {
        console.log(this)
    },
    stop: function () {
        //this -> a
        (() => {
            console.log(this)
        })()
    }
}
a.go(); // [obj, obj], this =  a.toString return [obj,obj]
a.run(); // {} window
a.stop(); // a = {go: [Func: go], run: [Func: run], stop: [Func: stop}}

//Task 4
function User (name) {
    this.name = name
    console.log(this)
    return this
}
const admin = new User("Dima");
const dev = User('Alena')
name = 'Denis'
console.log(admin.name) //Dima
console.log(dev.name) // Denis ссылается на глобальный объект, если вызвать через new то будет 'Alena'

// Task 4
const b = {
    name: 'b',
    getName: function () {
        console.log(this.name)
    }
}
const c = Object.assign({name: 'c'}, b) // копирует свойство объекта 'b' и перезатирает свойства {} 'b'
const d = Object.create(b, {
    name: {
        value: 'd',
        configurable: false,
        writable: true,
        enumerable: false
    }
})
c.getName(); //b
d.getName(); //d
console.log(d.__proto__ === b) //true, 'c' прототипом будет являться объект 'b'

// Task 5
new Promise((res) => {
    res(1)
})
    .then(res => {
        console.log(res)
        return new Promise(() => 2) // зависнет в состоянии 'pending' и дальше не пойдет
    })
    .then(res => console.log(res))
    .then(res => console.log(res))

// Task 6
const arr = [-1, -3, 10, 3, 8, 1];
// const getIndexElement = (arr) => {
//     let temp = [0];
//     arr.forEach( (el, ind) => {
//         if (temp[0] < el) {
//             temp[0] = el;
//             temp[1] = ind;
//         }
//     })
//     return temp
// }
//console.log(getIndexElement(arr))
const getIndexElement = (arr) => {
    let resNum = arr[0];
    let resInd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (resNum < arr[i]) {
            resNum = arr[i]
            resInd = i
        }
    }
    return [resNum, resInd]
}
console.log(getIndexElement(arr))

// Task 7
foo() // выполнится, компилятор запомнит что есть такой вызов и ф-ия
bar() // expression, можно вызвать только после самой ф-ии
function foo () {
    console.log("foo")
}
const bar = function () {
    console.log('bar')
}