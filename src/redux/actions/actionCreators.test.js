import { loadTasksAction } from "./actionCreators";
import actionTypes from "./actionTypes";

describe("Given loadTasksAction", () => {
  describe("When it is called passing an array of tasks", () => {
    test("Then it should retur an action with type loadTasks", () => {
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
