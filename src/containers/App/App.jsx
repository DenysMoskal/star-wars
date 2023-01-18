import React from 'react';
import styles from './App.module.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Header from '@components/Header/Header';

import routesConfig from '@routes/routesConfig';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Header />
        <Routes>
          {routesConfig.map((route, index) => (
            <Route key={index} element={route.element} path={route.path} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
