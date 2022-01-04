import { useState } from 'react';
import CardSearch from './CardSearch';
import styled from 'styled-components';

const StyledSearch = styled.div`
  input {
    width: 100%;
    border: none;
    border-radius:1rem;
    background: #6183ab;
    box-shadow: 20px 20px 60px #526f91, -20px -20px 60px #7097c5;
    font-size: 1.3rem;
    padding: 0.5rem;
    :focus {
      outline: none;
    }
    ::placeholder {
      color: #00ffff;
      text-transform: uppercase;
    }
  }
`;

const SearchPosts = () => {
  const [search, setSearch] = useState('@$%');
  const HandleSearch = (evt) => {
    evt.preventDefault();
    const search = evt.target.value || '  ';
    setSearch(search);
  };
  return (
    <StyledSearch>
      <form onSubmit={HandleSearch}>
        <label>
          <input
            type="text="
            onChange={HandleSearch}
            placeholder="search post ..."
          />
        </label>
      </form>
      <CardSearch search={search} />
    </StyledSearch>
  );
};

export default SearchPosts;
