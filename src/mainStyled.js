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
    second: '#8C9EBB',
    third: '#9CB2CF',
    fourth: '#C8DBEF',
    text: '#00ADB5',
    ext: '#232B59',
    black: '#0C0B13',
    blue: "#234BA8" ,

  },
  font: {
    title: '3rem',
    subtitle: '1.5rem',
    text: '1rem',
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
    margin: 1rem;
    padding:1rem;
    color: #fff;
    border-radius: 1.3rem;
    background: #092A55;
    box-shadow: inset -25px -25px 100px #08264d,
            inset 25px 25px 100px #0a2e5d;
  }
`;
