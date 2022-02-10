import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CardPreView from './cardPreView';
import Loading from './Loading';
import { Helmet } from 'react-helmet';
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
  @media (min-width: 1000px) {
    .RenderPosts {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
      justify-content: center;
      align-items: center;
    }
  }
`;

const RenderPosts = ({ data, loading, error }) => {
  return (
    <>
      <Helmet>
        <title> posts || dblog</title>
      </Helmet>
      <SrenderPosts>
        <div className="allPosts"></div>
        {loading && <Loading />}
        <div className="RenderPosts">
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
        </div>
      </SrenderPosts>{' '}
    </>
  );
};

export default RenderPosts;
