import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Markdown from 'react-markdown';
import { GET_QUERY_ALL_POSTS } from '../Utils/SchemasQueries';
import { useQuery } from '@apollo/client';
import CardPreView from './cardPreView';
import Loading from './Loading';

const SrenderPosts = styled.section`
  .allPosts {
    h1 {
      font-size: 2rem;
      color: #cc21a3;
    }
  }
  .containerPosts {
    a {
      text-decoration: none;
      color: #000000;
      cursor: pointer;
    }
  }
`;

const RenderPosts = ({ data, loading, error }) => {
 
  return (
    <SrenderPosts>
      <div className="allPosts">
        <h1>Posts</h1>
      </div>
      {loading && <Loading />}
      {data &&
        data.posts.data.map((post) => {
          const title = post.attributes.title;
          const LinkTitle = title.replace(/\s/g, '-');
          return (
            <div className="containerPosts" key={post.attributes.title}>
              <Link to={`/dblog/post/${LinkTitle}`}>
                <>
                  <CardPreView
                    title={post.attributes.title}
                    imgSrc={post.attributes.Image}
                    description={post.attributes.Description}
                  />
                </>
              </Link>
            </div>
          );
        })}
    </SrenderPosts>
  );
};

export default RenderPosts;
