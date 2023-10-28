import { Paper, Grid, Typography, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const ProductInsights = ({ rows, columns }) => (
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
);

export default ProductInsights;
