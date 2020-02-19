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

import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const MEASUREMENTS = gql`
  query Measurements {
    measurements {
      id
      Weight
      Date
    }
  }
`;

const Chart = ({measurements}) => (
  <ResponsiveLine
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
    axisBottom={{
      format: '%b %d',
      tickValues: 'every 1 day',
      legend: 'date',
      legendOffset: 36,
      legendPosition: 'middle',
      tickSize: 0,
    }}
    curve={'monotoneX'}
    enablePointLabel={false}
    pointSize={16}
    pointBorderWidth={1}
    pointBorderColor={{
      from: 'color',
      modifiers: [['darker', 0.3]],
    }}
  />
);

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

export const ProgressTimeline = () => {
  const classes = useStyles();

  const {loading, error, data} = useQuery(MEASUREMENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

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
            <Chart
              measurements={[
                {
                  id: 'fatness data',
                  data: data.measurements.map(({Weight, Date}) => ({
                    x: Date,
                    y: Weight,
                  })),
                },
              ]}
            />
          </div>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
