const cards = ["A", "B", "C", "A", "B", "C", "A", "B", "C", "A", "B", "C"]

function createCard(idx){
    const cardEl=document.createElement("div")
    cardEl.innerHTML=cards[idx];
    cardEl.id=idx 
    cardEl.className="cards"

    return cardEl
}

function shuffle (arr){
    arr.sort(() => Math.random() - 0.5);
 }

shuffle(cards);



const board = document.getElementById("board")

 for (i in cards){
    const element = createCard(i)
    board.appendChild(element)

 }

 
 
//      document.getElementById("0").onmouseover = function() {mouseOver()};
//      document.getElementById("0").onmouseout = function() {mouseOut()};

    
//  function mouseOver() {
//     document.getElementById("0").style.backgroundColor= "rgb(77, 9, 9)";
//   } 
//   function mouseOut() {
//   document.getElementById("0").style.backgroundColor = "rgb(227, 178, 199)"
// }










 