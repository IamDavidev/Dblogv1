import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AppTheme } from '../mainStyled';

const Snavbar = styled.nav`
  border-radius: 1rem;
  background: #6183ab;
  box-shadow: 20px 20px 60px #526f91, -20px -20px 60px #7097c5;
  margin: 1rem 0;
  ul {
    display: flex;
  }
  li {
    text-decoration: none;
    margin-right: 1rem;
    list-style: none;
    font-family: sans-serif;
  }
  a {
    color: #000;
    text-decoration: none;
    font-weight: bold;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navImage {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 1rem;
    img {
      width: 20px;
      margin: 0 0.3rem;
    }
  }
  .navAcess {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .navSearch {
    a {
      padding: 0 1rem;
      border-left: 3px solid #000000;
    }
  }
  .active {
    /* color: #fff; */
    color: ${AppTheme.colors.green};
  }
  @media (min-width: 1000px) {
    min-width: 30rem;
  }
`;

const Navbar = () => {
  return (
    <Snavbar>
      <div className="nav">
        <div className="navImage">
          <img src="/assets/dblognav.svg" alt="" />
        </div>
        <div className="navAcess">
          <div className="navLinks">
            <ul>
              <li>
                <NavLink to="/dblog/posts">Posts</NavLink>
              </li>
              <li>
                <NavLink to="dblog/buscar">buscar </NavLink>
              </li>
            </ul>
          </div>
          <div className="navSearch">
            <label>
              <NavLink to="dblog/sobre"> dblog </NavLink>
            </label>
          </div>
        </div>
      </div>
    </Snavbar>
  );
};

export default Navbar;
