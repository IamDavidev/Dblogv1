import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import {
  GET_QUERY_ALL_TYPES,
  GET_QUERY_ALL_POSTS,
} from '../Utils/SchemasQueries';
import { Link } from 'react-router-dom';
import { AppTheme } from '../mainStyled';
import SearchPosts from '../Components/SearchPosts';

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
      border-bottom: 1px solid ${AppTheme.colors.rosee};
    }
  }
`;

const Search = () => {
  
  const { data } = useQuery(GET_QUERY_ALL_TYPES);
  
  return (
    <StyledSearch>
      <h1>search posts </h1>
      <section className="Types">
        <h1>Types</h1>
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
