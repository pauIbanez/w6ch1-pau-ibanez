import actionTypes from "../actions/actionTypes";
import { loadTasksThunk } from "./thunks";

describe("Given loadTasksThunk", () => {
  describe("When it is called", () => {
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
});
