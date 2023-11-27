import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store/store.js'
import { Provider } from 'react-redux'

//note provider is provided by react-redux as it provides an interface between the react and redux
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

