//import React from 'react';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCGMyIVw9YmF43dLDd0RzFDGylEcjW07WU'


//Sample youtube search reponse- 
// YTSearch ({key: API_KEY, term:'surfboards'}, function (data) {
// 	console.log(data);
// });


//Create a new component. This component should produce some HTML.

// const App = () => {
// 	return (
// 		<div>
// 		<SearchBar />
// 		</div>
// 		);
// 	}



//==========================================================================================
//After adding function YT search, App => functional component converted to a class component
// so that App can keep track of list of videos by recording it on its state.


class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

//To avoid the home page become empty,
// cause this.state = an empty array of videos, we shift YTSearch data here

// YTSearch ({key: API_KEY, term:'surfboards'}, function (data) {
// 	this.setState ({videos:data});
// });
// }


//=========================================================================================




//or drop function(data) and use arrow syntax

YTSearch ({key: API_KEY, term:'surfboards'}, (videos) => {
	this.setState ({ videos: videos });
	
	//In ES6, if key:value pair has common name, we can condense the line like below.

	this.setState ({ videos });
});
}


render() {
	return (
		<div>
		<SearchBar />
		<VideoList videos = {this.state.videos} /> 
		</div>
		);
	}
}

//In <VideoList videos = {this.state.videos} /> 
//we are passing props from parent component to child.

//Take this component's generated HTML, and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));

//We are passing instance of class <App />
//instead of class component App

