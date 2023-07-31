import React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Login from "./Login";
import TransactionForm from "./TransactionForm";
import RegisterForm from "./RegisterForm";
import MUIForm from "./MUIForm";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MaterialControls = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div id="Info" className="info-page main-content">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Login Form" {...a11yProps(0)} />
            <Tab label="Registration Form" {...a11yProps(1)} />
            <Tab label="Sample MUI Form" {...a11yProps(2)} />
            <Tab label="Transaction Form" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Login />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <RegisterForm />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <MUIForm />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <TransactionForm />
        </TabPanel>
        
      </Box>
    </div>
  );
};

export default MaterialControls;
