//Autogenerated by @xamdes/project-generator
import 'react-app-polyfill/stable';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mainReducer } from './reducers/main.js';


const store = createStore(mainReducer);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <HashRouter>
          <Component />
        </HashRouter>
      </AppContainer>
    </Provider>,
    document.getElementById('react-app-root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
