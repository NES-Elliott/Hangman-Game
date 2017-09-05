$(document).ready(function(){
	// ~~~VARIABLES~~~
	// wins
	// losses
	// lettersGuessed (array)
	// wordBank (array)
	// guessesLeft
	// pickedWord
	// pickedWordArray
	// pickedWordPlaceholders

	// ~~~FUNCTIONS~~~
	// New Game Function ----- 1
		// reset guessesLeft
		// empty out pickedWordPlaceholders
		// empty out lettersGuessed (both array and DOM)

		// change pickedWord (using Math.floor(Math.random() * array.length)))
		// split pickedWord into an array (array.split(""))
		// loop over pickedWordArray and create blank dashes for over placeholders

		// placeholders.join(" ") to the DOM

	// letterPressed(takes one arg) ----- 2
		// run a for loop over our pickedWordArray
			// if valOfLetterPressed === pickedWordArray[i]
				// it's a match, placeholdersArray[i] = valOfLetterPressed
				// rewrite placeholdersArray to DOM

			// else (if not a match)
				// guessesLeft --
				// if guessesLeft === 0, alert the player the game is over
					//write Game Over message to DOM and let them know the correct word

	// ~~~EVENT LISTENERS~~~
	// NEW GAME BUTTON ----- 1
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