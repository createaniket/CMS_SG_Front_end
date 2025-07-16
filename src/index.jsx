import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// assets
import 'assets/scss/style.scss';

// project import
import App from 'layout/App';
import reducer from 'store/reducer';
import * as serviceWorker from 'serviceWorker';

const store = configureStore({ reducer });

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </Provider>
);

// Service worker (optional)
serviceWorker.unregister();
