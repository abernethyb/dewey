import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import Dewey from './components/Dewey';

ReactDOM.render(
  <Router>
    <Dewey />
  </Router>,
  document.getElementById('root')
);