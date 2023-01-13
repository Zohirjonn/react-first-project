import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {// jshint ignore:line
  // jshint ignore:line
  // jshint ignore:line
  render(<App />); // jshint ignore:line
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); // jshint ignore:line
});
