import styled, { createGlobalStyle } from 'styled-components';

export const AppStyled = createGlobalStyle`
    body {
        margin:0;
        padding:0;
        font-family: 'Roboto', sans-serif;
        background-color: #fafafa;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
 `;

export const AppTheme = {
  colors: {
    first: '#6183AB',
    ext: '#232B59',
    black: '#0C0B13',
    blue: '#234BA8',
    green: '#16D896',
    rosee: '#CC21A3',
    aqua: '  #00ffff',
  },
};

export const AppContainer = styled.section`
  background: ${AppTheme.colors.first};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  font-size: calc(10px + 2vmin);
  margin: 0;
  padding: 0;
  main {
    padding: 1rem;
    color: #fff;
    border-radius: 1.3rem;
    min-height: 600px;
    
  }
  h1 {
    width: 100%;
    text-align: center;
    margin:0;
    padding:0;
    color:${AppTheme.colors.rosee};
  }
  @media (min-width: 1000px) {
    main{
      padding:1rem 10rem;
    }
  }
`;
