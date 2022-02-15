import { render, screen } from "@testing-library/react";
import Task from "./Task";

describe("Given Task", () => {
  describe("When it recieves a task with name 'dfgdfsgafsadfa'", () => {
    test("Then it should display 'dfgdfsgafsadfa'", () => {
      const text = "dfgdfsgafsadfa";

      const task = {
        text: "dfgdfsgafsadfa",
        compleated: false,
        id: 1,
      };

      render(<Task task={task} />);

      const foundText = screen.getByText(text);

      expect(foundText).toBeInTheDocument();
    });
  });
});
