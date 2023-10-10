import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { graphql, useFragment, useMutation } from "react-relay";
import { AccountPage_user$key } from "./__generated__/AccountPage_user.graphql";

interface Props {
  user: AccountPage_user$key;
}

const AccountPage = (props: Props) => {
  const user = useFragment(
    graphql`
      fragment AccountPage_user on User {
        login
        status {
          message
        }
      }
    `,
    props.user
  );

  const [commitUpdateUserStatus, isInFlight] = useMutation(graphql`
    mutation AccountPageUpdateUserStatusMutation(
      $input: ChangeUserStatusInput!
    ) {
      changeUserStatus(input: $input) {
        status {
          message
        }
      }
    }
  `);

  // State for managing the dialog box and edited bio
  const [open, setOpen] = useState(false);
  const [editedStatus, setEditedStatus] = useState(user.status?.message);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const optimisticResponse = {
    changeUserStatus: {
      status: {
        message: editedStatus,
      },
    },
  };

  return (
    <Container>
      <Typography variant="h6">Username</Typography>
      <Typography variant="body1">{user.login}</Typography>
      <br />
      <Typography variant="h6">
        Status
        <Button onClick={handleOpen} size="small">
          <EditIcon />
        </Button>
      </Typography>
      <Typography variant="body1">{user.status?.message}</Typography>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Status</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="status"
            label="Status"
            type="text"
            fullWidth
            value={editedStatus}
            onChange={(e) => setEditedStatus(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              commitUpdateUserStatus({
                variables: {
                  input: {
                    message: editedStatus,
                    clientMutationId: "someRandomString",
                  },
                },
                optimisticResponse,
                onCompleted: (response) => {
                  console.log("Response received from server:", response);
                },
                onError: (err) => {
                  console.error("Error updating user status:", err);
                },
              });
              handleClose();
            }}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AccountPage;
