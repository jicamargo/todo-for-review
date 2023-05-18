const deleteTaskFromArray = (arrTasks, task) => {
  const taskIndex = arrTasks.indexOf(task);
  if (taskIndex !== -1) {
    arrTasks.splice(taskIndex, 1);
  }
  return arrTasks;
};

export default deleteTaskFromArray;