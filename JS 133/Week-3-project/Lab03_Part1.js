// Orianna Schultz 10/10/2023
let gradeOutput;

function checkForAPlus (gradeUserInput) {
  if (gradeUserInput > 97) {
    return gradeOutput = "A+";
  } else {
    return gradeOutput = "Not Good Enough";
  }
}

function checkForAnyA (gradeNumberInput) {
  if (gradeNumberInput >= 98) {
    return gradeOutput = "A+"
  } else if (gradeNumberInput >= 93) {
    return gradeOutput = "A"
  } else if (gradeNumberInput >= 90) {
    return gradeOutput = "A-"
  } else {
    return gradeOutput = "Ungraded"
  }
}

function gpaConversion (gradeLetterInput) {
  if (gradeLetterInput === "A+") {
    return gradeOutput = 4.33
  } else if (gradeLetterInput === "A") {
    return gradeOutput = 4.0
  } else if (gradeLetterInput === "A-") {
    return gradeOutput = 3.67
  } else {
    "Out of Range"
  }
}

function checkFileType (fileExtensionInput) {
  if (fileExtensionInput === ".doc" || fileExtensionInput === ".docx" || fileExtensionInput === ".pdf") {
    return fileExtensionCheck = "Accepted";
  } else {
    return fileExtensionCheck = "Wrong Type"
  }
}

function authenticate (userName, userPin) {
  if (userName === "bestUser" && userPin === 1234) {
    return twoFactorAuthenticate = "Authenticated!"
  } else {
    return twoFactorAuthenticate = "Access Denied!"
  }
}

function canStartKindergarten (childAge, birthdayBeforeAug) {
  if (childAge === 5 && birthdayBeforeAug || childAge === 6 && !birthdayBeforeAug) {
    return schoolAuthenticationResult = "Start Kindergarten!";
  } else if (childAge >= 6) {
    return schoolAuthenticationResult = "Too old";
  } else if (childAge <= 5) {
    return schoolAuthenticationResult = "Too young";
  } else {
    return schoolAuthenticationResult = "Please enter a valid age and D.O.B"
  }
}

/* This is the correctly written one
function romanNumeralConversion (romanNumeralInput) {
  switch (romanNumeralInput) {
    case "I": 
      return 1; 
    break;
    case "II":
      return 2;
    break;
    case "III":
      return 3;
    break;
    case "IV":
      return 4;
    break;
    case "V":
      return 5;
    break;
    default: 
      return "Out of range";
  }
}
*/

function romanNumeralConversion (romanNumeralInput) {
  switch (romanNumeralInput) {
    case "I":  return 1; 
    case "II": return 2; 
    case "III": return 3;
    case "IV": return 4;
    case "V": return 5;
    default: return "Out of range"
  }
}

function convertDialPad (userDialInput) {
  switch (userDialInput) {
    case 1: return 1;
    case "A": return 2;
    case "B": return 2;
    case "C": return 2;
    case "D": return 3;
    case "E": return 3;
    case "F": return 3;
    default: return "Please enter a valid Input"
  }
}