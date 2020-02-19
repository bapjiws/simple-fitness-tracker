import React from 'react';

import './App.css';
import {TableTemplate} from './TableTemplate';

import {TableCell, TableRow} from '@material-ui/core';

export const Measurements = ({data}) => (
  <div className="Measurements-container">
    <TableTemplate headlineText={'Measurements'}>
      {data.map(({id, Weight, Date}) => (
        <TableRow key={id} hover>
          <TableCell>{`${Date} (${Weight} kg)`}</TableCell>
        </TableRow>
      ))}
    </TableTemplate>
  </div>
);
