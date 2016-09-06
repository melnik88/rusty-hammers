/* global document */

import './node_modules/milligram/dist/milligram.min.css';
import './style.css';
import Main from './components/main.jsx';
import Results from './components/results.jsx';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

ReactDOM.render(
    <Router>
        <Route path="/" component={Main} />
        <Route path="/results" component={Results} />
    </Router>
    , document.getElementById('app'));
