/* global document */

import './node_modules/milligram/dist/milligram.min.css';
import './style.css';
import Main from './components/main.jsx';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(Main(), document.getElementById('app'));
