import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import {useQuery} from '@apollo/react-hooks';

import './App.css';
import {MEASUREMENTS} from './graphql';
import {ProgressTimeline} from './ProgressTimeline';
import {Measurements} from './Measurements';

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
