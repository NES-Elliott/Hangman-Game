// GLOBAL VARIABLES
// Determined
const wordBank = ["Red", "Green", "Blue"]
const lettersGuessed = []
let guessesLeft = 10
let wins = 0
let losses = 0
let inProgress = false
let wordGuessed = false
// Undetermined
let chosenWord

// Word is picked from a bank of words at random and stored in a variable
function playGame() {
  // reset variables
  inProgress = true
  guessesLeft = 10
  // pick a new word
  chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)]
  console.log(chosenWord)
  // populate ui
  clearUI()
  gameUI()
  statUI()
}
// ~~~ LOGIC ~~~
// Player clicks a key on their keyboard that cooresponses with the letter they would like to guess
// (ONLY ALLOW LETTERS AND DASHES)


// If the word is guessed correctly, increment the players win score by 1
// If the word is guessed incorrectly and the player has no more guesses, increment the loss score by 1
function gameOver() {
  inProgress = false
  // check if win or loss
  if (guessesLeft === 0 && !wordGuessed) { // If lose
    losses++
    console.log(losses)
  } else if (wordGuessed) { // If win
    wins++
    console.log(wins)
  }
}
// ~~~ LOGIC END ~~~

// ~~~ UI ~~~
function clearUI() {
  $(".game").html("")
  $(".stats").html("")
}

function gameUI() {
  // we want this to append an unordered list to the game div and the cooresponding li tags
  // with the amount of letters within the word that needs to be guessed
  const gameDiv = $(".game")
  const word = $("<ul>")

  for (i=0; i<chosenWord.length; i++) {
    word.append($("<li>").text("_"))
  }
  gameDiv.append(word)
}

function statUI() {
  const statDiv = $(".stats")
  const overall = $("<div>").addClass("overall")
  const current = $("<div>").addClass("current")

  const numberGuessesLeft = $("<p>").text("# of Guesses Left: " + guessesLeft)
  const guessedList = $("<p>").text("Letters Guessed: ")
  const winStat = $("<p>").text("Wins: " + wins)
  const lossStat =  $("<p>").text("Losses: " + losses)

  overall.append(winStat).append(lossStat)
  current.append(numberGuessesLeft).append(guessedList)
  statDiv.append(overall).append(current)
}
// ~~~ UI END ~~~

$(document).ready(function() {
  console.log("ready")
  $(".play").on("click", playGame)
})