import { gql } from '@apollo/client';

export const SqueryPosts = gql`
  query {
    posts {
      data {
        id
        attributes {
          title
          content
          date
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
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

export {};
