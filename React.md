const is ES6 "variable". The only difference is its value is constant.
JSX - javascript in form of HTML


React and ReactDOM were only recently split into two different libraries. Prior to v0.14, all ReactDOM functionality was part of React. This may be a source of confusion, since any slightly dated documentation won't mention the React / ReactDOM distinction.

As the name implies, ReactDOM is the glue between React and the DOM. Often, you will only use it for one single thing: mounting with ReactDOM.render(). Another useful feature of ReactDOM is ReactDOM.findDOMNode() which you can use to gain direct access to a DOM element. (Something you should use sparingly in React apps, but it can be necessary.) If your app is "isomorphic", you would also use ReactDOM.renderToString() in your back-end code.

For everything else, there's React. You use React to define and create your elements, for lifecycle hooks, etc. i.e. the guts of a React application.

The reason React and ReactDOM were split into two libraries was due to the arrival of React Native. React contains functionality utilised in web and mobile apps. ReactDOM functionality is utilised only in web apps. [UPDATE: Upon further research, it's clear my ignorance of React Native is showing. Having the React package common to both web and mobile appears to be more of an aspiration than a reality right now. React Native is at present an entirely different package.]

////////////////////////////////////////

 creating the API_KEY in API Manager -> Credentials -> Create Credentials -> API Key

making a search bar -


import React from 'react';
import ReactDOM from 'react-dom'; <== here pathway is not required in case of importing libraries

import SearchBar from './components/search_bar'; <== but file requires reference pathway

STEPS
created new component search bar
exported it
render it to app in index.js

Earlier we did functional component
CLASS BASED COMPONENTS for internal record keeping, component should have ablity to introspect itself
creating component not with function but ES6 class(javascript method)

(JSX is rendered to DOM)

=============================================
class Searchbar extends React.Component ==> means define a class k/a searchbar and give it access  to all the functionalities which React components has

every react compnent made that is class based must have render method.

===================================

import React from 'react';

class Searchbar extends React.Component {            
	render () {                                     
		return <input />; 
	}

}

export default SearchBar;


==========================================

// here, react.component can be cleaned by ES6 syntax --


import React, { Component } from 'react';

similar to writing ==>   const Component - React.Component;

class Searchbar extends Component {            
	render () {                                    
		return <input />; 
	}

}

export default SearchBar;


================================================================




whenever user use web app, they trigger events all the time

Handling vents need 2 functions-

1. Event handler
2. pass event handler to the element we want to monitor events for.. i.e input element in search bar changes

onInputChange ==> 
on - event
input - element
change - name of event



===========================================================

STATE
it is a javascript object to record and react  to user events


Each class component has its own state object. Whenever component state changes, component re-renders.

****Functional components dont have state, only class based do.

whenever new instance of class is made, construcotr is used to initialize
parent method/class is invoked by calling super

we initialize state by creating new object and assign it to this.state. The object we pass will also contain properties that we want to record on the state.

this.state = { term : '' };

****only in constructor method we use "this.state ="" in other class components we use "this.setstate" means, state is changing, here's new state

===============
record value of input on state

1. creating state (initiializing)
2. updating state

==============================
javascript variable wrapped in jsx by {}





___________________________
CONTROLLED COMPONENT

COntorlled field value is set by state
usually inpuut changes state, but state can also change value of input

___________________________
# Notes
	./index.html => only html file that includes the custom js (bundle.js).
	./package.json => contains project description with dependencies and scripts.


>`npm start` => package.json => webpack => webpack-config => entry {index.js} => output {/bundle.js}
___

#Ajax request with React -
 -YT search response
#downwards data flow

- Refactoring functional components to class components
App => functional component to a class component so that App can keep track of list of videos by recording it on its state


YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
	console.log (data);
});

changed to -
YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
	this.setState({ videos:data });
});

___
##Props -
video list is visual component, so add style class by using bootstrap.

Since VideoList is child of "App", it need to get access to videos on App state.

Passing data from parent component to child component like;
<VideoList videos= {this.state.videos} />
is called Prop

referred  as passing prop videos to VideoList
Anytime App re-renders, VideoList will get new videos


When we use functional component, >props is arrived as argument of functiont-in he

##Built-in helper called map!
var array = [1,2,3];
for (var i=0; i < array.length; i++ .......)

instead we use..

array.map for building lists in React
array.map(function (number) {return muber *2});

result - [2,4,6]


____
##List Item keys -


Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `VideoList`. 

Each video has same etag. re-rendering brings same etag

___

#Video List Items
const VideoListItem = (props) => {
	//const video = props.video;
	return <li>Video</li>
};

in ES6
const VideoListItem = (props) => {
argument in object has property 'video', pls grab that video and call new variable called video


##Javascript variables are always in {}


<div className = "details">
				<div></div> // one for title and one for description
				<div></div>
			</div>

_______________________________________

##Handling null props
if (!video) {
		return <div>Loading....</div>
	}

____________________

##Video Selection--

<VideoList 
	onVideoSelect = {selectedVideo => this.setState ({selectedVideo})}
	videos = {this.state.videos} />

here we defined a function, which takes selected video and it updates App state with new video

______________________

##Searching for videos


##Video details -
const url = `https://www.youtube.com/embed/${videoId}`;
	
	// similar to - const url = 'https://www.youtube.com/embed/' + videoId;


	lodash contains debounce whcih helps in preventing throttle how often a function is called
const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);

the fucntion can only be called once in 300ms

<SearchBar onSearchTermChange={videoSearch} />
				//<SearchBar onSearchTermChange={(term) => this.videoSearch(term)}