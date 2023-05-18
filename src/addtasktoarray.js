import Task from './task.js';

const addTaskToArray = (arrTasks, newTaskDescription) => {
  const newTask = new Task(newTaskDescription);
  const lastTaskIndex = arrTasks.length - 1;
  newTask.index = lastTaskIndex >= 0 ? arrTasks[lastTaskIndex].index + 1 : 0;
  arrTasks.push(newTask);
  return arrTasks;
};

export default addTaskToArray;
