import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import "../custom.css";
import { Link } from "react-router-dom";

const MediaAds = () => {
  return (
    <Grid
      sx={{
        position: "absolute",
        height: "88%",
        width: "98%",
        border: "1px solid black",
        borderRadius: "5px",
      }}
    >
      <Typography sx={{ position: "absolute", top: "1%", left: "1%" }}>
        Create text and media
      </Typography>
      <Box>
        <div>
          <label
            style={{ position: "absolute", top: "5%", left: "1%" }}
            htmlFor="myInput"
          >
            Heading 01
          </label>
          <input
            placeholder="Add a heading that would make users interested"
            style={{
              position: "absolute",
              top: "10%",
              left: "1%",
              width: "47%",
              height: "4%",
            }}
            type="text"
            id="myInput"
            name="myInput"
          />
        </div>
        <div>
          <label
            style={{ position: "absolute", top: "18%", left: "1%" }}
            htmlFor="myInput"
          >
            Heading 02
          </label>
          <input
            placeholder="Add a heading that would make users interested"
            style={{
              position: "absolute",
              top: "24%",
              left: "1%",
              width: "47%",
              height: "4%",
            }}
            type="text"
            id="myInput"
            name="myInput"
          />
        </div>
        <div>
          <label
            style={{ position: "absolute", top: "31%", left: "1%" }}
            htmlFor="myInput"
          >
            Landscape Marketing Image
          </label>
          <input
            placeholder="Add the URL of the image you want to use for the ad"
            style={{
              position: "absolute",
              top: "36%",
              left: "1%",
              width: "30%",
              height: "4%",
            }}
            type="text"
            id="myInput"
            name="myInput"
          />
        </div>
        <div>
          <label
            style={{ position: "absolute", top: "43%", left: "1%" }}
            htmlFor="myInput"
          >
            Video URL
          </label>
          <input
            placeholder="Add the url of the video you want to use for the ad"
            style={{
              position: "absolute",
              top: "50%",
              left: "1%",
              width: "97%",
              height: "4%",
            }}
            type="text"
            id="myInput"
            name="myInput"
          />
        </div>
        <div>
          <label
            style={{ position: "absolute", top: "57%", left: "1%" }}
            htmlFor="myInput"
          >
            Business Name
          </label>
          <input
            placeholder="Add your business name"
            style={{
              position: "absolute",
              top: "62%",
              left: "1%",
              width: "47%",
              height: "4%",
            }}
            type="text"
            id="myInput"
            name="myInput"
          />
        </div>
        <div>
          <label
            style={{ position: "absolute", top: "69%", left: "1%" }}
            htmlFor="myInput"
          >
            Website URL
          </label>
          <input
            placeholder="Add a URL of landing page you want to redirect users to"
            style={{
              position: "absolute",
              top: "74%",
              left: "1%",
              width: "97%",
              height: "4%",
            }}
            type="text"
            id="myInput"
            name="myInput"
          />
        </div>
        <div>
          <label
            style={{ position: "absolute", top: "5%", left: "51%" }}
            htmlFor="myInput"
          >
            Description 01
          </label>
          <textarea
            placeholder="Add primary text to help users understand more about your products, services and offers"
            style={{
              position: "absolute",
              top: "10%",
              left: "51%",
              width: "47%",
              height: "18%",
            }}
            type="text"
            id="myInput"
            name="myInput"
          />
        </div>
        <div>
          <label
            style={{ position: "absolute", top: "31%", left: "35%" }}
            htmlFor="myInput"
          >
            Portrait Marketing Image
          </label>
          <input
            placeholder="Add the URL of the image you want to use for the ad"
            style={{
              position: "absolute",
              top: "36%",
              left: "35%",
              width: "30%",
              height: "4%",
            }}
            type="text"
            id="myInput"
            name="myInput"
          />
        </div>
        <div>
          <label
            style={{ position: "absolute", top: "31%", left: "68%" }}
            htmlFor="myInput"
          >
            Square Marketing Image
          </label>
          <input
            placeholder="Add the URL of the image you want to use for the ad"
            style={{
              position: "absolute",
              top: "36%",
              left: "68%",
              width: "30%",
              height: "4%",
            }}
            type="text"
            id="myInput"
            name="myInput"
          />
        </div>
        <div>
          <label
            style={{ position: "absolute", top: "57%", left: "51%" }}
            htmlFor="myInput"
          >
            Button Label
          </label>
          <input
            placeholder="Select a label that best suits your ad"
            style={{
              position: "absolute",
              top: "62%",
              left: "51%",
              width: "47%",
              height: "4%",
            }}
            type="text"
            id="myInput"
            name="myInput"
          />
        </div>
        <div>
          <Link to="/createads">
            <Button
              sx={{
                position: "absolute",
                top: "92%",
                left: "78%",
                bgcolor: "grey",
                width: "10%",
                color: "black",
              }}
              variant="outlined"
            >
              Back
            </Button>
          </Link>
          <Link to="/submit">
            <Button
              sx={{
                position: "absolute",
                top: "92%",
                left: "89%",
                width: "10%",
                color: "black",
              }}
              variant="contained"
            >
              Submit
            </Button>
          </Link>
        </div>
      </Box>
    </Grid>
  );
};

export default MediaAds;
