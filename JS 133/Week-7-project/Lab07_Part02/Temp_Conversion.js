//Orianna Schultz 10/05/2023
//updated 11/14/2023

let tempScale; 

function updateTempScale(scale) {
  tempScale = scale;
}

function convertTemperature (temperature) {
  if (tempScale === "C") {
    let temperatureF = ( 9 / 5) * temperature + 32;
    temperatureF = temperatureF.toFixed(2);
    temperatureF += "\xB0 F"
    console.log(typeof(temperatureF));
    document.querySelector("#tempOutput").innerHTML = temperatureF;
    return; 
  } else if (tempScale === "F") {
    let temperatureC = (temperature - 32) * ( 5 / 9 );
    temperatureC = temperatureC.toFixed(2);
    temperatureC += "\xB0 C"
    console.log(temperatureC);
    document.querySelector("#tempOutput").innerHTML = temperatureC;
    return;
  } else {
    return "Please restart and either choose C or F" ;
  }
};

