import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import {
  FormLabel,
  FormControlLabel,
  Select,
  SelectChangeEvent,
  Button,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Label } from "@progress/kendo-react-labels";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

const FormWrapper = styled("form")({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  maxHeight: "700px",
  justifyContent: "start",
});

const LabelWrapper = styled("form")({
  color: "primary",
  margin: "10px",
});

const ControlWrapper = styled("form")({
  mb: "5px",
  width: "20ch",
});

const CheckboxWrapper = styled("form")({
  mb: "5px",
  width: "20ch",
  color: "#434343",
  value: "start",
  labelPlacement: "end",
});

const MUIForm = () => {
  const [dealType, setDealType] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setDealType(event.target.value as string);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <FormWrapper>

      <ControlWrapper>
        <FormControl>
          <LabelWrapper>
            <FormLabel data-testid="GUID">GUID</FormLabel>
          </LabelWrapper>
        </FormControl>
        <FormControl>
          <LabelWrapper>
            <FormLabel data-testid="Transaction Name">Transaction Name</FormLabel>
          </LabelWrapper>
        </FormControl>
        <FormControl>
          <LabelWrapper>
            <FormLabel data-testid="Originator">Originator</FormLabel>
          </LabelWrapper>
        </FormControl>
        <br />
        <FormControl>
          <LabelWrapper>
            <FormLabel data-testid="Issuer">Issuer</FormLabel>
          </LabelWrapper>
        </FormControl>
        <br />
        <FormControl >
          <LabelWrapper>
            <FormLabel data-testid="Asset Class">Asset Class</FormLabel>
          </LabelWrapper>
        </FormControl>
        <FormControl >
          <LabelWrapper>
            <FormLabel data-testid="Issuance Type">Issuance Type</FormLabel>
          </LabelWrapper>
        </FormControl>
        <FormControl >
          <LabelWrapper>
            <FormLabel data-testid="Deal Team Name" >Deal Team Name</FormLabel>
          </LabelWrapper>
        </FormControl>
        <FormControl >
          <LabelWrapper>
            <FormLabel>Execution Lead</FormLabel>
          </LabelWrapper>
        </FormControl>
        <FormControl >
          <LabelWrapper>
            <FormLabel>Launch Date</FormLabel>
          </LabelWrapper>
        </FormControl>
        <FormControl >
          <LabelWrapper>
            <FormLabel>Pricing Date</FormLabel>
          </LabelWrapper>
        </FormControl>
        <FormControl sx={{ mb: "175px"}}>
          <LabelWrapper>
            <FormLabel>Settlement Date</FormLabel>
          </LabelWrapper>
        </FormControl>
      </ControlWrapper>


      <FormControl  variant="outlined">
        <TextField
          label="GUID"
          id="outlined-start-adornment"
          size="small"
          sx={{ mb: "5px", width: "25ch" }}
        />
      </FormControl>
      <FormControl  variant="outlined">
        <TextField
          label="Transaction Name"
          id="outlined-start-adornment"
          size="small"
          sx={{ mb: "5px", width: "25ch" }}
        />
      </FormControl>
      <FormControl variant="outlined">
        <TextField
          label="Originator"
          id="outlined-start-adornment"
          size="small"
          sx={{ mb: "5px", width: "25ch" }}
        />
      </FormControl>
      <FormControl  variant="outlined">
        <TextField
          label="Issuer"
          id="outlined-start-adornment"
          size="small"
          sx={{ mb: "5px", width: "25ch" }}
        />
      </FormControl>
      <FormControl size="small" >
        <InputLabel id="demo-simple-select-label">Asset Class</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Asset Class"
          
          onChange={handleChange}
          sx={{ mb: "5px", width: "25ch" }}
        >
          <MenuItem value="Securitisation">Securitisation</MenuItem>
        </Select>
      </FormControl>
      <FormControl  variant="outlined">
        <TextField
          label="Issuance Type"
          id="outlined-start-adornment"
          size="small"
          sx={{ mb: "5px", width: "25ch" }}
        />
      </FormControl>
      <FormControl variant="outlined">
        <TextField
          label="Deal Team Name"
          id="outlined-start-adornment"
          size="small"
          sx={{ mb: "5px", width: "25ch" }}
        />
      </FormControl>
      <FormControl size="small" >
        <InputLabel id="demo-simple-select-label">Execution Lead</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Execution Lead"
          size="small"
          onChange={handleChange}
          sx={{ mb: "5px", width: "25ch" }}
        >
          <MenuItem value="John Doe">John Doe</MenuItem>
        </Select>
      </FormControl>
      <FormControl  variant="outlined">
        <LocalizationProvider
          components={["DatePicker"]}
          size="small"
          dateAdapter={AdapterDayjs}
        >
          <DatePicker
            slotProps={{ textField: { size: "small" } }}
            label="Launch Date"
            sx={{ mb: "5px", width: "25ch" }}
          />
        </LocalizationProvider>
      </FormControl>
      <FormControl variant="outlined">
        <LocalizationProvider
          components={["DatePicker"]}
          size="small"
          dateAdapter={AdapterDayjs}
        >
          <DatePicker
            slotProps={{ textField: { size: "small" } }}
            label="Pricing Date"
            sx={{ mb: "5px", width: "25ch" }}
          />
        </LocalizationProvider>
      </FormControl>
      <FormControl variant="outlined">
        <LocalizationProvider
          components={["DatePicker"]}
          size="small"
          dateAdapter={AdapterDayjs}
        >
          <DatePicker
            slotProps={{ textField: { size: "small" } }}
            label="Settlement Date"
            sx={{ mb: "80px", width: "25ch" }}
          />
        </LocalizationProvider>
      </FormControl>
      <FormControl sx={{ width: "20ch" }}>
        <Button variant="contained" color="success">
          Save
        </Button>
      </FormControl>

      <CheckboxWrapper>
        <FormControlLabel
          value="start"
          label="Wholesale Bond New Issue"
          labelPlacement="end"
          control={<Checkbox />}
        />
        <FormControlLabel
          value="start"
          label="Securitisation Bond New Issue"
          labelPlacement="end"
          control={<Checkbox />}
        />
        <FormControlLabel
          value="start"
          label="Listed Hybrid"
          labelPlacement="end"
          control={<Checkbox />}
        />
        <FormControlLabel
          value="start"
          label="Listed LIC/LIT"
          labelPlacement="end"
          control={<Checkbox />}
        />
        <FormControlLabel
          value="start"
          label="Private Placement"
          labelPlacement="end"
          control={<Checkbox />}
        />
        <FormControlLabel sx = {{mb: "50px"}}
          value="start"
          label="Equity"
          labelPlacement="end"
          control={<Checkbox />}
        />
      </CheckboxWrapper>

      <FormControl sx={{ mb: "5px", width: "10ch" }} variant="outlined">
        <LabelWrapper>
          <FormLabel>Region</FormLabel>
        </LabelWrapper>
      </FormControl>
      <FormControl sx={{ mb: "5px", width: "10ch" }} variant="outlined">
        <LabelWrapper>
          <FormLabel>ISIN</FormLabel>
        </LabelWrapper>
      </FormControl>
      <FormControl sx={{ mb: "5px", width: "20ch" }} variant="outlined">
        <LabelWrapper>
          <FormLabel >Deal Volume</FormLabel>
        </LabelWrapper>
      </FormControl>
      <FormControl sx={{ width: "20ch", mt: "110px" }}>
        <Button variant="contained">Save & Close</Button>
      </FormControl>

      <FormControl size="small" sx={{ width: "20ch", mt: "270px" }}>
        <InputLabel id="demo-simple-select-label">Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Region"
          size="small"
          onChange={handleChange}
          sx={{ mb: "5px", width: "25ch" }}
        >
          <MenuItem value="Australia">Australia</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{  width: "20ch" }} variant="outlined">
        <TextField
          label="ISIN"
          id="outlined-start-adornment"
          size="small"
          sx={{ mb: "5px", width: "25ch" }}
        />
      </FormControl>
      <FormControl sx={{ width: "20ch", mb: "138px" }} variant="outlined">
        <TextField
          label="Deal Volume"
          id="outlined-start-adornment"
          size="small"
          sx={{ mb: "5px", width: "25ch" }}
        />
      </FormControl>
      <FormControl sx={{ width: "20ch" }}>
        <Button variant="outlined">Close</Button>
      </FormControl>

      <Box
        sx={{
          width: 300,
          height: 285,
          border: "1px dashed grey",
          color: "#434343",
        }}
      >
        {" "}
        Created: 25/04/2023 John Doe
        <br />
        <br />
        Modified: 26/04/2023 John Doe
        <br />
        <br />
        Submitted: 27/04/2023 John Doe
        <br />
        <br />
        Asssessment: <br />
        <br />
        Current Statement: In Progress
        <br />
        <br />
        <Button variant="contained">Submit</Button>
      </Box>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Box
        sx={{
          width: 100,
          height: 100,
          border: "1px white",
          color: "#434343",
        }}
      >
        <b>Project Team:</b> Unassigned
      </Box>
    </FormWrapper>
  );
};

export default MUIForm;
