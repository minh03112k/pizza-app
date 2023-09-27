import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from '../src/components/Routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
