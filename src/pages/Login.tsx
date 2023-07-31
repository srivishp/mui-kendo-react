import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Divider,
  TextField,
  FormControl,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Dropdown from "../components/Dropdown";

let easing = [0.6, -0.05, 0.01, 0.99];

const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

const Login = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  //const [age, setAge] = React.useState(props.ageGroups);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (email == "") {
      setEmailError(true);
    }
    if (password == "") {
      setPasswordError(true);
    }

    if (email && password) {
      console.log(email, password);
    }
  };

  return (
    <React.Fragment>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2 className="titleh2">Login Form</h2>
        <br />
        <FormInput
          type={"text"}
          label={"Email"}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <br />
        <FormInput
          type={"email"}
          label={"Password"}
          onChange={(e: any) => setPassword(e.target.value)}
          sx={{ mb: 3 }}
        />
        <br />
        <Dropdown></Dropdown>

        {/* <TextField 
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="outlined" 
                    type="email"
                    sx={{mb: 3}}
                    fullWidth
                    value={email}
                    error={emailError}
                 />
                 <TextField 
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="password"
                    value={password}
                    error={passwordError}
                    fullWidth
                    sx={{mb: 3}}
                 /> */}

        <br></br>
        <Button variant="outlined" color="secondary" type="submit">
          Login
        </Button>
      </form>

      <small>
        Need an account?{" "}
        <Link to="/" className="linkclr">
          Register here
        </Link>
      </small>
    </React.Fragment>
  );
};

export default Login;
