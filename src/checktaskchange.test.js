import checkTask from './checktaskchange.js';
import saveTasks from './savetasks.js';
import blinkEffect from './blinkeffect.js';

jest.mock('./savetasks', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('./blinkeffect', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('checkTask', () => {
  let taskCheckboxMock;
  let arrTasksMock;
  let taskMock;
  let taskDescriptionMock;
  let parentElementMock;

  beforeEach(() => {
    // Arrange
    taskCheckboxMock = {
      checked: false,
      nextElementSibling: null,
    };

    arrTasksMock = [];

    taskMock = {
      completed: false,
    };

    taskDescriptionMock = {
      classList: {
        toggle: jest.fn(),
      },
      parentElement: {
        classList: {
          toggle: jest.fn(),
        },
      },
    };

    parentElementMock = {
      classList: {
        toggle: jest.fn(),
      },
    };

    global.document = {
      createElement: jest.fn(() => taskDescriptionMock),
    };

    saveTasks.mockClear();
    blinkEffect.mockClear();
  });

  test('checks task, updates UI and saves tasks', () => {
    // Arrange
    taskCheckboxMock.checked = true;
    taskCheckboxMock.nextElementSibling = taskDescriptionMock;
    taskDescriptionMock.parentElement = parentElementMock;

    // Act
    checkTask(taskCheckboxMock, arrTasksMock, taskMock);

    // Assert
    expect(taskMock.completed).toBe(true);
    expect(taskDescriptionMock.classList.toggle).toHaveBeenCalledWith('task-completed');
    expect(parentElementMock.classList.toggle).toHaveBeenCalledWith('shine-task-completed');
    expect(blinkEffect).toHaveBeenCalledWith(taskDescriptionMock.parentElement);
    expect(saveTasks).toHaveBeenCalledWith(arrTasksMock);
  });
});
