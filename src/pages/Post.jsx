import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_QUERY_POSTS } from '../Utils/SchemasQueries';
import Markdown from 'react-markdown';
import { useMemo } from 'react';
import styled from 'styled-components';
import { AppTheme } from '../mainStyled';
import Buttonback from '../Components/Burtoonback';

const StyledPost = styled.article`
  margin: 0;
  padding: 1rem;
  .containerPosts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: right;
  }
  .option {
    width: 100%;
    color: ${AppTheme.colors.rosee};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    
  }
  h1 {
    text-transform: uppercase;
    padding: 0;
    margin: 0.4rem 0;
    color: ${AppTheme.colors.green};
  }
  img {
    width: 60%;
    object-fit: cover;
    height: auto;
  }
  .imgPost {
    width: 100%;
  }
  pre {
    max-width: 100%;
    background-color: ${AppTheme.colors.black};
    border-radius: 1rem;
    padding: 1rem;
    code {
      font-size: 0.5rem;
      font-weight: bold;
      color: ${AppTheme.colors.rosee};
    }
  }
  strong {
    color: ${AppTheme.colors.aqua};
  }
`;

const Post = () => {
  const { title } = useParams();
  const { data, loading, error } = useQuery(GET_QUERY_POSTS, {
    variables: {
      title: title.replaceAll('-', ' '),
    },
  });
  return (
    <StyledPost>
      {data &&
        data.posts.data.map((post) => {
          return (
            <div key={post.id} className="containerPosts">
              <div className="option">
                <Buttonback />
                <time>
                  {new Date(post.attributes.createdAt).toLocaleDateString()}
                </time>
              </div>
              <h1>{post.attributes.title}</h1>
              <img src={post.attributes.Image} alt="" />
              <Markdown>{post.attributes.content}</Markdown>
            </div>
          );
        })}
      {error && <p>{error.message}</p>}
    </StyledPost>
  );
};
//post.attributes.image.data.attributes.formats.thumbnail.url
export default Post;
