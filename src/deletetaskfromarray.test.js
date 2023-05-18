// this file is for testing deletetaskfromarray.js
// contains 2 tests, 1 test using ToBe and 1 test using ToHaveLength

import deleteTaskFromArray from './deletetaskfromarray.js';

const arrTasks = [
// ARRANGE
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

// ACT

describe('delete', () => {
  test('delete task to array tasks', () => {
    // ASSERT
    expect(deleteTaskFromArray(arrTasks, arrTasks[2])).toEqual(arrTasks2);
    expect(deleteTaskFromArray(arrTasks, arrTasks[0])).toHaveLength(1); // ASSERT
  }); // end of test
}); // end of describe
