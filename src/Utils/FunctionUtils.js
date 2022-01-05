import { client } from './client';
import { GET_QUERY_POSTS } from './SchemasQueries';

export const cacheData = client.readQuery({
  query: GET_QUERY_POSTS,
});

export const DataPosts = JSON.parse(localStorage.getItem('posts'));
export const DataTypes = JSON.parse(localStorage.getItem('types'));