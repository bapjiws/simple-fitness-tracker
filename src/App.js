import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import {useQuery} from '@apollo/react-hooks';

//import logo from './logo.svg';
import './App.css';
import {MEASUREMENTS} from './graphql';
import {ProgressTimeline} from './ProgressTimeline';
import {Measurements} from './Measurements';

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

const App = () => {
  const {loading, error, data} = useQuery(MEASUREMENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return console.log('ERROR:', error) || <p>Error :(</p>;

  return (
    <div className="App">
      <ProgressTimeline
        data={data.measurements.map(({Weight, Date}) => ({
          x: Date,
          y: Weight,
        }))}
      />
      <Measurements data={data.measurements} />
    </div>
  );
};

export default () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
