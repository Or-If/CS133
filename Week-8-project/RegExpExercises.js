/* CS133JS, Beginning JavaScipt Programming, Lane Community College *
 * Lab 4, Part 1: Exercise starter file by Brian Bird, spring 2022  *
 * For each of the problems, write a regex pattern.                 */
'use strict'

// Orianna Schultz 11/22/2023

// 1. Write a regex pattern that will match a string containing "JavaScript".
let pattern1 = /JavaScript/;

// 2. Write a regex pattern that will match a string ending with "fun".
let pattern2 = /fun$/;

// 3. Validate a single digit number. Write a regex pattern that will match a string containing 
// a single digit in  the range of 1 through 5.
let pattern3 = /[1-5]/;

// 4. Validate a name. Write a regex pattern that will match a string containing just letters.
let pattern4 = /^[a-zA-Z]+$/;

// 5. Validate a username. Write a regex pattern that will match a string containing 
// between 8 and 15 upper or lower case letters or numbers.
let pattern5 = /^[a-zA-Z0-9]{8,15}$/;

// 6. Validate an e-mail address. Write a regex pattern that will match a string containing 
// alpha-numeric characters, then @, then leters, then ., then letters.
let pattern6 = /^[a-zA-Z0-9]+\@[a-zA-Z]+\.[a-zA-Z]+$/;

// 7. Write a regex pattern that will match a string containing 
// either of these words: rabbit or bunny
let pattern7 = /rabbit|bunny/;

// 8. Complete the function below so that is uses a regex pattern 
// to replace "can't" with "can not" and returns the modified string.
function uncontract(text) {
    let modifiedText = text.replace("can't", "can not");
    return modifiedText;
}



// This function is used in the web page to check the other functions
function checkAnswer(elementId, correctAnswer, answer) {
    const element = document.getElementById(elementId);
    element.innerHTML += answer;
    if (correctAnswer === answer) {
        element.innerHTML += ", correct";
        element.style.backgroundColor = "green";
    } else {
        element.innerHTML += ", incorrect";
        element.style.backgroundColor = "red";
    }
}