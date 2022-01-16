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

let guessLetter = () => {
  return prompt.question("What letter are you guessing?");
};
const result = guessLetter();
console.log("result", word.indexOf(result));
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
} else{ console.log("You Win! Game Over!");
break;}
}
// if number of "not correct" === 6 then "Game Over, next round"
if (wrongGuess === 5) {
  console.log("Game Over! Begin New Round");
}
//console.error();

// Step 1 if correct, fill in the underscores with letter

for (let count = 0; count < word.length; count++) {
    const letterInAnswer = word[count];
    // You need to find out some condition of when you would make "answerArray[count] = result"
  answerArray[count] = result;
}

/*if (gameOver===true) {
  console.log("Begin new round")
}





//console.log(answerArray);

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
/*if correct replace underscore with guessLetter
if (guess === correct) {
  answerArray =[] 
  function replace (underscore) {
if guess
    return correctLetter
  else (go again)  
    console.error();  }
  var newArray = answerArray.map(replace);
  }
  return guess
}*/


/*figure out why its not registering the first letter*/