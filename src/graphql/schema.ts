import gql from "graphql-tag";


const typeDefs = gql`
  type FaunaVideo {
    id: String
    collection: String
    name: String
    url: String
  }

  type Query {
    videos: [FaunaVideo]
  }
`;

export default typeDefs;
