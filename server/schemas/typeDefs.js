const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    postCount: Int
    savedPosts: [Post]
  }
  input PostInput {
    postId: ID
    postName: String
    description: String
  }
  type Post {
    postId: ID
    postName: String
    description: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!, username: String!): Auth
    savePost(input: PostInput): User
    removePost(postId: ID!): User
  }
`;

module.exports = typeDefs;
