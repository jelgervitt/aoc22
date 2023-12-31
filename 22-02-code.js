/**
 * Exercise description for day 2 of Advent of Code 2022
 *
 * Rock Paper Scissors
 * R > S, S > P, P > R
 *
 * rock = 1
 * paper = 2
 * scissors = 3
 *
 * lost = 0
 * draw = 3
 * won = 6
 *
 * round score = type + score
 *
 * A = rock (1)
 * B = paper (2)
 * C = scissors (3)
 *
 * X = rock (1)
 * Y = paper (2)
 * Z = scissors (3)
 *
 * what would your score be, if you follow the pattern of the input?
 */

const input = `C Y
C Z
B Z
A Z
A Z
A Y
A Z
C Y
C Z
A Y
A Y
B X
A Y
C Z
C Z
B X
C Z
A Z
B Y
C Z
A Y
C X
B Y
A Z
B Y
C Z
B Z
B Y
C Z
A Z
A Z
B Z
C Z
A X
B X
C Y
C Z
C Z
C Z
A Y
C Z
C Z
C Z
C X
A Z
A Z
C Y
A Z
C Z
C Z
C Z
A Z
B Y
C Z
A Z
B Z
A Z
A Y
B X
B X
C Z
C X
C Z
C Z
A Z
B Z
B X
B X
B Y
C X
C Y
A Y
C Z
A Y
C Z
A X
B X
B X
C X
B X
B X
A Y
B Y
C Y
A Z
C Y
B Y
B X
B X
B Z
B X
B Z
A Z
B Y
C Z
B Z
B Z
B Y
A Y
C Z
A Z
C Y
C Z
B Z
C Z
C Z
B Y
A Z
C Z
C Z
A Z
A Z
B X
C Y
A Y
C Z
B Y
C Z
A Y
C X
C X
B Y
C Z
C X
C Z
B Y
A Y
B Z
C Z
B Y
C Y
C Z
C Z
B Z
C Z
A Z
A Y
C Z
C Z
B Y
A Z
C Z
C Z
C Y
B Y
C Z
C Z
C Z
C Z
A X
B Y
C Z
B Y
C Z
B Y
C X
C Y
A X
C Z
B X
B X
A Z
A Z
A Z
B Y
C Z
B Z
A Z
B Y
C Y
C Z
C Z
C Z
C Y
C Z
B Y
C Z
C Z
B Z
A Y
B Z
C Z
C Y
A Z
C X
B Z
C Y
B Y
C Z
C Z
A Z
C Y
C Y
C Y
B Y
C Z
C X
B Y
C Z
C Y
B Z
A Y
C Z
A Y
B Z
A Y
A Y
B Z
A Z
C Z
C Z
B X
C Z
C Z
B X
B Y
C Z
C X
A X
C Z
C Z
C Z
B X
B X
A Z
C Z
C X
A Z
C Z
C Z
A Z
B Z
C Z
B Y
C Z
A Y
B Z
C Z
C Z
C Z
C X
A X
A Y
B Y
C Z
B Y
C X
A Y
C Z
C Z
B Y
B Z
C Z
B Y
B Y
B Y
A Y
C Z
B Z
A X
B Y
C Z
C Z
C X
A Y
C Z
A X
B Y
A X
A Z
B X
B X
C Z
C Z
A X
C Z
A Y
B Y
B Z
C X
C Y
B X
C Z
C Y
B Y
C Z
C X
B Z
C Z
C Z
C X
C Y
C Z
A Y
C Z
C Z
C Z
C Z
C Z
C Y
B Y
C Z
A X
A Z
C Y
B Z
B X
A Z
C Z
C Y
C Z
C X
A Y
C Z
A Z
B Y
B Z
C Z
B Z
A Y
C Z
B Y
C Z
C Y
C Z
C X
A Y
A Y
C Y
C Z
C Z
B Y
A Z
C Z
C Y
A Y
A Z
A Z
C X
C Z
B X
C Y
C Z
C Z
B Y
C Z
B X
C Z
B Z
B Y
C X
C X
A X
B Y
A Z
C X
B X
A Z
C Z
C Z
A X
A Y
B X
C Z
A X
C Z
B Y
C Z
A Y
B Y
C Z
B Z
B Y
A Z
C Z
A X
B Z
C Y
B Z
B Y
A Z
A Y
A Z
A X
C X
A X
C Y
C Z
A Y
C Y
B X
A X
A Y
C Y
B Y
C Z
C Z
B Z
C Z
C Z
C Z
C Z
C Z
C Z
C Z
B Y
C Z
A Y
B Y
C Y
C X
C Z
B Z
B Y
C Y
C Z
A Z
C Y
B Z
C Z
A Z
C X
B Y
B Y
B Y
C Z
B Y
A Y
C Z
C Z
A Z
A Z
C Z
B Z
B Y
C Z
B Y
B Z
C Z
A X
A X
C X
C Y
A Y
C Z
A Y
A Z
C Z
C Z
C Z
B Y
A Z
B Z
C X
B X
C X
B Y
C Z
A Z
C Z
A X
B Z
B Z
B Y
A Y
C Z
B X
C Z
B Z
C X
A X
C Z
C Z
B Z
B Y
C Z
C Z
A Z
C Y
C Z
B Y
A Y
B Y
A Y
C Z
C Y
B Z
A Y
C Z
B X
B X
B X
C Y
C Z
A Y
C Z
C Z
C Z
A Y
C Z
B X
A Z
C Z
C Z
A Y
C Z
C Z
B X
C Z
B Y
A Z
C X
C Y
C Y
C Z
C Y
A Y
B Z
C Z
C Z
C Z
B Y
C Z
C Z
A Y
A X
A Y
C Y
C Z
C Z
A X
B Z
C Z
C Z
B Z
B Y
C Z
A X
C X
A Z
B Z
C Z
A X
C X
C Z
B Y
A X
A X
C Z
C Z
B X
C Z
B Z
B Y
A X
C Y
C Z
C X
A Y
B Y
C Z
C Z
C Z
C Z
B Z
A Y
C Z
C Z
B Z
C Y
B Z
B X
B Y
A Z
C Z
A Z
B Y
C Y
C Z
C Z
C Z
B Z
C Z
C X
C Z
B X
C Y
B Y
C Z
C Z
C Z
C Z
B Y
B Y
C Z
B Y
C X
B Z
A X
C X
C Z
B X
C Z
C X
C Z
A X
A Z
B X
C Z
C Z
B Y
C Z
A Y
C Z
C Z
C Y
C Z
A Z
A X
C X
B Y
A Y
B Y
A X
C Z
B Y
B Y
C Z
C Z
B Y
B X
A Y
C Z
B Y
C Y
C Z
C Z
C X
B Y
A Z
C Z
A Z
A X
C X
A Z
C Z
C Z
A X
B Z
C Z
B Y
A Z
A Y
A X
A Y
A X
C Z
A X
B Y
A Y
B Z
C Y
C Z
B Z
C X
A Y
A Y
C Z
C Y
C Z
B Y
B Y
B Y
B X
C Z
C X
B Y
C Z
C Z
B Y
C Z
C Z
B Y
C Z
C Y
C Z
C Y
C Z
C Y
A Y
A Y
C Y
C Y
C Y
C Y
C Z
C X
B Z
B Z
C X
C Z
B Y
B Y
A Z
C Y
C Z
C Z
C X
C Z
C Z
A Z
B Y
C Z
A Y
C Z
C Z
C Z
A Z
C X
C Y
B Y
A Z
B Z
C Z
B Y
C Z
B Z
C X
A X
C Y
A Y
B Z
B Y
A X
C Z
B Z
C Z
C Z
C X
B Z
C X
A Z
B Z
C Z
C Z
C Z
B Y
A X
C Z
C Y
C Y
C Z
A Z
C Z
C Z
A X
C Y
B Y
A Y
A Z
A Z
B Z
C Z
A Z
B Y
B Y
A Y
A Z
A Z
C Z
C Z
C Z
A X
C Z
B Z
B X
C Y
A Z
B Y
C Z
B Y
A X
C Z
A Z
C Z
B Z
C Y
C Z
B Y
A Z
B Z
A Y
B X
C Z
B Y
C Z
C Z
C X
C Y
C Z
B X
C X
A Y
A Y
C Z
C Y
B Y
C Y
C Y
C Z
A Y
A Z
B Y
C Z
C Z
A X
C Z
C Y
C Z
B X
C Y
A Z
A Y
A Z
C X
C Z
C Z
C Z
B Z
C Y
B Z
C Z
B Y
C Z
B Y
A Y
B X
C Z
A Y
C Z
A Y
A Z
A Z
B Z
A Y
C Z
A X
B Y
C Z
B Z
C Z
A Y
A Y
B Z
B X
B X
C Y
C Z
C Z
C Y
A X
B Z
C X
B Y
C X
B X
C X
C X
C Z
A Y
C Y
C Z
B Z
A Z
A Z
C Z
A Z
C Z
A Z
A X
B Y
A X
A Y
C X
B Y
C Z
A X
B X
C Z
C Z
C X
B X
A Z
B X
C Z
B Y
C Z
C X
C Z
C X
C Z
B Z
B Y
C Z
B X
C X
C Z
C Y
A Z
B Z
A X
B X
B X
C Z
B Z
C X
A Y
C Z
C Z
B Y
C X
C Z
A X
B Y
C Z
C Z
C Z
C Z
C Z
A X
A Z
C X
A Z
C Z
A Z
C Z
B Y
B Z
A X
C X
C Z
B Z
A Z
C Z
C Y
C Z
C Z
C X
A Y
B Y
C Z
A Y
C Z
B Z
C X
B Z
B Z
B X
B Z
C Y
C Z
C Y
B Y
C Y
C Z
C X
C X
A Z
B Y
C Z
A Y
B X
C Y
A Y
A Z
B Y
B Y
A Y
B Y
B Z
A X
C Z
B Y
A X
C Z
C Z
C X
B Y
A Z
A X
B Y
A Z
C Z
B Z
B Z
B Y
B Y
A Z
A Z
A Y
C Z
C Z
A Z
C Z
C Z
C Z
A X
C Z
A Y
C Y
A Z
C Z
B Y
C X
B Y
C Z
C Z
C Z
A Z
B Z
B X
C Z
C Z
A Y
B Z
B X
C Z
C Y
A Y
C Y
C Y
C Z
C Y
C X
C Y
B Z
B Y
C Z
A Z
A Y
C Z
C Z
B Y
B Y
A Z
A Z
A X
C Z
C Z
A Y
B Y
C X
C Z
C Z
A Z
C Z
B X
B Y
A Y
C Z
A X
A Y
C Z
B X
C X
B Z
C Y
C X
B Y
B Y
C Z
C Z
C X
C Z
A Y
A Z
C Y
C Z
A Z
C Z
C Y
A X
C X
C Z
B X
C Z
B X
C Z
C Z
C Z
B X
B Y
B Y
B Y
C X
B Y
C Z
C Y
C Z
C Z
B X
C Y
B Z
C Z
C Y
C X
C Z
A X
A Z
C Z
C Y
C X
C Z
B Y
C X
C Y
C Z
C X
A Z
B Y
B X
C X
C Y
B Z
C Z
C Y
B Z
C X
A Z
A Y
C Z
C Z
C X
B Y
C Y
C Z
A Z
B Z
B Y
B Y
B Z
C Z
A X
B Y
A Z
A Y
C Z
C Z
B Y
C Y
C Z
B Z
A Z
B Z
C Z
C Z
B Y
B X
C Z
C Y
C Z
A Y
C Z
A X
C X
B Y
B X
C X
C Z
C X
B Z
C Z
A Z
B Z
C Z
A X
C Z
C Z
A Y
B Y
B Z
B X
B Z
C X
B Y
C Z
C Z
C Z
A Z
C Z
C X
C X
B Y
C X
C X
C Z
C Z
A Z
C Y
C Z
C Z
B Z
C Z
A Y
B Y
C Z
C Z
B Y
B Y
C X
C Z
B X
A Y
B Z
A Y
A Y
A Y
C Y
C Y
C Z
B X
B Z
C Z
C X
C X
B Z
A Z
A X
B Y
C Z
B Z
A Z
B X
C Z
A Y
C Z
A Z
A Z
C Z
C X
C Z
C Y
A X
B Y
C Z
C Z
C Z
C Z
C Z
A Y
C X
C Z
A Y
B X
C Z
A Y
C Z
C Z
C Y
B Z
B X
C Z
A X
B Y
C Z
C Z
A X
A Y
C Z
C Y
B Y
C Z
C Z
A Y
A Y
A Y
A Y
C Z
A X
A Z
B Y
B Z
A Z
C Y
C Z
C Z
C Z
A Z
C Z
A Z
C Z
C Z
A Z
C Z
C Z
A Z
B X
C Z
A Y
B Y
C Z
A X
C Z
A Y
C Z
C Z
C Y
C Z
A X
B Y
C Z
A Z
C Z
A Z
A Z
B Y
C X
B Y
C X
C X
C Z
A Y
B Z
A Y
C Z
C Z
B Z
A Y
C Z
B Y
C Z
A X
C Z
C Z
C Z
B Z
A X
B Y
C Z
A X
C Z
C X
B Y
C Z
A Y
C Y
B Y
A Y
C Z
A X
B Y
A Y
A Z
C Z
C Z
C X
A Z
C Z
C Z
B Y
B X
A Z
C Z
B X
C Z
C Y
C Z
C Z
C Z
C Y
A Y
C Z
C Y
C Z
C Z
B Y
B Y
B X
C Y
B Z
C Z
B Y
C Z
C Z
C Z
A Z
A Y
C Y
C Z
C Z
A Z
C Z
C Z
C Z
B Y
B X
B Y
A Y
C Z
B Z
C Z
B Y
B Z
A Y
C Z
C Z
C Y
A Y
C Z
C Z
B Y
A Z
A Y
C Z
C Z
B Y
C Z
B Y
B Z
C X
C Y
C Z
A Y
C Z
A Z
A X
B X
C Z
C Y
C Z
C X
B X
B Y
B Y
C Z
C Z
C Z
A X
B Z
C Z
A Z
A Z
C Z
B Y
B X
B Y
C Z
B Z
C Z
B X
B Z
C Z
B X
A X
C Z
C X
B Z
C Y
C X
C Z
C X
A X
A X
C Z
C Z
C Z
B X
B X
C Z
C Z
C X
C X
C Z
A Y
B Y
B Y
B Y
C Z
C Y
C Z
C Z
C Z
B Y
C Y
C Z
B X
C Z
A X
C Y
A Y
C X
A Y
A Z
C Z
B Y
B Y
A Z
C Y
B Z
B Z
A X
B Y
C Z
B X
A Z
A Z
C Z
B Z
A Z
C X
B Z
C Z
C Z
C Z
C Z
B X
B Y
C Z
C Z
C X
C Y
A Z
B X
B Y
B Z
C Z
B Z
C Z
C Z
C Z
C Z
A Y
C X
C Z
A Y
C Z
C Z
B Z
C Z
A Z
C Z
A Y
C X
C Z
A X
C X
C Z
C Z
B Y
C Z
A Z
C X
C Z
B Y
A Y
B Y
C Z
B X
A X
C Z
B Y
C Z
B Y
A Z
A Z
C Z
A Z
B Y
C Z
C Y
B X
C Z
A Z
B Z
C Z
C Y
C Z
B Z
A X
A X
A Z
C Z
C Z
C Y
C X
C X
A X
C X
B X
C X
A Y
C Y
C Z
C Z
C Z
C Z
C X
A Y
C Y
A Y
B X
C Y
C Z
A X
A Z
C Z
C Z
B Y
C Z
B Z
C Z
C Z
A Y
A Y
C Z
C Z
A Z
C Z
C Z
B X
C Y
C Z
C Z
C Z
C Z
A X
B Y
B X
B Z
C Z
A Z
A Z
B Z
A Z
B X
C Z
B Z
C Z
A Z
C Z
C Z
A Y
B Y
C Y
B X
A Z
C X
C Z
C X
B Y
B Z
C Z
C Z
C Z
C Y
C Z
A X
A X
A Y
C X
C X
A Y
B Y
C X
C Z
C Z
B X
B Z
B X
C X
B X
A Y
C Z
A Z
C Z
C Z
C Z
C Z
C X
A Z
B Y
C Z
C X
A Y
A Y
C Z
C Z
B Z
B X
C Z
A Z
B Y
C Z
C Z
B Y
A Y
C Z
B Z
B Z
A Z
C X
C Z
B Z
C Z
C Z
B Y
C X
B Y
A Z
C Z
A X
C Z
B Y
C Z
A Z
B Z
C Z
A Z
A Y
C Y
B X
C Z
A Y
C Y
A X
A Z
A Y
C X
C Z
C Z
B Z
A Z
C Z
C Z
C Y
C X
C Y
B Y
C Z
B Y
C Y
C Y
C Y
A X
C Z
C Z
B X
B Y
C Z
A Y
C Z
A Y
B Z
C Z
C Z
C Z
A Y
A X
B Z
B Y
A Y
A Y
B Y
B Z
C X
A Y
B Y
C X
C Z
C Z
B Y
C Z
C X
C Z
C X
C Z
A Y
A Y
B Y
C Z
A Z
C Y
C Z
A X
C Y
C Y
C Y
A Z
C X
C Z
C Z
A Z
C Z
B Y
C Y
C Z
C Z
C Z
B Z
C X
C Z
C Z
C X
C Z
C Z
C X
C Z
C X
B Z
B X
A X
C Z
A Y
C Z
B X
C Y
A X
C X
B Z
C Z
A Y
A X
C X
B Z
B Z
C X
A Y
C Y
A Y
C Z
C Y
A X
C Z
A Y
A Z
C Z
B Y
C X
A Y
A Y
C Y
B Y
A Z
B Y
C X
A Y
B Z
B Z
C Z
C Y
C Z
B Y
C X
C Z
C Z
A Y
C Z
C X
A Y
C Z
C Z
B X
C Z
A X
C Z
A Y
C Y
A Y
B X
C Y
C Y
A Y
C Z
A Z
C Z
C Y
C Z
A Z
A Z
C Z
C Z
C Z
C Z
C Z
A Y
A Z
B Y
C Z
A Y
C Y
C Z
A Y
C X
C Z
A Z
C Z
C Y
C X
C Z
C Y
A X
B Y
C Z
A Y
A Z
C X
C X
C Z
A Z
C Z
C Z
C Z
C Z
A X
C Z
C Z
C X
C Z
A Y
C Z
C Z
B X
B Y
C Y
B Z
C Y
C Z
B Y
A Y
A Y
B Y
A Z
B Z
B Y
A X
C Z
B X
A Y
C X
C Z
C X
C Z
C Z
C X
A Z
B Y
A X
C Z
C Z
B Z
C X
C X
B Z
A Y
A Y
A Y
A Z
C Y
C Z
A X
B Y
C Z
B Y
B Y
C Y
C Z
C Y
B Y
C Z
B Z
C X
C X
A X
C Z
C Z
B Z
A Y
A Z
B X
B Z
B Y
C Z
A Z
C X
A Z
B Y
C Z
B Y
A Y
C Z
A Y
B Z
C Z
A Z
B Z
B Y
B Y
A X
B Y
B Y
C Z
B Y
C Z
B Z
A Z
A Y
C Z
B Y
C Z
C Z
C X
C X
C Y
B Y
C Y
A Z
C Z
A Z
C Z
B Z
C Y
C Z
A X
B X
A Z
A Y
A Y
C Z
C Z
C Z
C Y
C Z
C Z
A Z
A X
B X
A Z
C Y
C Z
B Y
A Y
A Y
B X
B X
C Z
C Z
C Z
C X
C Z
C Y
C Z
A Y
C Z
C Z
C Y
A Z
B Y
A Y
B Y
B Y
A Y
A Y
B Z
C Z
C X
B Y
C Z
C Z
C X
A Z
B Y
A Z
C Z
C Z
B Y
C X
C Z
C Y
A Y
C Z
A Y
B Y
A Y
C X
C Y
C Y
B Y
B Z
A Z
C Z
C Y
B Z
B Y
A Y
A Z
A Y
A Y
B X
C Z
A X
B Y
B Y
C Z
B Y
B Y
B Z
C Z
A Y
C X
A X
A Y
C X
A Y
A Z
C Z
B Y
B Y
B Y
C Y
A Y
B Z
C Z
C Z
B Z
C Z
B X
C Y
B Y
A Z
C X
A Z
C Z
B X
C Z
C Z
B Z
C Z
A Z
A Z
B Y
C Z
A Z
C Y
B Y
B Z
C Z
C X
C Z
A Z
C Z
C Y
C X
A Y
B Y
B X
C X
C Z
A Z
C X
B Z
C Z
A Y
C Y
C Z
A Z
C Z
A Z
C Y
C X
C Y
B Z
B Y
A Z
A Y
B X
A Z
C X
C Y
C X
C Z
C X
A X
C Z
B Y
C Z
A Y
B Z
C X
B Y
C Z
A Z
C Z
C Z
C Y
A Y
A Z
A Y
C X
B Z
A Z
C Z
C Z
C Z
A X
C Z
A Z
A Y
C X
B X
C Z
C Z
A X
A Y
C Z
C X
C Z
A Z
C Y
C Z
B Z
C Y
C X
A Y
A X
A Z
C Z
C Z
C Z
C Z
A Y
C Z
A Z
A Y
C Z
B Z
B Y
C X
C Z
C X
C Z
B X
A Y
C Z
B Z
A Z
A Z
B Z
B Z
C Z
C Z
B Y
C Z
A Y
C X
A X
A X
C X
C X
B Y
B X
A Y
C Z
B X
B Y
A Z
B Z
A Z
A Z
C X
C Z
A X
A Y
C X
C Y
C Y
C X
A Z
C Z
C X
C X
A Y
A X
C Z
C Z
B Y
B Z
C X
C X
C Z
B Z
B Z
B Z
B Z
B Y
B X
C Z
C Z
C Z
C X
C Z
C Z
B Y
C Z
C X
B Y
C Z
C Y
B Z
C Y
C Z
C Z
C Z
C Z
C Z
C Z
C Z
A X
A Y
C Y
C Z
A Y
B X
C Z
B Y
C Y
C Z
C Z
C Z
C Y
C Z
A Z
B Y
A Z
C Z
B Z
C X
C X
A Z
C Z
C X
C Z
B Z
C Z
C Y
B X
C Z
A Z
C X
B Y
B Y
C Z
C Z
C Z
B Y
C Z
B Y
A Y
B Z
B Z
B Y
C Z
B Z
A X
C Z
C Z
C Z
B Y
B Y
C Z
C Y
C Z
B Y
C Z
B X
B Z
C X
B Y
C Y
B Y
C Z
A Y
B Z
C X
B Y
A Z
C Z
C X
A Z
B Z
A Y
C Z
C X
B Y
C Z
C Z
B Y
B Z
C X
C X
C Z
C Z
C X
B Z
A Y
C Z
C X
A Z
C Z
C Z
C Z
C Y
B Z
A X
B Z
B Z
C Z
C Z
B Z
C Z
B Z
A X
B Z
B Y
B Z
B Z
B Y
C X
A Y
B Y
B X
B X
A X
C Z
C Y
C Y
C Y
C Y
B Y
A X
C Y
A X
C Z
B Z
C Z
C Y
B Y
A Z
C Y
A Z
B Y
B X
C Z
A X
A Z
C Z
C Z
A X
C Z
C X
A Z
C Y
B Z
C Y
B Z
A Y
A Z
C Z
A Y
C Z
C Z
A X
C Z
C Z
C Z
B Y
C X
C Y
C Z
B X
A Z
C Z
C X
B Y
A Y
B Y
C Z
C Z
C Z
A Y
A X
C Z
C Z
C Z
C Z
B Y
A Z
C Z
A X
A Y
B Z`;

/************************************ Part 1 ********************************************/

// parse the input into an array of arrays
// for each subarray, calculate the score, and tally it up

// * A = rock (1)
// * B = paper (2)
// * C = scissors (3)
// *
// * X = rock (1)
// * Y = paper (2)
// * Z = scissors (3)

// A > Z (1 beats 3), B > X (2 beats 1), C > Y (3 beats 2)

indexPlOne = ["A", "B", "C"];
indexPlTwo = ["X", "Y", "Z"];

let score = 0;

const parsedInput = input.split("\n").map(item => item.split(" "));
testArr = [
  ["A", "Y"],
  ["B", "X"],
  ["C", "Z"],
];

// function countRoundScore(arr) {
//   // calculate score of my chosen weapon
//   const plOne = indexPlOne.indexOf(arr[0]);
//   const plTwo = indexPlTwo.indexOf(arr[1]);
//   const rScore = plTwo + 1;

//   // compare for win, tie, or loss
//   // draw
//   if (plOne === plTwo) {
//     return rScore + 3;
//   }

//   // win
//   if (plTwo - plOne === -2 || plTwo - plOne === 1) {
//     return rScore + 6;
//   }

//   // loss
//   return rScore;
// }

// loop through array of rounds and calculate score

// parsedInput.forEach(arr => {
//   score += countRoundScore(arr);
// });

// console.log(score);

/************************************ Part 2 ********************************************/

const index = ["A", "B", "C"];
const outcome = ["X", "Y", "Z"];

function digitize(element) {
  return index.indexOf(element);
}

function digOutcome(element) {
  return outcome.indexOf(element);
}

function countRoundScore(digOne, digTwo) {
  let rScore = digTwo + 1;
  // draw
  if (digOne === digTwo) {
    return rScore + 3;
  }

  // win
  if (digTwo - digOne === -2 || digTwo - digOne === 1) {
    return rScore + 6;
  }

  // loss
  return rScore;
}

function diffOutcome(arr) {
  const plOne = digitize(arr[0]);
  const outcome = digOutcome(arr[1]);

  // must draw
  if (outcome === 1) {
    plTwo = plOne;
  }

  // must lose
  if (outcome === 0) {
    switch (plOne) {
      case 0:
        plTwo = 2;
        break;
      case 1:
        plTwo = 0;
        break;
      case 2:
        plTwo = 1;
        break;
    }
  }

  if (outcome === 2) {
    switch (plOne) {
      case 0:
        plTwo = 1;
        break;
      case 1:
        plTwo = 2;
        break;
      case 2:
        plTwo = 0;
        break;
    }
  }
  return countRoundScore(plOne, plTwo);
}

parsedInput.forEach(arr => {
  score += diffOutcome(arr);
});

console.log(score);
