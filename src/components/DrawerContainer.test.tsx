import { render, screen } from "@testing-library/react";
import DrawerContainer from "./DrawerContainer";
import {BrowserRouter as Router} from 'react-router-dom';

//test block
test("tests if title is displayed", () => {
  // render the component on virtual dom
  render(<Router><DrawerContainer /></Router>);

  //select the elements you want to interact with
  const title = screen.getByTestId("drawerTitle");

  //assert the expected result
  expect(title).toHaveTextContent("Kendo React & Material UI - POC");
});
