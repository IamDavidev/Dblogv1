import { GET_QUERY_POST_SEARCH } from './SchemasQueries';
export function searchPosts({ query, search }) {
  console.log('hola');
  const { data } = query(GET_QUERY_POST_SEARCH, {
    variables: {
      title: search,
    },
  });
}
