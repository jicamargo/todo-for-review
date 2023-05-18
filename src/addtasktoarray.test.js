// this file is for testing addtasktoarray.js
// contains 2 tests, 1 test using ToBe and 1 test using ToHaveLength

import addTaskToArray from './addtasktoarray.js';

const arrTasks = [
  {
    index: 0,
    description: 'Task 1',
    completed: false,
  },
  {
    index: 1,
    description: 'Task 2',
    completed: false,
  },
];

const arrTasks2 = [
  {
    index: 0,
    description: 'Task 1',
    completed: false,
  },
  {
    index: 1,
    description: 'Task 2',
    completed: false,
  },
  {
    index: 2,
    description: 'task for testing',
    completed: false,
  },
];

describe('add', () => {
  test('add new task to array tasks', () => {
    expect(addTaskToArray(arrTasks, 'task for testing')).toEqual(arrTasks2);
    expect(addTaskToArray(arrTasks, 'task for testing')).toHaveLength(4);
  }); // end test
}); // end describe
