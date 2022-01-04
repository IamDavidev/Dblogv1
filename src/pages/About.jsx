import styled from 'styled-components';
import { AppTheme } from '../mainStyled';
import { client } from '../Utils/Client';
import { GET_QUERY_ALL_POSTS } from '../Utils/SchemasQueries';
const StyledAbout = styled.section`
  color: #000;
  margin:0 1.5rem;
  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    color: ${AppTheme.colors.aqua};
  }
  span {
    color: ${AppTheme.colors.green};
    font-weight: bold;
  }
  strong {
    color: ${AppTheme.colors.blue};
    font-weight: bold;
  }
  @media (min-width:1000px){
    margin:0 10rem
  }
`;

const About = () => {
  const todo =client.readQuery({
    query:GET_QUERY_ALL_POSTS,
  })
  console.log(todo);
  return (
    <StyledAbout>
      <h1>About dblog</h1>
      <h2>Bienvenido a dblog</h2>
      <p>
        dblog es un blog creado con el fin de compartir información sobre
        <span>desarrollo web</span>,<span>diseño web</span>,
        <span>programación</span>, etc.
      </p>
      <p>
        otra cosa que se comparte es una serie de tutoriales sobre como empezar
        en algunas tecnologias como
        <span>React</span>,<span>Css</span>,<span>Js</span>, etc.
      </p>
      <p>
        Tambien se veran los errores mas comunes que me enfrento en mi día a
        día. Y como llege a solucionarlos.
      </p>
      <h3>
        Ahora veremos algunas de las tecnologias que use para crear este blog
      </h3>
      {/* frontend */}
      <ul>
        <h4>
          <>Frontend</>
        </h4>
        <li>
          <span>React</span>
          <ul>
            <li>
              <strong>React Router</strong>
            </li>
            <li>
              <strong>React Markdown</strong>
            </li>
          </ul>
        </li>
        <li>
          <span>Apollo </span>
          <ul>
            <li>
              <strong>Apollo Client</strong>
            </li>
            <li>
              <strong>Apollo Server</strong>
            </li>
            <li>
              <strong>Apollo Hooks</strong>
            </li>
          </ul>
          <li>
            <span>styled components</span>
          </li>
        </li>
        <li>
          <span>Graphql</span>
        </li>
      </ul>
      {/* backend */}
      <ul>
        <h4>
          <>Backend</>
        </h4>
        <li>
          <span>Strapi</span>
        </li>
        <li>
          <span>Heroku </span>
        </li>
      </ul>
    </StyledAbout>
  );
};

export default About;
