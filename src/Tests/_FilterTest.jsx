import { useState } from 'react';
import { DataPosts } from '../Utils/FunctionUtils';

// test donde si existe la variable DataPosts usamos un filter

const FilterTest = () => {
  const [posts, setposts] = useState([]);
  const { data } = DataPosts;
  const handleTests = (evt) => {
    evt.preventDefault();
    const vTitlle = evt.value || evt.target.value;
    const value = data.posts.data;
    setposts(
      value.filter((item) =>
        item.attributes.title.toLowerCase().includes(vTitlle.toLowerCase())
      )
    );
  };
  return (
    <>
      <h2>Filter Test</h2>
      <input type="text" onChange={handleTests} />
    </>
  );
};

export default FilterTest;
