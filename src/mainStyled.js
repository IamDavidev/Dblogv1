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
    first: '#041C32',
    second: '#04293A',
    third: '#064663',
    fourth: '#B1D4E0',
    text: '#00ADB5',
    ext: '#222831',
  },
  font: {
    title: '3rem',
    subtitle: '1.5rem',
    text: '1rem',
  },
};

export const AppContainer = styled.section`
  background: ${AppTheme.colors.fourth};
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
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    color:#000;
  }
`;
