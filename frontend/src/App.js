import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Root from './components/root'


function App() {
  return (
      <div>
        <Router>
            <Root />
        </Router>
      </div>
  );
}

export default App;
