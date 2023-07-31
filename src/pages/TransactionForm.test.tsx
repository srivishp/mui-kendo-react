import { render, screen } from "@testing-library/react";
import TransactionForm from "./TransactionForm";

//test block
test("tests labels in transaction form", () => {
  // render the component on virtual dom
  render(<TransactionForm />);

  //select the elements you want to interact with
  const guid = screen.getByTestId("GUID");
  const transactionName = screen.getByTestId("Transaction Name");
  const originator = screen.getByTestId("Originator");
  const issuer = screen.getByTestId("Issuer");
  const assetClass = screen.getByTestId("Asset Class");
  const issuanceType = screen.getByTestId("Issuance Type");
  const dealTeamName = screen.getByTestId("Deal Team Name");

  //assert the expected result
  expect(guid).toHaveTextContent("GUID");
  expect(transactionName).toHaveTextContent("Transaction Name");
  expect(originator).toHaveTextContent("Originator");
  expect(issuer).toHaveTextContent("Issuer");
  expect(assetClass).toHaveTextContent("Asset Class");
  expect(issuanceType).toHaveTextContent("Issuance Type");
  expect(dealTeamName).toHaveTextContent("Deal Team Name");

});