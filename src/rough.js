import {
  Paper,
  Grid,
  Typography,
  Box,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import "../custom.css";
import { PieChart } from "@mui/x-charts/PieChart";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const HomePage = () => {
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

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 60,
    height: 34,
    padding: 7,

    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "whitesmoke",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 0v64h64V96H64zm384 0H192v64H448V96zM64 224v64h64V224H64zm384 0H192v64H448V224zM64 352v64h64V352H64zm384 0H192v64H448V352z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));
  //content for table
  const columns = [
    {
      field: "campaigns",
      headerName: "Campaigns",
      width: 150,
      disableColumnMenu: true,
    },
    {
      field: "clicks",
      headerName: "Clicks",
      width: 90,

      disableColumnMenu: true,
    },
    { field: "cost", headerName: "Cost", width: 90, disableColumnMenu: true },
    {
      field: "conversions",
      headerName: "Conversions",
      width: 130,
      disableColumnMenu: true,
    },
    {
      field: "revenue",
      headerName: "Revenue($)",
      width: 150,
      disableColumnMenu: true,
    },
  ];

  const rows = [
    {
      id: 1,
      campaigns: "Cosmetics",
      clicks: 712,
      cost: 4272,
      conversions: 8,
      revenue: 16568,
    },
    {
      id: 2,
      campaigns: "Serums",
      clicks: 3961,
      cost: 27331,
      conversions: 115,
      revenue: 362526,
    },
    {
      id: 3,
      campaigns: "Facewash",
      clicks: 9462,
      cost: 76831,
      conversions: 123,
      revenue: 266800,
    },
    {
      id: 4,
      campaigns: "Shampoos",
      clicks: 439,
      cost: 2151,
      conversions: 5,
      revenue: 11029,
    },
    {
      id: 5,
      campaigns: "Conditioners",
      clicks: 1680,
      cost: 3864,
      conversions: 49,
      revenue: 175245,
    },
    {
      id: 6,
      campaigns: "Facewash 2",
      clicks: 4978,
      cost: 29370,
      conversions: 189,
      revenue: 623106,
    },
    {
      id: 7,
      campaigns: "Total",
      clicks: 26510,
      cost: 143819,
      conversions: 489,
      revenue: 1573563,
    },
  ];
  // for tabular pie chart details
  const pycolumns = [
    {
      field: "groups",
      headerName: "Groups",
      width: 150,
      disableColumnMenu: true,
    },
    {
      field: "clicks",
      headerName: "Clicks",
      width: 90,

      disableColumnMenu: true,
    },
    { field: "cost", headerName: "Cost", width: 90, disableColumnMenu: true },
    {
      field: "conversions",
      headerName: "Conversions",
      width: 130,
      disableColumnMenu: true,
    },
    {
      field: "revenue",
      headerName: "Revenue($)",
      width: 150,
      disableColumnMenu: true,
    },
  ];

  const pyrows = [
    {
      id: 1,
      groups: "Male",
      clicks: 348,
      cost: 12528,
      conversions: 42,
      revenue: 62118,
    },
    {
      id: 2,
      groups: "Female",
      clicks: 692,
      cost: 24912,
      conversions: 35,
      revenue: 5175,
    },
    {
      id: 3,
      groups: "Unknown",
      clicks: 105,
      cost: 3943,
      conversions: 3,
      revenue: 4489,
    },
    {
      id: 4,
      groups: "Total",
      clicks: 1145,
      cost: 41383,
      conversions: 80,
      revenue: 71782,
    },
  ];
  //End of tabular pie chart details
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper elevation={3}>
          <div>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="8px" /* Adjust the padding as needed */
              border="1px solid #ccc"
            >
              <Typography sx={{ paddingTop: "1.5%", paddingBottom: "1%" }}>
                Ad Insights
              </Typography>
              <HelpOutlineOutlinedIcon sx={{ color: "lightgray" }} />
            </Box>

            <DataGrid
              rows={rows}
              columns={columns}
              hideFooter
              hideFooterPagination // Hide the pagination options
            />
          </div>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper elevation={3}>
          <div>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="8px" /* Adjust the padding as needed */
              border="1px solid #ccc"
            >
              {/* Content for the first section */}
              <Typography>Ad Insights</Typography>
              <FormControl
                size="small"
                fullWidth
                sx={{ width: "75%", alignItems: "flex-end" }}
              >
                <InputLabel id="demo-select-small-label"></InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  onChange={handleChange}
                  value={pieTab}
                >
                  <MenuItem value="Clicks">Clicks</MenuItem>
                  <MenuItem value="Cost">Cost</MenuItem>
                  <MenuItem value="Conversions">Conversions</MenuItem>
                  <MenuItem value="Revenue">Revenue</MenuItem>
                </Select>
              </FormControl>
              <HelpOutlineOutlinedIcon sx={{ color: "lightgray" }} />
            </Box>
          </div>
          <div>
            {switchKey && (
              <PieChart
                slotProps={{
                  legend: {
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
                width={400}
                height={400}
              />
            )}

            {!switchKey && (
              <DataGrid
                rows={pyrows}
                columns={pycolumns}
                hideFooter
                hideFooterPagination // Hide the pagination options
              />
            )}
          </div>
          <div>
            <FormGroup>
              <FormControlLabel
                control={
                  <MaterialUISwitch
                    onChange={switchClickHandler}
                    sx={{ m: 1 }}
                    checked={switchKey}
                  />
                }
              />
            </FormGroup>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HomePage;
