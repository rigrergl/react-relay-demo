import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import AccountPage from "./pages/AccountPage";
import IssuesPage from "./pages/IssuesPage";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="app tabs" centered>
          <Tab label="Issues" />
          <Tab label="Account" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <IssuesPage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AccountPage />
      </TabPanel>
    </Box>
  );
}

export default App;
