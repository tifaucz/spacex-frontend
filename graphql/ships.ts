import gql from "graphql-tag";

const ships = gql`
  query ships {
    ships {
      id
      name
      image
      class
      active
      abs
      home_port
      imo
      missions {
        name
        flight
      }
      mmsi
      model
      roles
      status
      type
      year_built
    }
  }
`;

const query = { ships };
const mutations = {};
const Ships = { query, mutations };
export { Ships };
