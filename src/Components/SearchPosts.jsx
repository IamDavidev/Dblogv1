import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_QUERY_ALL_POSTS } from '../Utils/SchemasQueries';

const SearchPosts = () => {
  const [posts, setPosts] = useState([]);
  const { data } = useQuery(GET_QUERY_ALL_POSTS);
  if (data) {
    data.posts.data.forEach((posts) => {
      console.log(posts);
      const { title, Image } = posts.attributes;
    //   setPosts((prevPosts) => [...prevPosts, { title, Image }]);
      //   setPosts((pre) => [...pre, posts]);
    });
  }
  console.log(data);
  return (
    <>
      <h1>Search Posts</h1>
    </>
  );
};

export default SearchPosts;
