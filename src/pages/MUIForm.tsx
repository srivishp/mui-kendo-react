import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { FormControlLabel, Select, SelectChangeEvent } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const MUIForm = () => {
  const [dealType, setDealType] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setDealType(event.target.value as string);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [expirationDate, setExpirationDate] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  return (
    <div>
      <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
        <TextField
          label="Transaction ID"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "50ch" }}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
        <TextField
          label="IR Swap Margin"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "50ch" }}
          InputProps={{
            endAdornment: <InputAdornment position="end">bp</InputAdornment>,
          }}
        />
      </FormControl>
      <br />
      <FormControl sx={{ m: 1, width: "75ch" }} variant="outlined">
        <TextField
          label="Long Name"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "102ch" }}
        />
      </FormControl>
      <br />
      <FormControl sx={{ m: 1, width: "50ch" }}>
        <InputLabel id="demo-simple-select-label">Deal Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Deal Type"
          onChange={handleChange}
          sx={{ m: 1, width: "25ch" }}
        >
          <MenuItem value="Private">Private</MenuItem>
          <MenuItem value="Public">Public</MenuItem>
        </Select>
      </FormControl>
      <FormControlLabel
        value="start"
        label="Expired"
        labelPlacement="start"
        sx={{ mr: "6ch", ml: "16.5ch", color: "#434343" }}
        control={
          <Checkbox
            checked={checked}
            onChange={() => {
              if (checked) {
                setExpirationDate("");
              }
              setChecked(!checked);
            }}
          />
        }
      />
      <TextField
        type="date"
        variant="outlined"
        color="primary"
        label="Expiry Date"
        InputLabelProps={{ shrink: true }}
        disabled={!checked}
        onChange={(e) => setExpirationDate(e.target.value)}
        value={expirationDate}
        sx={{ mb: 4 }}
      />

      <br />
      <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
        <TextField
          label="Transaction ID"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
        />
      </FormControl>
      <FormControlLabel
        value="start"
        label="Update Public Pool Stats"
        labelPlacement="start"
        sx={{ mr: "13ch", color: "#434343" }}
        control={<Checkbox />}
      />
      <FormControlLabel
        value="start"
        label="Hidden"
        labelPlacement="start"
        sx={{ mr: "13ch", color: "#434343" }}
        control={<Checkbox />}
      />
      <br />
      <FormControl sx={{ m: 1, width: "50ch" }}>
        <InputLabel id="demo-simple-select-label">Asset Class</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Asset Class"
          onChange={handleChange}
          sx={{ m: 1, width: "25ch" }}
        >
          <MenuItem value="Mortgages-Prime">Mortgages-Prime</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: "50ch" }}>
        <InputLabel id="demo-simple-select-label">Structure Class</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Structure Class"
          onChange={handleChange}
          sx={{ m: 1, width: "25ch" }}
        >
          <MenuItem value="RMBS">RMBS</MenuItem>
        </Select>
      </FormControl>
      <br />
      <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
        <TextField
          label="Group Name"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "50ch" }}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
        <TextField
          label="Support Facility"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "50ch" }}
        />
      </FormControl>
      <br />
      <FormControl sx={{ m: 1, width: "50ch" }}>
        <InputLabel id="demo-simple-select-label">ECRS</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="ECRS"
          onChange={handleChange}
          sx={{ m: 1, width: "25ch" }}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, width: "50ch" }}>
        <InputLabel id="demo-simple-select-label">Facility Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Facility Type"
          onChange={handleChange}
          sx={{ m: 1, width: "25ch" }}
        >
          <MenuItem value="Revolving">Revolving</MenuItem>
        </Select>
      </FormControl>
      <br />
      <FormControl sx={{ m: 1, width: "75ch" }} variant="outlined">
        <TextField
          label="Program Sponsor"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "102ch" }}
        />
      </FormControl>
      <br />
      <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
        <TextField
          label="Issuer Type"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "50ch" }}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
        <TextField
          label="Issuer Sub Type"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "50ch" }}
        />
      </FormControl>
      <br />
      <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
        <TextField
          label="Pool Loader"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "50ch" }}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
        <TextField
          label="Issuer Category"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "50ch" }}
        />
      </FormControl>
      <br />
      <Stack spacing={2} direction="row">
        <Button sx={{ ml: "46ch" }} variant="contained">
          Update
        </Button>
        <Button variant="outlined">Cancel</Button>
      </Stack>
    </div>
  );
};

export default MUIForm;
