import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

const render = () => {
  ReactDOM.render (
    <AppContainer>
      <HashRouter>
        <App/>
      </HashRouter>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render();

/* eslint-disable */
if(module.hot) {
  module.hot.accept('./components/App', () => {
    render();
  });
}
/* eslint-enable */