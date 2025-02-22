// game.js
const categories = {
    fruits: ["🍎", "🍌", "🍍", "🍉", "🍓", "🍒", "🍑", "🍊"],
    emojis: ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣"],
    animals: ["🐶", "🐱", "🐭", "🐹", "🐰", "🐸", "🐯", "🦁"],
    planets: ["🌍", "🌕", "🌑", "🌎", "🌙", "🪐", "🌌", "🌟"]
};

let selectedCategory = [];
let flippedCards = [];
let matchedCards = [];
let score = 0;
let timer;

function startGame(category) {
    document.querySelector(".landing-page").style.display = "none";
    document.querySelector(".game-container").style.display = "block";
    
    selectedCategory = [...categories[category], ...categories[category]]; // duplicate the array for pairs
    selectedCategory.sort(() => Math.random() - 0.5); // shuffle the cards

    createGameBoard();
    startTimer();
}

function createGameBoard() {
    const gameBoard = document.getElementById("game-board");
    gameBoard.innerHTML = ""; // clear previous game board
    selectedCategory.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.index = index;
        card.addEventListener("click", handleCardClick);
        card.innerHTML = ""; // Initially hidden content
        gameBoard.appendChild(card);
    });
}

function handleCardClick(event) {
    const card = event.target;

    if (flippedCards.length === 2 || card.classList.contains("flipped") || card.classList.contains("matched")) return;

    card.classList.add("flipped");
    card.innerHTML = selectedCategory[card.dataset.index];
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (selectedCategory[card1.dataset.index] === selectedCategory[card2.dataset.index]) {
        card1.classList.add("matched");
        card2.classList.add("matched");
        score += 10;
        document.getElementById("score").textContent = score;
    } else {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
    }
    flippedCards = [];
    checkGameOver();
}

function checkGameOver() {
    if (document.querySelectorAll(".matched").length === selectedCategory.length) {
        clearInterval(timer);
        alert("You win! Final score: " + score);
    }
}

function startTimer() {
    let timeLeft = 30;
    const timerElement = document.getElementById("timer");
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            alert("Time's up! Final score: " + score);
        }
    }, 1000);
}
