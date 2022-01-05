import RenderPosts from '../Components/RenderPosts';
import { GET_QUERY_ALL_POSTS } from '../Utils/SchemasQueries';
import { useQuery } from '@apollo/client';
import Loading from '../Components/Loading';
import {DataPosts} from '../Utils/FunctionUtils'
const Dblog = () => {
  const { data, loading, error } = DataPosts || useQuery(GET_QUERY_ALL_POSTS);
  if (data) {
    localStorage.setItem(
      'posts',
      JSON.stringify({
        data: data,
        loading: loading,
        error: error,
      })
    );
  }
  console.log(DataPosts)
  return (
    <>
      <h1>All Posts</h1>

      <RenderPosts data={data} loading={loading} error={error} />
      {loading && <Loading />}
    </>
  );
};

export default Dblog;
