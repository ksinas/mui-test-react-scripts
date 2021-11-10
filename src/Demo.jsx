import React, { useState } from 'react';
import {
  Collapse as MUI4Collapse,
  Link as MUI4Link,
  TextField as MUI4TextField,
  DialogTitle as MUI4DialogTitle,
  DialogContent as MUI4DialogContent,
  DialogActions as MUI4DialogActions,
  Dialog as MUI4Dialog,
  Button as MUI4Button,
} from "@material-ui/core";

import {
  Collapse as MUICollapse,
  Link as MUILink,
  TextField as MUITextField,
  DialogTitle as MUIDialogTitle,
  DialogContent as MUIDialogContent,
  DialogActions as MUIDialogActions,
  Dialog as MUIDialog,
  Button as MUIButton,
} from "@mui/material";

const components = {
  mui4: {
    Collapse: MUI4Collapse,
    Link: MUI4Link,
    TextField: MUI4TextField,
    DialogTitle: MUI4DialogTitle,
    DialogContent: MUI4DialogContent,
    DialogActions: MUI4DialogActions,
    Dialog: MUI4Dialog,
    Button: MUI4Button,
  },
  mui5: {
    Collapse: MUICollapse,
    Link: MUILink,
    TextField: MUITextField,
    DialogTitle: MUIDialogTitle,
    DialogContent: MUIDialogContent,
    DialogActions: MUIDialogActions,
    Dialog: MUIDialog,
    Button: MUIButton,
  }
}

export default function Demo({ library }) {
  const [duration, setDuration] = useState(null);
  const {
    Collapse,
    Link,
    TextField,
    DialogTitle,
    DialogContent,
    DialogActions,
    Dialog,
    Button,
  } = components[library]
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    const now = Date.now();
    setOpen(true);
    setTimeout(() => {
      setDuration(Date.now() - now);
    })
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      {duration && `Took ${duration}ms`}
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title">
          Dialog title
        </DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Login" />
          <TextField fullWidth label="password" type="password" />
          <Link href="">
            Forgot your password?
          </Link>
          <Collapse in={false}>
            Show error
          </Collapse>
          <Button
            fullWidth
            color="primary"
            variant="contained"
            type="submit"
            size="large"
          >
            submit
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
