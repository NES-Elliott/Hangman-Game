// GLOBAL VARIABLES
// Determined
const wordBank = ["red", "green", "blue"]
const lettersGuessed = []
let chosenWordBlanks = []
let wins = 0
let losses = 0
let guessesLeft = 10
let inProgress = false
let wordGuessed = false
// Undetermined
let chosenWordArray
let keyPressed

// ~~~ MAIN ~~~
function playGame() {
  // Reset variables
  chosenWordBlanks = []
  guessesLeft = 10
  wordGuessed = false
  // Pick a word
  let chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)]
  chosenWordArray = chosenWord.split("")
  // Populate UI
  gameUI()
  statUI()
  inProgress = true
  playButton()
}
// ~~~ MAIN END ~~~

// ~~~ LOGIC ~~~
function detectLetterPressed() { // Capture key clicks
  keyPressed = String.fromCharCode(event.keyCode).toLowerCase()
  let isLetter = /[a-z]/g.test(keyPressed)
  if (isLetter) checkCorrect(keyPressed)
}

function checkCorrect(letter) { // Check for match
  let correct = false
  chosenWordArray.map(chosenLetter => {
    if (chosenLetter === letter) correct = true
  })
  if (correct) {
    console.log("correct")
    for (i=0; i<chosenWordBlanks.length; i++) {
      if (chosenWordArray[i] === letter) chosenWordBlanks[i] = letter
    }
    console.log(chosenWordBlanks)
    if (chosenWordBlanks.indexOf("_") === (-1)) wordGuessed = true
  } else if (lettersGuessed.indexOf(letter) === -1) {
    lettersGuessed.push(letter)
    guessesLeft--
    console.log(lettersGuessed)
    console.log(`Guesses left: ${guessesLeft}`)
  }
  gameOver()
  statUI()
  gameUI()
}

function gameOver() { // Checks for game over
  if (inProgress) {
    if (guessesLeft === 0 && !wordGuessed) {
      losses++
      console.log(`Losses: ${losses}`)
      inProgress = false
    } else if (wordGuessed) {
      wins++
      console.log(`Wins: ${wins}`)
      inProgress = false
    }
  }
  playButton()
}
// ~~~ LOGIC END ~~~

// ~~~ UI ~~~
function playButton() {
  if (inProgress) {
    $(".play").text("Reset")
  } else {
    $(".play").text("Play Again")
  }
}

function gameUI() { // Game UI Visuals
  $(".game").html("")
  const gameDiv = $(".game")
  const word = $("<ul>")

  for (i=0; i<chosenWordArray.length; i++) {
    if (!inProgress) chosenWordBlanks.push("_")
    word.append($("<li>").text(chosenWordBlanks[i]))
  }
  gameDiv.append(word)
}

function statUI() {
  $(".stats").html("")
  const statDiv = $(".stats")
  const overall = $("<div>").addClass("overall")
  const current = $("<div>").addClass("current")

  const numberGuessesLeft = $("<p>").text(`# of Guesses Left: ${guessesLeft}`)
  const guessedList = $("<p>").text(`Wrong Letters Guessed: ${lettersGuessed}`)
  const winStat = $("<p>").text(`Wins: ${wins}`)
  const lossStat =  $("<p>").text(`Losses: ${losses}`)

  overall.append(winStat).append(lossStat)
  current.append(numberGuessesLeft).append(guessedList)
  statDiv.append(overall).append(current)
}
// ~~~ UI END ~~~

// RUN
$(document).ready(function() {
  console.log("ready")
  $(".play").on("click", playGame)
})
// DETECT KEY PRESSES
document.onkeyup = function(event) {
  if (inProgress) detectLetterPressed()
}
