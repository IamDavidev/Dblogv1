import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Markdown from 'react-markdown';

import { GET_QUERY_POST_SEARCH } from '../Utils/SchemasQueries';
import { AppTheme } from '../mainStyled';
import Loading from './Loading';

const CardStyled = styled.div`
  padding: 1rem;
  margin: 1rem;
  a{
    text-decoration: none;
    color:#000
    cursor: pointer;
  }
  p{
    color:#000;
  }
  img {
    width: 100px;
    height: 80px;
    object-fit: cover;
  }
  h1 {
    color: ${AppTheme.colors.aqua};
    text-transform: capitalize;
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
      align-items: center;
    }
  }
  @media (min-width: 1000px) {
    .RenderPost {
      margin: 1rem;
    }
  }
`;

const CardSearch = ({ search = '' }) => {
  const { data, loading } = useQuery(GET_QUERY_POST_SEARCH, {
    variables: {
      title: search,
    },
  });
  return (
    <CardStyled>
      {loading && <Loading />}
      {data &&
        data.posts.data.map((post) => {
          const title = post.attributes.title;
          const LinkTitle = title.replace(/\s/g, '-');
          return (
            <Link to={`/dblog/post/${LinkTitle}`} key={post.attributes.title}>
              <div className="RenderPost">
                <div className="container">
                  <img
                    src={post.attributes.Image}
                    alt={post.attributes.title}
                  />
                  <h1>{post.attributes.title}</h1>
                </div>
                <div className="description">
                  <Markdown>{post.attributes.Description}</Markdown>
                </div>
              </div>
            </Link>
          );
        })}
    </CardStyled>
  );
};

export default CardSearch;
