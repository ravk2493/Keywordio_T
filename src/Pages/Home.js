import { Grid } from "@mui/material";
import ProductInsights from "../Components/ProductsInsight";
import UserInsights from "../Components/UserInsight";
import { rows, columns } from "../Data/ProductInsight";
import { pycolumns, pyrows } from "../Data/UserInsight";

import React from "react";

const HomePage = () => {
  return (
    <Grid container spacing={2}>
      <ProductInsights rows={rows} columns={columns} />
      <UserInsights pycolumns={pycolumns} pyrows={pyrows} />
    </Grid>
  );
};

export default HomePage;
