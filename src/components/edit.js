import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { Container, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  root: {
    "& .MuiTypography-h6": {
      fontSize: "2rem",
    },
  },
});

export default function EditDialog(props) {
  const classes = useStyles();

  const { show = false, onclose, onupdate, data = {} } = props;

  const [name, setName] = useState("");

  const handleClose = () => {
    if (onclose) onclose();
    setName("");
  };

  const handleUpdate = () => {
    if (onupdate) {
      setName("");
      onupdate({
        id: data.id,
        content: name,
      });
    }
  };

  return (
    <Container maxWidth="lg">
      <Dialog
        open={show}
        TransitionComponent={Transition}
        onClose={handleClose}
        fullWidth
        className={classes.root}
      >
        <DialogTitle>Edit task name</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            disabled
            value={data?.content}
            label="Task name"
            InputProps={{
              style: {
                fontSize: "1.5rem",
              },
            }}
          />
          <TextField
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
            label="New name"
            InputProps={{
              style: {
                fontSize: "1.5rem",
              },
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleUpdate();
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
