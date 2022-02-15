import actionTypes from "../actions/actionTypes";
import {
  getAddTaskThunk,
  getRemoveTaskThunk,
  getToggleTaskThunk,
  loadTasksThunk,
} from "./thunks";

describe("Given loadTasksThunk", () => {
  describe("When it is called and API is ok", () => {
    test("Then it should call dispatch passing a loadTasksAction", async () => {
      const tasks = [
        {
          id: 1,
          name: "Task 1",
          dueDate: "Date.now()",
          compleated: false,
        },
        {
          id: 2,
          name: "Task 2",
          dueDate: "Date.now()",
          compleated: true,
        },
      ];

      const expectedAction = {
        type: actionTypes.loadTasks,
        tasks,
      };

      const mockDispatch = jest.fn();

      await loadTasksThunk(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When it is called and API is caca", () => {
    const OLD_ENV = process.env;

    beforeEach(() => {
      jest.resetModules(); // Most important - it clears the cache
      process.env = { ...OLD_ENV }; // Make a copy
    });
    afterAll(() => {
      process.env = OLD_ENV; // Restore old environment
    });
    test("Then it should not call dispatch", async () => {
      jest.resetModules();

      process.env.REACT_APP_API_URL = "https://failtherequest.com/thisworks";
      const mockDispatch = jest.fn();

      await loadTasksThunk(mockDispatch);

      expect(mockDispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given addTaskThunk", () => {
  describe("When it is called and api ok", () => {
    test("Then it should call dispatch passing an addTask action", async () => {
      const task = {
        name: "Task 3",
        dueDate: "Date.now()",
        compleated: false,
      };
      const expectedTask = {
        id: 3,
        name: "Task 3",
        dueDate: "Date.now()",
        compleated: false,
      };

      const expectedAction = {
        type: actionTypes.addTask,
        task: expectedTask,
      };

      const mockDispatch = jest.fn();

      const addTaskThunk = getAddTaskThunk(task);
      await addTaskThunk(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When it is called and api caca", () => {
    test("Then it should not call dispatch", async () => {
      const task = ["fail"];

      const mockDispatch = jest.fn();

      const addTaskThunk = getAddTaskThunk(task);
      await addTaskThunk(mockDispatch);

      expect(mockDispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given removeTaskThunk", () => {
  describe("When it is called with and id 3", () => {
    test("Then it should call dispatch passing a removeTask action", async () => {
      const id = 3;

      const expectedAction = {
        type: actionTypes.removeTask,
        id,
      };

      const mockDispatch = jest.fn();

      const deleteTaskThunk = getRemoveTaskThunk(id);
      await deleteTaskThunk(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When it is called with and id 2", () => {
    test("Then it should not call dispatch", async () => {
      const id = 2;
      const mockDispatch = jest.fn();

      const deleteTaskThunk = getRemoveTaskThunk(id);
      await deleteTaskThunk(mockDispatch);

      expect(mockDispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given toggleTaskThunk", () => {
  describe("When it is called with id 3", () => {
    test("Then it should call dispatch passing a removeTask action", async () => {
      const id = 3;
      const newCompleated = false;

      const expectedAction = {
        type: actionTypes.toggleTask,
        id,
      };

      const mockDispatch = jest.fn();

      const toggleTaskThunk = getToggleTaskThunk(newCompleated, id);
      await toggleTaskThunk(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When it is called with id 2", () => {
    test("Then it should not call dispatch", async () => {
      const id = 2;
      const newCompleated = false;
      const mockDispatch = jest.fn();

      const toggleTaskThunk = getToggleTaskThunk(newCompleated, id);
      await toggleTaskThunk(mockDispatch);

      expect(mockDispatch).not.toHaveBeenCalled();
    });
  });
});
