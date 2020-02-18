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
    id: 'japan',
    color: 'hsl(200, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 207,
      },
      {
        x: 'helicopter',
        y: 164,
      },
      {
        x: 'boat',
        y: 280,
      },
      {
        x: 'train',
        y: 23,
      },
      {
        x: 'subway',
        y: 243,
      },
      {
        x: 'bus',
        y: 265,
      },
      {
        x: 'car',
        y: 12,
      },
      {
        x: 'moto',
        y: 262,
      },
      {
        x: 'bicycle',
        y: 268,
      },
      {
        x: 'horse',
        y: 29,
      },
      {
        x: 'skateboard',
        y: 20,
      },
      {
        x: 'others',
        y: 140,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(15, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 257,
      },
      {
        x: 'helicopter',
        y: 297,
      },
      {
        x: 'boat',
        y: 45,
      },
      {
        x: 'train',
        y: 74,
      },
      {
        x: 'subway',
        y: 199,
      },
      {
        x: 'bus',
        y: 299,
      },
      {
        x: 'car',
        y: 234,
      },
      {
        x: 'moto',
        y: 15,
      },
      {
        x: 'bicycle',
        y: 228,
      },
      {
        x: 'horse',
        y: 142,
      },
      {
        x: 'skateboard',
        y: 284,
      },
      {
        x: 'others',
        y: 87,
      },
    ],
  },
  {
    id: 'us',
    color: 'hsl(342, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 264,
      },
      {
        x: 'helicopter',
        y: 85,
      },
      {
        x: 'boat',
        y: 48,
      },
      {
        x: 'train',
        y: 75,
      },
      {
        x: 'subway',
        y: 202,
      },
      {
        x: 'bus',
        y: 197,
      },
      {
        x: 'car',
        y: 241,
      },
      {
        x: 'moto',
        y: 144,
      },
      {
        x: 'bicycle',
        y: 170,
      },
      {
        x: 'horse',
        y: 250,
      },
      {
        x: 'skateboard',
        y: 120,
      },
      {
        x: 'others',
        y: 264,
      },
    ],
  },
  {
    id: 'germany',
    color: 'hsl(114, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 272,
      },
      {
        x: 'helicopter',
        y: 13,
      },
      {
        x: 'boat',
        y: 55,
      },
      {
        x: 'train',
        y: 12,
      },
      {
        x: 'subway',
        y: 95,
      },
      {
        x: 'bus',
        y: 124,
      },
      {
        x: 'car',
        y: 132,
      },
      {
        x: 'moto',
        y: 175,
      },
      {
        x: 'bicycle',
        y: 255,
      },
      {
        x: 'horse',
        y: 224,
      },
      {
        x: 'skateboard',
        y: 285,
      },
      {
        x: 'others',
        y: 56,
      },
    ],
  },
  {
    id: 'norway',
    color: 'hsl(289, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 284,
      },
      {
        x: 'helicopter',
        y: 214,
      },
      {
        x: 'boat',
        y: 285,
      },
      {
        x: 'train',
        y: 232,
      },
      {
        x: 'subway',
        y: 225,
      },
      {
        x: 'bus',
        y: 78,
      },
      {
        x: 'car',
        y: 57,
      },
      {
        x: 'moto',
        y: 260,
      },
      {
        x: 'bicycle',
        y: 186,
      },
      {
        x: 'horse',
        y: 65,
      },
      {
        x: 'skateboard',
        y: 89,
      },
      {
        x: 'others',
        y: 73,
      },
    ],
  },
];

const Chart = ({measurements}) => (
  <ResponsiveLine
    data={measurements}
    margin={{top: 50, right: 110, bottom: 50, left: 60}}
    xScale={{type: 'point'}}
    yScale={{
      type: 'linear',
      min: 'auto',
      max: 'auto',
      stacked: true,
      reverse: false,
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'transportation',
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'count',
      legendOffset: -40,
      legendPosition: 'middle',
    }}
    colors={{scheme: 'nivo'}}
    pointSize={10}
    pointColor={{theme: 'background'}}
    pointBorderWidth={2}
    pointBorderColor={{from: 'serieColor'}}
    pointLabel="y"
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
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
        <TableBody >
          <div className={classes.tableContainer}>
            <Chart measurements={measurements} />
          </div>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
