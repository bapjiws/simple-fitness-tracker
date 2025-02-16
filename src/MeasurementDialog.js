import React from 'react';
import {
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

import './App.css';
import {Date} from './Date';
import {Weight} from './Weight';

export const MeasurementDialog = ({
  open,
  handleOnClose,
  handleOnSave,
  date,
  handleDateChange,
  handleWeightChange,
  weight,
  invalidWeight,
  savingDisabled,
}) => (
  <Dialog open={open} onClose={handleOnClose}>
    <DialogTitle>Create/edit measurements</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Please provide a (unique) date and weight.
      </DialogContentText>
      <Grid container justify="space-between">
        <Date date={date} handleDateChange={handleDateChange} />
        <Weight
          weight={weight}
          handleOnChange={handleWeightChange}
          error={invalidWeight}
        />
      </Grid>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleOnClose} color="primary">
        Cancel
      </Button>
      <Button onClick={handleOnSave} color="primary" disabled={savingDisabled}>
        Save
      </Button>
    </DialogActions>
  </Dialog>
);
