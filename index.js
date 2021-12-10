

const prompt = require("readline-sync");
const wordBank = require("./wordbank.js");
  
//create an array of words followed by an array of letters 
//pick one random word from the wordBank
let word = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(word,"The Answer");
//set up answerArray to show how many letters there are in the word using underscores _
let answerArray = []; 
let userGuess = prompt.question ("What letter are you guessing?");
let guessLetter = ()=> {
  return prompt.question("What letter are you guessing?");
}
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";  //for each letter in word there will be an underscore
}
// create a variable to inform how many remainingLetters there are to be guessed
let remainingLetters = word.length; 
let wrongGuess = 0;
while (wrongGuess<6) {
  display="Keep guessing";
  console.log(answerArray.join(""));
  const result = guessLetter();
  console.log("result", word.indexOf(result))
  if (word.indexOf(result) >= 0) {
    // Correct
    console.log("Correct");
// user guess correctly, now this happens : replace underscrore with correct letter 

} else {
    // Not correct
    console.log("Not correct");
    wrongGuess++;
  }
}
// After 6 incorrect guesses
console.log("Game over");


// Step 1 if correct, fill in the underscores with letters

//const answerArray = ["_", "_", "_", "_", "_"]; // I am hardcoding
const result = "l"; // what the user guessed

for (let count = 0; count < word.length; count++) {
  console.log(count);
  const letterInAnswer = word[count];
  console.log(letterInAnswer);
  // You need to find out some condition of when you would make "answerArray[count] = result"
  answerArray[count] = result;
}

console.log(answerArray);


/*function add() {
  let counter = 0;
  function plus() {counter += 1;}
  plus();   
  return counter;*/

// answerArray[1] = "e";
// console.log(answerArray);



// Step 2 if no more underscores, stop the loop


//if i=true console.log("Correct, guess again")
//what to we need to repeat ?

//if i =true console.log ( "you are correct" + "guess again");

//need to keep track of when user guesses wrong
/* const words = ["fat", "lazy", "hungry"];
let randomNum = Math.floor(Math.random() *words.length);
let choosenWord = word[random];
console.log(choosenWord)

/*if letter is part of The Answer then display Correct , go again 
if word.letter = true then console.log("Correct, go again")  
if letter is a
/*if guess is true = Right , go again
if 
else guess is false = Wrong, guess again
numbrWrong >= 6 = return "Game Over"
if wordTrue = return "You Win" 

counter=0*/