const sm = document.getElementById("small")
const big = document.getElementById("big")
const medium = document.getElementById("medium")

function onClickHandler (e) {
    e.stopPropagation()
    console.dir(e.currentTarget.id)
}
sm.onclick = onClickHandler
medium.onclick = onClickHandler
big.onclick = () => { alert("hey")}


// e.target -- элемент, который сгенерировал событие (первый получил клик)
// e.currentTarget -- элемент, который вызвал обработчик в процессе всплытия
// часто значение e.target и e.currentTarget совпадают, но безопасней использовать e.currentTarget