import { Paper, Grid } from "@mui/material";
import React, { useState } from "react";
import UserInsightChart from "./UserInsightChart";
import UserInsightList from "./UserInsightList";
import MaterialUISwitch from "../UI/MaterialSwitch";
import UserInsightsHeader from "./UserInsightsHeader";

const UserInsights = ({ pycolumns, pyrows }) => {
  const [pieTab, setPieTab] = React.useState("Clicks");
  const [switchKey, setSwitchKey] = useState(true);
  const [pieChart, setPieChart] = useState({
    male: 348,
    female: 692,
    unknown: 105,
  });
  //Switch Click Handler
  const switchClickHandler = () => {
    setSwitchKey(!switchKey);
  };
  //Drop down click handler
  const handleChange = (event) => {
    setPieTab(event.target.value);
    if (event.target.value === "Cost") {
      setPieChart({ male: 12528, female: 24912, unknown: 3943 });
    } else if (event.target.value === "Clicks") {
      setPieChart({ male: 348, female: 692, unknown: 105 });
    } else if (event.target.value === "Conversions") {
      setPieChart({ male: 42, female: 35, unknown: 3 });
    } else {
      setPieChart({ male: 62118, female: 5175, unknown: 4489 });
    }
  };
  // content for switch in pie chart
  return (
    <Grid item xs={6}>
      <Paper elevation={3} sx={{ height: "477px" }}>
        <UserInsightsHeader pieTab={pieTab} handleChange={handleChange} />
        {switchKey ? (
          <UserInsightChart pieChart={pieChart} />
        ) : (
          <UserInsightList pyrows={pyrows} pycolumns={pycolumns} />
        )}
        <MaterialUISwitch
          onChange={switchClickHandler}
          sx={{ float: "right", marginTop: "75px" }}
          checked={switchKey}
        />
      </Paper>
    </Grid>
  );
};

export default UserInsights;
