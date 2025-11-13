//Local Storage auslesen 
//100% Human
let data = JSON.parse(localStorage.getItem('gameData'));
    let player1Poke = `<img src="${data.player1Image}" alt=""></img>`;
    let player2Poke = `<img src="${data.player2Image}" alt=""></img>`;
    let player1PokeName = data.player1Name;
    let player2PokeName = data.player2Name;
    let currentPlayer = 1;


//Tic Tac Toe:

let gameMatrix = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
];

let gameOutput =  document.getElementById('game-output');

function setXandO(element) {

    if(currentPlayer % 2 == 0) {
        console.log('O');
        element.style.backgroundImage = `url("${data.player1Image}")`;
        element.style.background = "cover";

    }else {
        console.log('X');
        element.style.backgroundImage = `url("${data.player2Image}")`;
        element.style.background.size = "cover";

    }
    currentPlayer++;
}