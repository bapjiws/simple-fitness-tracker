import React, {useState} from 'react';
import {useMutation} from '@apollo/react-hooks';
import {format} from 'date-fns';
import {TableCell, TableRow, IconButton} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import './App.css';
import {MEASUREMENTS, ADD_MEASUREMENT} from './graphql';
import {TableTemplate} from './TableTemplate';
import {MeasurementDialog} from './MeasurementDialog';
import {Message} from './Message';

export const Measurements = ({data}) => {
  const [addMeasurement] = useMutation(ADD_MEASUREMENT, {
    refetchQueries: [{query: MEASUREMENTS}],
  });

  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const openDialog = () => setDialogIsOpen(true);

  const [weight, setWeight] = useState(null);
  const invalidWeight = isNaN(weight) || weight < 0 || weight > 200;

  const [date, setDate] = useState(null);
  const [invalidDate, setInvalidDate] = useState(false);
  const handleDateChange = date => {
    setDate(date);
    if (data.find(({Date}) => Date === format(date, 'yyyy-MM-dd'))) {
      setShowMessage(true);
      setInvalidDate(true);
    } else {
      setInvalidDate(false);
    }
  };

  const [showMessage, setShowMessage] = useState(false);
  const closeMessage = () => setShowMessage(false);

  const close = () => {
    setDialogIsOpen(false);
  };
  const save = () => {
    close();
    addMeasurement({
      variables: {weight: Number(weight), date: format(date, 'yyyy-MM-dd')},
    });
    setWeight(null);
    setDate(null);
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
        handleOnClose={close}
        handleOnSave={save}
        date={date}
        handleDateChange={handleDateChange}
        handleWeightChange={setWeight}
        weight={weight}
        invalidWeight={invalidWeight}
        savingDisabled={!weight || invalidWeight || invalidDate}
      />
      <TableTemplate headlineText={'Measurements'}>
        {data.map(({id, Weight, Date}) => (
          <TableRow key={id} hover onClick={openDialog}>
            <TableCell>{`${Date} (${Weight} kg)`}</TableCell>
          </TableRow>
        ))}
        <IconButton
          className="Add-Measurement-button"
          color="primary"
          onClick={openDialog}>
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </TableTemplate>
    </div>
  );
};
