import actionTypes from "../actions/actionTypes";
import tasksReducer from "./tasksReducer";

describe("Given tasksReducer", () => {
  let currentTasks;

  beforeEach(() => {
    currentTasks = [
      {
        id: 1,
        name: "Task 1",
        dueDate: Date.now(),
        compleated: false,
      },
      {
        id: 2,
        name: "Task 2",
        dueDate: Date.now(),
        compleated: false,
      },
    ];
  });

  describe("When it is instanciated without passing anything", () => {
    test("Then it should return an empty array", () => {
      const expectedTasks = [];

      const newTasks = tasksReducer();

      expect(newTasks).toEqual(expectedTasks);
    });
  });

  describe("When it is instanciated passing 2 tasks and the action loadTasks with 3 tasks", () => {
    test("Then it should return the 3 tasks that the action has", () => {
      const tasks = [
        {
          id: 3,
          name: "Task 3",
          dueDate: Date.now(),
          compleated: false,
        },
        {
          id: 4,
          name: "Task 4",
          dueDate: Date.now(),
          compleated: false,
        },
        {
          id: 5,
          name: "Task 5",
          dueDate: Date.now(),
          compleated: false,
        },
      ];

      const action = {
        type: actionTypes.loadTasks,
        tasks,
      };

      const expectedTasks = [...tasks];

      const newTasks = tasksReducer(currentTasks, action);

      expect(newTasks).toEqual(expectedTasks);
    });
  });

  describe("When it is instanciated passing 2 tasks and the action addTask with a task", () => {
    test("Then it should return 3 tasks, the 2 tasks plus the one that the action has", () => {
      const task = {
        id: 3,
        name: "Task 3",
        dueDate: Date.now(),
        compleated: false,
      };

      const action = {
        type: actionTypes.addTask,
        task,
      };

      const expectedTasks = [...currentTasks, task];

      const newTasks = tasksReducer(currentTasks, action);

      expect(newTasks).toEqual(expectedTasks);
    });
  });

  describe("When it is instanciated passing 2 tasks (id 1 and 2) and the action removeTask with id 2", () => {
    test("Then it should return 1 task with id 1", () => {
      const id = 2;

      const action = {
        type: actionTypes.removeTask,
        id,
      };

      const expectedTasks = [
        {
          id: 1,
          name: "Task 1",
          dueDate: Date.now(),
          compleated: false,
        },
      ];

      const newTasks = tasksReducer(currentTasks, action);

      expect(newTasks).toEqual(expectedTasks);
    });
  });

  describe("When it is instanciated passing 2 tasks not compleated and the action toggleTask with id 2", () => {
    test("Then it should return the 2 tasks with the task id 2 compleated", () => {
      const id = 2;

      const action = {
        type: actionTypes.toggleTask,
        id,
      };

      const expectedTasks = [
        {
          id: 1,
          name: "Task 1",
          dueDate: Date.now(),
          compleated: false,
        },
        {
          id: 2,
          name: "Task 2",
          dueDate: Date.now(),
          compleated: true,
        },
      ];

      const newTasks = tasksReducer(currentTasks, action);

      expect(newTasks).toEqual(expectedTasks);
    });
  });
});
