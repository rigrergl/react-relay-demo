import { ListItemButton, Typography } from "@mui/material";
import { graphql, useFragment } from "react-relay";
import { Issue_issue$key } from "./__generated__/Issue_issue.graphql";

type Props = {
  issue: Issue_issue$key;
};

const Issue = (props: Props) => {
  const issue = useFragment(
    graphql`
      fragment Issue_issue on Issue {
        title
      }
    `,
    props.issue
  );

  return (
    <ListItemButton>
      <Typography>{issue.title}</Typography>
    </ListItemButton>
  );
};

export default Issue;
