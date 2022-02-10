import { useState } from 'react';
import CardSearch from './CardSearch';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    width: 80%;
    border: none;
    border-radius: 1rem;
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
  @media (min-width: 1000px) {
    input {
      width: 80%;
      margin: 0 auto;
    }
  }
`;

const SearchPosts = () => {
  const [search, setSearch] = useState('@$%');
  const [seoSearch, setSeoSearch] = useState('');
  const HandleSearch = (evt) => {
    evt.preventDefault();
    const search = evt.target.value || '  ';
    setSearch(search);
    setSeoSearch(search);
  };
  return (
    <>
      <Helmet>
        <title>{`Search : ${seoSearch} || dblog`}</title>
      </Helmet>
      <StyledSearch>
        <div className="inputSerch">
          <form onSubmit={HandleSearch}>
            <label>
              <input
                type="text="
                onChange={HandleSearch}
                placeholder="search post ..."
              />
            </label>
          </form>
        </div>
        <div className="renderPosts">
          <CardSearch search={search} />
        </div>
      </StyledSearch>
    </>
  );
};

export default SearchPosts;
