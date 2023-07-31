import * as React from "react";
import * as ReactDOM from "react-dom";
import { Grid, GridColumn, GridToolbar } from "@progress/kendo-react-grid";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { GridPDFExport } from "@progress/kendo-react-pdf";

import products from "../resources/products.json";

const DataGrid = () => {
  let gridExcelExport: ExcelExport | null;
  const exportExcel = () => {
    if (gridExcelExport !== null) {
      gridExcelExport.save();
    }
  };

  let gridPDFExport: GridPDFExport | null;
  const exportPDF = () => {
    if (gridPDFExport !== null) {
      gridPDFExport.save();
    }
  };

  const gridLayout = (
    <Grid style={{ height: "400px" }} data={products}>
      <GridToolbar>
        <button
          title="Export Excel"
          className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
          onClick={exportExcel}
        >
          Export to Excel
        </button>

        <button
          title="Export PDF"
          className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
          onClick={exportPDF}
        >
          Export PDF
        </button>
      </GridToolbar>

      <GridColumn field="ProductID" title="ID" width="40px" />
      <GridColumn field="ProductName" title="Name" width="250px" />
      <GridColumn field="Category.CategoryName" title="CategoryName" />
      <GridColumn field="UnitPrice" title="Price" />
      <GridColumn field="UnitsInStock" title="In stock" />
    </Grid>
  );

  return (
    <React.Fragment>
      <GridPDFExport ref={(pdfExport) => (gridPDFExport = pdfExport)}>
        {gridLayout}
      </GridPDFExport>
      <ExcelExport
        data={products}
        ref={(excelExport) => (gridExcelExport = excelExport)}
      >
        {gridLayout}
      </ExcelExport>
    </React.Fragment>
  );
};
export default DataGrid;
