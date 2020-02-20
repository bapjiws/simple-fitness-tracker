import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import {Snackbar} from '@material-ui/core';

export const Message = ({severity, open, message, handleOnClose}) => (
  <Snackbar open={open} autoHideDuration={2000} onClose={handleOnClose}>
    <MuiAlert elevation={6} variant="filled" severity={severity}>
      {message}
    </MuiAlert>
  </Snackbar>
);
