// Orianna Schultz 10/04/2023

console.log("hello");
 function jsIsAwesome() {
  alert("JavaScript is awesome!");
  return;
}; 


function favAnimal(animal) {
  var animalSet = animal;
  document.write(
    "The " + animalSet + " is my favorite animal."
  );
  return;
};

function calcAvgPrice(num1, num2, num3) {
  var priceAvg = (num1 + num2 + num3) / 3; 
  var priceAvg = priceAvg.toFixed(2);
  //var priceAvg = "$" + priceAvg;
  document.write(
   "Average Cost = $" + priceAvg + "." 
  );
};



function quizQuestion (ans) {
 result = (ans == "Salem" ? 'true' : 'false');
 //both check out
  /* if ( ans == "Salem" ) {
    result = "true";
  } else {
    result = "false";
  }; */
 return;
};

function mathQuestion(n1, n2, ans) {
  resultMath = (ans == n1 * n2 ? 'true' : 'false');
  /* console.log(n1, n2, ans)
  if (ans == n1 * n2) {
    resultMath = "true";
  } else {
    resultMath = "false";
  }*/
return;
};

function calcMpg (mil, gal) {
  mpgTotal = (mil / gal)
  mpgTotal = mpgTotal.toFixed(2);
  return;
};

function convertTemp(tempF) {
  tempC = (tempF - 32) * (5 / 9);
  tempC = tempC.toFixed(2);
  tempC = tempC + "\xB0" + "C" 
  return;
};
