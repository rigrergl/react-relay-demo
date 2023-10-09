import { Box, Tab, Tabs } from "@mui/material";
import { startTransition, useState, useTransition } from "react";
import { PreloadedQuery, graphql, usePreloadedQuery } from "react-relay";
import { AppQuery } from "./__generated__/AppQuery.graphql";
import AccountPage from "./pages/AccountPage";
import IssuesPage from "./pages/IssuesPage";

interface Props {
  initialQueryRef: PreloadedQuery<AppQuery>
}

enum TabNames {
  ISSUES = "ISSUES",
  ACCOUNT = "ACCOUNT",
}

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
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function App(props: Props) {
  const [currentTab, setCurrentTab] = useState<TabNames>(TabNames.ACCOUNT);
  
  const data = usePreloadedQuery(
    graphql`
      query AppQuery {
        viewer {
          ...AccountPage_user
        }
      }
    `,
    props.initialQueryRef
  );


  const handleChange = (_event: React.ChangeEvent<{}>, newValue: string) => {
    startTransition(() => {
      setCurrentTab(newValue as TabNames);
    });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={currentTab}
          onChange={handleChange}
          aria-label="app tabs"
          centered
        >
          <Tab label="Account" value={TabNames.ACCOUNT} />
          <Tab label="Issues" value={TabNames.ISSUES} />
        </Tabs>
      </Box>
      <TabPanel value={currentTab} index={TabNames.ISSUES}>
        <IssuesPage />
      </TabPanel>
      <TabPanel value={currentTab} index={TabNames.ACCOUNT}>
        <AccountPage user={data.viewer} />
      </TabPanel>
    </Box>
  );
}

export default App;
