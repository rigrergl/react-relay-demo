import { graphql, useFragment } from "react-relay";
import { AccountHeader_user$key } from "./__generated__/AccountHeader_user.graphql";

type Props = {
    // user: AccountHeader_user$key
}

const AccountHeader = (props: Props) => {
  const fragment = graphql`
    fragment AccountHeader_user on User {
      login
      avatarUrl
    }
  `;

//   const data = useFragment(
//     fragment,
//     props.user
//   );

  return <p>Account Header</p>;
};

export default AccountHeader;
