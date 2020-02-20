import React, {useState} from 'react';
import {format} from 'date-fns';
import {TableCell, TableRow, Button} from '@material-ui/core';

import './App.css';
import {TableTemplate} from './TableTemplate';
import {MeasurementDialog} from './MeasurementDialog';
import {Message} from './Message';

export const Measurements = ({data}) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const openDialog = () => setDialogIsOpen(true);
  const closeDialog = () => setDialogIsOpen(false);

  const [weight, setWeight] = useState('');
  console.log('weight:', weight);
  const invalidWeight = isNaN(weight) || weight < 0 || weight > 200;

  const [date, setDate] = useState(new Date());
  const [invalidDate, setInvalidDate] = useState(false);

  const [showMessage, setShowMessage] = useState(false);
  const closeMessage = () => setShowMessage(false);
  const handleDateChange = date => {
    setDate(date);
    if (data.find(({Date}) => Date === format(date, 'yyyy-MM-dd'))) {
      setShowMessage(true);
      setInvalidDate(true);
    } else {
      setInvalidDate(false);
    }
  };

  return (
    <div className="Measurements-container">
      <Message
        open={showMessage}
        severity="error"
        message="Already have this date."
        handleOnClose={closeMessage}
      />
      <MeasurementDialog
        open={dialogIsOpen}
        handleOnClose={closeDialog}
        date={date}
        handleDateChange={handleDateChange}
        handleOnChange={setWeight}
        weight={weight}
        invalidWeight={invalidWeight}
        savingDisabled={!weight || invalidWeight || invalidDate}
      />
      <TableTemplate
        headlineText={'Measurements'}
        body={data.map(({id, Weight, Date}) => (
          <TableRow key={id} hover onClick={openDialog}>
            <TableCell>{`${Date} (${Weight} kg)`}</TableCell>
          </TableRow>
        ))}
        footer={
          <Button variant="outlined" color="primary" onClick={openDialog}>
            New measurement
          </Button>
        }
      />
    </div>
  );
};
