import { List, Typography } from "@mui/material";
import { graphql, useFragment } from "react-relay";
import Issue from "./Issue";
import { IssueListFragment_repository$key } from "./__generated__/IssueListFragment_repository.graphql";

type Props = {
  repository: IssueListFragment_repository$key;
};

const IssueList = (props: Props) => {
  const data = useFragment(
    graphql`
      fragment IssueListFragment_repository on Repository {
        name
        issues(last: 100, states: OPEN) {
          edges {
            node {
              id
              ...Issue_issue
            }
          }
        }
      }
    `,
    props.repository
  );

  return (
    <>
      <Typography>Issues in Repository: {data?.name}</Typography>

      <List>
        {data.issues.edges?.map((edge) =>
          edge?.node != null ? (
            <Issue key={edge?.node?.id} issue={edge.node} />
          ) : null
        )}
      </List>
    </>
  );
};

export default IssueList;
