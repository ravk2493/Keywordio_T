import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const UserInsightsChart = ({ pieChart }) => (
  <PieChart
    slotProps={{
      legend: {
        direction: "column",
        position: {
          vertical: "center",
          horizontal: "right",
        },
        itemMarkWidth: 50,
      },
    }}
    series={[
      {
        data: [
          {
            id: 0,
            value: pieChart.male,
            color: "dodgerblue",
            label: "Male",
          },
          {
            id: 1,
            value: pieChart.female,
            color: "darkorange",
            label: "Female",
          },
          {
            id: 2,
            value: pieChart.unknown,
            color: "dimgray",
            label: "Unknown",
          },
        ],
        innerRadius: 75,
        outerRadius: 120,
        paddingAngle: 1,
        cornerRadius: 0,
        startAngle: 0,
        endAngle: 360,
        cx: 152,
        cy: 150,
      },
    ]}
    width={500}
    height={300}
  />
);

export default UserInsightsChart;
