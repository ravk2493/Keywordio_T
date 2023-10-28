import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ backgroundColor: "white" }}
        elevation={0.5}
        position="static"
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "black",
              fontWeight: 600,
              fontSize: "1.2rem",
            }}
          >
            APP LOGO
          </Typography>
          <Link to="/" end>
            <Button sx={{ color: "black" }}>DASHBOARD</Button>
          </Link>
          <Link to="/createads">
            <Button sx={{ color: "black" }}>CREATE ADS</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
