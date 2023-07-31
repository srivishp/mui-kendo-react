import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const FormInput = (props: any) => {
  const [inputType] = useState(props.type);
  const [inputLabel] = useState(props.label);
  const [inputValue, setInputValue] = useState("");

  function handleChange(event: any) {
    setInputValue(event.target.value);
    if (props.onChange) props.onChange(inputValue);
  }
  return (
    <>
      <TextField
        required
        id="outlined-required"
        label={inputLabel}
        defaultValue="Hello World"
        type={inputType}
        value={inputValue}
        variant="outlined"
        size="small"
        sx={{ mb: 3 }}
        onChange={handleChange}
      />
    </>
  );
};
export default FormInput;
