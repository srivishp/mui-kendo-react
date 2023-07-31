import React from "react";
import {
  Chart,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-react-charts";

import "hammerjs";
import seriesData from "../pages/LineChart";

const categories = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const ReusableLineChart = (props: any) => {
  const [data, setseriesData] = React.useState(seriesData);
  return (
    <Chart data-testid="lineChart">
      <ChartValueAxis>
        <ChartValueAxisItem title={{ text: "Kilometers" }} min={0} max={100} />
      </ChartValueAxis>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem categories={categories} />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem
          data={data}
          type="line"
          style="smooth"
          markers={{ visible: false }}
          highlight={{ visible: false }}
        />
      </ChartSeries>
    </Chart>
  );
};

export default ReusableLineChart;