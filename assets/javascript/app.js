$(document).ready(function(){
	// ~~~VARIABLES~~~
	var wins;
	var losses;
	var guessesLeft = 10;
	var pickedWord;
	var pickedWordPlaceholders;

	var pickedWordArray = [];
	var lettersGuessed = ["h", "e", "l", "l", "o"];
	var wordBank = ["hello", "jello", "yellow", "fellow"];

	// ~~~SELECTORS~~~
	var newGameBtn = $("#new-game")
	var winsDiv = $("#wins")
	var lossDiv = $("#losses")
	var guessLeftDiv = $("#guesses-left")
	var blankSpaceDiv = $("#blank-spaces")
	var lettersGuessedDiv = $("#letters-guessed")

	// ~~~FUNCTIONS~~~
	// New Game Function ----- 1
	function newGame() {
		// reset guessesLeft
		guessesLeft = 10;
		pickedWordPlaceholders = [];
		lettersGuessed = [];

		pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
		pickedWordArray = pickedWord.split("");

		for (var i = 0; i < pickedWordArray.length; i++) {
			if (pickedWordArray[i] === " ") {
				pickedWordPlaceholders.push(" ");
			} else {
				pickedWordPlaceholders.push("_");
			}
		}

		lettersGuessedDiv.html("");
		blankSpaceDiv.html("");
		blankSpaceDiv.text(pickedWordPlaceholders.join(" "));
	}
	// letterPressed(takes one arg) ----- 2
	function letterPressed(letter) {
		// run a for loop over our pickedWordArray
			// if valOfLetterPressed === pickedWordArray[i]
				// it's a match, placeholdersArray[i] = valOfLetterPressed
				// rewrite placeholdersArray to DOM

			// else (if not a match)
				// guessesLeft --
				// if guessesLeft === 0, alert the player the game is over
					//write Game Over message to DOM and let them know the correct word
	}

	// ~~~EVENT LISTENERS~~~
	// NEW GAME BUTTON ----- 1
	newGameBtn.on("click", function() {
		console.log("working");
		newGame();
		console.log("pickedWord: " + pickedWord);
		console.log(pickedWordArray);
		console.log(pickedWordPlaceholders);
	})
		// when button is pressed, run new game function

	// KEYUP LISTENER ----- 2
	// $(document).on("keyup", function(event) {
		// console.log(event)

		// var keyVal = event.keycode

		// if keyVal is already in lettersGuessedArray
			// if NOT push keyVal into lettersGuessed Array
			// letterPress(keyVal)

		// else, let them know the letter was already guessed
	// })

});