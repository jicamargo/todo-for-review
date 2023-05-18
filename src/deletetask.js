import deleteTaskFromArray from './deletetaskfromarray.js';
import saveTasks from './savetasks.js';

const deleteTask = (event, arrTasks, task) => {
  const taskLengthBefore = arrTasks.length;
  deleteTaskFromArray(arrTasks, task);
  const taskLengthAfter = arrTasks.length;
  if (taskLengthBefore !== taskLengthAfter) {
    saveTasks(arrTasks);
    const listItem = event.target.closest('.list-item');
    listItem.remove();
  }
};

export default deleteTask;