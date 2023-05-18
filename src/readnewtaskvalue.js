const readNewTaskValue = () => {
  const newTaskInput = document.getElementById('new-task');
  const newTaskValue = newTaskInput.value.trim();
  newTaskInput.value = '';
  return newTaskValue;
};

export default readNewTaskValue;