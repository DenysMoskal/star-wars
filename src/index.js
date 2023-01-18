import React from 'react';

import ReactDOM from 'react-dom/client';
import App from '@containers/App';
import store from '@store/store';
import { Provider } from 'react-redux';
import ThemeProvider from '@context/ThemeProvider';

import '@styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
);
