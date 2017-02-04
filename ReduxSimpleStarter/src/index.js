import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDo8CRg7nfVDp5JdvN5Om3vaRQv_6nqNQI'
// 1. Create a new component. This component should produce some HTML.

//App is a component class here.
//In ES6, syntax function() is similar to () =>
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
		);
	}

// 2.Take this component's generated HTML and put it on the page (in the DOM).
// <App/> turns it into component instance for rendering it.


ReactDOM.render(<App />, document.querySelector('.container'));
