import { useState, useEffect} from 'react'
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import View from './components/View'

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view" render={(props) => <View {...props} />} />
        </Routes>
      </BrowserRouter>,
    </>
  );
}

export default App;
