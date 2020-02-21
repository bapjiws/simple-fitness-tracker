import React, {useState, useEffect} from 'react';
import {useMutation} from '@apollo/react-hooks';
import {format} from 'date-fns';
import {TableCell, TableRow, IconButton} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';

import './App.css';
import {
  MEASUREMENTS,
  ADD_MEASUREMENT,
  UPDATE_MEASUREMENT,
  DELETE_MEASUREMENT,
} from './graphql';
import {TableTemplate} from './TableTemplate';
import {MeasurementDialog} from './MeasurementDialog';
import {Message} from './Message';

const MUTATION_TYPE_CREATE = 'MUTATION_TYPE_CREATE';
const MUTATION_TYPE_UPDATE = 'MUTATION_TYPE_UPDATE';

export const Measurements = ({data}) => {
  const [addMeasurement] = useMutation(ADD_MEASUREMENT, {
    refetchQueries: [{query: MEASUREMENTS}],
  });
  const [updateMeasurement] = useMutation(UPDATE_MEASUREMENT, {
    refetchQueries: [{query: MEASUREMENTS}],
  });
  const [deleteMeasurement] = useMutation(DELETE_MEASUREMENT, {
    refetchQueries: [{query: MEASUREMENTS}],
  });

  const [mutationType, setMutationType] = useState(null);

  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const closeDialog = () => setDialogIsOpen(false);

  const [id, setId] = useState(null);

  const [weight, setWeight] = useState('');
  const invalidWeight = isNaN(weight) || weight < 0 || weight > 200;

  const [date, setDate] = useState(null);
  const [invalidDate, setInvalidDate] = useState(false);
  const handleDateChange = date => {
    setDate(format(date, 'yyyy-MM-dd'));
  };

  const [showMessage, setShowMessage] = useState(false);
  const closeMessage = () => setShowMessage(false);

  const resetData = () => {
    setId(null);
    setWeight(null);
    setDate(null);
  };

  useEffect(() => {
    if (mutationType === MUTATION_TYPE_UPDATE) {
      return;
    }
    if (data.find(({Date}) => Date === date)) {
      setShowMessage(true);
      setInvalidDate(true);
    } else {
      setInvalidDate(false);
    }
  }, [mutationType, date, data]);

  const handleSave = () => {
    closeDialog();
    if (mutationType === MUTATION_TYPE_CREATE) {
      addMeasurement({
        variables: {weight: Number(weight), date},
      });
    } else if (mutationType === MUTATION_TYPE_UPDATE) {
      updateMeasurement({variables: {id, weight: Number(weight), date}});
    }
    resetData();
  };

  const prepareForCreate = () => {
    resetData();
    setMutationType(MUTATION_TYPE_CREATE);
    setDialogIsOpen(true);
  };

  const prepareForUpdate = (id, Date, Weight) => {
    setMutationType(MUTATION_TYPE_UPDATE);
    setId(id);
    setDate(Date);
    setWeight(Weight);
    setDialogIsOpen(true);
  };

  const handleDelete = id => deleteMeasurement({variables: {id}});

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
        handleOnSave={handleSave}
        date={date}
        handleDateChange={handleDateChange}
        handleWeightChange={setWeight}
        weight={weight}
        invalidWeight={invalidWeight}
        savingDisabled={!weight || invalidWeight || invalidDate}
      />
      <TableTemplate headlineText={'Measurements'}>
        {data.map(({id, Weight, Date}) => (
          <TableRow className="Table-Row" key={id} hover>
            <TableCell className="Table-Cell">
              <div
                className="Table-Cell-data"
                onClick={() =>
                  prepareForUpdate(id, Date, Weight)
                }>{`${Date} (${Weight} kg)`}</div>
              <IconButton color="secondary" onClick={() => handleDelete(id)}>
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
        <IconButton
          className="Add-Measurement-button"
          color="primary"
          onClick={prepareForCreate}>
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </TableTemplate>
    </div>
  );
};
