// React
import React from 'react';
import ReactDOM from 'react-dom';

// History Management for Single Page Application
import {setInitialState} from './state.js';

// Custom React Components
import {Homepage} from './Homepage.babel';

setInitialState();
ReactDOM.render(
	React.createElement(Homepage, {}),
	document.getElementById('content')
);