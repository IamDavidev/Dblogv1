import { useQuery } from '@apollo/client';
import { GET_QUERY_POST_SEARCH } from '../Utils/SchemasQueries';
import styled from 'styled-components';
import { AppTheme } from '../mainStyled';

const CardStyled = styled.div`
  padding: 1rem;
  margin: 1rem;
  img {
    width: 100px;
    height: 80px;
    object-fit: cover;
  }
  h1 {
    color: ${AppTheme.colors.aqua};
  }
  .RenderPost {
    margin: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    background: #6183ab;
    box-shadow: inset 20px 20px 12px #526f91, inset -20px -20px 12px #7097c5;
    .container {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const CardSearch = ({ search = '' }) => {
  const { data,loading } = useQuery(GET_QUERY_POST_SEARCH, {
    variables: {
      title: search,
    },
  });
  return (
    <CardStyled>
      {
        loading && <loading />
      }
      {data &&
        data.posts.data.map((post) => {
          return (
            <div className="RenderPost" key={post.attributes.title}>
              <div className="container">
                <img src={post.attributes.Image} alt={post.attributes.title} />
                <h1>{post.attributes.title}</h1>
              </div>
              <div className="description">
                <p>{post.attributes.Description}</p>
              </div>
            </div>
          );
        })}
    </CardStyled>
  );
};

export default CardSearch;
