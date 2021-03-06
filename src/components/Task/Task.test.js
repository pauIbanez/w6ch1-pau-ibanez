import { screen } from "@testing-library/react";
import { renderInBocata } from "../../setupTests";
import Task from "./Task";
import userEvent from "@testing-library/user-event";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

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

  describe("When it's clicked", () => {
    test("Then it should call the dispatch passing a thunk getter function", () => {
      const task = {
        text: "dfgdfsgafsadfa",
        compleated: false,
        id: 1,
      };

      renderInBocata(<Task task={task} />);

      const foundText = screen.getByRole("listitem");
      userEvent.click(foundText);

      expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function));
    });
  });

  describe("When the trash is clicked", () => {
    test("Then it should call the dispatch passing a thunk getter function and stop the event proppagation", () => {
      const task = {
        text: "dfgdfsgafsadfa",
        compleated: false,
        id: 1,
      };
      const expectedTimes = 1;

      renderInBocata(<Task task={task} />);

      const foundTrash = screen.getByTestId("trash");
      userEvent.click(foundTrash);

      expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function));
      expect(mockDispatch).toHaveBeenCalledTimes(expectedTimes);
    });
  });
});
