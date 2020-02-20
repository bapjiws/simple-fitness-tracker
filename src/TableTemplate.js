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
    height: '500px',
    width: '100%',
    position: 'relative',
  },

  headline: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'black',
    color: 'white',
  },

  tableContainer: {
    display: 'block',
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
        <TableBody className={classes.tableContainer}>{children}</TableBody>
      </Table>
    </TableContainer>
  );
};
