import { screen } from "@testing-library/react";
import { renderInBocata } from "../../setupTests";
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

      renderInBocata(<Task task={task} />);

      const foundText = screen.getByText(text);

      expect(foundText).toBeInTheDocument();
    });
  });

  describe("When it recieves a compleated task", () => {
    test("Then it should display the checkmark", () => {
      const testId = "compleated";
      const task = {
        text: "dfgdfsgafsadfa",
        compleated: true,
        id: 1,
      };

      renderInBocata(<Task task={task} />);

      const foundCheckMark = screen.getByTestId(testId);

      expect(foundCheckMark).toBeVisible();
    });
  });

  describe("When it recieves a not compleated task", () => {
    test("Then it should not display the checkmark", () => {
      const testId = "compleated";
      const task = {
        text: "dfgdfsgafsadfa",
        compleated: false,
        id: 1,
      };

      renderInBocata(<Task task={task} />);

      const foundCheckMark = screen.getByTestId(testId);

      expect(foundCheckMark).not.toBeVisible();
    });
  });
});
