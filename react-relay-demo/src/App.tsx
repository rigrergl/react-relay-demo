import { graphql, useLazyLoadQuery } from "react-relay";
import type { AppQuery } from "./__generated__/AppQuery.graphql";

function App() {
  const AppQuery = graphql`
    query AppQuery {
      viewer {
        login
      }
    }
  `;

  const data = useLazyLoadQuery<AppQuery>(AppQuery, {});

  return <h1>{data.viewer?.login}</h1>;
}

export default App;
