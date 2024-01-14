// Orianna Schultz 10/24/2023

let dieOneValue = 1;
let dieTwoValue = 1;
let dieThreeValue = 1;
let rollNumber = 0;
let dieHighestOne = 0;


function rollTheDice () {

  // sets a random number to each number final_project_images/dice-five.png let i = rollNumber
  let i = rollNumber;
  for (; i<3; i++) {
    if (i===0) {
      dieOneValue = (Math.floor(Math.random() * 6) + 1)
    } else if (i===1) {
      dieTwoValue = (Math.floor(Math.random() * 6) + 1)
    } else if (i===2) {
      dieThreeValue = (Math.floor(Math.random() * 6) + 1)
    }
  }

  console.log("die one: " + dieOneValue);
  console.log("die two: " + dieTwoValue);
  console.log("die three: " + dieThreeValue);

  // saves the data of highest dice rolled each roll
  for (let j=6; j>0; j--) {
    if (rollNumber===0) {
      if (dieOneValue===j || dieTwoValue===j || dieThreeValue===j) {
        dieHighestOne = j;

        break;
      }
    } else if (rollNumber===1) {
      if (dieTwoValue===j || dieThreeValue===j) {
        dieHighestOne = j;
        break;
      }
    } else if (rollNumber===2) {
      if (dieThreeValue===j) {
        dieHighestOne = j;
        break;
      } 
    }
  }

  console.log(dieHighestOne);

  // makes the function reset after 3 rolls, also allows for 1 less dice rolled each time, until all 3 are rolled
  rollNumber++
  if (rollNumber===3) { 
    i = 0;
    rollNumber = 0;
  }
  console.log(rollNumber);
  return 
}

// declares the images shown on screen to be the same as what you rolled
function dieImageDeclaration (dieNumber) {
  let dieImageOutput;
  console.log(dieNumber);
  
  
  if (dieNumber==="dieNumberOne") {
    switch (dieOneValue) {
      case dieOneValue = 1:
        dieImageOutput = "final_project_images/dice-one.png"
        break;
      case dieOneValue = 2:
        dieImageOutput = "final_project_images/dice-two.png"
        break; 
      case dieOneValue = 3:
        dieImageOutput = "final_project_images/dice-three.png"
        break;
      case dieOneValue = 4:
        dieImageOutput = "final_project_images/dice-four.png"
        break;
      case dieOneValue = 5:
        dieImageOutput = "final_project_images/dice-five.png"
        break;
      case dieOneValue = 6:
        dieImageOutput = "final_project_images/dice-six.png"
        break;
    } 
    } else if (dieNumber==="dieNumberTwo") {
    switch (dieTwoValue) {
      case dieTwoValue = 1:
        dieImageOutput = "final_project_images/dice-one.png"
        break;
      case dieTwoValue = 2:
        dieImageOutput = "final_project_images/dice-two.png"
        break; 
      case dieTwoValue = 3:
        dieImageOutput = "final_project_images/dice-three.png"
        break;
      case dieTwoValue = 4:
        dieImageOutput = "final_project_images/dice-four.png"
        break;
      case dieTwoValue = 5:
        dieImageOutput = "final_project_images/dice-five.png"
        break;
      case dieTwoValue = 6:
        dieImageOutput = "final_project_images/dice-six.png"
        break;
    }
    } else if (dieNumber==="dieNumberThree")
    switch (dieThreeValue) {
      case dieThreeValue = 1:
        dieImageOutput = "final_project_images/dice-one.png"
        break;
      case dieThreeValue = 2:
        dieImageOutput = "final_project_images/dice-two.png"
        break; 
      case dieThreeValue = 3:
        dieImageOutput = "final_project_images/dice-three.png"
        break;
      case dieThreeValue = 4:
        dieImageOutput = "final_project_images/dice-four.png"
        break;
      case dieThreeValue = 5:
        dieImageOutput = "final_project_images/dice-five.png"
        break;
      case dieThreeValue = 6:
        dieImageOutput = "final_project_images/dice-six.png"
        break;
    } 
  
  return dieImageOutput;
}



let blank;
function blankblank (randomNumber) {
blank = `final_project_images/dice-${randomNumber}.png`
}

/*
if (turnNumber % 2 === 0) {
  playerTurn = true
  console.log(playerTurn);
};
*/
