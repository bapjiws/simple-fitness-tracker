import React from 'react';

import {TextField} from '@material-ui/core';

export const Weight = ({weight, error, handleOnChange}) => (
  <TextField
    className="Weight"
    error={error}
    value={weight}
    onChange={event => handleOnChange(event.target.value)}
    label="Weight"
    helperText={error && 'Wrong weight'}
    variant="outlined"
  />
);
