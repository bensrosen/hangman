const prompt = require("readline-sync");
const wordBank = require("./wordbank.js");

//create an array of words followed by an array of letters
//pick one random word from the wordBank
let word = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(word, "The Answer");
//set up answerArray to show how many letters there are in the word using underscores _
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  // here
  answerArray.push("_");
}

// let Letters =
let guessLetter = () => {
  return prompt.question("What letter are you guessing?");
};

//create store in a variable and integrate into if statement

// create a variable to inform how many remainingLetters there are to be guessed
//let remainingLetters = word.length;
let wrongGuess = 0;
while (wrongGuess < 6) {
  display = "Keep guessing";
  console.log(answerArray.join(""));
  const result = guessLetter();
  console.log("result", word.indexOf(result));
  if (word.indexOf(result) >= 0) {
    console.log("Correct");
  } else wrongGuess++;

  let Letters = [
    "A",
    "a",
    "B",
    "b",
    "C",
    "c",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let isLetters = Letters.includes("A");

  console.log(Letters);
  console.log(isLetters);
  /* let Letters = ["A","a","B","b","C","c","D","E","F","G","H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T" , "U", "V", "W", "X","Y","Z","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  if (letters=A-Z,a-z) return true
  else return false 
  if [A-Za-z].test(word)
  [^0-9]=false*/
  console.log(Letters.includes("$"));

  //line 42 is replacing underscores with letter guessed if its correct

  // user guess correctly, now this happens : replace underscrore with correct letter
  for (let counter = 0; counter < word.length; counter++) {
    // The letter in position ____ ("counter"), is that what the user guessed? ("l")
    let letterWeAreComparingTo = word.charAt(counter);
    if (result === letterWeAreComparingTo) {
      // How do we subsitute?
      answerArray[counter] = result;
    }
  }
  const guessAgain = answerArray.includes("_");
  console.log(guessAgain, "has underscores");

  if (guessAgain === true) {
    console.log("try again");
  } else {
    console.log("You Win! Game Over!");
    break;
  }
}

// if number of "not correct" === 6 then "Game Over, next round"
if (wrongGuess === 6) {
  console.log("Game Over !Begin New Round");
}

let gamesPlayed = 0;

/* */

//if guessLetter(![A-Z,a-z]).test(answer)
