import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_QUERY_POSTS } from '../Utils/SchemasQueries';
import Markdown from 'react-markdown';
import { useMemo } from 'react';
import styled from 'styled-components';
import { AppTheme } from '../mainStyled';
import { useNavigate } from 'react-router-dom';

const StyledPost = styled.article`
  margin: 0;
  padding: 1rem;
  .option {
    width: 100%;
    color: ${AppTheme.colors.rosee};
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      color: ${AppTheme.colors.rosee};
      border-radius: 1rem;
      background: #092a55;
      box-shadow: 20px 20px 48px #061c39, -20px -20px 48px #0c3871;
      padding: 1rem;
      margin: 0;
      border: none;
    }
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
  strong{
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
  const navigate = useNavigate();
  const HandleBack = () => {
    navigate(-1);
  };
  return (
    <StyledPost>
      {data &&
        data.posts.data.map((post) => {
          console.log(post.attributes.Image);
          return (
            <div key={post.id} className="containerPosts">
              <div className="option">
                <button onClick={HandleBack}>back</button>
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
