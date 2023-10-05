import React from 'react';
// import '../styles/custom-bootstrap.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from '../src/components/Routes/AppRoutes';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ChakraProvider>
  );
}

export default App;
