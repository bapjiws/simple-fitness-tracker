import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {MeasurementChart} from './MeasurementChart';

//<header className="App-header">
//  <img src={logo} className="App-logo" alt="logo" />
//  <p>
//    Edit <code>src/App.js</code> and save to reload.
//  </p>
//  <a
//    className="App-link"
//    href="https://reactjs.org"
//    target="_blank"
//    rel="noopener noreferrer">
//    Learn React
//  </a>
//</header>;

export default () => {
  return (
    <div className="App">
      <div className="Progress-Timeline">
        <MeasurementChart />
      </div>
      <div className="Measurements">M</div>
    </div>
  );
};
