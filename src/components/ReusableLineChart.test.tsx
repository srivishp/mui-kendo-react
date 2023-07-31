import { render, screen } from "@testing-library/react";
import ReusableLineChart from "./ReusableLineChart";

//test block
test("tests if line chart is visible", () => {
  // render the component on virtual dom
  render(<ReusableLineChart />);

  //select the elements you want to interact with
  const chart = screen.getByTestId("lineChart");

  //assert the expected result
  expect(chart).toBeVisible();
});
