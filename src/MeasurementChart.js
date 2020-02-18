import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// const StyledTableCell = withStyles(theme => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },

  headline: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'black',
    color: 'white',
  },
});

export const MeasurementChart = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.headline}>
              Progress timeline
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>CHART</TableBody>
      </Table>
    </TableContainer>
  );
};
