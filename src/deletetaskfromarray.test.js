// this file is for testing deletetaskfromarray.js
// contains 2 tests, 1 test using ToBe and 1 test using ToHaveLength

import deleteTaskFromArray from './deletetaskfromarray.js';

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
  {
    index: 2,
    description: 'Task 3',
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
];

describe('delete', () => {
  test('delete task to array tasks', () => {
    expect(deleteTaskFromArray(arrTasks, arrTasks[2])).toEqual(arrTasks2);
    expect(deleteTaskFromArray(arrTasks, arrTasks[0])).toHaveLength(1);
  }); // end test
}); // end describe
