// Orianna Schultz 11/1/2023

function decimalToRoman (numberInput) {
  const romanNumeralConversion = [
    "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X" 
  ]
  let answer;
  for (let i=0; i<romanNumeralConversion.length; i++) {
    if (numberInput==i) {
      answer = romanNumeralConversion[(i - 1)]
    }
  }
  return answer;
};






/* wanted to see if this worked as well

function decimalToRoman (numberInput) {
  const romanNumeralConversion = [
    "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X" 
  ]
  return romanNumeralConversion[(numberInput - 1)]
}; */