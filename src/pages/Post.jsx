import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_QUERY_POSTS, URI_BACKEND } from '../Utils/SchemasQueries';
import Markdown from 'react-markdown';
import { useMemo } from 'react';
import styled from 'styled-components';
// import styled from 'components-styled';
const StyledPost = styled.article`
  img {
    width: 60%;
    object-fit: cover;
    height: auto;
  }
  .imgPost {
    width: 100%;
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
              <h1>{post.attributes.title}</h1>
              {post.attributes.image.data && (
                <img
                  src={`${URI_BACKEND}${post.attributes.image.data.attributes.formats.medium.url}`}
                  alt={post.attributes.title}
                  className="imgPost"
                />
              )}
              <p>hola</p>
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
