// Orianna Schultz 11/05/2023

const allGrids = {

  grid: grid = [
    [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
    [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
    [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
    [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
    [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
    [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
    [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
    [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
    [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN]
  ],

  gridEasy: [
    [NaN, NaN, "6", NaN, NaN, NaN, "3", NaN, "7"],
    [NaN, NaN, NaN, "3", "5", NaN, NaN, "6", "1"],
    ["8", NaN, NaN, NaN, NaN, "7", NaN, NaN, NaN],
    [NaN, "6", "4", "8", "2", "5", "9", NaN, "3"],
    [NaN, "7", "2", NaN, "3", "6", "1", "8", "4"],
    [NaN, "9", NaN, NaN, NaN, NaN, NaN, "5", NaN],
    ["6", NaN, NaN, "7", "8", NaN, "4", NaN, NaN],
    [NaN, NaN, "3", NaN, NaN, NaN, NaN, "1", NaN],
    ["4", NaN, "5", NaN, "9", "3", NaN, NaN, NaN]
  ],

  gridMedium: [
    [NaN, NaN, NaN, "4", NaN, "6", NaN, NaN, "2"],
    ["8", NaN, NaN, NaN, "5", "3", "1", "9", NaN],
    ["9", NaN, "6", NaN, NaN, "8", NaN, NaN, NaN],
    ["6", "7", NaN, "1", "8", NaN, NaN, NaN, "9"],
    ["1", NaN, NaN, NaN, NaN, NaN, "3", "7", NaN],
    [NaN, NaN, "8", NaN, NaN, NaN, "5", NaN, NaN],
    [NaN, "8", NaN, NaN, "4", NaN, "2", "5", NaN],
    [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, "4"],
    ["4", NaN, "9", NaN, NaN, NaN, "6", "1", NaN]
  ],

  gridHard:  [
    [NaN, "7", NaN, "5", NaN, NaN, NaN, NaN, NaN],
    [NaN, NaN, NaN, NaN, NaN, "3", NaN, NaN, NaN],
    ["5", NaN, NaN, "6", "2", "7", "9", "8", NaN],
    [NaN, "6", NaN, "1", "7", NaN, NaN, NaN, "2"],
    ["2", NaN, "1", NaN, NaN, "9", "7", "4", NaN],
    [NaN, NaN, NaN, NaN, NaN, NaN, NaN, "9", "6"],
    ["9", NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
    ["1", "5", NaN, NaN, "3", "6", NaN, NaN, "9"],
    [NaN, NaN, NaN, NaN, NaN, "2", NaN, "6", NaN]
  ],

  gridEmpty: [
    [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
    [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
    [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
    [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
    [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
    [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
    [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
    [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
    [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN]
  ],

  finishedGrid: [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]
}

let wrongAnswer = 0; 

//sets up the grids to be changed based on difficulty
function setPuzzle (difficulty) {
  allGrids.grid = allGrids.gridEmpty;
  setGrid();
  //console.log(allGrids.grid);
  switch (difficulty) {
    case 1:
      allGrids.grid = allGrids.gridEasy
      break;
    case 2:
      allGrids.grid = allGrids.gridMedium
      break;
    case 3:
      allGrids.grid = allGrids.gridHard
      break;
    case 4:
      allGrids.grid = allGrids.finishedGrid
      break;
    default:
      console.log("error with difficulty switch")
  } 
  setGrid();
  console.log(allGrids.grid);
}

//changes internal values of html inputs to the preset puzzles
function setGrid () {
  console.log("hi")
  for (let i=0; i<9; i++) {
    for (let j=0; j<9; j++) {
      let number = allGrids.grid[i][j]
      if (isNaN(number)) {
        document.getElementById(`input_${i}${j}`).value = NaN 
        document.getElementById(`input_${i}${j}`).disabled = false
      } else {
        document.getElementById(`input_${i}${j}`).value = number
        document.getElementById(`input_${i}${j}`).disabled = true
      }
    }  
  }
}

//changes the grid object to match what is being entered
function arraySet (row, column, input) {
  let value = document.querySelector(input).value;
  console.log(value);
  allGrids.grid[row][column] = value;
  console.log(allGrids.grid[row][column])
};  

//set families with a loop 
const allFamilies = {
   0: {
   0: 0
  },
}

//creates "families" the 3x3 cubes that are checked for sudoku
function calculateFamily () {
  let familyNumber = 0
  let row = 0
  let column = 0
  for (let i=0; i<=8; i++) {
    let num = 0
    let innerArrayNumber = 0
    allFamilies[familyNumber] = {0: {0: 0}}

    for (let j=row; j<=(2+row); j++) { // repeats 3(j) times going down the row, increase by +3 after the 3(i) full itteration
      for (let k=column; k<=(2+column); k++) { // repeats 3 times going across the column, increases by 3, than resets after 3 full itteration
        allFamilies[familyNumber][num] = allGrids.grid[j][k]
        innerArrayNumber++
        num++
      } 
    }
    if (column===6) {
      row = row + 3
      column = 0
    } else { 
      column = column + 3
      console.log(column);
    }
    familyNumber++
  }
}

//checks array to see if anything matches in rows
function arrayCheckRow () {
  for (let i=0; i<allGrids.grid[0].length; i++) {
    for (let j=0; j<allGrids.grid[0].length; j++) {
      for (let k=(j+1); k<allGrids.grid[0].length; k++) {  
        if (allGrids.grid[i][j]===allGrids.grid[i][k]) {
          document.getElementById(`input_${i}${j}`).style.color = "red";
          document.getElementById(`input_${i}${k}`).style.color = "red";
          console.log(`column #${i} row #${j} \n and \n column #${i} row #${k} \n are the same`);
          wrongAnswer++
        } else {
          console.log("green")
        }
      }
    }
  }
}
 
//checks array to see if anything matches in column
function arrayCheckColumn () {
  for (let i=0; i<allGrids.grid[0].length; i++) {
    for (let j=0; j<allGrids.grid[0].length; j++) {
      for (let k=(j+1); k<allGrids.grid[0].length; k++) {  
        if (allGrids.grid[j][i]===allGrids.grid[k][i]) {
          document.getElementById(`input_${j}${i}`).style.color = "red";
          document.getElementById(`input_${k}${i}`).style.color = "red";
          console.log(`column #${j} row #${i} \n and \n column #${k} row #${i} \n are the same`);
          wrongAnswer++
        } else {
          console.log("green")
        }
      }
    }
  }
}

//checks array to see if anything matches within families
function arrayCheckFamily () {
  for (let i=0; i<9; i++) {
    let familyBox = [];
    familyBox = allFamilies[i]
    for (let j=0; j<9; j++) {
      for (let k=j+1; k<9; k++) {
        if (familyBox[j]===familyBox[k]) {
          console.log(`Box #${i} \n has a mistake`)
          wrongAnswer++
        } else {
          console.log("green")
        }
      }
    }
  }
}
//arrayCheckFamily();

//if something is wrong the number will change to red, this lets it change back to compare again
function changeAllToBlue() {
  for (let i=0; i<allGrids.grid[0].length; i++) {
    for (let j=0; j<allGrids.grid[0].length; j++) {
      document.getElementById(`input_${i}${j}`).style.color = "blue";
    }
  }
}

//makes sure everything entered is a number, if it is, it will run the checkAll
function checkIfNumber () {
  console.log("checking")
  let allAreNumberCheck = 0
  for (let i=0; i<9; i++) {
    for (let j=0; j<9; j++) {
      if (isNaN(allGrids.grid[i][j])) {
        alert("Please enter a valid number into every spot before submiting") 
        i = 10
        j = 10
      } else {
        allAreNumberCheck++
      }
      console.log(allAreNumberCheck);
    }   
  }
  if (allAreNumberCheck===81) {
    checkAll()
  }
}

//runs every check and resets the colors to blue. if everything is right than you win!
function checkAll () {
  console.log("checking part 2")
  wrongAnswer = 0;
  changeAllToBlue();
  arrayCheckRow();
  arrayCheckColumn();
  calculateFamily();
  arrayCheckFamily();
  if (wrongAnswer===0) {
    alert("congrats!!!")
  }
}

//TODO
//
//fix up CSS
//



//Hardcoded arrays I replaced with calculateFamilies but wanted to save just in case
 /*
const family1 = [
  grid[0][0], grid[0][1], grid[0][2],
  grid[1][0], grid[1][1], grid[1][2],
  grid[2][0], grid[2][1], grid[2][2],
] 
const family2 = [
  grid[0][3], grid[0][4], grid[0][5],
  grid[1][3], grid[1][4], grid[1][5],
  grid[2][3], grid[2][4], grid[2][5],
] 
const family3 = [
  grid[0][6], grid[0][7], grid[0][8],
  grid[1][6], grid[1][7], grid[1][8],
  grid[2][6], grid[2][7], grid[2][8],
] 
const family4 = [
  grid[3][0], grid[3][1], grid[3][2],
  grid[4][0], grid[4][1], grid[4][2],
  grid[5][0], grid[5][1], grid[5][2],
] 
const family5 = [
  grid[3][3], grid[3][4], grid[3][5],
  grid[4][3], grid[4][4], grid[4][5],
  grid[5][3], grid[5][4], grid[5][5],
] 
const family6 = [
  grid[3][6], grid[3][7], grid[3][8],
  grid[4][6], grid[4][7], grid[4][8],
  grid[5][6], grid[5][7], grid[5][8],
] 
const family7 = [
  grid[6][0], grid[6][1], grid[6][2],
  grid[7][0], grid[7][1], grid[7][2],
  grid[8][0], grid[8][1], grid[8][2],
] 
const family8 = [
  grid[6][3], grid[6][4], grid[6][5],
  grid[7][3], grid[7][4], grid[7][5],
  grid[8][3], grid[8][4], grid[8][5],
] 
const family9 = [
  grid[6][6], grid[6][7], grid[6][8],
  grid[7][6], grid[7][7], grid[7][8],
  grid[8][6], grid[8][7], grid[8][8],
] 
*/