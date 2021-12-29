import ReactMarkdown from 'react-markdown';

const RenderPosts = ({ data }) => {
  const posts = data;
  console.log(image);
  return (
    <>
      {posts.map((post) => {
        return (
          <>
            <div className="container" key={post.attributes.title}>
              <h1>{post.attributes.title}</h1>
              <p>{post.attributes.date}</p>
              <ReactMarkdown>{post.attributes.content}</ReactMarkdown>
              <img
                src={`
        http://localhost:1337${post.attributes.image.data[0].attributes.formats.small.url}
      `}
                alt=""
              />
            </div>
          </>
        );
      })}
    </>
  );
};

export default RenderPosts;
