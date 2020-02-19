import React from 'react';

import './App.css';
import {TableTemplate} from './TableTemplate';

import {TableCell, TableRow, Button} from '@material-ui/core';

export const Measurements = ({data}) => (
  <div className="Measurements-container">
    <TableTemplate
      headlineText={'Measurements'}
      body={data.map(({id, Weight, Date}) => (
        <TableRow key={id} hover onClick={() => console.log('CLICK')}>
          <TableCell>{`${Date} (${Weight} kg)`}</TableCell>
        </TableRow>
      ))}
      footer={
        <Button variant="contained" color="primary">
          New measurement
        </Button>
      }
    />
  </div>
);
