
import { useState } from 'react';
import CardSearch from './CardSearch';
const SearchPosts = () => {
  const [search, setSearch] = useState('@$%');
  const HandleSearch = (evt) => {
    evt.preventDefault();
    const search = evt.target.value || '  ';
    setSearch(search);
  };
  return (
    <>
      <form onSubmit={HandleSearch}>
        <label>
          <input type="text=" onChange={HandleSearch} />
        </label>
        <button type="submit">search</button>
      </form>
      <CardSearch search={search}/>
    </>
  );
};

export default SearchPosts;
