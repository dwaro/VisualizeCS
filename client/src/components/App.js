import React from 'react';

import Header from './Header';
import {Router} from 'react-router';
import History from '../history';
import Page from './Page'

function App() {
  return (
    <Router className='App' history={History}>
      <Header/>
      <Page />
    </Router>
  );
}

export default App;
