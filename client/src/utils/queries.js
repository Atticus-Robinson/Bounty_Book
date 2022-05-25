import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      bounty {
        _id
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      bounties {
        _id
      }
    }
  }
`;
export const QUERY_BOUNTIES = gql `
query Query {
    bounties {
      _id
      name
      description
      reward
      location
    }
  }
`;