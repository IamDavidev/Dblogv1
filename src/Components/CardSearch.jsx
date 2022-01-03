import { useQuery } from '@apollo/client';
import { GET_QUERY_POST_SEARCH } from '../Utils/SchemasQueries';
import styled from 'styled-components'
const styledCardSearch = styled`
    color: #000000;

    
`
const CardSearch = ({ search = ""}) => {
  const {data} = useQuery(GET_QUERY_POST_SEARCH, {
    variables: {
      title: search,
    },
  });
  return (
    <>
      {
          data && data.posts.data.map(post => {
              return (
                  <div className='RenderPost'>
                  <h1>
                     { post.attributes.title}
                  </h1>
                  </div>
              )
          })
      }
    </>
  );
};

export default CardSearch;
