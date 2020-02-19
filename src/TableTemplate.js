import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    width: '100%',
  },

  headline: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'black',
    color: 'white',
  },

  tableContainer: {
    height: '400px',
  },
});

export const TableTemplate = ({headlineText, children}) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.headline}>{headlineText}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <div className={classes.tableContainer}>{children}</div>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
