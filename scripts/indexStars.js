//Hilfe von KI
function uiStars() {
    for (let i = 0; i < 25; i++) {
        console.log("test");
        let star = document.createElement('div');
        star.classList.add('sparkle');
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.animationDuration = 1.5 + Math.random() * 2 + 's';
        document.body.appendChild(star);
    }
}
let startGamePrep = new Audio('../Audio/rules-NewGame.wav');
startGamePrep.play();

window.onload = function() {
    uiStars();
}