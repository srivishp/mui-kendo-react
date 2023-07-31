import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Dropdown = (props: any) => {
  const [age, setAge] = React.useState("");
  const ageGroups = ["Ten", "Twenty", "Thirty"];

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          variant="outlined"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{ m: 1, minWidth: 120 }}
          size="small"
        >
          <MenuItem value={ageGroups[0]}>{ageGroups[0]}</MenuItem>
          <MenuItem value={ageGroups[1]}>{ageGroups[1]}</MenuItem>
          <MenuItem value={ageGroups[2]}>{ageGroups[2]}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Dropdown;
