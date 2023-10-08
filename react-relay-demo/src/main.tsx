import React from "react";
import ReactDOM from "react-dom/client";
import { RelayEnvironmentProvider, loadQuery } from "react-relay";
import App from "./App.tsx";
import { RelayEnvironment } from "./RelayEnvironment";
import * as AppQuery from "./__generated__/AppQuery.graphql.ts";

const initialQueryRef = loadQuery<AppQuery.AppQuery>(
  RelayEnvironment,
  AppQuery.default,
  {}
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <React.StrictMode>
      <App initialQueryRef={initialQueryRef}/>
    </React.StrictMode>
  </RelayEnvironmentProvider>
);
