import tasksReducer from "./tasksReducer";

describe("Given tasksReducer", () => {
  describe("When it is instanciated without passing anything", () => {
    test("Then it should return an empty array", () => {
      const expectedTasks = [];

      const newTasks = tasksReducer();

      expect(newTasks).toEqual(expectedTasks);
    });
  });
});
