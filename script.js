const button = document.getElementById("button");
let input = document.getElementById("input-box");
let winBox = document.getElementById("win-box");

let computerChoice = Math.random();
let compRes;
let gameOver = false;

if (computerChoice < 0.34) {
    compRes = "rock";
    console.log(compRes);
} else if(computerChoice <= 0.67) {
    compRes = "paper";
    console.log(compRes)
} else {
    compRes = "scissors";
    console.log(compRes)
}

button.addEventListener("click", function comparePlay() {
    if (gameOver === false) {
        if (compRes.toLowerCase() === input.value.toLowerCase()) {
            winBox.innerHTML = "Draw!";
            gameOver = true;
        } else if (compRes.toLowerCase() === "rock") {
            if (input.value.toLowerCase() === "paper") {
                winBox.style.backgroundImage = "url(Rock.png)";
                winBox.innerHTML = "You lose...";
                gameOver = true;
            } else {
                winBox.style.backgroundImage = "url(scissors.png)";
                winBox.innerHTML = "You win!";
                gameOver = true;
            }
        } else if (compRes.toLowerCase() === "scissors") {
            if (input.value.toLowerCase() === "rock") {
                winBox.style.backgroundImage = "url(scissors.png)";
                winBox.innerHTML = "You lose...";
                gameOver = true;
            } else {
                winBox.style.backgroundImage = "url(Paper.png)";
                winBox.innerHTML = "You win!";
                gameOver = true;
            }
        } else if (compRes.toLowerCase() === "paper") {
            if (input.value.toLowerCase() === "scissors") {
                winBox.style.backgroundImage = "url(Paper.png)";
                winBox.innerHTML = "You lose...";
                gameOver = true;
            } else {
                winBox.style.backgroundImage = "url(Rock.png)";
                winBox.innerHTML = "You win!";
                gameOver = true;
            }
        }
    }
})

document.getElementById("reset").addEventListener("click", function resetBoard() {
    window.location.reload()
});