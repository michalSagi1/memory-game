const cards = ["❤️", "❤️", "🌵", "🌵", "🎷", "🎷", "🍄", "🍄", "🦄", "🦄", "🥁", "🥁"]
const cards1 = ["🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍"]
let openCard = []

// let yourName1=prompt("Name player 1:")
// let yourName2=prompt("Name player 2:")

function creatPleyer(name, score){
    return{
        name,
        score: score
    }
}
let players = [
    creatPleyer("player 1",0),
    creatPleyer("player 2",0)
]

let player1= document.getElementById("player1")
let player2= document.getElementById("player2")


let open=0
let turn =0

player1.innerText=`name: ${players[0].name} | score: ${players[0].score}`
player2.innerText=`name: ${players[1].name} | score: ${players[1].score}`

player1.style.backgroundColor="red"

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
        if (turn==2){
            turn=0
        }
        setTimeout(() => {
            if (cnt == 2) {
            
                console.log(players[turn++].name);
                if(turn==0){
                    player2.style.background="red"
                }
                

                

                if (cards[openCard[0]] == cards[openCard[1]]) {
                    
                    
                    // alert("true")
                

                    cnt=0
                    openCard = []
                    turn--
                    open++

                    

                    players[turn].score+=10
                    console.log(players[turn].score);
                    
                    player1.innerText=`name: ${players[0].name} | score: ${players[0].score}`
                    player2.innerText=`name: ${players[1].name} | score: ${players[1].score}`

                   removeEventListener

                    if (open==6){

                        if(players[0].score>players[1].score){
                            alert(`The winner is player1! score: ${players[0].score}`)
                        }
                        else if (players[0].score<players[1].score){
                            alert(`The winner is player2! score: ${players[1].score}`)
                        }
                        else{
                            alert("Teko!")
                        }
                        
                    }

                    
                    
                } else {
                    // alert("false");

                    document.getElementById(openCard[0]).innerHTML = cards1[idx];
                    document.getElementById(openCard[1]).innerHTML = cards1[idx];

                    cnt=0
                    openCard = []

                    if (turn==1){
                        player2.style.backgroundColor="red"
                        player1.style.backgroundColor=""

                    }

                    if(turn==2){
                        player1.style.backgroundColor="red"
                        player2.style.backgroundColor=""

                    }
                    player1.innerText=`name: ${players[0].name} | score: ${players[0].score}`
                    player2.innerText=`name: ${players[1].name} | score: ${players[1].score}`
                    



                }
            }
        }, 1500)



    })

    

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
















