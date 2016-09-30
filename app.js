/* global document */

import './node_modules/milligram/dist/milligram.min.css';
import './style.css';
import Main from './components/Main.jsx';
import Results from './components/Results.jsx';
import Contacts from './components/Contacts.jsx';
import Walks from './components/Walks.jsx';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

ReactDOM.render(
    <Router>
        <Route path="/" component={Main} />
        <Route path="/results" component={Results} />
        <Route path="/walks" component={Walks} />
        <Route path="/contacts" component={Contacts} />
    </Router>
    , document.getElementById('app'));
