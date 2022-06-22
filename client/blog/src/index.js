import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.scss';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// REDUX
import { Provider } from 'react-redux';
import store from './app/store';
import { getPosts } from './feature-redux/posts.slice';
import { getUsers } from './feature-redux/users.slice';

const Store = store;
Store.dispatch(getPosts());
Store.dispatch(getUsers());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
