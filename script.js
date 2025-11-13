//Local Storage auslesen 
const data = JSON.parse(localStorage.getItem('gameData'));
    let player1Poke = `<img src="${data.player1Image}" alt=""></img>`;
    let player2Poke = `<img src="${data.player2Image}" alt=""></img>`;
    let player1PokeName = data.player1Name;
    let player2PokeName = data.player2Name;

    const p1 = document.getElementById('player1');
    const p2 = document.getElementById('player2');

    // Anzeigen
    p1.innerHTML = ` ${player1Poke} ${player1PokeName}`;
    p2.innerHTML = ` ${player2Poke} ${player2PokeName}`;

//Tic Tac Toe:

let gameMatrix = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
];