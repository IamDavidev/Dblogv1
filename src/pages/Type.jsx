import { GET_QUERY_TYPE } from '../Utils/SchemasQueries';
import { useQuery } from '@apollo/client';
import RenderPosts from '../Components/RenderPosts';
import {useParams} from 'react-router-dom'
import Buttonback from '../Components/Burtoonback';





const Type = () => {
  const {type} = useParams();
  const { data } = useQuery(GET_QUERY_TYPE, {
    variables: { name: type},
  });
  if (data) {
    console.log(data);
    // console.log(data.atributes.posts);
    console.log(data.types.data[0].attributes);
  }
  console.log(type);
  return (
    <div>
      <h1>Type</h1>
      <Buttonback />
      {data && <RenderPosts data={data.types.data[0].attributes} />}
    </div>
  );
};

export default Type;
