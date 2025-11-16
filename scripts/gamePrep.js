//Variables
let user1 = document.getElementById('headOne');
let user2 = document.getElementById('headTwo');
let outputUser1 = document.getElementById('outputOne');
let outputUser2 = document.getElementById('outputTwo');
let startButton = document.getElementById('start-button');

let hasPlayer1Input = false;
let hasPlayer2Input = false;
let hasPlayer1SelectedAPokeball = false;
let hasPlayer2SelectedAPokeball = false;

let newGameSound = new Audio('../Audio/New-Game.wav');
let pokeballSelectSound1 = new Audio('../Audio/Pokeselect.wav');
let pokeballSelectSound2 = new Audio('../Audio/Pokeselect.wav');
let nameSelectSound = new Audio('../Audio/Name-Select.wav');

//Arrays
let pokeImages = [
    "../Images/pokeballs/poke1.png",
    "../Images/pokeballs/poke2.png",
    "../Images/pokeballs/poke3.png",
    "../Images/pokeballs/poke4.png",
    "../Images/pokeballs/poke5.png",
    "../Images/pokeballs/poke6.png",
];

//Functions
function playerOneName() {
    let display1 = document.getElementById('player1-name').value;

    if (display1 == "") {
        display1 = "Player 1";
    }
    document.getElementById('UserOne').innerHTML = `<h3> ${display1} </h3>`;
    user1.innerHTML = `<h3 class="userSelectText"> ${display1} select!!!</h3>`;
    hasPlayer1Input = true;
    nameSelectSound.play();
    checkifReady();
}

function playerTwoName() {
    let display2 = document.getElementById('player2-name').value;

    if (display2 == "") {
        display2 = "Player 2";
    }

    document.getElementById('UserTwo').innerHTML = `<h3> ${display2} </h3>`;
    user2.innerHTML = `<h3 class="userSelectText"> ${display2} select!!!</h3>`;
    nameSelectSound.play();
    hasPlayer2Input = true;
    checkifReady();
}

function showPokeball1() {
    outputUser1.innerHTML = `<img class="selectedPokeballs" src="${pokeImages[0]}" alt="">`;
    hasPlayer1SelectedAPokeball = true;
    checkifReady();
    pokeballSelectSound1.play();
}
function showPokeball2() {
    outputUser1.innerHTML = `<img class="selectedPokeballs" src="${pokeImages[1]}" alt="">`;
    hasPlayer1SelectedAPokeball = true;
    checkifReady();
    pokeballSelectSound1.play();
}

function showPokeball3() {
    outputUser1.innerHTML = `<img class="selectedPokeballs" src="${pokeImages[2]}" alt="">`;
    hasPlayer1SelectedAPokeball = true;
    checkifReady();
    pokeballSelectSound1.play();
}

function showPokeball4() {
    outputUser2.innerHTML = `<img class="selectedPokeballs" src="${pokeImages[3]}" alt="">`;
    hasPlayer2SelectedAPokeball = true;
    checkifReady();
    pokeballSelectSound2.play();
}

function showPokeball5() {
    hasPlayer2SelectedAPokeball = true;
    outputUser2.innerHTML = `<img class="selectedPokeballs" src="${pokeImages[4]}" alt="">`;
    checkifReady();
    pokeballSelectSound2.play();
}

function showPokeball6() {
    hasPlayer2SelectedAPokeball = true;
    outputUser2.innerHTML = `<img class="selectedPokeballs" src="${pokeImages[5]}" alt="">`;
    checkifReady();
    pokeballSelectSound2.play();
}

function startGame() {
    // Namen holen

    const player1Name = document.getElementById('player1-name').value;
    const player2Name = document.getElementById('player2-name').value;

    // Pokéball-Bilder holen
    const player1Image = document.querySelector('#outputOne img')?.src;
    const player2Image = document.querySelector('#outputTwo img')?.src;

    // Objekt mit allen Infos
    const gameData = {
        player1Name,
        player2Name,
        player1Image,
        player2Image
    };

    localStorage.setItem('gameData', JSON.stringify(gameData));

    window.location.href = "game.html";
}

function changeTitleOne() {
    user1.innerHTML = `${display1} has Selected!`;
}

function checkifReady() {
    if (hasPlayer1Input && hasPlayer2Input && hasPlayer1SelectedAPokeball && hasPlayer2SelectedAPokeball) {

        newGameSound.play();
        let newDiv = document.createElement('div');
        newDiv.id = 'ready-button';
        newDiv.className = 'innerGrid7';
        newDiv.textContent = 'Start';
        newDiv.onclick = startGame; // onclick-Event direkt zuweisen

        startButton.replaceWith(newDiv);
        newDiv.innerHTML = `<div onclick="startGame()" id="ready-button" class="innerGrid7">start</div>`;
    }
}

// Allow pressing Enter in the name inputs to confirm the name (same as clicking the Set button)
document.addEventListener('DOMContentLoaded', function () {
    let p1 = document.getElementById('player1-name');
    let p2 = document.getElementById('player2-name');

    if (p1) {
        p1.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                playerOneName();
            }
        });
    }

    if (p2) {
        p2.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                playerTwoName();
            }
        });
    }
});
