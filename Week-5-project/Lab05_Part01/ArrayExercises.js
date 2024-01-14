// Orianna Schultz, 11/1/2023

const degrees = [];

function addDegree (inputItem) {
  degrees.push(inputItem)
};

function renameDegree (indexNumber, newIndex) {
  degrees[indexNumber] = newIndex
};


function copyDegrees () {
  const programs = [];
  for (const value of degrees) {
    programs[programs.length] = value;
  }
  return programs;
};

function countMatches (arrayOne, arrayTwo) {
  let totalMatches = 0
  for (let i=0; i<arrayOne.length; i++) {
    if (arrayOne[i]===arrayTwo[i]) {
      totalMatches++
    }
  }
  return totalMatches;
};

const checkers = [];

function displayBoard () {
  for (let i = 0; i<checkers.length; i++) {
    checkers[i][checkers.length] = "<br>"
  }
  return checkers;
};

function makeMove (row, column, letter) {
  checkers[row][column] = letter;
};