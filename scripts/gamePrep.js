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
    document.getElementById('UserOne').innerHTML = `<h3> ${display1} </h3>`;
    user1.innerHTML = `<h3> ${display1} select!!!</h3>`;
    hasPlayer1Input = true;
    checkifReady();
}

function playerTwoName() {
    let display2 = document.getElementById('player2-name').value;
    document.getElementById('UserTwo').innerHTML = `<h3> ${display2} </h3>`;
    user2.innerHTML = `<h3> ${display2} select!!!</h3>`;
    hasPlayer2Input = true;
    checkifReady();
}

function showPokeball1() {
    outputUser1.innerHTML = `<img class="selectedPokeballs" src="${pokeImages[0]}" alt="">`;
    hasPlayer1SelectedAPokeball = true;
    checkifReady();
}
function showPokeball2() {
    outputUser1.innerHTML = `<img class="selectedPokeballs" src="${pokeImages[1]}" alt="">`;
    hasPlayer1SelectedAPokeball = true;
    checkifReady();
}

function showPokeball3() {
    outputUser1.innerHTML = `<img class="selectedPokeballs" src="${pokeImages[2]}" alt="">`;
    hasPlayer1SelectedAPokeball = true;
    checkifReady();
}

function showPokeball4() {
    outputUser2.innerHTML = `<img class="selectedPokeballs" src="${pokeImages[3]}" alt="">`;
    hasPlayer2SelectedAPokeball = true;
    checkifReady();
}

function showPokeball5() {
    hasPlayer2SelectedAPokeball = true;
    outputUser2.innerHTML = `<img class="selectedPokeballs" src="${pokeImages[4]}" alt="">`;
    checkifReady();
}

function showPokeball6() {
    hasPlayer2SelectedAPokeball = true;
    outputUser2.innerHTML = `<img class="selectedPokeballs" src="${pokeImages[5]}" alt="">`;
    checkifReady();
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

    // ✅ Im localStorage speichern
    localStorage.setItem('gameData', JSON.stringify(gameData));

    // Dann zur Game-Seite wechseln
    window.location.href = "game.html";
}

function changeTitleOne() {
    user1.innerHTML = `${display1} has Selected!`;
}

function checkifReady() {
    if (hasPlayer1Input && hasPlayer2Input && hasPlayer1SelectedAPokeball && hasPlayer2SelectedAPokeball) {
    
    let newDiv = document.createElement('div');
    newDiv.id = 'ready-button';
    newDiv.className = 'innerGrid7';
    newDiv.textContent = 'Start';
    newDiv.onclick = startGame; // onclick-Event direkt zuweisen

    startButton.replaceWith(newDiv);
    newDiv.innerHTML = `<div onclick="startGame()" id="ready-button" class="innerGrid7">start</div>`;
    }
}
