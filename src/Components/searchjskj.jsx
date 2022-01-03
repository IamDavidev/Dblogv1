import { useQuery } from '@apollo/client';
import { GET_QUERY_POST_SEARCH } from '../Utils/SchemasQueries';
import CardPreView from './cardPreView';
const Searchjskj = ({ search }) => {
  const {data} = useQuery(GET_QUERY_POST_SEARCH, {
    variables: {
      title: search,
    },
  });
  console.log(data)
  return (
    <>
      <h1>hola</h1>
      {
          data && data.posts.data.map(post => {
              return (
                  <>
                  <h1>
                     { post.attributes.title}
                  </h1>
                  </>
              )
          })
      }
    </>
  );
};

export default Searchjskj;
