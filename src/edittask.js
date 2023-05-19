const editTask = (event) => {
  const taskDescription = event.target;
  const taskEditDescription = taskDescription.nextElementSibling;
  const listItem = taskDescription.closest('.list-item');

  // add a class editing-task to highlight the item and Hide task text and show edit task text
  listItem.classList.add('editing-task');
  taskDescription.classList.add('hidden');
  taskEditDescription.classList.remove('hidden');

  // Set focus on edit task text
  taskEditDescription.focus();
};

export default editTask;