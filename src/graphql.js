import gql from 'graphql-tag';

export const MEASUREMENTS = gql`
  query Measurements {
    measurements {
      id
      Weight
      Date
    }
  }
`;

export const ADD_MEASUREMENT = gql`
  mutation AddMeasurement($weight: Int!, $date: Date!) {
    createMeasurement(input: {data: {Weight: $weight, Date: $date}}) {
      measurement {
        id
      }
    }
  }
`;
