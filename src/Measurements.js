import React, {useState} from 'react';
import {TableCell, TableRow, Button} from '@material-ui/core';

import './App.css';
import {TableTemplate} from './TableTemplate';
import {MeasurementDialog} from './MeasurementDialog';

export const Measurements = ({data}) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const openDialog = () => setDialogIsOpen(true);
  const closeDialog = () => setDialogIsOpen(false);

  const [weight, setWeight] = useState('');
  console.log('weight:', weight);

  return (
    <div className="Measurements-container">
      <MeasurementDialog
        open={dialogIsOpen}
        handleOnClose={closeDialog}
        handleOnChange={setWeight}
        weight={weight}
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
