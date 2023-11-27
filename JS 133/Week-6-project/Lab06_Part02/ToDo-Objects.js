// Orianna Schultz 11/8/2023
const tasks = []
function Task(taskDescription, taskPriority, taskComplete) {
 this.description = taskDescription;
 this.priority = taskPriority;
 this.complete = taskComplete;
}

function addTask (taskBeingAdded, priorityNumber) {
  tasks[tasks.length] = new Task(taskBeingAdded, priorityNumber, false)
}

function removeTask (arrayIndex) {
 return tasks.splice(arrayIndex, 1);
}

function changeDone (arrayIndex, checkedIfDone) {
 tasks[arrayIndex].complete = checkedIfDone;
 return checkedIfDone;
}
