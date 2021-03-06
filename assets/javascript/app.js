// GLOBAL VARIABLES
const wordBank = [
  "azure",
  "affix",
  "awkward",
  "blizzard",
  "bikini",
  "beekeeper",
  "crypt",
  "cockiness",
  "cobweb",
  "dizzying",
  "duplex",
  "dwarves",
  "equip",
  "espionage",
  "exodus",
  "fuchsia",
  "flapjack",
  "flopping",
  "galaxy",
  "glyph",
  "gnostic",
  "haiku",
  "hyphen",
  "haphazard",
  "ivory",
  "impossible",
  "invent",
  "jigsaw",
  "jazzy",
  "jawbreaker",
  "kiosk",
  "kilobyte",
  "khaki",
  "lucky",
  "luxury",
  "lengths",
  "matrix",
  "microwave",
  "mystify",
  "nymph",
  "numbskull",
  "nowadays",
  "oxygen",
  "oxidize",
  "ostrich",
  "pixel",
  "peek",
  "psyche",
  "quartz",
  "quips",
  "queue",
  "racks",
  "rhythm",
  "risky",
  "spritz",
  "staff",
  "swivel",
  "topaz",
  "twelfth",
  "transplant",
  "uptown",
  "unzip",
  "unknown",
  "voodoo",
  "vodka",
  "vixen",
  "wave",
  "whiskey",
  "wellspring",
  "xylophone",
  "xenon",
  "xenial",
  "yummy",
  "youthful",
  "yoked",
  "zephyr",
  "zodiac",
  "zipper"
]
let revealWord = ""
let lettersGuessed = []
let chosenWordBlanks = []
let wins = 0
let losses = 0
let guessesLeft = 10
let inProgress = false
let wordGuessed = false
let chosenWord
let chosenWordArray
let keyPressed

// ~~~ MAIN ~~~
function playGame() {
  // Reset variables
  revealWord = ""
  lettersGuessed = []
  chosenWordBlanks = []
  guessesLeft = 10
  wordGuessed = false
  // Pick a word
  chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)]
  chosenWordArray = chosenWord.split("")
  chosenWordArray.map(() => chosenWordBlanks.push("_"))
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
    if (chosenLetter === letter) correct = true // Word Letter = Guess Letter? If so true
  })
  if (correct) {
    for (i=0; i<chosenWordBlanks.length; i++) { // Replace blank with cooresponding letter
      if (chosenWordArray[i] === letter) chosenWordBlanks[i] = letter
    }
    console.log(chosenWordBlanks)
    if (chosenWordBlanks.indexOf("_") === (-1)) wordGuessed = true
  } else if (lettersGuessed.indexOf(letter) === -1) { // If incorrect, decrement guessesLeft and display the letter
    lettersGuessed.push(letter)
    guessesLeft--
    console.log(`Guesses Left: ${guessesLeft}`)
    console.log(`Letters Guessed Incorrectly: ${lettersGuessed}`)
  }
  gameOver()
  statUI()
  gameUI()
}

function gameOver() { // Checks for game over
  if (inProgress) {
    if (guessesLeft === 0 && !wordGuessed) { // No guessesLeft and the word is not guessed
      losses++
      console.log(`Losses: ${losses}`)
      revealWord = chosenWord
      inProgress = false
    } else if (wordGuessed) { // Word is guessed
      console.log(`Word guessed: ${wordGuessed}`)
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
  const word = $("<ul>").addClass("word-list")
  console.log(inProgress)

  for (i=0; i<chosenWordArray.length; i++) {
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
  const theWord = $("<p>").text(`Your word was: ${revealWord}`)
  const winStat = $("<p>").text(`Wins: ${wins}`)
  const lossStat =  $("<p>").text(`Losses: ${losses}`)

  overall.append(winStat).append(lossStat)
  current.append(numberGuessesLeft).append(guessedList).append(theWord)
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
