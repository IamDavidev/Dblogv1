import styled from 'styled-components';
import { AppTheme } from '../mainStyled';
import react from '../assets/react.svg';
import graphql from '../assets/graphql.svg';
import apollo from '../assets/apollostack.svg';
import makdown from '../assets/markdown.svg';
import heroku from '../assets/heroku-icon.svg';
import strapi from '../assets/strapi-icon.svg';
import styledComponents from '../assets/styled-components.png';

const StyledAbout = styled.section`
  color: #000;
  margin: 0 1.5rem;
  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    color: #000;
  }
  h4 {
    color: ${AppTheme.colors.rosee};
    font-weight: bold;
  }
  span {
    color: ${AppTheme.colors.blue};
    font-weight: bold;
  }
  strong {
    color: ${AppTheme.colors.blue};
    font-weight: bold;
    display: block;
    padding: 0 3rem;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  li {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 1rem 0;
    img {
      width: 5rem;
      height: auto;
      object-fit: contain;
      margin: 1.5rem 0;
      animation: life 2s infinite;
    }
  }
  @media (min-width: 1000px) {
    margin: 0 10rem;
  }
  @keyframes life {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(0px);
    }
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <div className="header">
        <h1>About dblog</h1>
        <h2>Bienvenido a dblog</h2>
      </div>
      <div className="container">
        <div className="about">
          <p>
            dblog es un blog creado con el fin de compartir información sobre
            <span> desarrollo web</span>,<span> diseño web</span>,
            <span> programación</span>, etc.
          </p>
          <p>
            otra cosa que se comparte es una serie de tutoriales sobre como
            empezar en algunas tecnologías :<span> React</span>,
            <span> Css</span>,<span> Js</span>, etc.
          </p>
          <p>
            También se verán los errores más comunes que me enfrento en mi día a
            día. Y como llegue a solucionarlos.
          </p>
        </div>
        <div className="tecnologies">
          <h3>tecnologias de Dblog</h3>
          {/* frontend */}
          <h4>
            <>Frontend</>
          </h4>
          <ul>
            <li>
              <span>React</span>
              <img src={react} alt="dblog itsdavid react " />
            </li>
            <li>
              <span>Apollo </span>
              <img src={apollo} alt="dblog itsdavid Apollo" />
            </li>
            <li>
              <span>styled components</span>
              <img
                src={styledComponents}
                alt="dblog itsdavid styled-components"
              />
            </li>

            <li>
              <span>Graphql</span>
              <img src={graphql} alt="dblog itsdavid graphql" />
            </li>
          </ul>
          {/* backend */}
          <h4>
            <>Backend</>
          </h4>
          <ul>
            <li>
              <span>Strapi</span>
              <img src={strapi} alt="dblog itsdavid strapi " />
            </li>
            <li>
              <span>Heroku </span>
              <img src={heroku} alt="dblog itsdavid heroku" />
            </li>
          </ul>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
