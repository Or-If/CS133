//Orianna Schultz 10/05/2023


function convertTemperature (temperatureScale, temperature) {
  if (temperatureScale === "C") {
    let temperatureF = ( 9 / 5) * temperature + 32;
    temperatureF = temperatureF.toFixed(2);
    temperatureF += "\xB0 F"
    console.log(typeof(temperatureF));
    return temperatureF ; 
  } else if (temperatureScale === "F") {
    let temperatureC = (temperature - 32) * ( 5 / 9 );
    temperatureC = temperatureC.toFixed(2);
    temperatureC += "\xB0 C"
    console.log(temperatureC);
    return temperatureC;
  } else {
    return "Please restart and either choose C or F" ;
  }
};

