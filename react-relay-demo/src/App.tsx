import { graphql, useLazyLoadQuery } from "react-relay";
import type { AppQuery } from "./__generated__/AppQuery.graphql";
import { Typography } from "@mui/material";

function App() {
  const AppQuery = graphql`
    query AppQuery {
      viewer {
        login
      }
    }
  `;

  const data = useLazyLoadQuery<AppQuery>(AppQuery, {});

  return <Typography>{data.viewer?.login}</Typography>;
}

export default App;
