import { render, screen } from "@testing-library/react";
import InfoContainer from "./InfoContainer";

describe("Given InfoContainer", () => {
  describe("When it's rendered", () => {
    test("Then it should display the 3 stats", () => {
      const totalTasks = "Total Tasks:";
      const compleatedTasks = "Compleated Tasks:";
      const ayabababadu = "Ayabababadu:";

      render(<InfoContainer />);

      const foundTotalTasks = screen.getByText(totalTasks);
      const doundCompleatedTasks = screen.getByText(compleatedTasks);
      const foundAyabababadu = screen.getByText(ayabababadu);

      expect(foundAyabababadu).toBeInTheDocument();
      expect(doundCompleatedTasks).toBeInTheDocument();
      expect(foundTotalTasks).toBeInTheDocument();
    });
  });
});
