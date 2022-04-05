const cards = ["A", "B", "C", "A", "B", "C"]
const board = document.getElementById("board")


 for (i of cards){
    const element = document.createElement("div")
    element.innerHTML = i
    board.appendChild(element)

 }
