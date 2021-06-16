import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Импортируем Provider который позволит использовать store
import { Provider } from 'react-redux';
// Импортируем store
import store from './components/store';

ReactDOM.render(
  <React.StrictMode>

    {/* Для того чтобы передать store компонентам реакта нам понадобится Provider
     Внутри провайдера находятся компоненты которым доступен store,
     в данном случае, App.js то есть все приложение
     передаем store в качестве пропса для провайдера */}

    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
