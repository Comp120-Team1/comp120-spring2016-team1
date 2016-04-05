import App from './components/app';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

window.App = App;

window.ReactDOM = ReactDOM;

window.React = React;
