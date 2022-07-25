let buttom = document.getElementById("newGame")
buttom.addEventListener('click', buttom.fn = function fn() {
    location.reload();

})

const card = ["❤️", "❤️", "🌵", "🌵", "🎷", "🎷", "🍄", "🍄", "🦄", "🦄", "🥁", "🥁", "🎵", "🎵", "🎸", "🎸", "🧵", "🧵", "⚽", "⚽"]
const card1 = ["🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍", "🤍"]
let openCard = []
let openCardElem = []
let players = []
let players1 = document.querySelector(".players");
const board = document.getElementById("board")
board.style.display = "none"
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
player1.style.display = "none"
player2.style.display = "none"
let winner = document.getElementById("winner")
winner.style.display = "none"


function creatPleyer(name, score) {
    return {
        name,
        score: score
    }
}

function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
}
function play() {
    var audio = new Audio('yes.wav');
    audio.play();
}
function playNo() {
    var audio = new Audio('no.wav');
    audio.play();
}
function playWin() {
    var audio = new Audio('win.wav');
    audio.play();
}




const startGame = () => {
    // players1.classList.remove("animate__slideInDown");
    // players1.classList.add("animate__zoomOutUp");
    // setTimeout(() => {
    players1.style.display = "none";
    //     players1.classList.remove("animate__zoomOutUp");
    //     players1.classList.add("animate__slideInDown");
    // }, 1500);
    board.style.display = "flex";
    player1.style.display = "block"
    player2.style.display = "block"
    // let playerName1 = document.getElementById("name1").value;
    // let playerName2 = document.getElementById("name2").value;
    players = [
        creatPleyer(document.getElementById("name1").value || "A", 0),
        creatPleyer(document.getElementById("name2").value || "B", 0)
    ]
    player1.innerText = `name: ${players[0].name} | score: ${players[0].score}`
    player2.innerText = `name: ${players[1].name} | score: ${players[1].score}`

    numCards = document.getElementById("numCard").value
    if (numCards == '') {
        numCards = 20
    }
    if ((numCards % 2 != 0) || (numCards > 20)) {
        numCards = prompt("The number of cards must be even, and maximum 20! \n Enter a new number...")
        if ((numCards % 2 != 0) || (numCards > 20)) {
            numCards = 20
        }
    }
    console.log(numCards);

    let cards = card.slice(0, numCards)
    let cards1 = card1.slice(0, numCards)


    let _open = 0
    let turn = 0

    // player1.innerText = `name: ${players[0].name} | score: ${players[0].score}`
    // player2.innerText = `name: ${players[1].name} | score: ${players[1].score}`

    player1.style.backgroundColor = "red"



    let cnt = 0
    function createCard(idx) {
        const cardEl = document.createElement("div")
        cardEl.id = idx
        cardEl.innerHTML = cards1[idx];



        cardEl.addEventListener('click', cardEl.fn = function fn() {
            if (cnt < 2) {
                cardEl.innerHTML = cards[idx];
                openCardElem.push(cardEl)
                openCard.push(cardEl.id)

                cnt++
                console.log(cardEl);

            }
            if (turn == 2) {
                turn = 0
            }
            setTimeout(() => {
                if (cnt == 2) {

                    console.log(players[turn++].name);
                    if (turn == 0) {
                        player2.style.background = "red"
                    }





                    if (cards[openCard[0]] == cards[openCard[1]]) {

                        play()

                        // alert("true")


                        cnt = 0
                        turn--
                        _open++

                        // debugger           

                        openCardElem[0].removeEventListener('click', openCardElem[0].fn, false)

                        openCardElem[1].removeEventListener('click', openCardElem[1].fn, false)

                        openCard = []
                        openCardElem = []


                        players[turn].score += 10
                        console.log(players[turn].score);

                        player1.innerText = `name: ${players[0].name} | score: ${players[0].score}`
                        player2.innerText = `name: ${players[1].name} | score: ${players[1].score}`



                        // player1.innerText = `name: ${players[0].name} | score: ${players[0].score}`
                        // player2.innerText = `name: ${players[1].name} | score: ${players[1].score}`

                        if ((_open == numCards / 2)) {

                            if (players[0].score > players[1].score) {
                                playWin()
                                winner.innerText = `The winner is ${players[0].name}! score: ${players[0].score}`
                                winner.style.display = "flex"
                                //     alert(
                                //         `The winner is ${players[0].name}! score: ${players[0].score}`)
                            }
                            else if (players[0].score < players[1].score) {
                                playWin()
                                winner.innerText = `The winner is ${players[1].name}! score: ${players[1].score}`
                                winner.style.display = "flex"
                                // alert(
                                //     `The winner is ${players[1].name}! score: ${players[1].score}`)
                            }
                            else {
                                winner.innerText = `Teko!  ${players[1].name} - ${players[1].score}  //  ${players[0].name} - ${players[0].score} `
                                winner.style.display = "flex"
                            }

                        }



                    } else {
                        // alert("false");
                        playNo()

                        document.getElementById(openCard[0]).innerHTML = cards1[idx];
                        document.getElementById(openCard[1]).innerHTML = cards1[idx];

                        cnt = 0
                        openCard = []
                        openCardElem = []
                        if (turn == 1) {
                            player2.style.backgroundColor = "red"
                            player1.style.backgroundColor = ""

                        }

                        if (turn == 2) {
                            player1.style.backgroundColor = "red"
                            player2.style.backgroundColor = ""

                        }
                        player1.innerText = `name: ${players[0].name} | score: ${players[0].score}`
                        player2.innerText = `name: ${players[1].name} | score: ${players[1].score}`




                    }
                }
            }, 2000)



        }, false);





        cardEl.className = "cards col-5 col-md-5 col-lg-2 col-xl-2"
        return cardEl

    }
    shuffle(cards);
    for (i in cards) {
        const element = createCard(i)
        board.appendChild(element)

    }

};

let buttonInsertNames = document.getElementById("submit");
buttonInsertNames.addEventListener("click", startGame);







// let numCards = prompt("number cards?... max 20")
// if (numCards % 2 != 0) {
//     numCards = prompt("nust zugi! number cards?... max 20")

// }

// let cards = card.slice(0, numCards || 16)
// let cards1 = card1.slice(0, numCards || 16)







// let players = [
//     creatPleyer(prompt("Enter name:") || "A", 0),
//     creatPleyer(prompt("Enter name:") || "B", 0)
// ]
// let player1 = document.getElementById("player1")
// let player2 = document.getElementById("player2")





// let _open = 0
// let turn = 0

// // player1.innerText = `name: ${players[0].name} | score: ${players[0].score}`
// // player2.innerText = `name: ${players[1].name} | score: ${players[1].score}`

// player1.style.backgroundColor = "red"



// let cnt = 0
// function createCard(idx) {
//     const cardEl = document.createElement("div")
//     cardEl.id = idx
//     cardEl.innerHTML = cards1[idx];



//     cardEl.addEventListener('click', cardEl.fn = function fn() {
//         if (cnt < 2) {
//             cardEl.innerHTML = cards[idx];
//             openCardElem.push(cardEl)
//             openCard.push(cardEl.id)

//             cnt++
//             console.log(cardEl);

//         }
//         if (turn == 2) {
//             turn = 0
//         }
//         setTimeout(() => {
//             if (cnt == 2) {

//                 console.log(players[turn++].name);
//                 if (turn == 0) {
//                     player2.style.background = "red"
//                 }





//                 if (cards[openCard[0]] == cards[openCard[1]]) {

//                     play()

//                     // alert("true")


//                     cnt = 0
//                     turn--
//                     _open++

//                     // debugger

//                     openCardElem[0].removeEventListener('click', openCardElem[0].fn, false)

//                     openCardElem[1].removeEventListener('click', openCardElem[1].fn, false)

//                     openCard = []
//                     openCardElem = []


//                     players[turn].score += 10
//                     console.log(players[turn].score);

//                     player1.innerText = `name: ${players[0].name} | score: ${players[0].score}`
//                     player2.innerText = `name: ${players[1].name} | score: ${players[1].score}`



//                     player1.innerText = `name: ${players[0].name} | score: ${players[0].score}`
//                     player2.innerText = `name: ${players[1].name} | score: ${players[1].score}`

//                     if ((_open == numCards / 2) || (_open == 8)) {

//                         if (players[0].score > players[1].score) {
//                             playWin()
//                             alert(
//                                 `The winner is ${players[0].name}! score: ${players[0].score}`)
//                         }
//                         else if (players[0].score < players[1].score) {
//                             playWin()
//                             alert(
//                                 `The winner is ${players[1].name}! score: ${players[1].score}`)
//                         }
//                         else {
//                             alert(
//                                 `Teko!!`)
//                         }

//                     }



//                 } else {
//                     // alert("false");
//                     playNo()

//                     document.getElementById(openCard[0]).innerHTML = cards1[idx];
//                     document.getElementById(openCard[1]).innerHTML = cards1[idx];

//                     cnt = 0
//                     openCard = []
//                     openCardElem = []
//                     if (turn == 1) {
//                         player2.style.backgroundColor = "red"
//                         player1.style.backgroundColor = ""

//                     }

//                     if (turn == 2) {
//                         player1.style.backgroundColor = "red"
//                         player2.style.backgroundColor = ""

//                     }
//                     player1.innerText = `name: ${players[0].name} | score: ${players[0].score}`
//                     player2.innerText = `name: ${players[1].name} | score: ${players[1].score}`




//                 }
//             }
//         }, 2000)



//     }, false);





//     cardEl.className = "cards col-5 col-md-5 col-lg-2 col-xl-2"
//     return cardEl

// }




// function shuffle(arr) {
//     arr.sort(() => Math.random() - 0.5);
// }

// shuffle(cards);





// const board = document.getElementById("board")

// for (i in cards) {
//     const element = createCard(i)
//     board.appendChild(element)

// }







