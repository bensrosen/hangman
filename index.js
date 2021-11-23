const prompt = require("readline-sync");
const wordBank = require("./word-bank.json");
console.log("Word: " + wordBank[0]);
  const letter = prompt.question("Please guess a letter: ");
  console.log(letter);