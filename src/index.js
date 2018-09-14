import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/reducers';

/* eslint-disable */
if(module.hot) {
  module.hot.accept('./components/App', () => {
    render();
  });
}

const store = createStore(rootReducer);

console.log(store.getState());

const render = () => {
  ReactDOM.render (
    <AppContainer>
      <HashRouter>
        <Provider store={store}>
          <App/>
        </Provider>
      </HashRouter>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render();

/* eslint-enable */