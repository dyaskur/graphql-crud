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

type Blog {
  id: Int
  title: String
  content: String
  user_id: Int
}
type Query {
  user(firstName: String, lastName: String): User
  blog(title: String, content: String, user_id: Int): User
  allUsers: [User]
  allBlogs: [Blog]
}
type Mutation {
  createUser(firstName: String!, lastName: String!): User
  createBlog(title: String!, content: String!, , user_id: Int!): Blog
  deleteUser(id: Int!): User
  deleteBlog(id: Int!): Blog
  updateUser(id: Int!, firstName : String!, lastName: String!): User
  updateBlog(id: Int!, title : String!, content: String!): Blog
}
`;

export default makeExecutableSchema({ typeDefs, resolvers });