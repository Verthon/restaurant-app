import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Components/Router';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
window.jQuery = window.$ = require('jquery/dist/jquery.min.js');
require('bootstrap/dist/js/bootstrap.min.js');

ReactDOM.render(<Router/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
