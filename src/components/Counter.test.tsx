import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

//test block
test("tests counter value on rendering", () => {
  // render the component on virtual dom
  render(<Counter />);

  //select the elements you want to interact with
  const counter = screen.getByTestId("counter");

  //assert the expected result
  expect(counter).toHaveTextContent("0");
});
