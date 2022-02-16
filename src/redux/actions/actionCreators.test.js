import {
  addTaskAction,
  loadTasksAction,
  removeTaskAction,
  toggleTaskAction,
} from "./actionCreators";
import actionTypes from "./actionTypes";

describe("Given loadTasksAction", () => {
  describe("When it is called passing an array of tasks", () => {
    test("Then it should return an action with type loadTasks and the tasks", () => {
      const tasks = [
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

      const expectedAction = {
        type: actionTypes.loadTasks,
        tasks,
      };

      const action = loadTasksAction(tasks);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given addTaskAction", () => {
  describe("When it is called passing a task", () => {
    test("Then it should return an action with type addTask and the task", () => {
      const task = {
        id: 1,
        name: "Task 1",
        dueDate: Date.now(),
        compleated: false,
      };

      const expectedAction = {
        type: actionTypes.addTask,
        task,
      };

      const action = addTaskAction(task);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given removeTaskAction", () => {
  describe("When it is called passing an id", () => {
    test("Then it should return an action with type removeTask and the id", () => {
      const id = 2;

      const expectedAction = {
        type: actionTypes.removeTask,
        id,
      };

      const action = removeTaskAction(id);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given toggleTaskAction", () => {
  describe("When it is called passing an id", () => {
    test("Then it should return an action with type toggleTask and the id", () => {
      const id = 3;

      const expectedAction = {
        type: actionTypes.toggleTask,
        id,
      };

      const action = toggleTaskAction(id);

      expect(action).toEqual(expectedAction);
    });
  });
});
