const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    status: Boolean
    picture: String
    description: String
    bounty: [bounty]
  }

  type bounty {
    _id: ID!
    name: String
    description: String
    reward: Int
    location: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, username: String!, password: String!, status: Boolean, picture: String, description: String): Auth
    updateUser(username: String, email: String, password: String): User
    addBounty(name: String!, description: String!, reward: Int!, location: String!): Bounty
    updateBounty(name: String, description: String, reward: Int, location: String): Bounty
    removeBounty(_id: ID!): Bounty
  }
`;

module.exports = typeDefs;
