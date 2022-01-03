import RenderPosts from '../Components/RenderPosts';
import { GET_QUERY_ALL_POSTS } from '../Utils/SchemasQueries';
import {useQuery} from '@apollo/client';
import Loading from '../Components/Loading';


const Dblog = () => {
  const {data,loading,error } = useQuery(GET_QUERY_ALL_POSTS);
  if(data) console.log(data)
  return (
    <>
      <RenderPosts data={data} loading={loading} error={error} />
      
    </>
  );
};

export default Dblog;
