//Variables
let user1 = document.getElementById('headOne');
let user2 = document.getElementById('headTwo');
let outputUser1 = document.getElementById('outputOne');
let outputUser2 = document.getElementById('outputTwo');

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
}

function playerTwoName() {
    let display2 = document.getElementById('player2-name').value;
    document.getElementById('UserTwo').innerHTML = `<h3> ${display2} </h3>`;
    user2.innerHTML = `<h3> ${display2} select!!!</h3>`;
}

function showPokeball1() {
    outputUser1.innerHTML = `<img class="selectedPokeballs" src="${pokeImages[0]}" alt="">`;
    changeTitleOne();
}
function showPokeball2() {
    outputUser1.innerHTML = `<img class="selectedPokeballs" src="${pokeImages[1]}" alt="">`;
}

function showPokeball3() {
    outputUser1.innerHTML = `<img class="selectedPokeballs" src="${pokeImages[2]}" alt="">`;
}

function showPokeball4() {
    outputUser2.innerHTML = `<img class="selectedPokeballs" src="${pokeImages[3]}" alt="">`;
}

function showPokeball5() {
    outputUser2.innerHTML = `<img class="selectedPokeballs" src="${pokeImages[4]}" alt="">`;
}

function showPokeball6() {
    outputUser2.innerHTML = `<img class="selectedPokeballs" src="${pokeImages[5]}" alt="">`;
}

function startGame() {

}

function changeTitleOne() {
    user1.innerHTML = `${display1} has Selected!`;
}
