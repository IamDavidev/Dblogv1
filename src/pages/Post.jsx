import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_QUERY_POSTS } from '../Utils/SchemasQueries';
import Markdown from 'react-markdown';
import styled from 'styled-components';
import { AppTheme } from '../mainStyled';
import Buttonback from '../Components/Burtoonback';
import { Helmet } from 'react-helmet';
const StyledPost = styled.article`
  margin: 0;
  padding: 1rem;
  background: #6183ab;
  box-shadow: inset 20px 20px 12px #526f91, inset -20px -20px 12px #7097c5;
  border-radius: 1rem;
  .containerPosts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: right;
  }
  .option {
    width: 100%;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    time {
      color: #0ff;
      border: none;
      border-bottom: 1px solid ${AppTheme.colors.rosee};
      padding: 1rem;
      letter-spacing: 0.2rem;
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
    border-radius: 3rem;
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
  @media (min-width: 1000px) {
    margin: 0 6rem;
    pre {
      max-width: 95%;
      padding: 1rem;
      margin: 0;
      code {
        font-size: 1rem;
      }
    }
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
    <>
      <Helmet>
        <title>{title.replaceAll('-', ' ')} || dblog</title>
      </Helmet>
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
    </>
  );
};
//post.attributes.image.data.attributes.formats.thumbnail.url
export default Post;
