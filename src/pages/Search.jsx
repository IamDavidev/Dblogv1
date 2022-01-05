import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { GET_QUERY_ALL_TYPES } from '../Utils/SchemasQueries';
import { Link } from 'react-router-dom';
import { AppTheme } from '../mainStyled';
import SearchPosts from '../Components/SearchPosts';
import Loading from '../Components/Loading';
import { DataTypes } from '../Utils/FunctionUtils';

const StyledSearch = styled.section`
  color: #000000;
  .containerTypes {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    margin: 1rem;
    a {
      text-decoration: none;
      color: ${AppTheme.colors.green};
      font-weight: bold;
      cursor: pointer;
      border-bottom: 2px solid #000;
    }
  }
  @media (min-width: 1000px) {
    margin: 0 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Search = () => {
  const { data, loading, error } = DataTypes || useQuery(GET_QUERY_ALL_TYPES);
  if (data) {
    localStorage.setItem(
      'types',
      JSON.stringify({
        data: data,
        loading: loading,
        error: error,
      })
    );
  }
  return (
    <StyledSearch>
      <section className="Types">
        <h1>Types</h1>
        {loading && <Loading />}
        {data &&
          data.types.data.map((type) => {
            return (
              <div className="containerTypes" key={type.id}>
                <Link to={`/dblog/type/${type.attributes.name}`}>
                  {type.attributes.name}
                </Link>
              </div>
            );
          })}
      </section>
      <section className="search">
        <SearchPosts />
      </section>
    </StyledSearch>
  );
};

export default Search;
