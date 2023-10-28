import {
  Typography,
  Box,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import React from "react";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const UserInsightsHeader = ({ pieTab, handleChange }) => (
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
);

export default UserInsightsHeader;
