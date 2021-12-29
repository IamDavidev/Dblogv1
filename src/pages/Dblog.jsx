import styled from 'styled-components';
import QueryPosts from '../Containers/QueryPosts';
import { AppTheme } from '../mainStyled';

const Dblog = () => {
  console.log('Dblog');
  return (
    <>
      <h1>Dblog render</h1>
      <QueryPosts />
    </>
  );
};

export default Dblog;
