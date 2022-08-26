import React from 'react';

import { Footer, Blog, Possibility, Features, Dataoff, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    
    <Dataoff />
    
  </div>
);

export default App;
