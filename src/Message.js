import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import {Snackbar} from '@material-ui/core';

const Alert = props => <MuiAlert elevation={6} variant="filled" {...props} />;

export const Message = ({severity, open, message, handleOnClose}) => (
  <Snackbar open={open} autoHideDuration={2000} onClose={handleOnClose}>
    <Alert severity={severity}>{message}</Alert>
  </Snackbar>
);
