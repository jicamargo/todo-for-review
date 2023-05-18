import saveTasks from './savetasks.js';

const updateTask = (event, arrTasks, task) => {
  const taskEditDescription = event.target;
  const taskDescription = taskEditDescription.previousElementSibling;
   const listItem = taskEditDescription.closest('.list-item');

  task.description = taskEditDescription.value;
  taskDescription.textContent = taskEditDescription.value;
  // Hide input text field and show task label
  listItem.classList.remove('editing-task');
  taskEditDescription.classList.add('hidden');
  taskDescription.classList.remove('hidden');
  saveTasks(arrTasks);
};


export default updateTask;