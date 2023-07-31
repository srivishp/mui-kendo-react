import * as React from "react";
import * as ReactDOM from "react-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const MUIControls = () => {
  return (
    <div>
      <div style={{ height: 400, width: "100%" }}>
        <h1> Material UI Basic Buttons </h1>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="contained" href="#contained-buttons">
            Link
          </Button>
          <br></br>
          <Box sx={{ "& button": { m: 1 } }}>
            <div>
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
            </div>
            <div>
              <Button variant="outlined" size="small">
                Small
              </Button>
              <Button variant="outlined" size="medium">
                Medium
              </Button>
              <Button variant="outlined" size="large">
                Large
              </Button>
            </div>
            <div>
              <Button variant="contained" size="small">
                Small
              </Button>
              <Button variant="contained" size="medium">
                Medium
              </Button>
              <Button variant="contained" size="large">
                Large
              </Button>
            </div>
          </Box>
        </Stack>
      </div>
    </div>
  );
};
export default MUIControls;
