import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Markdown from 'react-markdown'
const SrenderPosts = styled.section`
  padding: 0 1rem;
  .containerPosts {
    border: 1px solid #000000;
    margin: 1rem 0 ;
    padding:1rem;
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
`;

const RenderPosts = ({ data }) => {
  const posts = data;
  return (
    <SrenderPosts>
      {posts.map((post) => {
        console.log(post);
        const title = post.attributes.title;
        const LinkTitle = title.replace(/\s/g, '-');
        return (
          <>
            <div className="containerPosts" key={post.attributes.title}>
              <Link to={`/dblog/${LinkTitle}`}>
                <img
                  src={`
                http://localhost:1337${post.attributes.image.data[0].attributes.formats.small.url}
                `}
                  alt=""
                />
              <Markdown >

                {post.attributes.description }

              </Markdown>
              </Link>
            </div>
          </>
        );
      })}
    </SrenderPosts>
  );
};

export default RenderPosts;
