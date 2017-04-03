/*
    ./src/index.js
    which is the webpack entry file
    */
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App.jsx';

// ReactDOM.render(<App />, document.getElementById('root'));


import React from 'react'

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App.jsx'
import todoApp from './reducers/reducers'

let store = createStore(todoApp)

let rootElement = document.getElementById('app')

render(

	<Provider store = {store}>
	<App />
	</Provider>,
	
	rootElement
)