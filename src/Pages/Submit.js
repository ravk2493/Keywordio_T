import { useState } from "react";
import { useEffect } from "react";
import "../custom.css";
import { Dialog, DialogContent, DialogContentText } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

const Submit = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // After 1 second, navigate back to the homepage
    const timeout = setTimeout(() => {
      navigate("/createads");
    }, 600);

    return () => clearTimeout(timeout);
  }, [navigate]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{ width: "80%", height: "80%" }}
      >
        <CheckCircleIcon
          sx={{
            color: "dodgerblue",
            position: "absolute",
            top: "25%",
            left: "45%",
            fontSize: "2em",
          }}
        />
        <DialogContent>
          <DialogContentText>Submitted</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Submit;
