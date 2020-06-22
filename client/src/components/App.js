import React from 'react';

import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import History from '../history';

// components
import Header from './header/Header';
import Sorting from './sorting/Sorting';

function App() {
  return (
    <Router className="App" history={History}>
      <Header />
      <Route exact path="/" component={Sorting} />
    </Router>
  );
}

export default App;
