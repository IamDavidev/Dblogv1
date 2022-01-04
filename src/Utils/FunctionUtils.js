import { GET_QUERY_POST_SEARCH } from './SchemasQueries';
export function searchPosts({ query, search }) {
  const { data } = query(GET_QUERY_POST_SEARCH, {
    variables: {
      title: search,
    },
  });
}
