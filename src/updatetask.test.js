import updateTask from './updatetask.js';
import saveTasks from './savetasks.js';

jest.mock('./savetasks', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('updateTask', () => {
  // Arrange: create all Mocks to simulate the DOM elements, its classes and the localStorage

  let eventMock;
  let arrTasksMock;
  let taskMock;
  let taskEditDescriptionMock;
  let taskDescriptionMock;
  let listItemMock;

  beforeEach(() => {
    // Arrange
    eventMock = {
      target: {},
    };

    arrTasksMock = [];

    taskMock = {
      description: '',
    };

    taskEditDescriptionMock = {
      value: '',
      previousElementSibling: null,
      classList: {
        add: jest.fn(), // jest.fn() is a mock function, to simulate the classList.add() method
        remove: jest.fn(), // jest.fn() is a mock function, to simulate the classList.remove()
      },
    };
    taskDescriptionMock = {
      textContent: '',
      classList: {
        remove: jest.fn(),
      },
    };
    listItemMock = { classList: { remove: jest.fn() } };

    taskMock.description = 'Initial task description';
    taskEditDescriptionMock.value = 'Updated task description';

    // mockImplementation() is a mock function, to simulate the classList.remove() method

    listItemMock.classList = {
      remove: jest.fn().mockImplementation((className) => {
        if (className === 'editing-task') {
          listItemMock.classList.contains = () => false;
        }
      }),
    };

    taskDescriptionMock.textContent = '';

    global.document = {
      createElement: jest.fn((typeOfElement) => {
        if (typeOfElement === 'input') {
          return taskEditDescriptionMock;
        } if (typeOfElement === 'span') {
          return taskDescriptionMock;
        }
        return null;
      }),
    };

    // mock localStorage
    global.localStorage = {
      setItem: jest.fn(),
    };
  });

  test('updates task description and saves tasks', () => {
    // Arrange
    eventMock.target = taskEditDescriptionMock;
    taskEditDescriptionMock.previousElementSibling = taskDescriptionMock;
    taskEditDescriptionMock.closest = () => listItemMock;

    // Act
    updateTask(eventMock, arrTasksMock, taskMock);

    // Assert
    expect(taskMock.description).toBe('Updated task description');
    expect(taskDescriptionMock.textContent).toBe('Updated task description');
    expect(listItemMock.classList.remove).toHaveBeenCalledWith('editing-task');
    expect(taskEditDescriptionMock.classList.add).toHaveBeenCalledWith('hidden');
    expect(taskDescriptionMock.classList.remove).toHaveBeenCalledWith('hidden');
    expect(saveTasks).toHaveBeenCalledWith(arrTasksMock);
  });
});
