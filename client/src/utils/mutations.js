import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_BOUNTY = gql `
mutation AddBounty($name: String!, $description: String!, $reward: Int!, $location: String!) {
    addBounty(name: $name, description: $description, reward: $reward, location: $location) {
      _id
      name
      description
      reward
      location
      
    }
  }`