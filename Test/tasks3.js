// Task 1
// console.log('1' + true) // конкотенация true в строку => 1true  --если число => тогда выведет 2
// console.log([1,23,3] + true) // возьмет элементы из масива и выведет эти элементы => 1,23,3true
// console.log('1' * 3  + true) // приведет все аргументы к чилам => 4

// Task 2
const name1 = {
    firstName: "Rolls"
}
let name2 = {
    firstName: "Dolls"
}
let name3 = {
    firstName: "Grete"
}
name3 = name2;
name2 = name1;
name3.firstName = 'Tom'
name2.firstName = 'Hanks'
//--переопределение ссылок
// console.log(name1.firstName) // Hanks
// console.log(name2.firstName) // Hanks
// console.log(name3.firstName) // Tom

// Task 3
const a = {
    users: [
        {
            name: {
                firstName: 'Dima',
                lastName: 'Kaleinik'
            }
        },
        {
            name: {
                firstName: 'Denis',
                lastName: 'Dilevski'
            }
        }
    ]
}
const b = {
    ...a,
    users: [...a.users]
    // users: a.users.map(u => ({
    //     ...u,
    //     name: {
    //         ...u.name
    //     }
    // }))
}
b.users.forEach(user => user.name.firstName = 'Alena')
//console.log(a.users[0].name.firstName) // 'Alena' потому что не строгое равенство \\ использовать метод [] map

// Task 4
Object.prototype.name = 'Obj'

const firstVariable = {
    name: 'Variable1.1'
}
const twoVariable = Object.create(firstVariable) // {}__proto__ -> firstVariable
twoVariable.getName = function () {
    console.log(this.name)
}
//twoVariable.getName()
Object.setPrototypeOf(twoVariable, {}) // create {} twoVariable
//twoVariable.getName()

// Task 5
const threeVariable = {}
const fourVariable = {}
const result = Object.getPrototypeOf(threeVariable) === Object.getPrototypeOf(fourVariable)
//console.log(result) // true

// Task 6
const promise = new Promise((res) => {
    res(5)
})
promise.then((data) => {
    return new Promise((res) => {
        res(data)
    }).then(() => 9)
})
    .then(data => {
            console.log(data)
        }
    )
// promise зарезолвится => 9

// Task 7
function User () {
    this.name = "User"
}
User.prototype.age = '32'

function Animal() {
    this.name = 'Animal'
}
Animal.prototype.age = '23'

const u = User.prototype

User.prototype = Animal.prototype

Animal.prototype = u

const user = new User()
const animal = new Animal()

// перезаписывание ссылок prototype, name остануться не изменны
// цепочка {}.__proto__ -> Animal.prototype = {constructor: Animal} -> Object.prototype

// console.log(user.name)
// console.log(animal.name)
// console.log(user.age)
// console.log(animal.age)

// Task 7
const nameN = 'name'
function foo () {
    console.log(this.nameN)
}
//foo(); // undefined // const nameN = {name: 'name} => с помощью bind срабоатет

// Task 8
function setFunc () {
    console.log(this)
}
//setFunc()

const setFunc2 = {
    name: 'Oleg',
    getName: function () {
        return ( () => this.name)()
    }
}
const setFunc3 = {
    name: 'Sergei'
}
Object.setPrototypeOf(setFunc3,setFunc2)
//console.log(setFunc3.getName()) // global{} && Sergei

// Task 9
const five = {
    name: 'Lera',
    getName () {
        console.log(this.name)
    }
}
function A(name) {
    this.name = name
    this.getName = function () {
        console.log(this.name)
    }
}
function B() {
    this.getName = function () {
        console.log(this.name)
    }
    return this
}
const aConstructor = A.bind(five)
const six = new aConstructor('six')

const seven = B.call(five,'Hello')
six.getName() // six
seven.getName() // Lera