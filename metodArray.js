let friends = [
    {id: 1, name: "Dima", age: 32, isMarried: true, scores: 44},
    {id: 2, name: "Alena", age: 30, isMarried: true, scores: 95},
    {id: 3, name: "Denis", age: 22, isMarried: false, scores: 23},
    {id: 4, name: "Olga", age: 33, isMarried: true, scores: 100},
    {id: 5, name: "Lesha", age: 15, isMarried: false, scores: 35},
]
// forEach – для перебора массива.
// filter – для фильтрации массива.
// every/some – для проверки массива.
// map – для трансформации массива в массив.
// reduce/reduceRight – для прохода по массиву с вычислением значения.

// развернутый .map под капотом
function itMap(arr, callbackFn) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = callbackFn(arr[i])
    }
    return newArr
}
//console.log(friends.map(friends => friends.name.length))

// forEach
friends.forEach(function (value, index) {
    //console.log(`index ${index} , el: ${value.name}`)
})
friends.forEach(function (value) {
    //console.log(`name ${value.name} , age: ${value.age}`)
})

//деструктуризация
const incAge = fr => ({...fr, age: fr.age + 1}) // сокращенный код
function incAge2(fr) {
    const copySt = {...fr}
    copySt.age += 1
    return copySt
}
 // console.log(itMap(friends, incAge) === friends) //false
 // console.log(itMap(friends, incAge2) === friends) //false

// filter под капотом
function itFilter(arr, callbackFn) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (callbackFn(arr[i]) === true) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
let arr = friends.filter(st => st.age < 20)
let arrName = friends.filter(st => st.name.length > 3)
// console.log(arr)
// console.log(arrName)


// Find под капотом
function itFind(arr, callbackFn) {
    for (let i = 0; i < arr.length; i++) {
        if (callbackFn(arr[i]) === true) {
            return (arr[i])
        }
    }
}
//console.log(itFind(friends, fr => fr.name === "Alena"))