/*
    Author:         Jason Bruce
    Title:          Lab 07 JS Functions
    Date:           11/18/23
*/

//answer array for quiz page
const ANSWERS = ["CHARLIE DAY", 34, "GAME OF THRONES", "COLORADO", "CSI", 26, "DAVIS & MAIN"];

//calculates and returns the average of four numbers
function average() 
{
    let total = (parseInt(document.getElementById("in1").value) + parseInt(document.getElementById("in2").value) + 
    parseInt(document.getElementById("in3").value) + parseInt(document.getElementById("in4").value)) / 4;

    document.getElementById("ans").innerHTML = total;
}

//decides what question/answer to check and outputs the result to page
function quizHandler(qNum){ 
    document.getElementById("A"+qNum).innerHTML = quizCheck(document.getElementById("Q"+qNum).value, ANSWERS[qNum - 1]);
}

//compares two inputs and outputs right if the same and wrong if different
function quizCheck(usrAns, actAns) //actual answer
{
    //converting to upper case prevents case sensitivity issues
    if(!isNumber(usrAns)){
        usrAns = usrAns.toUpperCase();
    }

    //
    let correct = false;
    if(usrAns == actAns)
        correct = true;

    return correct ? "Right" : "Wrong";
         
}

//helper functions
function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }