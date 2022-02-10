import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { GET_QUERY_ALL_TYPES } from '../Utils/SchemasQueries';
import { Link } from 'react-router-dom';
import { AppTheme } from '../mainStyled';
import SearchPosts from '../Components/SearchPosts';
import Loading from '../Components/Loading';
import { Helmet } from 'react-helmet';

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
    .Types {
      margin: 2rem auto;
    }
  }
`;

const Search = () => {
  const { data, loading, error } = useQuery(GET_QUERY_ALL_TYPES);

  return (
    <>
      <Helmet>
        <title>buscar || dblog</title>
      </Helmet>
      <StyledSearch>
        <section className="Types">
          {loading && <Loading />}
          {data &&
            data.types.data.map((type) => {
              return (
                <div className="containerTypes" key={type.id}>
                  <Link to={`/dblog/tipo/${type.attributes.name}`}>
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
    </>
  );
};

export default Search;
