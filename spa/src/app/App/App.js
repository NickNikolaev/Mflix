import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Navigation from '../../components/common/Navigation/Navigation';
import AppRouter from './AppRouter';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
};

export default App;