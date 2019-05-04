import {
    makeExecutableSchema,
    addMockFunctionsToSchema,
} from 'graphql-tools';

import resolvers from './resolvers';

const typeDefs = `
type User {
  id: Int
  firstName: String
  lastName: String
}
type Query {
  user(firstName: String, lastName: String): User
  allUsers: [User]
}
type Mutation {
  createUser(firstName: String!, lastName: String!): User
  deleteUser(id: Int!): User
  updateUser(id: Int!, firstName : String!, lastName: String!): User
}
`;

export default makeExecutableSchema({ typeDefs, resolvers });