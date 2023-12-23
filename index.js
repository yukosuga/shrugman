import promptSync from "prompt-sync";
const prompt = promptSync();

const kidsMovies = [
  "frozen",
  "minions",
  "aladdin",
  "cars",
  "moana",
  "tarzan",
  "tangled",
  "cinderella",
  "pinocchio",
  "madagascar",
];

let secretWord = "";

function secretWords() {
  // for (let i = 0; i < kidsMovies.length; i++) {
  const randomIndex = Math.floor(Math.random() * kidsMovies.length);
  secretWord = kidsMovies[randomIndex];
}
// }

let correctLetters = [];
// let letter;
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
}

function createWord() {
  let displayWordArray = [];
  for (let i = 0; i < secretWord.length; i++) {
    const character = secretWord[i];
    if (correctLetters.includes(character)) {
      if (
        correctLetters.filter((char) => char === character).length >
        displayWordArray.filter((char) => char === character).length
      ) {
        displayWordArray.push(character);
      } else {
        displayWordArray.push("_");
      }
    } else {
      displayWordArray.push("_");
    }
  }
  return displayWordArray.join("");
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
  console.log("Welcome! Please guess the title of the kids' movie.");
  // let choose = prompt(`Choose a category: `);

  const totalAllowedAttempts = 10;
  let attempts = 0;

  while (
    correctLetters.length < secretWord.length &&
    attempts < totalAllowedAttempts
  ) {
    // while (correctLetters < secretWord) {
    // console.log(secretWord);

    let fillingBlanks = createWord();
    console.log(fillingBlanks);

    let guessALetter = prompt(`Guess a letter: `).toLowerCase();

    if (checkLetters(guessALetter)) {
      console.log(`${guessALetter}`);
    } else {
      console.log(shrugman());
      console.log(
        `Incorrect guess! Attempts left: ${totalAllowedAttempts - attempts - 1}`
      );
      attempts++;
    }
    // guessALetter = checkLetters(letter);
    // console.log(`${guessALetter}`);
  }

  if (correctLetters.length === secretWord.length) {
    console.log(`\nCongratulations! You guessed the word: ${secretWord}`);
  } else {
    console.log(`\nYou lose... The correct word: ${secretWord}`);
  }
}

playGame();
