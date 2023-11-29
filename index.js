let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let playerEl = document.getElementById("player-el");

let cards = []
let sum = 0;

let player = {
	name: "Chopper",
	chips: 500
}

let hasBlackJack = false;
let isAlive = false;
let message = "";


playerEl.textContent = player.name + ": $" + player.chips;



function getRandomCard() {
  min = Math.ceil(1);
  max = Math.floor(11);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function startGame() {
	if (player.chips > 0) {
		cards = []
		cards[0] = getRandomCard(); 
		cards[1] = getRandomCard();
		sum = cards[0] + cards[1];
		
		hasBlackJack = false;
		isAlive = true;
		
		message = "Want to play a round?";
		
		playGame();
	}
}

function playGame() {
	cardsEl.textContent = "Cards: "
	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " ";
	}
	
	sumEl.textContent = "Sum: " + sum;
	
	if (sum <= 20) {
		message = "Do you want to draw a new card?";
	}
	else if (sum === 21) {
		message = "You've got blackjack!";
		hasBlackJack = true;
		player.chips += 50;
	}
	else {
		message = "You're out of the game.";
		isAlive = false;
		player.chips -= 10;
	}
	
	messageEl.textContent = message;
	playerEl.textContent = player.name + ": $" + player.chips;
}

function newCard() {
	if (isAlive && !hasBlackJack) {
		let newCard = getRandomCard();
		cards.push(newCard);
		sum += newCard;
		playGame();
	}
}