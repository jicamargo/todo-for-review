import readNewTaskValue from './readnewtaskvalue.js';
import addTaskToArray from './addtasktoarray.js';
import saveTasks from './savetasks.js';
import showTaskList from './showtasklist.js';

const addNewTask = (arrTasks) => {
  const newTaskDescription = readNewTaskValue();

  if (newTaskDescription !== '') {
    addTaskToArray(arrTasks, newTaskDescription);
    saveTasks(arrTasks);
    showTaskList(arrTasks);
  }
};

export default addNewTask;