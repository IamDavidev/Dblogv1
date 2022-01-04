import {client} from './client';
import {GET_QUERY_POSTS} from './SchemasQueries';

export const cacheData = client.readQuery({
  query: GET_QUERY_POSTS,
});
