// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { server } from "./mocks/server.js";
import store from "./redux/store/index.js";
// Establish API mocking before all tests.

beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

export const renderInBocata = (component) => {
  const Bocata = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  return render(component, { wrapper: Bocata });
};
