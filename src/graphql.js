import gql from 'graphql-tag';

export const MEASUREMENTS = gql`
  query Measurements {
    measurements(sort: "Date:asc") {
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

export const UPDATE_MEASUREMENT = gql`
  mutation UpdateMeasurement($id: ID!, $weight: Int!, $date: Date!) {
    updateMeasurement(
      input: {where: {id: $id}, data: {Weight: $weight, Date: $date}}
    ) {
      measurement {
        id
      }
    }
  }
`;

export const DELETE_MEASUREMENT = gql`
  mutation DeleteMeasurement($id: ID!) {
    deleteMeasurement(input: {where: {id: $id}}) {
      measurement {
        id
      }
    }
  }
`;
