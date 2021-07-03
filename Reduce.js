const arr = [1,2,3,4,5]
const sum = arr.reduce((acc,el) => acc + el)
//console.log(sum)

const max = arr.reduce((acc, el) => acc > el ? acc : el)
//console.log(max)

let friends = [
    {id: 1, name: "Dima", age: 32, isMarried: true, scores: 44},
    {id: 2, name: "Alena", age: 30, isMarried: true, scores: 95},
    {id: 3, name: "Denis", age: 22, isMarried: false, scores: 23},
    {id: 4, name: "Olga", age: 33, isMarried: true, scores: 100},
    {id: 5, name: "Lesha", age: 15, isMarried: false, scores: 35},
]
const result = friends.reduce((acc,fr) => acc + fr.scores,2)/friends.length
//console.log(result)

const dima = friends.reduce( (acc,fr) => fr.name === "Dima" ? fr : acc)
//console.log(dima)

const alena = friends.find(fr => fr.name === "Alena")
//console.log(alena)

const bestFriends = friends.reduce( (acc, fr) => {
    if (fr.scores >= 40) {
        acc.push(fr)
    }
    return acc
},[])
//console.log(bestFriends)

const mainFR = friends.reduce( (acc, fr) => {
    if (fr.isMarried === true) {
        acc.push(fr)
    }
    return acc
},[])
//console.log(mainFR)

const names = friends.reduce( (acc, friends) => {
    acc.push(friends.name)
    return acc
},[])
//console.log(names)

const score = friends.reduce( (acc, fr) => {
    acc.push(fr.scores)
    return acc
},[])
//console.log(score)

const topFriends = friends.reduce( (acc, f) => {
    const newFr = {...f, scores: f.scores + 10}
    acc.push(newFr)
    return acc
},[])
console.log(topFriends)


