import promptSync from "prompt-sync";
const prompt = promptSync();

const kidsMovies = [
  "Frozen",
  "Minions",
  "Aladdin",
  "Cars",
  "Moana",
  "Tarzan",
  "Tangled",
  "Cinderella",
  "Pinocchio",
  "Madagascar",
];

let secretWord = "";

function secretWords() {
  // for (let i = 0; i < kidsMovies.length; i++) {
    const randomIndex = Math.floor(Math.random() * kidsMovies.length);
    secretWord = kidsMovies[randomIndex];
  }
// }

let correctLetters = [];
let letter;
let guesses = 0;

secretWords();

function checkLetters(letter) {

  if (secretWord.includes(letter)) {
    correctLetters.push(letter);
    return true;
  } else {
    guesses++;
    return false;

  //   return correctLetters;
  // } else {
  //   guesses++;
  //   return shrugman();
  }
};


function createWord() {
  const characters = secretWord.split("");
  return characters
    .map((character) => {
      if (correctLetters.includes(character)) {
        return character;
      } else {
        return "_";
      }
    })
    .join("");
}


function shrugman() {
  let shrugman = "¯\\_(:/)_/¯".split("").slice(0, guesses).join("");
  return shrugman;

  // let shrugman = [];
  // const characterShrugman = "¯\\_(:/)_/¯".split("");
  // let length = characterShrugman.length;

  //     for (let i = 0; i < guesses; i++) {
  //       let removeLetter = characterShrugman.shift();
  //       shrugman.push(removeLetter);
  //     }
  //     return shrugman.join("");
    }

function playGame() {
console.clear();
let choose = prompt(`Choose a category: `);

while (correctLetters.length < secretWord.length) {
// while (correctLetters < secretWord) {
    // console.log(secretWord);

let fillingBlanks = createWord();
console.log(fillingBlanks);

let guessALetter = prompt(`Guess a letter: `);

if (checkLetters(guessALetter)) {
  console.log(`${guessALetter}`);
} else {
  console.log(shrugman());
}
// guessALetter = checkLetters(letter);
// console.log(`${guessALetter}`);
}

console.log(`\nCongratulations! You guessed the word: ${secretWord}`);
};

playGame();