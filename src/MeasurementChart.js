import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {ResponsiveLine} from '@nivo/line';

const measurements = [
  {
    id: 'your progress',
    color: 'hsl(289, 70%, 50%)',
    data: [
      {
        y: 85,
        x: '2020-02-18',
      },
      {
        y: 88,
        x: '2020-02-19',
      },
      {
        y: 90,
        x: '2020-02-20',
      },
      {
        y: 111,
        x: '2020-02-21',
      },
    ],
  },
];

const Chart = ({measurements}) => (
  <ResponsiveLine
    //markers={[
    //  {
    //    axis: 'y',
    //    value: 0,
    //    lineStyle: {stroke: '#b0413e', strokeWidth: 1},
    //    legend: 'y marker at 0',
    //    legendPosition: 'bottom-left',
    //  },
    //]}
    data={measurements}
    margin={{top: 30, right: 50, bottom: 50, left: 50}}
    xScale={{
      type: 'time',
      format: '%Y-%m-%d',
      precision: 'hour',
    }}
    xFormat="time:%Y-%m-%d"
    yScale={{
      type: 'linear',
      max: 150,
      stacked: false,
    }}
    axisLeft={{
      legend: 'weight',
      legendOffset: -40,
      legendPosition: 'middle',
      tickSize: 0,
      tickPadding: 10,
    }}
    //axisLeft={{
    //        orient: 'left',
    //        tickSize: 5,
    //        tickPadding: 5,
    //        tickRotation: 0,
    //        legend: 'count',
    //        legendOffset: -40,
    //        legendPosition: 'middle'
    //    }}
    axisBottom={{
      //orient: 'bottom',
      format: '%b %d',
      tickValues: 'every 1 day',
      legend: 'date',
      legendOffset: 36,
      legendPosition: 'middle',
      tickSize: 0,
    }}
    //enableGridX={false}
    //enableGridY={false}
    // axisBottom={{
    //         orient: 'bottom',
    //         tickSize: 7,
    //         tickPadding: 5,
    //         tickRotation: 0,
    //         legend: 'transportation',
    //         legendOffset: 36,
    //         legendPosition: 'middle'
    //     }}
    curve={'monotoneX'}
    enablePointLabel={false}
    //        pointSymbol={CustomSymbol}
    pointSize={16}
    pointBorderWidth={1}
    pointBorderColor={{
      from: 'color',
      modifiers: [['darker', 0.3]],
    }}
    //useMesh={true}
    //enableSlices={false}
    //legends={[
    //  {
    //    anchor: 'bottom-right',
    //    direction: 'column',
    //    justify: false,
    //    translateX: 100,
    //    translateY: 0,
    //    itemsSpacing: 0,
    //    itemDirection: 'left-to-right',
    //    itemWidth: 80,
    //    itemHeight: 20,
    //    itemOpacity: 0.75,
    //    symbolSize: 12,
    //    symbolShape: 'circle',
    //    symbolBorderColor: 'rgba(0, 0, 0, .5)',
    //    effects: [
    //      {
    //        on: 'hover',
    //        style: {
    //          itemBackground: 'rgba(0, 0, 0, .03)',
    //          itemOpacity: 1,
    //        },
    //      },
    //    ],
    //  },
    //]}
  />
);

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
        <TableBody>
          <div className={classes.tableContainer}>
            <Chart measurements={measurements} />
          </div>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
