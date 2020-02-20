import React from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

export const MeasurementDialog = ({
  open,
  handleOnClose,
  handleOnChange,
  weight,
}) => {
  const error = isNaN(weight) || weight < 0 || weight > 200;

  return (
    <Dialog open={open} onClose={handleOnClose}>
      <DialogTitle>Create/edit measurements</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please provide a (unique) date and weight.
        </DialogContentText>
        <TextField
          error={error}
          value={weight}
          onChange={event => handleOnChange(event.target.value)}
          label="Weight"
          helperText={error && 'Not an appropriate weight'}
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOnClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOnClose} color="primary" disabled={!weight || error}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
