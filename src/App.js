import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

//import logo from './logo.svg';
import './App.css';
import {ProgressTimeline} from './ProgressTimeline';

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

const client = new ApolloClient({
  uri: 'http://13.48.85.187:1337/graphql',
});

export default () => (
  <ApolloProvider client={client}>
    <div className="App">
      <div className="Progress-Timeline">
        <ProgressTimeline />
      </div>
      <div className="Measurements">M</div>
    </div>
  </ApolloProvider>
);
