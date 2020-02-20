import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import './App.css';

export const Date = ({date, handleDateChange}) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker
      className="Date"
      margin="normal"
      label="Date"
      format="MM/dd/yyyy"
      value={date}
      onChange={handleDateChange}
    />
  </MuiPickersUtilsProvider>
);
