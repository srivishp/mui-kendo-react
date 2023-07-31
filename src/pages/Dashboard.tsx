import * as React from "react";
import {
  Chart,
  ChartTitle,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-react-charts";
import ReusableLineChart from "../components/ReusableLineChart";
import "hammerjs";

import {
  TabStrip,
  TabStripSelectEventArguments,
  TabStripTab,
} from "@progress/kendo-react-layout";

const Dashboard = () => {
  const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const firstSeries = [123, 276, 310, 212, 240, 156, 98];
  const secondSeries = [165, 210, 287, 144, 190, 167, 212];
  const thirdSeries = [56, 140, 195, 46, 123, 78, 95];

  const [stfirstSeries, stsecondSeries] = [
    [1, 1, 1],
    [1, 0, -1],
  ];

  const [selected, setSelected] = React.useState<number>(1);

  const handleSelect = (e: TabStripSelectEventArguments) => {
    setSelected(e.selected);
  };

  return (
    <TabStrip selected={selected} onSelect={handleSelect}>
      <TabStripTab title="Area Chart">
        <div>
          <Chart>
            <ChartTitle text="Units sold" />
            <ChartCategoryAxis>
              <ChartCategoryAxisItem
                categories={categories}
                title={{ text: "Months" }}
              />
            </ChartCategoryAxis>
            <ChartSeries>
              <ChartSeriesItem type="area" data={firstSeries} />
              <ChartSeriesItem type="area" data={secondSeries} />
              <ChartSeriesItem type="area" data={thirdSeries} />
            </ChartSeries>
          </Chart>
        </div>
      </TabStripTab>
      <TabStripTab title="Stacked Chart">
        <div>
          <Chart>
            <ChartSeries>
              <ChartSeriesItem
                type="area"
                stack={true}
                data={stfirstSeries}
                color="red"
                opacity={0.5}
              />
              <ChartSeriesItem
                type="area"
                data={stfirstSeries}
                color="green"
                opacity={0.5}
              />
              <ChartSeriesItem
                type="area"
                data={stsecondSeries}
                color="blue"
                opacity={0.5}
              />
            </ChartSeries>
          </Chart>
        </div>
      </TabStripTab>

      <TabStripTab title="Line Chart">
        <div>
          <Chart>
            <ChartTitle text="Units sold" />
            <ChartCategoryAxis>
              <ChartCategoryAxisItem
                title={{ text: "Months" }}
                categories={categories}
              />
            </ChartCategoryAxis>
            <ChartSeries>
              <ChartSeriesItem
                type="line"
                data={[123, 276, 310, 212, 240, 156, 98]}
              />
              <ChartSeriesItem
                type="line"
                data={[165, 210, 287, 144, 190, 167, 212]}
              />
              <ChartSeriesItem
                type="line"
                data={[56, 140, 195, 46, 123, 78, 95]}
              />
            </ChartSeries>
          </Chart>
        </div>
      </TabStripTab>

      <TabStripTab title="Reusable Line Chart">
        <div>
          <ReusableLineChart />
        </div>
      </TabStripTab>
    </TabStrip>
  );
};

export default Dashboard;
