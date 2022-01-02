import { gql } from '@apollo/client';

export const URI_BACKEND = 'https://dblogdb.herokuapp.com';

export const GET_QUERY_ALL_POSTS = gql`
  query {
    posts {
      data {
        id
        attributes {
          uid
          title
          Description
          content
          date
          createdAt
          Image
        }
      }
    }
  }
`;

export const GET_QUERY_POSTS = gql`
  query Post($title: String) {
    posts(filters: { title: { eq: $title } }) {
      data {
        id
        attributes {
          uid
          title
          Description
          date
          content
          createdAt
          Image
          types {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
