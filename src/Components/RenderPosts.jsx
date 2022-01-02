import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Markdown from 'react-markdown';
import { GET_QUERY_ALL_POSTS, URI_BACKEND } from '../Utils/SchemasQueries';
import { useQuery } from '@apollo/client';

const SrenderPosts = styled.section`
  padding: 0 1rem;
  .containerPosts {
    border: 1px solid #000000;
    margin: 1rem 0;
    padding: 1rem;
    img {
      width: 100%;
      object-fit: cover;
    }
    time {
      width: 100%;
      font-weight: bold;
    }
    a {
      text-decoration: none;
      color: #000000;
      cursor: pointer;
    }
  }
  img {
    width: 100%;
  }
`;

const RenderPosts = () => {
  const { data, loading, error } = useQuery(GET_QUERY_ALL_POSTS);

  return (
    <SrenderPosts>
      {data &&
        data.posts.data.map((post) => {
          const title = post.attributes.title;
          const LinkTitle = title.replace(/\s/g, '-');
          const dataImage = post.attributes.image.data || false;
          console.log(LinkTitle);
          return (
            <div className="containerPosts" key={post.attributes.title}>
              <Link to={`/dblog/${LinkTitle}`}>
                {dataImage ? (
                  <img
                    src={`${URI_BACKEND}${post.attributes.image.data.attributes.formats.small.url}
                `}
                    alt=""
                  />
                ) : (
                  <p> no image for app</p>
                )}
                <h1>{post.attributes.title}</h1>
                <Markdown>{post.attributes.description}</Markdown>
              </Link>
            </div>
          );
        })}
    </SrenderPosts>
  );
};

export default RenderPosts;
