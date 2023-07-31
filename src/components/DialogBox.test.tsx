import { render, fireEvent, screen } from "@testing-library/react";
import DialogBox from "./DialogBox";
import { DialogContent } from "@mui/material";

//test block
test("tests if button is visible in dialog box", () => {
  // render the component on virtual dom
  render(<DialogBox />);

  //select the elements you want to interact with
  const button = screen.getByTestId("dialogButton");
  //   const dialogElement = screen.getByTestId("dialogElement");
  //   const dialogTitle = screen.getByTestId("dialogTitle");

  //interact with those elements
  //fireEvent.click(button);

  //assert the expected result
  expect(button).toBeVisible();
  //expect(dialogElement).toContainElement(dialogTitle);
});
