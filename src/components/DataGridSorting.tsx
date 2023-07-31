import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Grid,
  GridColumn as Column,
  GridSortChangeEvent,
} from "@progress/kendo-react-grid";
import { orderBy, SortDescriptor } from "@progress/kendo-data-query";

const initialSort: Array<SortDescriptor> = [{ field: "S. No", dir: "asc" }];

const DataGridSorting = (props: any) => {
  const [columns, setColumns] = React.useState(props.GridColumns);
  const [starwars, setProducts] = React.useState(props.starwars);
  const [sort, setSort] = React.useState(initialSort);

  return (
    <Grid
      style={{ height: "350px" }}
      data={orderBy(starwars, sort)}
      sortable={true}
      sort={sort}
      onSortChange={(e: GridSortChangeEvent) => setSort(e.sort)}
    >
      {columns.map((column: any, index: any) => {
        return <Column key={index} {...column} width="200px" />;
      })}
    </Grid>
  );
};
export default DataGridSorting;
