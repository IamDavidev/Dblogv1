import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContainer, AppStyled } from './mainStyled';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <AppStyled />
    <AppContainer>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContainer>
  </React.StrictMode>,
  document.getElementById('root')
);
