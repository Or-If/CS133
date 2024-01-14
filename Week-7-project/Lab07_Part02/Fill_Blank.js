//Orianna Schultz 10/05/2023
//Adjusted 11/14/2023

function quizCompare (questionNumber, correctAnswer) {
  let question = "#input" + questionNumber;
  let answer = "#output" + questionNumber;
  console.log(question, answer);
  if (document.querySelector(question).value === correctAnswer) {
    document.querySelector(answer).innerHTML = "Correct!"
  } else {
    document.querySelector(answer).innerHTML = "Sadly Wrong"
  }
}
