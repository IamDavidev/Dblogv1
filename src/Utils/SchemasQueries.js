import { gql } from '@apollo/client';

export const URI_BACKEND = 'https://dblogdb.herokuapp.com';

export const GET_QUERY_ALL_POSTS = gql`
  query {
    posts {
      data {
        id
        attributes {
          title
          content
          date
          image {
            data {
              id
              attributes {
                name
                formats
              }
            }
          }
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
          title
          content
          date
          image {
            data {
              id
              attributes {
                name
                formats
              }
            }
          }
        }
      }
    }
  }
`;
