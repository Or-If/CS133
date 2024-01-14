// Orianna Schultz 11/1/2023

const tasks = [];
const priorities = [];
const completions = [];

function addTask (taskName, taskPriority) {
  tasks.push(taskName);
  priorities.push(taskPriority);
  completions.push("");
};


function removeTask (taskIndex) {
  if (tasks[taskIndex]) {
    tasks.splice(taskIndex, 1)
    priorities.splice(taskIndex, 1)
    completions.splice(taskIndex, 1)
  }
};


function changeDone (taskIndex, dontKnowWhatToNameThis) {
  if (tasks[taskIndex]) {
    if (dontKnowWhatToNameThis) {
      completions[taskIndex] = true;
    } else {
      completions[taskIndex] = false;
    }
  }
};