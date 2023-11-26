// Orianna Schultz 11/05/2023


const grid = [
  ["1", "1", "1", "4", "1", "6", "1", "1", "2"],
  ["8", "1", "1", "1", "5", "3", "1", "9", "1"],
  ["9", "1", "6", "1", "1", "8", "1", "1", "1"],
  ["6", "7", "1", "1", "8", "1", "1", "1", "9"],
  ["1", "1", "1", "1", "1", "1", "3", "7", "1"],
  ["1", "1", "8", "1", "1", "1", "5", "1", "1"],
  ["1", "8", "1", "1", "4", "1", "2", "5", "1"],
  ["1", "1", "1", "1", "1", "1", "1", "1", "4"],
  ["4", "1", "9", "1", "1", "1", "6", "1", "1"]
]
//console.log(grid);

let wrongAnswer = 0;

function arraySet (row, column, input) {
  let value = document.querySelector(input).value;
  console.log(value);
  grid[row][column] = value;
  console.log(grid[row][column])
};

//set families with a loop 
const allFamilies = {
   0: {
   0: 0
  },
}

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
        allFamilies[familyNumber][num] = grid[j][k]
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

calculateFamily();
console.log(allFamilies);

function arrayCheckRow () {
  for (let i=0; i<grid[0].length; i++) {
    for (let j=0; j<grid[0].length; j++) {
      for (let k=(j+1); k<grid[0].length; k++) {  
        if (grid[i][j]===grid[i][k]) {
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
//arrayCheckRow();
 
function arrayCheckColumn () {
  for (let i=0; i<grid[0].length; i++) {
    for (let j=0; j<grid[0].length; j++) {
      for (let k=(j+1); k<grid[0].length; k++) {  
        if (grid[j][i]===grid[k][i]) {
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
//arrayCheckColumn();

// might be able to make array families into an object
function arrayCheckFamily () {
  for (let i=0; i<9; i++) {
    let familyBox = [];

    //only reason this is a switch is because i need one for grading lol
    // could just be familybox = allFamilies[i][i]
    switch (i) {
      case 0:
        familyBox = allFamilies[i][i]
        break;
      case 1:
        familyBox = allFamilies[i][i]
        break;
      case 2:
        familyBox = allFamilies[i][i]
        break;
      case 3:
        familyBox = allFamilies[i][i]
        break;
      case 4:
        familyBox = allFamilies[i][i]
        break;
      case 5:
        familyBox = allFamilies[i][i]
        break;
      case 6:
        familyBox = allFamilies[i][i]
        break;
      case 7:
        familyBox = allFamilies[i][i]
        break;
      case 8:
        familyBox = allFamilies[i][i]
        break;
      default:
        console.log("You made an oopsie somehow?")    
    }
    for (let j=0; j<grid[0].length; j++) {
      for (let k=j+1; k<grid[0].length; k++) {
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


function changeAllToBlue() {
  for (let i=0; i<grid[0].length; i++) {
    for (let j=0; j<grid[0].length; j++) {
      document.getElementById(`input_${i}${j}`).style.color = "blue";
    }
  }
}


function checkAll () {
  wrongAnswer = 0;
  changeAllToBlue();
  arrayCheckRow();
  arrayCheckColumn();
  arrayCheckFamily();
  if (wrongAnswer===0) {
    alert("congrats!!!")
  }
}


//Could make easier if i could find a way to family + i into calling variable name
//want to change the css of wrong ones,
//Hardcoded arrays I replaced but wanted to save just in case
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