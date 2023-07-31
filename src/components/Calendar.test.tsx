import { render, fireEvent, screen } from "@testing-library/react";
import Calendar from "./Calendar";


//test block
test("tests if calendar is visible", () => {
  // render the component on virtual dom
  render(<Calendar />);

  //select the elements you want to interact with
  //const datePicker = screen.getByTestId("datePicker");
  const calendar = screen.getByTestId("dateCalendar");

  //assert the expected result
  //expect(datePicker).toBeVisible();
  expect(calendar).toBeVisible();
  

});