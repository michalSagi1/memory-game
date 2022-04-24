const cards = ["❤️", "🎷", "🌵", "🦄", "🥁", "🍄", "❤️", "🎷", "🌵", "🦄", "🥁", "🍄"]
const cards1 = ["🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍"]
let openCard = []
let cnt = 0
function createCard(idx) {
    const cardEl = document.createElement("div")
    cardEl.id = idx
    cardEl.innerHTML = cards1[idx];
    cardEl.addEventListener(`click`, (e) => {
        if (cnt < 2) {
            cardEl.innerHTML = cards[idx];
            openCard.push(cardEl.id)
            cnt++
        }
        setTimeout(() => {
            if (cnt == 2) {
                if (cards[openCard[0]] == cards[openCard[1]]) {
                    alert("true")
                } else {
                    alert("false");

                    document.getElementById(openCard[0]).innerHTML = cards1[idx];
                    document.getElementById(openCard[1]).innerHTML = cards1[idx];


                }
            }
        }, 200)


    })



    openCard = []
    cardEl.className = "cards col-12 col-md-5 col-lg-2"
    return cardEl

}



function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
}

shuffle(cards);



const board = document.getElementById("board")

for (i in cards) {
    const element = createCard(i)
    board.appendChild(element)

}
















