
// Orianna Schultz 10/11/2023
// All of the .js is here as the assignment didnt list using different files for each problem.


// .js for _Tuition
function userCostCalculator (userCreditTotal, userOutOfState) {
  let amountOfCredits = (userCreditTotal >= 16) ? 16 : userCreditTotal;
  let creditTotalCost = (userOutOfState) ? (amountOfCredits * 200) : (amountOfCredits * 100);    
  return creditTotalCost;
}

// .js for _Difficult
function trailDifficultyCalculator (trailMiles, trailElevationGain) {
  let trailAnswer;
  switch (true) {
    case (trailMiles <= 4 && trailElevationGain <= 500):
      return trailAnswer = "Easy"; 
    case (trailMiles <= 8 && trailElevationGain <= 1500):
      return trailAnswer = "Moderate";
    case (trailMiles <= 12 && trailElevationGain <= 3000):
      return trailAnswer = "Hard";
    default: 
      return trailAnswer = "Challenging"; 
  }
}

// .js for _TrailType
function trailTypeCalculator (activity) {
  let trailLocation;
  switch (activity) {
    case "Hiking": 
      return trailLocation = "-Spencer Butte <br> -Mossy Maple";
    case "Mountain biking":
      return trailLocation = "-Spencer Butte <br> -Mount Baldy <br> -Mossy Maple";
    case "Horseback riding":
      return trailLocation = "-North Boundry Trail <br> -Elk Trail";
    case "Bike touring":
      return trailLocation = "-Corvallis to the Coast";
    default: 
      return trailLocation = "unknown activity"
  }
}