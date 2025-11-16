//Local Storage auslesen 
//100% Human

let data = JSON.parse(localStorage.getItem('gameData'));
let player1Poke = `<img src="${data.player1Image}" alt=""></img>`;
let player2Poke = `<img src="${data.player2Image}" alt=""></img>`;
let player1PokeName = data.player1Name || "Player 1";
let player2PokeName = data.player2Name || "Player 2";
let currentPlayer = randomPlayer();
let initialStartPlayer = currentPlayer;
let row = 0;
let c = 0;

let playerSound = new Audio('../Audio/Player2.wav');
let winnerSound = new Audio('../Audio/Winning.wav');
let drawSound = new Audio('../Audio/TIE.wav');
let fieldUsed = new Audio('../Audio/field-used.wav');
let loadedGame = new Audio('../Audio/LoadedGame.wav');

// Prüfen, ob der Sound schon abgespielt wurde
let loadedPlayed = localStorage.getItem("loadedPlayed");

if (!loadedPlayed) {
    loadedGame.play();
    localStorage.setItem("loadedPlayed", "true");
}


//Tic Tac Toe:
let gameMatrix = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
];

function randomNumGen() {
    let rand = Math.floor(Math.random() * 3) + 1;
    return rand;
}

function randomPlayer() {
    let rand = Math.floor(Math.random() * 2) + 1;
    return rand;
}

let player1Colors = [
    "#f88e8eff",
    "#440F07",
    "#077DCC"
];

let player2Colors = [
    "#b99415",
    "#AE0E0E",
    "#833773"
];

let gameOutput = document.getElementById('game-output');

if (currentPlayer == 2) {
    gameOutput.style.color = `${player1Colors[randomNumGen() - 1]}`;
    gameOutput.innerHTML = `<h2>${player2PokeName} it is your turn!</h2>`;
} else {
    gameOutput.style.color = `${player2Colors[randomNumGen() - 1]}`;
    gameOutput.innerHTML = `<h2>${player1PokeName} it is your turn!</h2>`;
}



function setXandO(element) {

    if (element.dataset.filled === "true") {
        let originalText = gameOutput.innerHTML;
        gameOutput.innerHTML = `<h2 id="Error-Message">Dieses Feld ist bereits belegt!</h2>`;
        fieldUsed.play();
        let error = document.getElementById('Error-Message');
        error.style.color = "red";
        error.style.fontSize = "2rem";
        error.style.marginBottom = "50%"

        setTimeout(() => {
            gameOutput.innerHTML = originalText;
        }, 1000);
        return;
    }
    if (currentPlayer % 2 == 0) {
        element.style.backgroundImage = `url("${data.player2Image}")`;
        element.style.background.size = "cover";
        gameOutput.innerHTML = "";
        gameOutput.style.color = `${player1Colors[randomNumGen() - 1]}`;
        gameOutput.innerHTML += `<h2>${player1PokeName} it is your turn!</h2>`;
        element.dataset.filled = "true";
        addNumberToField(element);
        playerSound.play();
    } else {
        element.style.backgroundImage = `url("${data.player1Image}")`;
        element.style.background = "cover";
        gameOutput.innerHTML = "";
        gameOutput.style.color = `${player2Colors[randomNumGen() - 1]}`;
        gameOutput.innerHTML += `<h2>${player2PokeName} it is your turn!</h2>`;
        element.dataset.filled = "true";
        addNumberToField(element);
        playerSound.play();
    }
    console.log(`CurrentPlayer: ${currentPlayer}`)
    currentPlayer++;

    let winner = checkWinner();
    if (winner == 2) {
        console.log('Kreis hat gewonnen')
        gameOutput.innerHTML = `<h2 id="winnerSent">${player2PokeName} YOU HAVE WON!</h2>`;
        winnerSound.play();
        disableBoard();
        showEndResult();
    } else if (winner == 1) {
        console.log('X hat gewonnen');
        gameOutput.innerHTML = `<h2 id="winnerSent">${player1PokeName} YOU HAVE WON!</h2>`;
        winnerSound.play();
        disableBoard();
        showEndResult();
    }

    if (winner == 0) {
        if ((currentPlayer == 11 && initialStartPlayer == 2) ||
            (currentPlayer == 10 && initialStartPlayer == 1)) {
            gameOutput.innerHTML = `<h2 id="tie"> NOBODY HAS WON TIE!</h2>`;
            drawSound.play();
            disableBoard();
            showEndResult();
        }
    }
}

function addNumberToField(element) {
    row = parseInt(element.dataset.row);
    c = parseInt(element.dataset.col);
    let digitPlayerOne = 1;
    let digitPlayerTwo = 10;

    if (currentPlayer % 2 == 0) {
        gameMatrix[row][c] = digitPlayerTwo; // Spieler2
    } else {
        gameMatrix[row][c] = digitPlayerOne; // Spieler1
    }
}

function checkWinner() {
    for (let r = 0; r < 3; r++) {
        let sumRow = gameMatrix[r][0] + gameMatrix[r][1] + gameMatrix[r][2];
        if (sumRow == 3) {
            return 1;
        }

        if (sumRow == 30) {
            return 2;
        }
    }

    for (let c = 0; c < 3; c++) {
        let sumCol = gameMatrix[0][c] + gameMatrix[1][c] + gameMatrix[2][c];
        if (sumCol == 3) {
            return 1;
        }
        if (sumCol == 30) {
            return 2;
        }
    }

    let sumDiag1 = gameMatrix[0][0] + gameMatrix[1][1] + gameMatrix[2][2];
    let sumDiag2 = gameMatrix[0][2] + gameMatrix[1][1] + gameMatrix[2][0];

    if (sumDiag1 == 3 || sumDiag2 == 3) {
        return 1;
    }

    if (sumDiag1 == 30 || sumDiag2 == 30) {
        return 2;
    }

    return 0;
}

function disableBoard() {
    let fields = document.querySelectorAll('.field');
    fields.forEach(function (field) {
        field.style.pointerEvents = 'none';
        field.style.opacity = '0.5';
    });
    console.log("Alle Felder wurden deaktiviert. Das Spiel ist vorbei!");
}

function showEndResult() {
    gameOutput.innerHTML += 
    `<div id="Grid-End-Buttons">
        <div onclick="startNewGame()" id="newGame">Homepage</div>
        <div onclick="reloadGame()" id="indexGame">ReloadGame</div>
    </div>`;
}

function reloadGame() {
    window.location.reload();
}

function startNewGame() {
    localStorage.removeItem("loadedPlayed");
    window.location.href = "../index.html";
}


function stopAudio() {
  loadedGame.pause();
  loadedGame.currentTime = 0

}