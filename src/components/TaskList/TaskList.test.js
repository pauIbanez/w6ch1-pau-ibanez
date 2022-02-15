import { renderInBocata } from "../../setupTests";
import TaskList from "./TaskList";
import * as redux from "react-redux";
import { screen } from "@testing-library/react";

describe("Given TaskList", () => {
  describe("When it is rendered", () => {
    test("Then it should render a list and a listItem foreach task", () => {
      const tasks = [
        {
          id: 1,
          compleated: false,
          text: "sdasd",
        },
        {
          id: 2,
          compleated: false,
          text: "sdasd",
        },
      ];

      const fakySelector = jest.spyOn(redux, "useSelector");
      fakySelector.mockReturnValue({ tasks });

      renderInBocata(<TaskList />);

      const list = screen.getByRole("list");
      const tasksInScreen = screen.getAllByRole("listitem");

      // const callBack = fakySelector.mock.calls[0][0];  index de llamada, index de argumento
      // expect.any(loquesea)

      expect(list).toBeInTheDocument();
      expect(tasksInScreen.length).toBe(tasks.length);

      expect(fakySelector).toHaveBeenCalledWith(expect.any(Function));
    });
  });
});
