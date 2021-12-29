import { useQuery } from '@apollo/client';
import { SqueryPosts } from '../utils/Schemas';
import RenderPosts from '../Components/RenderPosts';
const QueryPosts = () => {
  const { data, loading, error } = useQuery(SqueryPosts);
  if (loading) console.log('{loading ...}');
  if (error) console.log(`[error] : ${error}`);
  if (data) console.log(data.posts.data.map((d) => d.attributes.title));

  return (
    <>
      {loading && <p>Loading ...</p>}
      {data ? <RenderPosts data={data.posts.data} /> : <p>pleasea reload</p>}
    </>
  );
};

export default QueryPosts;
