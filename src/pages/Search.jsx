import styled  from 'styled-components';

const StyledSearch = styled.section`
  color: #000000;
`

const Search = () => {
  return (
    <StyledSearch>
      <h1>search posts </h1>
      <section className="categories">
          all categories
      </section>
      <section className="search">
        <label >
          search <input type="text" />
        </label>
      </section>
    </StyledSearch>
  );
};

export default Search;
