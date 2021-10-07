const friends = [
    {id: 1, name: "Dima", age: 32, isMarried: true, scores: 44},
    {id: 2, name: "Alena", age: 30, isMarried: true, scores: 95},
    {id: 3, name: "Denis", age: 22, isMarried: false, scores: 23},
    {id: 4, name: "Olga", age: 33, isMarried: true, scores: 100},
    {id: 5, name: "Lesha", age: 15, isMarried: false, scores: 35},
]
const user = {
    name: 'Dmitry',
    age: 32,
    friends: ["Denis", "Lesha", "Olga", "Lera"]
}
//1. Поверхностная копия объекта user
const copyUser = {...user}
//Проверка:
//console.log(copyUser === user)
//console.log(copyUser.friends === user.friends)

//2. Полная (глубокая) копия объекта user
const deepCopyUser = {...user, friends: [...user.friends]};
//Проверка:
// console.log(deepCopyUser === user)
// console.log(deepCopyUser.friends === user.friends)

//3. Поверхностная копия массива friends
const copyFriends = [...friends]
//Проверка:
// console.log(copyFriends === friends)
// console.log(copyFriends[0] === friends[0])

//4. Полная (глубокая) копия массива friends
const deepCopyFriends = friends.map(fr => ({...fr}));
//Проверка:
//console.log(friends === deepCopyFriends)

//5. Сортировка deepCopyFriends по алфавиту
const newSort = deepCopyFriends.sort( (a,b) => {
    if (a.name <= b.name) {
        return -1
    }else {
        return 1
    }
})
//Проверка:
//console.log(newSort)

//5a. Сортировка deepCopyFriends по возросту(старший идёт первым)(sort)
const newSort2 = deepCopyFriends.sort( (a,b) => {
    if (a.age >= b.age) {
        return -1
    }else {
        return 1
    }
})
//console.log(newSort2)

//6. Сформируй массив friends, у которых 30 и более баллов (filter)
const bestFriends = friends.filter(fr => fr.scores >= 30)
//console.log(bestFriends)

//6a."Вырезать" трёх лучших friends из массива deepCopyFriends (splice)
const topFriends = deepCopyFriends.splice(0,3)
// console.log(topFriends)
// console.log(deepCopyFriends)

//6b. Объединить массивы deepCopyFriends и topFriends так,
// чтоб сохранился порядок сортировки (spread-опреатор )
const newDeepCopyFriends = topFriends.concat(deepCopyFriends)
//console.log(newDeepCopyFriends)

//7. Сформируйте массив not isMarried (filter)
const notMarried = newDeepCopyFriends.filter(fr => fr.isMarried !== true)
//console.log(notMarried)

//8. Сформировать массив имён friends (map)
const name = newDeepCopyFriends.map(fr => fr.name)
//console.log(name)

//8a. Сформировать строку из имён friends, разделённых
// - запятой (join)
// - пробелом (join)
const nameWithSpace = name.join(",")
//console.log(nameWithSpace)
const nameWithComma = name.join("-")
//console.log(nameWithComma)

//9. Добавить всем friends свойство "goodFriends" со значением true (map)
const newValueFriends = newDeepCopyFriends.map( fr => {
    let copyFriends = {...fr}
    copyFriends.goodFriends = true
    return copyFriends
})
//console.log(newValueFriends)

//10. Lesha женился.
const friendsIsMarried = friends.map( fr => fr.name === "Lesha" ? {...fr, isMarried: true} : fr)
//console.log(friendsIsMarried)

//11. Найти друга Denis
const searchFriends = friends.find(fr => fr.name === "Denis")
// console.log(searchFriends)

//12. Найти самого старшего друга (reduce)
const oldFriends = friends.reduce( (acc, fr) => acc.age > fr.age ? acc : fr)
//console.log(oldFriends)

//13. Сумма баллов всех друзей
const sumFriends = friends.reduce((acc,fr) => acc + fr.scores,0)
//console.log(sumFriends)

//14.Напишите функцию addFriends, которая принимает параметром массив friends
// и добавляет в каждому другу свойство "friends",
// значением которого является массив имён всех остальных friends из массива,
// за исключением собственного имени
const addFriends = (friends) => {
    const allName = friends.map(s => s.name)

    const newFriends = friends.map(fr => {
        return {
            ...fr,
            friends: allName.filter(name => name !== fr.name)
        }
    })

    return newFriends
}
console.log(addFriends(friends))

