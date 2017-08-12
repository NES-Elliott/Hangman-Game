//playHangman Function - entire game created as a function for future use if needed
function playHangman() {
	//Global Variables
	var wins = 0 //Shows the wins, tracted over all games played in the same window
	var losses = 0 //Shows the losses, tracked over all games played in the same window
	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
	  'u', 'v', 'w', 'x', 'y', 'z']; //Array of all the letters in the alphabet. This is use to compare the user's answer with the game answer

	var lives; //Tries before gameover
	var guessed = [ ]; //empty array, shows the characters that the user has already tried
	var wordBank; //The game will only pull from words specified in the word bank array, create this array in the game function

	var word; //The current word picked
	var guess; //The user's guess
	var userLog; //logs how many characters the user has guessed
	var space; //spaces in a word

	var statusLives = document.getElementById("livesBox"); //Used to display the status function info to the user through html
	var userGuessed = document.getElementById("guessBox"); //Used to access the guessed box

	//Key Press Function - when a letter key is pressed, checks if the letter is present in the word.
	//If not, subtracts from lives.
	//Regardless of if correct or not, logs the letter in the guessed box and states that the letter was already guessed.
	function keyPress() {

		//When a key is pressed...
		document.onkeyup = function(event) {
			//save the user key to a variable
			guess = event.key;
			console.log(guess);
			guessed.push(guess);
			console.log(guessed);

			//checks that the user key is a letter
			for (var j = 0; j < alphabet.length; j++) {
				if ((guess === alphabet[j])) {
					//every time a letter key is pressed, cycle through all the letters of the current word
					for (var i = 0; i < word.length; i++) {
						//checks if the word contains the letter that the user pressed
						if (word[i] === guess) {
							userLog ++;
							console.log(userLog);
						}
					}
					//checks if the letter that the user inputted is in the current word
					var w = (word.indexOf(guess));
					if (w === -1) { //if not, decrease lives by 1, tells the status function
						lives --;
						status();
					} else { //if it is, tells the status function - adds class to the letter to tell that this one was correct with css
						
						//add class to letters
						status();
					} 
				}
			}
		}
	} //end of keyPress Function

	//Hangman Function - main game logic
	function hangman() {
		//Accesses the holder id in html
		wordHolder = document.getElementById("holder");
		//Creates an unordered list element in the html
		correct = document.createElement("ul");

		//checks the letters in the current word
		for (var i = 0; i < word.length; i++) {
			//creates an unordered list and gives it an id of "my-word"
			correct.setAttribute("id", "my-word");
			//creates a list tag for the user guess and gives it a class of "guess"
			guess = document.createElement("li");
			guess.setAttribute("class", "guess");

			//places underscores for the current word and checks if the word has a hyphen in it
			if (word[i] === "-") {
				//if it does, it fills it in, and adds one to space
				guess.innerHTML = "-";
				space = 1;
				// if it doesnt, then it makes the character an underscore
			} else {
				guess.innerHTML = "_";
			}

			wordHolder.appendChild(correct);
			correct.appendChild(guess);
		}
	} //end of hangman Function

	//Status Function - keeps track of score, lives. Basically, our score keeper
	//Displays this info to the user
	function status() {
		//Replaces the text in the livesBox id tag with this
		statusLives.innerHTML = "You have " + lives + " lives.";

		//checks if the player more than 0 lives, if not game ends
		if (lives < 1) {
			statusLives.innerHTML = "Game Over";
		}

		//checks if a letter has entered the guessed array
		for (var i = 0; i < guessed.length; i++) {
			//
			if (userLog + space === guessed.length) {
				statusLives.innerHTML = "You Win!";
			}
		}
	} //end of status Function

	//Game function - used to launch and reset the game.
	game = function() {

		wordBank = ["sonic", "knuckles", "tails", "mario", "luigi", "peach", "mega-man", "kirby"]

		word = wordBank[Math.floor(Math.random() * wordBank.length)];

		word = word.replace(/\s/g, "-");

		console.log(word);

		guessed = [ ];
		lives = 9;
		userLog = 0;
		space = 0;

		hangman();
		status();
		keyPress();	
	} //end of game Function

	game();

}; //end of playHangman Function

playHangman();

