import React from 'react';
import {ResponsiveLine} from '@nivo/line';

import './App.css';
import {TableTemplate} from './TableTemplate';

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
      tickRotation: -35
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

export const ProgressTimeline = ({data}) => (
  <div className="Progress-Timeline-container">
    <TableTemplate headlineText={'Progress timeline'}>
      <Chart
        measurements={[
          {
            id: 'fatness data',
            data,
          },
        ]}
      />
    </TableTemplate>
  </div>
);
