import { Container, Typography } from "@mui/material";
import { Suspense } from "react";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "relay-runtime";
import { IssuesPageQuery } from "./__generated__/IssuesPageQuery.graphql";
import IssueList from "../components/IssueList";

const IssuesPage = () => {
  const query = graphql`
    query IssuesPageQuery($owner: String!, $name: String!) {
      repository(owner: $owner, name: $name) {
        ...IssueListFragment_repository
      }
    }
  `;

  const data = useLazyLoadQuery<IssuesPageQuery>(query, {
    owner: "rigrergl",
    name: "react-relay-demo",
  });

  if (!data.repository) {
    return <Typography>No repository data available.</Typography>;
  }

  return (
    <Container>
      <Suspense fallback={<Typography>Loading</Typography>}>
        <IssueList repository={data?.repository} />
      </Suspense>
    </Container>
  );
};

export default IssuesPage;
