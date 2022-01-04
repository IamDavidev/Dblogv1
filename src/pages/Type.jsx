import { GET_QUERY_TYPE } from '../Utils/SchemasQueries';
import { useQuery } from '@apollo/client';
import RenderPosts from '../Components/RenderPosts';
import { useParams } from 'react-router-dom';
import Buttonback from '../Components/Burtoonback';
import Loading from '../Components/Loading';

const Type = () => {
  const { type } = useParams();
  const { data, loading, error } = useQuery(GET_QUERY_TYPE, {
    variables: { name: type },
  });

  return (
    <div>
      <h1>{type}</h1>
      <Buttonback />
      {loading && <Loading />}
      {data && <RenderPosts data={data.types.data[0].attributes} />}
    </div>
  );
};

export default Type;
