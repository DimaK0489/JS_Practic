// bubble sort
const array = [23, 54, 3, 34, 766, 4556, 9];
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j + 1]
            array[j + 1] = array[j]
            array[j] = temp
        }
    }
}
console.log(array)

const friendsName = ["Dima", "Alena", "Oleg", "Denis", "?", "0", "Lera"]
//console.log(friendsName.sort());

const number = [-4, 10, -5, 8, -1, 0, 6, 64, 2]
function compare (a,b) {
    if (a<=b) {
        return -100
    }else {
        return 100500
    }
}
//console.log(number.sort(compare))

let friends = [
    {id: 1, name: "Dima", age: 32, isMarried: true, scores: 44},
    {id: 2, name: "Alena", age: 30, isMarried: true, scores: 95},
    {id: 3, name: "Denis", age: 22, isMarried: false, scores: 23},
    {id: 4, name: "Olga", age: 33, isMarried: true, scores: 100},
    {id: 5, name: "Lesha", age: 15, isMarried: false, scores: 35},
]
//console.log(friends.sort((a,b) => b.scores - a.scores))
//console.log(friends.sort((a,b) => a.age - b.age))
console.log(friends.sort((a,b) => {
    if (a.name <= b.name) {
        return -1
    }else {
        return 1
    }
}))