import { graphql, useFragment } from "react-relay";
import { AccountPage_user$key } from "./__generated__/AccountPage_user.graphql";
import { Typography } from "@mui/material";

interface Props {
  user: AccountPage_user$key
};

const AccountPage = (props: Props) => {
  const user = useFragment(
    graphql`
    fragment AccountPage_user on User {
      login
    }
    `,
    props.user
  );  

  return (
      <Typography>{user.login}</Typography>
  );
};

export default AccountPage;
