import clearCompletedTasks from './clearcompletedtasks.js';
import saveTasks from './savetasks.js';
import showTaskList from './showtasklist.js';
import blinkEffect from './blinkeffect.js';

jest.mock('./savetasks', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('./showtasklist', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('./blinkeffect', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('clearCompletedTasks', () => {
  let eventMock;
  let arrTasksMock;

  beforeEach(() => {
    // Arrange
    eventMock = {
      target: {},
    };

    arrTasksMock = [
      { completed: true },
      { completed: false },
      { completed: true },
      { completed: false },
    ];

    saveTasks.mockClear();
    showTaskList.mockClear();
    blinkEffect.mockClear();
  });

  test('clears completed tasks, updates UI, and saves tasks', () => {
    // Arrange
    eventMock.target = {};

    // Act
    clearCompletedTasks(eventMock, arrTasksMock);

    // Assert
    expect(arrTasksMock.length).toBe(2);
    expect(arrTasksMock[0].completed).toBe(false);
    expect(arrTasksMock[1].completed).toBe(false);
    expect(saveTasks).toHaveBeenCalledWith(arrTasksMock);
    expect(showTaskList).toHaveBeenCalledWith(arrTasksMock, 'list');
    expect(blinkEffect).toHaveBeenCalledWith(eventMock.target);
  });

  test('does nothing when there are no completed tasks', () => {
    // Arrange
    arrTasksMock = [
      { completed: false },
      { completed: false },
    ];

    // Act
    clearCompletedTasks(eventMock, arrTasksMock);

    // Assert
    expect(arrTasksMock.length).toBe(2);
    expect(saveTasks).not.toHaveBeenCalled();
    expect(showTaskList).not.toHaveBeenCalled();
    expect(blinkEffect).toHaveBeenCalled();
  });
});
